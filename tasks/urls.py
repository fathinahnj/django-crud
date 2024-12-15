from django.urls import path
from . import views

# URLConf, gunanya untuk berkomunikasi antar app (pemweb, tasks)
urlpatterns = [
    path('', views.task_view, name='task'),  # Default route for the empty path
    # path('task/', views.task_view, name='task'),
]
