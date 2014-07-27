from tastypie.authentication import SessionAuthentication
from tastypie.authorization import DjangoAuthorization
from tastypie.resources import ModelResource
from tastypie import fields
from models import *


class UserResource(ModelResource):
  
  class Meta:
    queryset = User.objects.all()
    excludes = ['id', 'is_active', 'resource_uri', 'first_name', 'last_name',
                'email', 'password', 'is_superuser']
    authentication = SessionAuthentication()
    authorization = DjangoAuthorization()


class AuthorizeUserResource(ModelResource):
  user = fields.ForeignKey(UserResource, 'user', full=True)
  
  class Meta:
    abstract = True
    always_return_data = True
    authentication = SessionAuthentication()
    authorization = DjangoAuthorization()

  def apply_authorization_limits(self, request, object_list):
    return object_list.filter(user=request.user)

class TransactionResource(AuthorizeUserResource):
  class Meta(AuthorizeUserResource.Meta):
    queryset = Transaction.objects.all()
    resource_name = 'transaction'
  def obj_create(self, bundle, **kwargs):
    return super(TransactionResource, self).obj_create(
        bundle, user=bundle.request.user)
