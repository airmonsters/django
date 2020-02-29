from django.shortcuts import render
from django.views.generic import View, TemplateView, ListView, DetailView
from django.http import HttpResponse
from basic_app import models

class SchoolListView(ListView):
    model = models.School

class SchoolDeatilView(DetailView):
    model = models.School
    template_name = 'basic_app/school_detail.html'

