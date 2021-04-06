from rest_framework import generics

from .serializers import ScholarshipSerializer
from ffutche.models import Scholarship


class ScholarshipListView(generics.ListAPIView):
    queryset = Scholarship.objects.all()
    serializer_class = ScholarshipSerializer
class ScholarshipDetailView(generics.RetrieveAPIView):
    queryset = Scholarship.objects.all()
    serializer_class = ScholarshipSerializer
