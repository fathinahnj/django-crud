from django.contrib import admin
from .models import Tasks


class TaskDB(admin.ModelAdmin):
    list_display=('tasklist',)

admin.site.register(Tasks,TaskDB)
    

# Register your models here.
# list_display kita "tasklist" dan "id" tapi "id" tidak usah ditulis karena otomatis di-assign (?)