from django.urls import path
from basic_app import views

# template tagging, 这里的名字到之后relative urls哪里的超链接会用到
app_name = 'basic_app' 

urlpatterns = [
    path('relative/', views.relative, name = 'relative'),
    path('other/', views.other, name = 'other'),
]