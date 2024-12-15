from django.db import models

# Create your models here.
# database di sini 

# datasetnya : task_id saja??

class Tasks(models.Model):
  tasklist=models.CharField(max_length=300, null=True, blank=True)
  
