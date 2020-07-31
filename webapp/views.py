from django.shortcuts import render
from django.views import generic
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
# Create your views here.

def Home(request):
    return render(request,'base.html')

def Table(request):
    return render(request,'Table_creation.html')

class UserRegistration(generic.CreateView):
    form_class = UserCreationForm
    template_name = 'registration/register.html'
    success_url = reverse_lazy('login')
