# Generated by Django 3.1.7 on 2021-03-29 13:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ffutche', '0004_scholarship_donation_student_hollow_year_student_scholarship_tuition_fees'),
    ]

    operations = [
        migrations.RenameField(
            model_name='scholarship',
            old_name='reffered_studies',
            new_name='preffered_studies',
        ),
    ]
