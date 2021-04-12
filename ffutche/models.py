from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=120)
    firstname = models.CharField(max_length=120)
    lastname = models.CharField(max_length=120)
    user_type = models.CharField(max_length=120)
    address1 = models.CharField(max_length=120)
    address2 = models.CharField(max_length=120)
    phone1 = models.CharField(max_length=120)
    phone2 = models.CharField(max_length=120)
    dob_month = models.CharField(max_length=120)
    dob_day = models.CharField(max_length=120)
    dob_year = models.CharField(max_length=120)
    cityofbirth = models.CharField(max_length=120)
    countryofbirth = models.CharField(max_length=120)
    maritalstatus = models.CharField(max_length=120)

    def _str_(self):
        return self.firstname

class School(models.Model):
    school_id = models.CharField(max_length=120)
    name = models.CharField(max_length=120)
    school_type = models.CharField(max_length=120)
    address1 = models.CharField(max_length=120)
    address2 = models.CharField(max_length=120)
    city = models.CharField(max_length=120)
    country = models.CharField(max_length=120)
    contact_name = models.CharField(max_length=120)
    contact_phone1 = models.CharField(max_length=120)
    contact_phone2 = models.CharField(max_length=120)

    def _str_(self):
        return self.name

class Tuition_Fees(models.Model):
    school_id = models.ForeignKey(School,on_delete=models.CASCADE)
    academic_level = models.CharField(max_length=120)
    academic_year = models.CharField(max_length=120)
    tuition = models.CharField(max_length=120)
    clothing = models.CharField(max_length=120)
    furniture = models.CharField(max_length=120)
    books = models.CharField(max_length=120)
    misc = models.CharField(max_length=120)

    def _str_(self):
        return self.name



class Student_Education(models.Model):
    school_id = models.ForeignKey(School,on_delete=models.CASCADE)
    username = models.ForeignKey(User,on_delete=models.CASCADE)
    year_attended = models.CharField(max_length=120)
    class_type = models.CharField(max_length=120)
    grade = models.CharField(max_length=120)
    degree = models.CharField(max_length=120)
    rank = models.CharField(max_length=120)
    dismissed = models.BooleanField
    dismissal_reason = models.CharField(max_length=120)

    def _str_(self):
        return self.school_id

class Scholarship(models.Model):
    scholarship_id = models.CharField(max_length=130)
    denomination = models.CharField(max_length=130)
    preffered_studies = models.CharField(max_length=130)
    minimum_amount = models.CharField(max_length=130)
    description = models.CharField(max_length=130)
    criteria = models.CharField(max_length=130)

    def _str_(self):
        return self.scholarship_id

class Student_Scholarship(models.Model):
    scholarship_id = models.ForeignKey(Scholarship,on_delete=models.CASCADE)
    username = models.ForeignKey(User,on_delete=models.CASCADE)
    awarded_on = models.CharField(max_length=120)
    delivery_method = models.CharField(max_length=120)
    award_justification = models.CharField(max_length=120)
    awarded_amount = models.CharField(max_length=120)

    def _str_(self):
        return self.scholarship_id

class Scholarship_Donation(models.Model):
    scholarship_id = models.ForeignKey(Scholarship,on_delete=models.CASCADE)
    donor_id = models.ForeignKey(User,on_delete=models.CASCADE)
    amount = models.CharField(max_length=120)
    academic_year = models.CharField(max_length=120)

    def _str_(self):
        return self.scholarship_id


class Student_Hollow_Year(models.Model):
    username = models.ForeignKey(User,on_delete=models.CASCADE)
    hollow_year = models.CharField(max_length=120)
    activities = models.CharField(max_length=120)

    def _str_(self):
        return self.hollow_year
class ffutche(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title