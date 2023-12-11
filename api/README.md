# HMS Restful API DOC
Hospital Mangement System

# API Endpoints:

**Stats:**
- All Entity Stats: `GET /stats/`

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

**Inventory:**
- List of Inventory Items: `GET /inventory/`
- Inventory Item Details: `GET /inventory/<item_id>/`
- Add an Inventory Item: `POST /inventory/`
- Update an Inventory Item: `PUT /inventory/<item_id>/`
- Partially Update an Inventory Item: `PATCH /inventory/<item_id>/`
- Remove an Inventory Item: `DELETE /inventory/<item_id>/`
