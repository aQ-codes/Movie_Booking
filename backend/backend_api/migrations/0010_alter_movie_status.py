# Generated by Django 5.0 on 2024-04-02 08:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0009_alter_movie_poster'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='status',
            field=models.CharField(choices=[('Upcoming', 'Upcoming'), ('Running', 'Running'), ('Paused', 'Paused'), ('Completed', 'Completed')], default='Upcoming', max_length=200, null=True),
        ),
    ]
