from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from django.contrib.auth.models import User
import json

# Create your views here.
class RegistrationView(View):
    def get(self, requst):
        return render(requst,'authentication/signIn.html')
class UsernameValidation(View):
    def post(self, requst):
        data=json.loads(requst.body)
        username = data['username']
        
        if str(username).isalnum():
            return JsonResponse({'no_username':'errorrrrr'}, status=400)
        if User.objects.filter(username=username).exists():
            return JsonResponse({'no_username':'sorry'}, status=409)
        
        return JsonResponse({'username_available': True})

class DashboardView(View):
    def get(self, requst):
        return render(requst,'dashboard/basePage.html')
    