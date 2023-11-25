from django.urls import include, path
from rest_framework import routers
from api.views import (
    AppointmentViewSet,
    BedViewSet,
    BillingViewSet,
    DoctorViewSet,
    InventoryViewSet,
    LabTestViewSet,
    MedicalHistoryViewSet,
    MedicalRecordViewSet,
    MedicationViewSet,
    NurseViewSet,
    PatientViewSet,
    PrescriptionViewSet,
    SpecialityViewSet,
    WardViewSet,
)

router = routers.DefaultRouter()
router.register(r"speciality", SpecialityViewSet)
router.register(r"patients", PatientViewSet)
router.register(r"doctors", DoctorViewSet)
router.register(r"nurses", NurseViewSet)
router.register(r"appointments", AppointmentViewSet)
router.register(r"prescriptions", PrescriptionViewSet)
router.register(r"medicalrecords", MedicalRecordViewSet)
router.register(r"inventory", InventoryViewSet)
router.register(r"billing", BillingViewSet)
router.register(r"wards", WardViewSet)
router.register(r"beds", BedViewSet)
router.register(r"labtests", LabTestViewSet)
router.register(r"medicalhistory", MedicalHistoryViewSet)
router.register(r"medications", MedicationViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
