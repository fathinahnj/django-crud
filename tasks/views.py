from django.shortcuts import render, redirect, get_object_or_404
from django.shortcuts import render, redirect
from .models import Tasks

def task_view(request):
    task = Tasks.objects.all()
    return render(request, 'task.html', { 'task': task })
  
def taskrec(request):
    x = request.POST['inputtask']
    category = request.POST['category']  # Get the selected category
    task = Tasks(tasklist=x, category=category)
    task.save()
    return redirect("/")

def delete(request, id):
    task = Tasks.objects.get(id=id)
    task.delete()
    return redirect("/")

def update(request, id):
    task = get_object_or_404(Tasks, id=id)

    if request.method == "POST":
        new_tasklist = request.POST.get('inputtask', task.tasklist)
        task.tasklist = new_tasklist
        task.save()
        return redirect('/')  # Redirect back to the task list

    return render(request, 'update.html', {'task': task})