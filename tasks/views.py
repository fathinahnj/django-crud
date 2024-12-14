from django.shortcuts import render

def task_view(request):
    return render(request, 'task.html')
