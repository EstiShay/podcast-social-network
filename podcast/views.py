import urllib.request
import requests
from urllib import request
import json
import xmltodict

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


def searchPage(request):
    return render(request, 'podcast/search.html', {})


def json_parser(obj):
    results = obj['results']
    return results


def searchResultsDisplay(request):
    search_term = request.POST.get('searchParam')
    itunes_url = str('https://itunes.apple.com/search?term=' + search_term + '&limit=6&media=podcast')
    r = urllib.request.urlopen(itunes_url)
    api_call = json.load(r)
    api_call_results = json_parser(api_call)
    var_type = type(api_call_results)
    var_length = len(api_call_results)
    return render(request, 'podcast/searchresultsdisplay.html', {"search_term": search_term,
                                                                 "search_result": api_call_results,
                                                                 "var_type": var_type,
                                                                 "var_length": var_length
                                                                 })

# def get_books(year, author):
#     url = 'http://api.example.com/books'
#     params = {'year': year, 'author': author}
#     r = requests.get(url, params=params)
#     books = r.json()
#     books_list = {'books': books['results']}
#     return books_list
