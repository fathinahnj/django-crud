from django.urls import path
from . import views

urlpatterns = [
    path('', views.task_view, name='task'),
    path("taskrec/", views.taskrec, name='addrec'),
    path("delete/<int:id>/", views.delete, name="delete"),
    path("update/<int:id>/", views.update, name="update"),
]
