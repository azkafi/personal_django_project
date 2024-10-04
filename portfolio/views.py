from django.shortcuts import render

# Create your views here.

def index(requst):
    return render(requst, 'index.html')
def add_portfolio(requst):
    return render((requst, 'portfolio/add_portfolio.html' ))