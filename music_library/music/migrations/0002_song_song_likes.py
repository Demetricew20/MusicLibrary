# Generated by Django 3.1.7 on 2021-04-20 00:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='song',
            name='song_likes',
            field=models.IntegerField(default=0, verbose_name='Likes'),
        ),
    ]
