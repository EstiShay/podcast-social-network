from django.db import models
# from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser


# Create your models here.

class User(AbstractUser):
    bio = models.TextField(max_length=144, null=True, blank=True)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    location = models.CharField(max_length=30, blank=True)


class Podcast(models.Model):
    title = models.CharField(max_length=250)
    collection_id = models.CharField(max_length=250)
    artist_name = models.CharField(max_length=250)
    small_art = models.CharField(max_length=250)
    large_art = models.CharField(max_length=250)
    rss_feed_link = models.CharField(max_length=250)

    def __str__(self):
        return self.title


class Episode(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000, blank=True, null=True)
    release_date = models.CharField(max_length=50, null=True, blank=True)
    minutes = models.IntegerField(null=True, blank=True)
    podcast = models.ForeignKey(Podcast, on_delete=models.CASCADE)
    audio_link = models.CharField(max_length=200)

    def __str__(self):
        return str(self.id)


class LikedPodcast(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    episode = models.ForeignKey(Episode, on_delete=models.CASCADE)
    # liked = models.BooleanField

    def __str__(self):
        return str(self.id)
