from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated


def permission_denied(request, exception):
    return JsonResponse(
        {"code": "ERR_PERMISSION_DENIED", "message": str(exception)},
        status=403,
    )


class AnonymousView(APIView):
    """Base view for unauthenticated endpoints"""

    permission_classes = [AllowAny]


class AuthenticatedView(AnonymousView):

    permission_classes = [
        IsAuthenticated,
    ]
