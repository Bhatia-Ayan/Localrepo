from django.contrib import admin

# Register your models here.
from . import models

class OrganizationAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "created_at")
    search_fields = ("name",)
    ordering = ("-created_at",)

class OrganizationUserAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "org", "created_at")
    search_fields = ("user__email", "org__name")
    ordering = ("-created_at",)

class RoleAdmin(admin.ModelAdmin):
    list_display = ("id", "role_name", "created_at")
    search_fields = ("role_name",)
    ordering = ("-created_at",)

admin.site.register(models.Organization, OrganizationAdmin)
admin.site.register(models.OrganizationUser, OrganizationUserAdmin)
admin.site.register(models.Role, RoleAdmin)

