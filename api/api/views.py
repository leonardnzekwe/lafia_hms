from rest_framework import viewsets
from api.models import (
    Patient,
    Doctor,
    Nurse,
    Appointment,
    Prescription,
    MedicalRecord,
    Inventory,
    Billing,
    Speciality,
    Ward,
    Bed,
    LabTest,
    MedicalHistory,
    Medication,
)
from api.serializers import (
    PatientSerializer,
    DoctorSerializer,
    NurseSerializer,
    AppointmentSerializer,
    PrescriptionSerializer,
    MedicalRecordSerializer,
    InventorySerializer,
    BillingSerializer,
    SpecialitySerializer,
    WardSerializer,
    BedSerializer,
    LabTestSerializer,
    MedicalHistorySerializer,
    MedicationSerializer,
)


# Speciality Viewset
class SpecialityViewSet(viewsets.ModelViewSet):
    queryset = Speciality.objects.all()
    serializer_class = SpecialitySerializer


# Patient Viewset
class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer


# Doctor Viewset
class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer


# Nurse Viewset
class NurseViewSet(viewsets.ModelViewSet):
    queryset = Nurse.objects.all()
    serializer_class = NurseSerializer


# Appointment Viewset
class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer


# Prescription Viewset
class PrescriptionViewSet(viewsets.ModelViewSet):
    queryset = Prescription.objects.all()
    serializer_class = PrescriptionSerializer


# MedicalRecord Viewset
class MedicalRecordViewSet(viewsets.ModelViewSet):
    queryset = MedicalRecord.objects.all()
    serializer_class = MedicalRecordSerializer


# Inventory Viewset
class InventoryViewSet(viewsets.ModelViewSet):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer


# Billing Viewset
class BillingViewSet(viewsets.ModelViewSet):
    queryset = Billing.objects.all()
    serializer_class = BillingSerializer


# Ward Viewset
class WardViewSet(viewsets.ModelViewSet):
    queryset = Ward.objects.all()
    serializer_class = WardSerializer


# Bed Viewset
class BedViewSet(viewsets.ModelViewSet):
    queryset = Bed.objects.all()
    serializer_class = BedSerializer


# LabTest Viewset
class LabTestViewSet(viewsets.ModelViewSet):
    queryset = LabTest.objects.all()
    serializer_class = LabTestSerializer


# MedicalHistory Viewset
class MedicalHistoryViewSet(viewsets.ModelViewSet):
    queryset = MedicalHistory.objects.all()
    serializer_class = MedicalHistorySerializer


# Medication Viewset
class MedicationViewSet(viewsets.ModelViewSet):
    queryset = Medication.objects.all()
    serializer_class = MedicationSerializer
