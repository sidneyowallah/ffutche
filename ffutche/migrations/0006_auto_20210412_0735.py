# Generated by Django 3.1.7 on 2021-04-12 12:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ffutche', '0005_auto_20210329_0813'),
    ]

    operations = [
        migrations.AlterField(
            model_name='scholarship',
            name='criteria',
            field=models.CharField(max_length=130),
        ),
    ]