from django.urls import include, path
from rest_framework import routers
from api.views import (
    AppointmentViewSet,
    DoctorViewSet,
    InventoryViewSet,
    NurseViewSet,
    PatientViewSet,
    PrescriptionViewSet,
    StatsView,
)

router = routers.DefaultRouter()
router.register(r"patients", PatientViewSet)
router.register(r"doctors", DoctorViewSet)
router.register(r"nurses", NurseViewSet)
router.register(r"appointments", AppointmentViewSet)
router.register(r"prescriptions", PrescriptionViewSet)
router.register(r"inventory", InventoryViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("stats", StatsView.as_view(), name="stats"),
]
