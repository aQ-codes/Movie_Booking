# Generated by Django 5.0 on 2024-04-08 09:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0017_alter_screen_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='show',
            name='price',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='screen',
            name='name',
            field=models.CharField(max_length=200),
        ),
    ]
