from django.urls import path
from . import views
app_name = 'ffutche'

urlpatterns = [
path('scholarships/', views.ScholarshipListView.as_view(), name='scholarship_list'), 
path('scholarships/<pk>/', views.ScholarshipDetailView.as_view(), name='scholarship_detail'),
]

