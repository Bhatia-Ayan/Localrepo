from rest_framework.exceptions import ValidationError
from django.contrib.auth import authenticate

from . import models
from . import serializers

def handle_login(request, auth_params, login_mode):

    response = {}

    user: models.User = authenticate(request, **auth_params)
    if not user:
        raise ValidationError({"auth_token": ["token is invalid"]})
        
    creds = user.get_provider_creds(auth_params.get("login_mode"))
    if not creds:
        raise ValidationError({"password": ["you cannot login through this interface"]})

    response = {
        "user": serializers.UserSerializer(instance=user).data,
        "auth": creds,
    }

    return response