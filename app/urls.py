from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required

from django.contrib import admin
admin.autodiscover()

from tastypie.api import Api
from api.resources import *

api_router = Api(api_name='v0')
api_router.register(TransactionResource())

urlpatterns = patterns('',
    url(r'', include('django.contrib.auth.urls')),
    #url(r'^admin/', include('admin.site.urls')),
    url(r'^api/', include(api_router.urls)),
)
