# Generated by Django 5.0 on 2024-04-09 09:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0019_rename_email_customer_name_remove_booking_screen'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customer',
            name='name',
        ),
    ]
