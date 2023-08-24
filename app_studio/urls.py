from django.urls import path
from . import views

urlpatterns = [
    path('', views.landing_page, name='landing_page'),
    path('signup/', views.signUp, name='signUp'),
    path('login/', views.logIn, name='logIn'),
    path('selectPlan/', views.selectPlan, name='selectPlan'),
    path('submitUserQuery/', views.submitUserQuery, name='submitUserQuery'),
]