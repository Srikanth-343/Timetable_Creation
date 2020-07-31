from django.urls import path,include
from . import views
app_name='webapp'

urlpatterns = [
    path('',views.Home, name='Home'),
    path('table/',views.Table, name='Table'),
    path('register/',views.UserRegistration.as_view(), name='Signup'),

]
