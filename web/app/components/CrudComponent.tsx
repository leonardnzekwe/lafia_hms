// @/app/components/CrudComponent.tsx

"use client";

import { useState, useEffect, useCallback } from "react";
import apiService from "@/app/components/apiService";

interface CrudComponentProps {
  endpoint: string;
  fields: string[];
}

const CrudComponent: React.FC<CrudComponentProps> = ({ endpoint, fields }) => {
  const [data, setData] = useState<[] | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [editItemId, setEditItemId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [doctors, setDoctors] = useState<any[]>([]);
  const [patients, setPatients] = useState<any[]>([]);

  // Handle Delete
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState<string | null>(null);

  const handleDeleteConfirmation = (itemId: string) => {
    setDeleteItemId(itemId);
    setShowDeleteConfirmation(true);
  };

  const handleDeleteCancel = () => {
    setDeleteItemId(null);
    setShowDeleteConfirmation(false);
  };

  const handleDeleteConfirm = async () => {
    if (deleteItemId) {
      await handleDelete(deleteItemId);
      handleDeleteCancel();
    }
  };

  const fetchSelectOptions = useCallback(async () => {
    try {
      const [doctorsData, patientsData] = await Promise.all([
        apiService.get('doctors'),
        apiService.get('patients'),
      ]);

      setDoctors(doctorsData.data);
      setPatients(patientsData.data);
    } catch (error) {
      console.error("Error fetching doctors and patients:", error);
    }
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const response = await apiService.get(endpoint);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();

    if (["appointments", "prescriptions"].includes(endpoint)) {
      fetchSelectOptions(); // Fetch doctors/patients when the component mounts
    }
  }, [fetchData, endpoint, fetchSelectOptions]);

  const handleToggleModal = useCallback(async (itemId: string | null = null) => {
    setEditItemId(itemId);
    setShowModal(!showModal);

    // Reset form data when entering create mode
    if (!itemId) {
      setFormData({});
    }
  }, [showModal]);

  // Function to filter out unwanted fields
  const filterFields = (item: any) => {
    const excludedFields = ['id', 'patient', 'doctor', 'date_and_time'];
    return Object.keys(item)
      .filter(key => !excludedFields.includes(key))
      .reduce((obj: any, key) => {
        obj[key] = item[key];
        return obj;
      }, {});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsSubmitting(true); // Set loading state to true when submission starts

      if (editItemId) {
        // Update mode
        await apiService.put(`${endpoint}/${editItemId}/`, formData);
      } else {
        // Create mode
        await apiService.post(`${endpoint}/`, formData);
      }

      await fetchData();
      handleToggleModal();
    } catch (error) {
      console.error("Error creating/updating data:", error);
    } finally {
      setIsSubmitting(false); // Set loading state to false when submission finishes (success or failure)
    }
  }, [editItemId, endpoint, formData, fetchData, handleToggleModal]);

  const handleDelete = useCallback(async (itemId: string) => {
    try {
      await apiService.delete(`${endpoint}/${itemId}/`);
      await fetchData(); // Refresh the data after deletion
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  }, [fetchData, endpoint]);

  useEffect(() => {
    // If in edit mode, set initial formData based on the existing item
    if (editItemId) {
      const selectedItem = data?.find((item: any) => item.id === editItemId);
      if (selectedItem) {
        setFormData(selectedItem);
      }
    }
  }, [editItemId, data, fetchData]); // Run effect when editItemId changes

  return (
    <div>
      <button
        className="my-4 bg-emerald-400 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded capitalize"
        onClick={() => handleToggleModal()}
      >
        Create {endpoint}
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-teal-600 p-8 rounded-lg shadow-lg w-auto h-auto">
            <div className="flex justify-end">
              <button className="text-white hover:text-black" onClick={() => handleToggleModal()}>
                &times; Close
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-4 capitalize">
              {editItemId ? `Update ${endpoint}` : `Create ${endpoint}`}
            </h2>
            <form onSubmit={handleFormSubmit}>
              {fields.map((field) => (
                <div key={field} className="mb-4">
                  {['patient', 'doctor'].includes(field) && editItemId ? (
                    // Skip rendering label and input in update mode for 'patient' and 'doctor'
                    null
                  ) : field === 'status' && endpoint === 'appointments' && !editItemId ? (
                    // Skip rendering label and input in create mode for appointment 'status'
                    null
                  ) : (
                    <div>
                      <label className="block text-sm font-bold mb-1 capitalize">{field}</label>
                      {['doctor', 'patient'].includes(field) ? (
                        <select
                          name={field}
                          className="w-full border p-2 rounded text-black"
                          onChange={handleInputChange}
                          value={formData[field] || ''}
                        >
                          <option className="capitalize" value="">Select {field}</option>
                          {(field === 'doctor' ? doctors : patients).map((person) => (
                            <option key={person.id} value={person.id}>
                              {person.first_name + " " + person.last_name}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field === 'date_and_time' ? 'datetime-local' : ['quantity', 'unit_price'].includes(field) ? 'number' : 'text'}
                          name={field}
                          className="w-full border p-2 rounded text-black"
                          onChange={handleInputChange}
                          value={formData[field] || ''}
                        />
                      )}
                    </div>
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                {editItemId ? 'Update' : 'Save'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Show loader when submitting data */}
      {isSubmitting && (
        // Submission Skeleton Loader
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-emerald-300 bg-opacity-25">
          <div className="relative flex flex-col items-center bg-white p-8 rounded-lg">
            {/* Spinner */}
            <div className="h-24 w-24 rounded-full border-8 border-gray-300 border-t-8 border-t-teal-700 animate-spin mb-4"></div>
            {/* Text */}
            <p className="text-gray-600">Saving...</p>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirmation && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-red-500 p-8 rounded-lg shadow-lg w-auto h-auto text-white">
            <div className="mb-4">
              <p className="text-xl font-semibold">Are you sure you want to delete this {endpoint}?</p>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-white hover:bg-gray-600 text-black font-bold py-2 px-4 rounded mr-2"
                onClick={handleDeleteCancel}
              >
                Cancel
              </button>
              <button
                className="bg-white hover:bg-gray-600 text-black font-bold py-2 px-4 rounded"
                onClick={handleDeleteConfirm}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Render the data */}
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${data?.length && "bg-teal-300 p-4 m-4 rounded-3xl"}`}>
        {data?.map((item: any, index) => (
          <div key={index} className="bg-emerald-400 p-4 mb-4 rounded-3xl text-gray-600">
            {/* Render item data here */}
            <div className="capitalize p-4 mb-0 pb-1">
              {Object.keys(filterFields(item)).map((key, fieldIndex) => (
                <div key={fieldIndex} className="mb-2 font-semibold ">
                  <span className="text-gray-500">{key}:</span> {item[key]}
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg"
                onClick={() => handleToggleModal(item.id)}
              >
                Edit
              </button>
              <button
                className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
                onClick={() => handleDeleteConfirmation(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrudComponent;
