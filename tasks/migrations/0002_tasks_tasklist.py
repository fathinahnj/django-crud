# Generated by Django 5.1.2 on 2024-12-15 18:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='tasks',
            name='tasklist',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
    ]