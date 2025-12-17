from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from django.contrib.auth.models import PermissionsMixin
from rest_framework_simplejwt.tokens import RefreshToken

from base.abstract_models import TimeStampedUUIDModel
from . import managers


class User(AbstractBaseUser, TimeStampedUUIDModel, PermissionsMixin):
    # We dont need date_joined from AbstractUser model as we have built our custom AbstractBase model with created_at and updated_at fields
    date_joined = None
    groups = None  # Exclude groups
    user_permissions = None  # Exclude permissions

    first_name: str = models.CharField(max_length=50)
    last_name: str = models.CharField(max_length=50, blank=True, null=True)
    email: str = models.EmailField(unique=True)
    is_email_verified: bool = models.BooleanField(default=False)
    phone_number: str = models.CharField(
        max_length=16,
        unique=True,
        blank=True,
        null=True,
    )
    is_phone_number_verified: bool = models.BooleanField(default=False)

    class RoleTypes(models.TextChoices):
        SUPERUSER = (
            "SUPERUSER",
            "Superuser",
        )  # Special role for superuser, who can access django admin panel only
        STAFF = "STAFF", "Staff"  # Default role for customer users

    role = models.CharField(
        max_length=20,
        choices=RoleTypes.choices,
        default=RoleTypes.STAFF,
    )

    is_active: bool = models.BooleanField(
        default=False,
    )
    is_staff: bool = models.BooleanField(
        default=False,
    )
    is_superuser: bool = models.BooleanField(
        default=False,
    )
    EMAIL_FIELD = "email"
    USERNAME_FIELD = "email"

    objects = managers.UserAllObjectsManager()

    class Meta:
        ordering = ("-created_at",)

    def __str__(self):
        return f"{self.email}"

    @property
    def full_name(self):
        """
        Returns the first_name plus the last_name, with a space in between.
        """
        full_name = "%s%s" % (
            self.first_name,
            ("" if not self.last_name else " " + self.last_name),
        )
        return full_name.strip()

    def get_provider_creds(self, login_mode):
        refresh = RefreshToken.for_user(self)

        return {
            "access_token": str(refresh.access_token),
            "refresh_token": str(refresh),
            "token_type": "Bearer",
            "expires_in": 3600,
            "login_mode": login_mode,
        }

    def save(self, *args, **kwargs):
        return super().save(*args, **kwargs)
