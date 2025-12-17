from django.contrib.auth import get_user_model
from django.contrib.auth.backends import BaseBackend

User = get_user_model()


class EmailBackend(BaseBackend):
    """
    Authentication backend for email/password login
    """

    def authenticate(self, request, **kwargs):
        email = kwargs.get("email")
        password = kwargs.get("password")

        if not email or not password:
            return None

        try:
            user = User.objects.get(email__iexact=email)
        except User.DoesNotExist:
            return None

        if user.check_password(password) and self.user_can_authenticate(user):
            return user

        return None

    def get_user(self, user_id):
        """
        Retrieve a user instance by user_id.
        Required for session-based authentication.
        """
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None

    def user_can_authenticate(self, user):
        """Check if user is active"""
        return user.is_active


class AdminAuthProxyBackend(BaseBackend):

    def authenticate(self, request, username, password, **kwargs):
        try:
            user = User.objects.get(email__iexact=username)
        except User.DoesNotExist:
            return None

        if not user.is_active:
            return None

        if user.check_password(password) and user.is_staff:
            return user

        return None

    def get_user(self, user_id):

        try:
            user = User.objects.get(pk=user_id)
            return user if user.is_staff and user.is_superuser else None
        except User.DoesNotExist:
            return None
