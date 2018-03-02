from django.contrib import admin
from podcast.models import Podcast, Episode, User, LikedPodcast, Follower

# Register your models here.

admin.site.register(Podcast)
admin.site.register(Episode)
admin.site.register(User)
admin.site.register(LikedPodcast)
admin.site.register(Follower)
