# Generated by Django 5.0 on 2024-04-21 05:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0022_booking_amount_booking_status'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ticket',
            name='bk_id',
        ),
        migrations.AlterField(
            model_name='movie',
            name='status',
            field=models.CharField(choices=[('Upcoming', 'Upcoming'), ('Active', 'Active'), ('Paused', 'Paused'), ('Completed', 'Completed')], default='Upcoming', max_length=200, null=True),
        ),
        migrations.DeleteModel(
            name='BookingTemp',
        ),
        migrations.DeleteModel(
            name='Ticket',
        ),
    ]
