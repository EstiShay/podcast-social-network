# Generated by Django 2.0.2 on 2018-02-16 01:15

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('podcast', '0002_podcast'),
    ]

    operations = [
        migrations.AddField(
            model_name='podcast',
            name='collection_id',
            field=models.CharField(default=django.utils.timezone.now, max_length=250),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='podcast',
            name='network',
            field=models.CharField(max_length=250),
        ),
        migrations.AlterField(
            model_name='podcast',
            name='title',
            field=models.CharField(max_length=250),
        ),
    ]