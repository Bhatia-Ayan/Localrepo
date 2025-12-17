# Third Party Stuff
from django.urls import path

from . import views


# Combine urls from both default and singleton routers and expose as
# 'urlpatterns' which django can pick up from this module.
urlpatterns = [
    path("login", views.LoginAPIView.as_view(), name="login"),
    path("me", views.Me.as_view(), name="me"),
]
