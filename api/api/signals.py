from django.dispatch import receiver
from django.db.models.signals import post_save, pre_save
from api.models import Doctor, Nurse, Patient


# @receiver(pre_save, sender=Patient)
# def set_patient_status(sender, instance, **kwargs):
#     # Check if the instance is being created
#     if instance._state.adding:
#         # Set is_student to True when creating a student
#         instance.is_active = True


# @receiver(pre_save, sender=Doctor)
# def set_doctor_status(sender, instance, **kwargs):
#     # Check if the instance is being created
#     if instance._state.adding:
#         # Set is_teacher to True when creating a student
#         instance.is_active = True


# @receiver(pre_save, sender=Nurse)
# def set_nurse_status(sender, instance, **kwargs):
#     # Check if the instance is being created
#     if instance._state.adding:
#         # Set is_dean to True when creating a student
#         instance.is_active = True
