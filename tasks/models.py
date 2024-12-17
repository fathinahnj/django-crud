from django.db import models

# Create your models here.
# database di sini 

# datasetnya : task_id saja??

class Tasks(models.Model):
    CATEGORY_CHOICES = [
        ('business', 'Business'),
        ('personal', 'Personal'),
    ]
    tasklist = models.CharField(max_length=300, null=True, blank=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='business')
    completed = models.BooleanField(default=False)