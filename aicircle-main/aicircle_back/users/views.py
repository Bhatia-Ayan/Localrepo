import logging

from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework import generics

from base.views import AnonymousView, AuthenticatedView
from . import serializers
from . import utils
from . import models

logger = logging.getLogger(__name__)


class LoginAPIView(AnonymousView):
    def post(self, *args, **kwargs):
        login_mode = self.request.data.get("login_mode", "email")
        auth_params = {}

        if login_mode == "email":
            serializer = serializers.LoginSerializer(data=self.request.data)
            serializer.is_valid(raise_exception=True)

            auth_params = {
                "email": serializer.validated_data["email"],
                "password": serializer.validated_data["password"],
            }
        else:
            raise ValidationError({"login_mode": ["must be email"]})

        response = utils.handle_login(self.request, auth_params, login_mode)
        return Response(response)


class Me(AuthenticatedView, generics.RetrieveAPIView):
    model = models.User
    serializer_class = serializers.UserLiteSerializer

    def get_object(self, *args, **kwargs) -> models.User:
        return self.request.user
