import urllib.request
import json
from podcast.models import Podcast, Episode, User, LikedPodcast, Follower
from podcast.services import xmlToJson, UrlFinder
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from .forms import UserForm, SignUpForm
from django.contrib.auth.decorators import login_required
from django.core.exceptions import ObjectDoesNotExist


def home(request):
    #
    # If the user is logged in, send them to their newsfeed. Otherwise, the landing page
    #
    if request.user.is_authenticated:
        return HttpResponseRedirect('/newsfeed/')
    else:
        return render(request, 'podcast/index.html', {})


@login_required
def searchPage(request):
    #
    # Send user to the search page
    #
    return render(request, 'podcast/search.html', {})


@login_required
def newsFeed(request):
    #
    # The Newsfeed is the liked episodes by the users that the Authenticated user is following
    # Creates that list by getting the requesting User object and the LikedPodcast objects
    #
    user = request.user
    following_list_objects = Follower.objects.filter(user=user)
    following_list_users = []
    for i in following_list_objects:
        following_list_users.append(i.following)
    following_list_liked_episodes = LikedPodcast.objects.filter(user__in=following_list_users)
    return render(request, 'podcast/newsfeed.html', {"liked_episodes": following_list_liked_episodes,
                                                     "user": user,
                                                     "following_list_objects": following_list_objects,
                                                     "following_list_users": following_list_users,
                                                     })


@login_required
def browseUsers(request):
    #
    # Renders the page that displays all Users
    #
    users = User.objects.exclude(id=request.user.id)
    return render(request, 'podcast/browseusers.html', {"users": users
                                                        })


def signup(request):
    #
    # Renders the New User form
    #
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


def episodePageDisplay(request, slug):
    #
    # Displays an individual podcast episode, and who likes that episode
    #
    episode = Episode.objects.get(slug=slug)
    recommending_users = LikedPodcast.objects.filter(episode=episode)
    if LikedPodcast.objects.filter(user=request.user, episode=episode):
        already_liked = True
    else:
        already_liked = False
    return render(request, 'podcast/episode.html', {"episode": episode,
                                                    "recommending_users": recommending_users,
                                                    "already_liked": already_liked})


def json_parser(obj):
    #
    # Traverses the JSON return from the iTunes API call
    #
    results = obj['results']
    return results


def searchResultsDisplay(request):
    #
    # Calls iTunes API with the term enteres into the search bar
    #
    search_term = request.POST.get('searchParam')
    itunes_url = str('https://itunes.apple.com/search?term=' + search_term + '&limit=6&media=podcast')
    r = urllib.request.urlopen(itunes_url)
    api_call = json.load(r)
    api_call_results = json_parser(api_call)
    addPodcastToModel(api_call_results)
    return render(request, 'podcast/searchresultsdisplay.html', {"search_result": api_call_results,
                                                                 })


def addPodcastToModel(call_list):
    #
    # Creates a Podcast instance, unless there already is one that has a unique collection id
    #
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
    #
    # Traverses the rss feed to display the Episodes of a Podcast
    # Some podcast have differetn RSS feed structures that are not contemplated in our app
    # The Try/Excepts below are to catch instances when we cannot display those Episodes
    #
    rss_feed = request.POST.get('rss_feed')
    collection_id = request.POST.get('collection_id')
    try:
        episodes = xmlToJson(rss_feed)
        episodes_list = UrlFinder(episodes)
        addEpisodeToModel(episodes_list, collection_id)
        podcast_of_choice = Podcast.objects.get(collection_id=collection_id)
        another_episodes_list = Episode.objects.filter(podcast=podcast_of_choice)
        return render(request, 'podcast/episodedisplay.html', {'episodes_list': episodes_list[:5],
                                                               'another_episodes_list': another_episodes_list
                                                               })
    except KeyError:
        return render(request, 'podcast/error/keyerror.html', {})
    except TypeError:
        return render(request, 'podcast/error/keyerror.html', {})
    except ObjectDoesNotExist:
        return render(request, 'podcast/error/noobjecterror.html', {})



def addEpisodeToModel(episode_list, collection_id):
    podcast = Podcast.objects.get(collection_id=collection_id)
    for i in episode_list[:5]:
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
    episode = Episode.objects.get(slug=episode_name)
    LikedPodcast.objects.create(user=user,
                                episode=episode,
                                )
    return HttpResponse('added')

def removeFromLikes(request):
    user = request.user
    title = request.POST.get('episode_name')
    episode = Episode.objects.get(slug=title)
    ep = LikedPodcast.objects.filter(user=user, episode=episode)
    ep.delete()
    return HttpResponse('ep')

def alreadyFollowing(user, following):
    if Follower.objects.filter(user=user, following=following):
        return True
    else:
        return False


@login_required
def viewProfile(request, username):
    #
    # Views profile based on the User
    # Displays different divs if user page is the request.user, or if one is already following that user
    #
    display_user = User.objects.get(username=username)
    display_user_likes = LikedPodcast.objects.filter(user=display_user)
    followers = Follower.objects.filter(user=display_user)
    followed_by_list = Follower.objects.filter(following=display_user)
    if request.user.username == display_user.username:
        current_user_page = True
    else:
        current_user_page = False
    if Follower.objects.filter(user=request.user, following=display_user):
        already_following = True
    else:
        already_following = False
    # already_following = alreadyFollowing(request.user, display_user)
    return render(request, 'podcast/userprofile.html', {"display_user": display_user,
                                                        "user_likes": display_user_likes,
                                                        "followers": followers,
                                                        "followed_by_list": followed_by_list,
                                                        "current_user_page": current_user_page,
                                                        "already_following": already_following
                                                        })


def followUser(request):
    #
    # Called by Ajax request onClick
    # Creates a Follower object
    #
    user_username = request.POST.get('user')
    user = User.objects.get(username=user_username)
    following_username = request.POST.get('following')
    following = User.objects.get(username=following_username)
    if Follower.objects.filter(user=user, following=following):
        pass
    else:
        Follower.objects.create(user=user, following=following)
    return HttpResponse("a")


def unFollowUser(request):
    #
    # Called by Ajax request
    # Removes Follower object
    #
    user_username = request.POST.get('user')
    user = User.objects.get(username=user_username)
    following_username = request.POST.get('following')
    following = User.objects.get(username=following_username)
    b = Follower.objects.filter(user=user, following=following)
    b.delete()
    return HttpResponse("b")
