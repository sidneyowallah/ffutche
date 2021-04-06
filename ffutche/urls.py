from django.urls import path
from .views import main
from django.conf.urls import include

urlpatterns = [
    path('', main),
    path('api/', include('ffutche.api.url', namespace='api')),
]