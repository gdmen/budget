from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required

from django.contrib import admin
admin.autodiscover()

from tastypie.api import Api
from .api.resources import *
from .api.views import *

api_router = Api(api_name='v0')
api_router.register(InstitutionResource())
api_router.register(AccountResource())
api_router.register(CategoryResource())
api_router.register(TransactionResource())

urlpatterns = patterns('',
    url(r'', include('django.contrib.auth.urls')),
    #url(r'^admin/', include('admin.site.urls')),
    url(r'^api/?', include(api_router.urls)),
    url(r'^landing/?', TemplateView.as_view(template_name='landing.html'), name='landing'),
    url(r'^import/?', login_required(ImportFile), name='import'),
    url(r'^', login_required(TemplateView.as_view(template_name='index.html')), name='index'),
)
