from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate

from .forms import UserForm, SignUpForm
from django.contrib.auth.forms import UserCreationForm
from podcast.models import User


def home(request):
    return render(request, 'podcast/index.html', {})


def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('home')
    else:
        form = SignUpForm()
    return render(request, 'podcast/signup.html', {"form": form})





