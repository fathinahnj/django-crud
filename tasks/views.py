from django.shortcuts import render
from .models import Tasks

def task_view(request):
    task = Tasks.objects.all()
    return render(request, 'task.html', { 'task': task })
