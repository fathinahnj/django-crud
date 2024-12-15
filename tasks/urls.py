from django.urls import path
from . import views

# URLConf, gunanya untuk berkomunikasi antar app (pemweb, tasks)
urlpatterns = [
    path('', views.task_view, name='task'),  # Default route for the empty path
    path("taskrec/", views.taskrec, name='addrec'),
    path("delete/<int:id>/", views.delete, name="delete")
]
