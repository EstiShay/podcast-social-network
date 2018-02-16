import urllib.request
import requests
from urllib import request
import json
import xmltodict
from podcast.models import Podcast

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
    addPodcastToModel(api_call_results)
    return render(request, 'podcast/searchresultsdisplay.html', {"search_result": api_call_results,
                                                                 })


def addPodcastToModel(call_list):
    for i in call_list:
        Podcast.objects.create(
            title=i['collectionName'],
            collection_id=i['collectionId'],
            network=i['artistName'],
            small_art=i['artworkUrl60'],
            large_art=i['artworkUrl100'],
            rss_feed_link=i['feedUrl']

        )

def userProfile(request, username):
    user = User.objects.get(username=username)
    return render(request, 'podcast/user_profile.html',{"user": user})
