"""podcast_social_network URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import re_path
from django.conf.urls import url
from podcast import views as podcast_views
from django.contrib.auth import views as auth_views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', podcast_views.home, name='home'),
    url(r'signup/', podcast_views.signup, name='signup'),
    url(r'login/', auth_views.login, {'template_name':'podcast/login.html'}, name='login'),
    url(r'logout/', auth_views.logout, {'next_page': '/'}, name='logout'),
    url(r'search/', podcast_views.searchPage, name='searchpage'),
    url(r'browseusers/', podcast_views.browseUsers, name='browseusers'),
    url(r'episode/(?P<slug>[-\w]+)', podcast_views.episodePageDisplay, name='searchpage'),
    url(r'searchresultsdisplay/', podcast_views.searchResultsDisplay, name='searchresultsdisplay'),
    url(r'episodedisplay/', podcast_views.episodeDisplay, name='episodedisplay'),
    url(r'addtolikes/', podcast_views.addToLikes, name='addtolikes'),
    url(r'newsfeed/', podcast_views.newsFeed, name='newsfeed'),
    url(r'^user/(?P<username>[a-zA-Z0-9]+)$', podcast_views.viewProfile, name='viewprofile'),

]
