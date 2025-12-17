from django.contrib import admin

# Register your models here.
from . import models

class UserAdmin(admin.ModelAdmin):
    list_display = ("id", "email", "is_active", "role")
    search_fields = ("email",)
    ordering = ("-created_at",)

admin.site.register(models.User, UserAdmin)