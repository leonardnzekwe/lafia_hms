# HMS Restful API DOC
Hospital Mangement System

# API Endpoints:

**Patient:**
- List of Patients: `GET /patients/`
- Patient Details: `GET /patients/<patient_id>/`
- Create a New Patient: `POST /patients/`
- Update a Patient: `PUT /patients/<patient_id>/`
- Partially Update a Patient: `PATCH /patients/<patient_id>/`
- Delete a Patient: `DELETE /patients/<patient_id>/`

**Doctor:**
- List of Doctors: `GET /doctors/`
- Doctor Details: `GET /doctors/<doctor_id>/`
- Create a New Doctor: `POST /doctors/`
- Update a Doctor: `PUT /doctors/<doctor_id>/`
- Partially Update a Doctor: `PATCH /doctors/<doctor_id>/`
- Delete a Doctor: `DELETE /doctors/<doctor_id>/`

**Nurse:**
- List of Nurses: `GET /nurses/`
- Nurse Details: `GET /nurses/<nurse_id>/`
- Create a New Nurse: `POST /nurses/`
- Update a Nurse: `PUT /nurses/<nurse_id>/`
- Partially Update a Nurse: `PATCH /nurses/<nurse_id>/`
- Delete a Nurse: `DELETE /nurses/<nurse_id>/`

**Appointment:**
- List of Appointments: `GET /appointments/`
- Appointment Details: `GET /appointments/<appointment_id>/`
- Create a New Appointment: `POST /appointments/`
- Update an Appointment: `PUT /appointments/<appointment_id>/`
- Partially Update an Appointment: `PATCH /appointments/<appointment_id>/`
- Delete an Appointment: `DELETE /appointments/<appointment_id>/`

**Prescription:**
- List of Prescriptions: `GET /prescriptions/`
- Prescription Details: `GET /prescriptions/<prescription_id>/`
- Create a New Prescription: `POST /prescriptions/`
- Update a Prescription: `PUT /prescriptions/<prescription_id>/`
- Partially Update a Prescription: `PATCH /prescriptions/<prescription_id>/`
- Delete a Prescription: `DELETE /prescriptions/<prescription_id>/`

**Medical Record:**
- List of Medical Records: `GET /medicalrecords/`
- Medical Record Details: `GET /medicalrecords/<record_id>/`
- Create a New Medical Record: `POST /medicalrecords/`
- Update a Medical Record: `PUT /medicalrecords/<record_id>/`
- Partially Update a Medical Record: `PATCH /medicalrecords/<record_id>/`
- Delete a Medical Record: `DELETE /medicalrecords/<record_id>/`

**Inventory:**
- List of Inventory Items: `GET /inventory/`
- Inventory Item Details: `GET /inventory/<item_id>/`
- Add an Inventory Item: `POST /inventory/`
- Update an Inventory Item: `PUT /inventory/<item_id>/`
- Partially Update an Inventory Item: `PATCH /inventory/<item_id>/`
- Remove an Inventory Item: `DELETE /inventory/<item_id>/`

**Billing:**
- List of Billing Records: `GET /billing/`
- Billing Record Details: `GET /billing/<billing_id>/`
- Create a Billing Record: `POST /billing/`
- Update a Billing Record: `PUT /billing/<billing_id>/`
- Partially Update a Billing Record: `PATCH /billing/<billing_id>/`
- Delete a Billing Record: `DELETE /billing/<billing_id>/`

**Ward:**
- List of Wards: `GET /wards/`
- Ward Details: `GET /wards/<ward_id>/`
- Create a Ward: `POST /wards/`
- Update a Ward: `PUT /wards/<ward_id>/`
- Partially Update a Ward: `PATCH /wards/<ward_id>/`
- Delete a Ward: `DELETE /wards/<ward_id>/`

**Bed:**
- List of Beds: `GET /beds/`
- Bed Details: `GET /beds/<bed_id>/`
- Create a Bed: `POST /beds/`
- Update a Bed: `PUT /beds/<bed_id>/`
- Partially Update a Bed: `PATCH /beds/<bed_id>/`
- Delete a Bed: `DELETE /beds/<bed_id>/`

**Lab Test:**
- List of Lab Tests: `GET /labtests/`
- Lab Test Details: `GET /labtests/<test_id>/`
- Schedule a Lab Test: `POST /labtests/`
- Update a Lab Test: `PUT /labtests/<test_id>/`
- Partially Update a Lab Test: `PATCH /labtests/<test_id>/`
- Cancel a Lab Test: `DELETE /labtests/<test_id>/`

**Medical History:**
- List of Medical Histories: `GET /medicalhistory/`
- Medical History Details: `GET /medicalhistory/<history_id>/`
- Create a Medical History: `POST /medicalhistory/`
- Update a Medical History: `PUT /medicalhistory/<history_id>/`
- Partially Update a Medical History: `PATCH /medicalhistory/<history_id>/`
- Delete a Medical History: `DELETE /medicalhistory/<history_id>/`

**Medication:**
- List of Medications: `GET /medications/`
- Medication Details: `GET /medications/<medication_id>/`
- Create a Medication: `POST /medications/`
- Update a Medication: `PUT /medications/<medication_id>/`
- Partially Update a Medication: `PATCH /medications/<medication_id>/`
- Delete a Medication: `DELETE /medications/<medication_id>/`
