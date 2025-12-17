from rest_framework.exceptions import PermissionDenied

from .models import OrganizationUser, Organization
from users.models import User


class OrganizationAttachMixin:
    def initial(self, request, *args, **kwargs):

        user: User = request.user
        org: Organization = None
        org_user: OrganizationUser = None

        if user and user.is_authenticated:
            try:
                org_user = OrganizationUser.objects.select_related("org").get(user=user)
                org = org_user.org
            except OrganizationUser.DoesNotExist:
                raise PermissionDenied("User does not belong to any organization")

        setattr(request, "org", org)
        setattr(request, "org_user", org_user)

        super().initial(request, *args, **kwargs)
