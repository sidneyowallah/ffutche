from django.contrib import admin

# Register your models here.
from .models import School
from .models import Scholarship
from .models import Tuition_Fees
from .models import Student_Scholarship


class SchoolAdmin(admin.ModelAdmin):
    list_display = ('school_id', 'name', 'school_type')
    fields = ('school_id',
    'name',
    'school_type',
    'address1',
    'address2',
    'city',
    'country',
    'contact_name',
    'contact_phone1',
    'contact_phone2')
    list_filter = ('school_id', 'name')
    search_fields = ('school_id', 'name')
    prepopulated_fields = {'school_id': ('name',)}
class ScholarshipAdmin(admin.ModelAdmin):
    list_display = ('scholarship_id', 'description', 'minimum_amount')
    fields = ('description', 'scholarship_id', ('minimum_amount',))
    list_filter = ('minimum_amount', 'description')
    search_fields = ('scholarship_id', 'criteria')
    prepopulated_fields = {'description': ('scholarship_id',)}

class TuitionAdmin(admin.ModelAdmin):
    list_display = ('school_id', 'academic_level', 'academic_year')
    fields = ('school_id',
    'academic_level',
    'academic_year',
    'tuition',
    'clothing',
    'furniture',
    'books',
    'misc',)
    list_filter = ('school_id', 'academic_level', 'tuition')
    search_fields = ('school_id', 'tuition')
    prepopulated_fields = {'academic_year': ('tuition',)}


class Student_ScholarshipAdmin(admin.ModelAdmin):
    list_display = ('scholarship_id', 'awarded_on', 'awarded_amount')
    fields = ('scholarship_id',
    'username',
    'awarded_on',
    'delivery_method',
    'award_justification',
    'awarded_amount',)
    list_filter = ('scholarship_id', 'awarded_on', 'awarded_amount')
    search_fields = ('scholarship_id', 'awarded_amount', 'awarded_on',)
    prepopulated_fields = {'awarded_on': ('awarded_amount',)}



#Register your models here.


admin.site.register(School, SchoolAdmin)
admin.site.register(Scholarship, ScholarshipAdmin)
admin.site.register(Tuition_Fees, TuitionAdmin)
admin.site.register(Student_Scholarship, Student_ScholarshipAdmin)


