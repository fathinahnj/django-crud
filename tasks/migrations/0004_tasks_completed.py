# Generated by Django 5.1.3 on 2024-12-17 10:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0003_tasks_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='tasks',
            name='completed',
            field=models.BooleanField(default=False),
        ),
    ]
