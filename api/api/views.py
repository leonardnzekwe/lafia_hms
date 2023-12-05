from rest_framework import viewsets
from api.models import (
    Patient,
    Doctor,
    Nurse,
    Appointment,
    Prescription,
    Inventory,
)
from api.serializers import (
    PatientSerializer,
    DoctorSerializer,
    NurseSerializer,
    AppointmentSerializer,
    PrescriptionSerializer,
    InventorySerializer,
)


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


# Inventory Viewset
class InventoryViewSet(viewsets.ModelViewSet):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer
