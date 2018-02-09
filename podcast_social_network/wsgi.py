"""
WSGI config for podcast_social_network project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application
from whitenoise.django import DjangoWhiteNoise
from dj_static import Cling

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "podcast_social_network.settings")

# application = get_wsgi_application()
# application = DjangoWhiteNoise(application)
application = Cling(get_wsgi_application())

# import os
# from django.core.wsgi import get_wsgi_application
# os.environ.setdefault("DJANGO_SETTINGS_MODULE", "bootcamp.settings")
#
# application = get_wsgi_application()
# application = DjangoWhiteNoise(application)