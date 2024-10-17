from.views import RegistrationView, DashboardView
from django.urls import path

urlpatterns = [
    path('register',RegistrationView.as_view(),name="register"),

    path('dashboard',DashboardView.as_view(),name="dashboard")
]
