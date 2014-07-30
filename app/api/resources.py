from tastypie.authentication import SessionAuthentication
from tastypie.authorization import DjangoAuthorization
from tastypie.resources import ModelResource
from tastypie import fields
from .models import *


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


class InstitutionResource(ModelResource):

  class Meta(AuthorizeUserResource.Meta):
    queryset = Institution.objects.all()
    resource_name = 'institution'


class AccountResource(AuthorizeUserResource):
  institution = fields.ForeignKey(InstitutionResource, 'institution', full=True)

  class Meta(AuthorizeUserResource.Meta):
    queryset = Account.objects.all()
    resource_name = 'account'

  def obj_create(self, bundle, **kwargs):
    return super(AccountResource, self).obj_create(
        bundle, user=bundle.request.user)


class CategoryResource(AuthorizeUserResource):
  parent = fields.ForeignKey('self', 'parent', full=True)

  class Meta(AuthorizeUserResource.Meta):
    queryset = Category.objects.all()
    resource_name = 'category'

  def obj_create(self, bundle, **kwargs):
    return super(CategoryResource, self).obj_create(
        bundle, user=bundle.request.user)


class TransactionResource(AuthorizeUserResource):
  account = fields.ForeignKey(AccountResource, 'account', full=True)
  category = fields.ForeignKey(CategoryResource, 'category', null=True, full=True)

  class Meta(AuthorizeUserResource.Meta):
    queryset = Transaction.objects.all().order_by('-date')
    resource_name = 'transaction'

  def obj_create(self, bundle, **kwargs):
    return super(TransactionResource, self).obj_create(
        bundle, user=bundle.request.user)
