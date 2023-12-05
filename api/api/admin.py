from django.contrib import admin

from api.models import (
    Patient,
    Doctor,
    Nurse,
    Appointment,
    Prescription,
    Inventory,
)

admin.site.site_header = "Lafia HMS"
admin.site.index_title = "HMS Dashboard"
admin.site.site_title = "HMS"

admin.site.register(Doctor)
admin.site.register(Nurse)
admin.site.register(Patient)
admin.site.register(Appointment)
admin.site.register(Prescription)
admin.site.register(Inventory)
