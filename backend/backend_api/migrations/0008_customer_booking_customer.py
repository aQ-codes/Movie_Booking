# Generated by Django 5.0 on 2024-03-30 17:17

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0007_remove_booking_customer_delete_customer'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mobile', models.PositiveBigIntegerField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='booking',
            name='customer',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='backend_api.customer'),
        ),
    ]
