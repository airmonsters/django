from django.shortcuts import render
from django.views.generic import (TemplateView)

# Create your views here.
class AbboutView(TemplateView):
    template_name = 'about.html'
