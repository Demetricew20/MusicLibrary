from django.db import models

# Create your models here.
class Song(models.Model):
    title = models.CharField(max_length=80)
    artist = models.CharField(max_length=50)
    album = models.CharField(max_length=50)
    genre = models.CharField(max_length=50)
    release_date = models.DateField(blank=True, null=True)
    song_likes = models.IntegerField(default=0, verbose_name='Likes')