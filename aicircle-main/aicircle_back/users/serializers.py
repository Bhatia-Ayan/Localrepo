from rest_framework import serializers

from . import models


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=300, required=True)
    password = serializers.CharField(required=True)

    def validate_email(self, value: str):
        return value.lower().strip()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = [
            "id",
            "email",
            "first_name",
            "last_name",
            "is_active",
            "last_login",
            "is_email_verified",
            "phone_number",
            "is_phone_number_verified",
        ]

        read_only_fields = ["id", "email"]


class UserLiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = [
            "id",
            "email",
            "first_name",
            "last_name",
        ]

        read_only_fields = ["id", "email", "first_name", "last_name"]
