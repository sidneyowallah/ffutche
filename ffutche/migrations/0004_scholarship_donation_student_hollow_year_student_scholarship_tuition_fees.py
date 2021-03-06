# Generated by Django 3.1.7 on 2021-03-29 12:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ffutche', '0003_auto_20210328_1516'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tuition_Fees',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('academic_level', models.CharField(max_length=120)),
                ('academic_year', models.CharField(max_length=120)),
                ('tuition', models.CharField(max_length=120)),
                ('clothing', models.CharField(max_length=120)),
                ('furniture', models.CharField(max_length=120)),
                ('books', models.CharField(max_length=120)),
                ('misc', models.CharField(max_length=120)),
                ('school_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ffutche.school')),
            ],
        ),
        migrations.CreateModel(
            name='Student_Scholarship',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('awarded_on', models.CharField(max_length=120)),
                ('delivery_method', models.CharField(max_length=120)),
                ('award_justification', models.CharField(max_length=120)),
                ('awarded_amount', models.CharField(max_length=120)),
                ('scholarship_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ffutche.scholarship')),
                ('username', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ffutche.user')),
            ],
        ),
        migrations.CreateModel(
            name='Student_Hollow_Year',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hollow_year', models.CharField(max_length=120)),
                ('activities', models.CharField(max_length=120)),
                ('username', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ffutche.user')),
            ],
        ),
        migrations.CreateModel(
            name='Scholarship_Donation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.CharField(max_length=120)),
                ('academic_year', models.CharField(max_length=120)),
                ('donor_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ffutche.user')),
                ('scholarship_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ffutche.scholarship')),
            ],
        ),
    ]
