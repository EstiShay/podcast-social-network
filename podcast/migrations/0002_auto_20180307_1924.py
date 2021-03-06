# Generated by Django 2.0.2 on 2018-03-07 19:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('podcast', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='episode',
            name='audio_link',
            field=models.CharField(max_length=400),
        ),
        migrations.AlterField(
            model_name='episode',
            name='release_date',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='episode',
            name='title',
            field=models.CharField(max_length=250),
        ),
        migrations.AlterField(
            model_name='podcast',
            name='artist_name',
            field=models.CharField(max_length=450),
        ),
        migrations.AlterField(
            model_name='podcast',
            name='collection_id',
            field=models.CharField(max_length=450),
        ),
        migrations.AlterField(
            model_name='podcast',
            name='large_art',
            field=models.CharField(max_length=450),
        ),
        migrations.AlterField(
            model_name='podcast',
            name='rss_feed_link',
            field=models.CharField(max_length=450),
        ),
        migrations.AlterField(
            model_name='podcast',
            name='small_art',
            field=models.CharField(max_length=450),
        ),
        migrations.AlterField(
            model_name='podcast',
            name='title',
            field=models.CharField(max_length=450),
        ),
        migrations.AlterField(
            model_name='user',
            name='bio',
            field=models.TextField(blank=True, max_length=1440, null=True),
        ),
    ]
