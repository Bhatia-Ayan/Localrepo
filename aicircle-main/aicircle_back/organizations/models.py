from django.db import models

from base.abstract_models import TimeStampedUUIDModel
from users.models import User


class Organization(TimeStampedUUIDModel):
    name: str = models.CharField(
        max_length=255,
        unique=True,
        error_messages={
            "unique": "An organization with this name already exists in Willis. Please enter a unique organization name to proceed."
        },
    )

    class Meta:
        ordering = ("-created_at",)

    def __str__(self):
        return f"{self.name}"

    def agents(self):
        from agents.models import OrganizationAgent, Agent

        org_agents = OrganizationAgent.objects.filter(org=self)
        return org_agents


class Role(TimeStampedUUIDModel):

    class RoleCodes(models.TextChoices):
        OrgMember = "org-member", "Org Member"
        OrgAdmin = "org-admin", "Org Admin"

    role_name = models.CharField(max_length=255)
    role_code = models.CharField(
        max_length=255,
        unique=True,
        choices=RoleCodes.choices,
        default=RoleCodes.OrgMember,
    )

    description = models.TextField(null=True, blank=True)

    class Meta:  # type: ignore
        ordering = ("-created_at",)

    def __str__(self):
        return f"{self.role_name}"


class OrganizationUser(TimeStampedUUIDModel):
    org: Organization = models.ForeignKey(Organization, on_delete=models.CASCADE)
    user: User = models.ForeignKey(User, on_delete=models.CASCADE)
    role: Role = models.ForeignKey(Role, on_delete=models.CASCADE)

    class Meta:
        unique_together = ("org", "user")
        ordering = ("-created_at",)

    def change_user_role(self, new_role: Role):
        """Changes the user's role"""
        self.role = new_role
        self.save(update_fields=["role"])
