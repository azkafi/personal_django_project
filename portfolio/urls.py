from django.urls import path
from . import views

urlpatterns = [
    path('',views.index, name="portfolio"),
    path('add-portfolio', views.add_portfolio, name="add-portfolio"),
]