from rest_framework.pagination import LimitOffsetPagination, PageNumberPagination
from rest_framework.response import Response


class DefaultLimitOffsetPagination(LimitOffsetPagination):
    max_limit = 50


class SmallLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10
    max_limit = 20


class MediumLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20
    max_limit = 60


class LargeLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 100
    max_limit = 100
