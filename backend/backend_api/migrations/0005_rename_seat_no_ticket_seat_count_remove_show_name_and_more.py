# Generated by Django 5.0 on 2024-03-30 12:06

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0004_booking_screen_show_showday_showtime_ticket_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ticket',
            old_name='seat_no',
            new_name='seat_count',
        ),
        migrations.RemoveField(
            model_name='show',
            name='name',
        ),
        migrations.AddField(
            model_name='booking',
            name='customer',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='backend_api.customer'),
        ),
        migrations.AddField(
            model_name='booking',
            name='date_created',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='booking',
            name='screen',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='backend_api.screen'),
        ),
        migrations.AddField(
            model_name='booking',
            name='show',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='backend_api.show'),
        ),
        migrations.AddField(
            model_name='show',
            name='date',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='backend_api.showday'),
        ),
        migrations.AddField(
            model_name='show',
            name='movie',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='backend_api.movie'),
        ),
        migrations.AddField(
            model_name='show',
            name='screen',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='backend_api.screen'),
        ),
        migrations.AddField(
            model_name='show',
            name='time',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='backend_api.showtime'),
        ),
        migrations.AddField(
            model_name='ticket',
            name='bk_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='backend_api.booking'),
        ),
        migrations.AddField(
            model_name='ticket',
            name='seat_id',
            field=models.IntegerField(null=True),
        ),
    ]
