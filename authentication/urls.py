from.views import UsernameValidation, DashboardView,RegistrationView
from django.urls import path
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('register',RegistrationView.as_view(),name="register"),
    path('new-register',csrf_exempt(UsernameValidation.as_view()),name="new-register"),

    
    path('dashboard',DashboardView.as_view(),name="dashboard")
]
