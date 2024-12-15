from django.shortcuts import render, redirect
from .models import Tasks

def task_view(request):
    task = Tasks.objects.all()
    return render(request, 'task.html', { 'task': task })
  
def taskrec(request):
  x = request.POST['inputtask']
  task = Tasks(tasklist=x)
  task.save()
  return redirect("/")

def delete(request, id):
  task = Tasks.objects.get(id=id)
  task.delete()
  return redirect("/")