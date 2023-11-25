from django.contrib import admin

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
    User,
    Ward,
    Bed,
    LabTest,
    MedicalHistory,
    Medication,
)

admin.site.site_header = "Lafia HMS"
admin.site.index_title = "HMS Dashboard"
admin.site.site_title = "HMS"

admin.site.register(User)
admin.site.register(Speciality)
admin.site.register(Doctor)
admin.site.register(Nurse)
admin.site.register(Patient)
admin.site.register(Appointment)
admin.site.register(Prescription)
admin.site.register(MedicalRecord)
admin.site.register(Inventory)
admin.site.register(Billing)
admin.site.register(Ward)
admin.site.register(Bed)
admin.site.register(LabTest)
admin.site.register(MedicalHistory)
admin.site.register(Medication)
