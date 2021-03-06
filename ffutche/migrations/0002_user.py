# Generated by Django 3.1.7 on 2021-03-28 19:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ffutche', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(max_length=120)),
                ('lastname', models.CharField(max_length=120)),
                ('type', models.CharField(max_length=120)),
                ('address1', models.CharField(max_length=120)),
                ('address2', models.CharField(max_length=120)),
                ('phone1', models.CharField(max_length=120)),
                ('phone2', models.CharField(max_length=120)),
                ('dob_month', models.CharField(max_length=120)),
                ('dob_day', models.CharField(max_length=120)),
                ('dob_year', models.CharField(max_length=120)),
                ('cityofbirth', models.CharField(max_length=120)),
                ('countryofbirth', models.CharField(max_length=120)),
                ('maritalstatus', models.CharField(max_length=120)),
            ],
        ),
    ]
