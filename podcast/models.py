from django.db import models
from django.template.defaultfilters import slugify
# from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser



# Create your models here.

class User(AbstractUser):
    bio = models.TextField(max_length=1440, null=True, blank=True)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    location = models.CharField(max_length=30, blank=True)


class Podcast(models.Model):
    title = models.CharField(max_length=450)
    collection_id = models.CharField(max_length=450)
    artist_name = models.CharField(max_length=450)
    small_art = models.CharField(max_length=450)
    large_art = models.CharField(max_length=450)
    rss_feed_link = models.CharField(max_length=450)
    slug = models.SlugField(max_length=450)

    def save(self, *args, **kwargs):
        if not self.id:
            if len(self.title) > 50:
                self.slug = slugify(self.title[:48])
            else:
                self.slug = slugify(self.title)
        super(Podcast, self).save(*args, **kwargs)

    def __str__(self):
        return self.title


class Episode(models.Model):
    title = models.CharField(max_length=250)
    description = models.CharField(max_length=1000, blank=True, null=True)
    release_date = models.CharField(max_length=100, null=True, blank=True)
    minutes = models.IntegerField(null=True, blank=True)
    podcast = models.ForeignKey(Podcast, on_delete=models.CASCADE)
    audio_link = models.CharField(max_length=400)
    slug = models.SlugField()

    def save(self, *args, **kwargs):
        if not self.id:
            if len(self.title) > 50:
                self.slug = slugify(self.title[:48])
            else:
                self.slug = slugify(self.title)
        super(Episode, self).save(*args, **kwargs)

    def __str__(self):
        return self.title


class LikedPodcast(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    episode = models.ForeignKey(Episode, on_delete=models.CASCADE)

    def __str__(self):
        return "User: {} likes episode:{}".format(self.user.username, self.episode.title)

class Follower(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')
    following = models.ForeignKey(User, on_delete=models.CASCADE, related_name='following')

    def __str__(self):
        return "{}: {} is following {}".format(self.id, self.user.username, self.following.username)