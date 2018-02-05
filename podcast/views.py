from django.shortcuts import render
from podcast.models import User


def home(request):
    return render(request, 'podcast/index.html', {})
