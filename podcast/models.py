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
    network = models.CharField(max_length=250)
    small_art = models.CharField(max_length=250)
    large_art = models.CharField(max_length=250)
    rss_feed_link = models.CharField(max_length=250)

    def __str__(self):
        self.title = title

