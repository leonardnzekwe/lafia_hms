from rest_framework import serializers
from api.models import (
    Patient,
    Doctor,
    Nurse,
    Appointment,
    Prescription,
    Inventory,
)


# Patient Serializer
class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = "__all__"


# Doctor Serializer
class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = "__all__"


# Nurse Serializer
class NurseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nurse
        fields = "__all__"


# Appointment Serializer
class AppointmentSerializer(serializers.ModelSerializer):
    patient_name = serializers.SerializerMethodField()
    doctor_name = serializers.SerializerMethodField()
    schedule = serializers.SerializerMethodField()

    def get_patient_name(self, obj):
        return obj.patient.get_full_name()

    def get_doctor_name(self, obj):
        return obj.doctor.get_full_name()

    def get_schedule(self, obj):
        return obj.date_and_time.strftime("%A, %B %d, %Y %I:%M %p")

    class Meta:
        model = Appointment
        fields = [
            "id",
            "date_and_time",
            "status",
            "notes",
            "patient",
            "doctor",
            "patient_name",
            "doctor_name",
            "schedule",
        ]


# Prescription Serializer
class PrescriptionSerializer(serializers.ModelSerializer):
    patient_name = serializers.SerializerMethodField()
    doctor_name = serializers.SerializerMethodField()
    schedule = serializers.SerializerMethodField()

    def get_patient_name(self, obj):
        return obj.patient.get_full_name()

    def get_doctor_name(self, obj):
        return obj.doctor.get_full_name()

    def get_schedule(self, obj):
        return obj.date_and_time.strftime("%A, %B %d, %Y %I:%M %p")

    class Meta:
        model = Prescription
        fields = [
            "id",
            "medications",
            "dosage",
            "date_and_time",
            "patient",
            "doctor",
            "patient_name",
            "doctor_name",
            "schedule",
        ]


# Inventory Serializer
class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = "__all__"
