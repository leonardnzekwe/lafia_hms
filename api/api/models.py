from django.db import models
from django.contrib.auth.models import AbstractUser


class BaseModel(models.Model):
    """BaseModel class"""

    def __str__(self):
        return f"{self.__class__.__name__}: {self.id}"

    class Meta:
        """Abstract class"""

        abstract = True


class User(AbstractUser):
    """BaseUser class"""

    is_doctor = models.BooleanField(default=False, db_index=True)
    is_nurse = models.BooleanField(default=False, db_index=True)
    is_patient = models.BooleanField(default=False, db_index=True)

    def __str__(self):
        """String representation of User objects"""
        return f"{self.__class__.__name__}: ({self.username})"

    class Meta:
        """Abstract class"""

        db_table = "user"


class Speciality(BaseModel):
    specialty = models.CharField(max_length=100)

    class Meta:
        """Speciality DB table name"""

        db_table = "speciality"


class Patient(User):
    date_of_birth = models.DateField()
    contact_info = models.TextField()
    address = models.TextField()
    emergency_contact = models.TextField()

    class Meta:
        """Patient DB table name"""

        db_table = "patient"


class Doctor(User):
    specialty = models.ForeignKey(Speciality, on_delete=models.PROTECT)

    class Meta:
        """Doctor DB table name"""

        db_table = "doctor"


class Nurse(User):
    specialty = models.ForeignKey(Speciality, on_delete=models.PROTECT)

    class Meta:
        """Nurse DB table name"""

        db_table = "nurse"


class Appointment(BaseModel):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    date_and_time = models.DateTimeField()
    status = models.CharField(max_length=20, default="Scheduled")
    notes = models.TextField(blank=True, null=True)

    class Meta:
        """Appointment DB table name"""

        db_table = "appointment"


class Prescription(BaseModel):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    medications = models.TextField()
    dosage = models.CharField(max_length=100)
    issue_date = models.DateField()

    class Meta:
        """Prescription DB table name"""

        db_table = "prescription"


class MedicalRecord(BaseModel):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    diagnosis = models.TextField()
    treatment = models.TextField()
    notes = models.TextField()
    date = models.DateField()

    class Meta:
        """Medical Record DB table name"""

        db_table = "medical_record"


class Inventory(BaseModel):
    item_name = models.CharField(max_length=100)
    quantity = models.PositiveIntegerField()
    unit_price = models.DecimalField(max_digits=10, decimal_places=2)
    manufacturer = models.CharField(max_length=100)

    class Meta:
        """Inventory DB table name"""

        db_table = "inventory"


class Billing(BaseModel):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    appointment = models.ForeignKey(Appointment, on_delete=models.CASCADE)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_status = models.CharField(max_length=20)
    billing_address = models.TextField()
    insurance_details = models.TextField()
    transaction_history = models.TextField()

    class Meta:
        """Billing DB table name"""

        db_table = "billing"


class Ward(BaseModel):
    ward_number = models.CharField(max_length=10)
    capacity = models.PositiveIntegerField()
    current_occupancy = models.PositiveIntegerField()

    class Meta:
        """Ward DB table name"""

        db_table = "ward"


class Bed(BaseModel):
    ward = models.ForeignKey(Ward, on_delete=models.CASCADE)
    bed_number = models.CharField(max_length=10)
    patient = models.ForeignKey(
        Patient, on_delete=models.SET_NULL, blank=True, null=True
    )
    availability = models.BooleanField(default=True)

    class Meta:
        """Bed DB table name"""

        db_table = "bed"


class LabTest(BaseModel):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    ordered_by_doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    test_name = models.CharField(max_length=100)
    test_category = models.CharField(max_length=100)
    results = models.TextField()
    test_date = models.DateField()

    class Meta:
        """Lab Test DB table name"""

        db_table = "lab_test"


class MedicalHistory(BaseModel):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    condition = models.CharField(max_length=100)
    treatment = models.TextField()
    notes = models.TextField()
    date = models.DateField()

    class Meta:
        """Medical History DB table name"""

        db_table = "medical_history"


class Medication(BaseModel):
    name = models.CharField(max_length=100)
    description = models.TextField()
    inventory_item = models.ForeignKey(Inventory, on_delete=models.CASCADE)

    class Meta:
        """Medication DB table name"""

        db_table = "medication"
