import urllib.request
import json
from podcast.models import Podcast, Episode, User, LikedPodcast
from podcast.services import xmlToJson, UrlFinder

from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from .forms import UserForm, SignUpForm


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
        if Podcast.objects.filter(collection_id=i['collectionId']):
            return
        else:
            Podcast.objects.create(
                title=i['trackName'],
                collection_id=i['collectionId'],
                artist_name=i['artistName'],
                small_art=i['artworkUrl60'],
                large_art=i['artworkUrl100'],
                rss_feed_link=i['feedUrl']
            )


def episodeDisplay(request):
    rss_feed = request.POST.get('rss_feed')
    collection_id = request.POST.get('collection_id')
    episodes = xmlToJson(rss_feed)
    episodes_list = UrlFinder(episodes)
    addEpisodeToModel(episodes_list, collection_id)
    return render(request, 'podcast/episodedisplay.html', {'episodes_list': episodes_list[:5],
                                                           })


def addEpisodeToModel(episode_list, collection_id):
    podcast = Podcast.objects.get(collection_id=collection_id)
    for i in episode_list:
        if Episode.objects.filter(title=i['title']):
            return
        else:
            Episode.objects.create(
                title=i['title'],
                description=i['description'],
                release_date=i['pub_date'],
                podcast=podcast,
                audio_link=i['audio_link']
            )


def addToLikes(request):
    user = request.user
    episode_name = request.POST.get('episode_name')
    episode = Episode.objects.get(title=episode_name)
    LikedPodcast.objects.create(user=user,
                                episode=episode,
                                )
    # return render(request, 'podcast/searchresultdisplay.html', {})
    return

def newsFeed(request):
    user = request.user
    liked_episodes = LikedPodcast.objects.filter(user=user)
    return render(request, 'podcast/newsfeed.html', {"liked_episodes": liked_episodes})

def newsFeedEpisodeBuilder(current_user):
    return

def userProfile(request):
    user = request.user
    user_likes = LikedPodcast.objects.filter(user=user)
    return render(request, 'podcast/userprofile.html', {"user_likes": user_likes})
