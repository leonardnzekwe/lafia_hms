from django.db import models


class BaseModel(models.Model):
    """BaseModel class"""

    def __str__(self):
        return f"{self.__class__.__name__}: {self.id}"

    class Meta:
        """Abstract class"""

        abstract = True


class User(models.Model):
    """BaseUser class"""

    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    phone = models.CharField(max_length=15, blank=True, null=True)

    def get_full_name(self):
        return f"{self.last_name} {self.first_name}"

    def __str__(self):
        """String representation of User objects"""
        return f"{self.__class__.__name__}: ({self.get_full_name()})"

    class Meta:
        """Abstract class"""

        abstract = True


class Patient(User):
    """Patient class"""

    diagnosis = models.TextField(blank=True)

    class Meta:
        """Patient DB table name"""

        db_table = "patient"


class Doctor(User):
    """Doctor class"""

    specialty = models.CharField(max_length=100, blank=True)
    about = models.TextField(blank=True)

    class Meta:
        """Doctor DB table name"""

        db_table = "doctor"


class Nurse(User):
    """Nurse class"""

    specialty = models.CharField(max_length=100, blank=True)
    about = models.TextField(blank=True)

    class Meta:
        """Nurse DB table name"""

        db_table = "nurse"


class Appointment(BaseModel):
    """Appointment class"""

    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    date_and_time = models.DateTimeField()
    status = models.CharField(max_length=20, default="Scheduled")
    notes = models.TextField(blank=True, null=True)

    class Meta:
        """Appointment DB table name"""

        db_table = "appointment"


class Prescription(BaseModel):
    """Prescription class"""

    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    medications = models.TextField()
    dosage = models.CharField(max_length=100)
    date_and_time = models.DateTimeField()

    class Meta:
        """Prescription DB table name"""

        db_table = "prescription"


class Inventory(BaseModel):
    """Inventory class"""

    item_name = models.CharField(max_length=100)
    quantity = models.PositiveIntegerField()
    unit_price = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        """Inventory DB table name"""

        db_table = "inventory"
