from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

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


# Stats View
class StatsView(APIView):
    """View a Stats of all Entities"""

    def get(self, request):
        """Get the Stats of all Entities"""
        try:
            data = {
                "doctors": Doctor.objects.count(),
                "nurses": Nurse.objects.count(),
                "patients": Patient.objects.count(),
                "appointments": Appointment.objects.count(),
                "prescriptions": Prescription.objects.count(),
                "inventory": Inventory.objects.count(),
            }

            return Response(data)
        except Exception as err:
            return Response(
                status=status.HTTP_500_INTERNAL_SERVER_ERROR, data={f"Error: {err}"}
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
