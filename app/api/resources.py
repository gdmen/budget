from tastypie.authentication import SessionAuthentication
from tastypie.authorization import DjangoAuthorization
from tastypie.constants import ALL, ALL_WITH_RELATIONS
from tastypie.resources import ModelResource
from tastypie import fields
from .models import *


class UserResource(ModelResource):

  class Meta:
    queryset = User.objects.all()
    excludes = ['id', 'is_active', 'is_staff', 'last_login', 'date_joined',
                'first_name', 'last_name', 'email', 'password', 'is_superuser'
                'username']
    authentication = SessionAuthentication()
    authorization = DjangoAuthorization()


class AuthorizeUserResource(ModelResource):

  class Meta:
    abstract = True
    always_return_data = True
    authentication = SessionAuthentication()
    authorization = DjangoAuthorization()

  def apply_authorization_limits(self, request, object_list):
    return object_list.filter(user=request.user)


class IncludeUserResource(AuthorizeUserResource):

  user = fields.ForeignKey(UserResource, 'user')


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
  parent = fields.ForeignKey('self', 'parent', null=True, full=True)

  class Meta(AuthorizeUserResource.Meta):
    queryset = Category.objects.all()
    resource_name = 'category'
    filtering = {
      "name": ALL
    }

  def obj_create(self, bundle, **kwargs):
    return super(CategoryResource, self).obj_create(
        bundle, user=bundle.request.user)


class BriefCategoryResource(AuthorizeUserResource):

  class Meta(AuthorizeUserResource.Meta):
    queryset = Category.objects.all()
    resource_name = 'brief_category'
    fields = ['name', 'parent']
    filtering = {
      "name": ALL
    }

  def obj_create(self, bundle, **kwargs):
    return super(CategoryResource, self).obj_create(
        bundle, user=bundle.request.user)


class TransactionResource(AuthorizeUserResource):

  account = fields.ForeignKey(AccountResource, 'account', full=True)
  category = fields.ForeignKey(CategoryResource, 'category', null=True, full=True)

  class Meta(AuthorizeUserResource.Meta):
    queryset = Transaction.objects.all().order_by('date')
    resource_name = 'transaction'
    filtering = {
      "category": ALL_WITH_RELATIONS,
      "date": ALL
    }

  def obj_create(self, bundle, **kwargs):
    return super(TransactionResource, self).obj_create(
        bundle, user=bundle.request.user)


class BriefTransactionResource(AuthorizeUserResource):

  category = fields.ForeignKey(BriefCategoryResource, 'category', null=True, full=True)

  class Meta(AuthorizeUserResource.Meta):
    queryset = Transaction.objects.exclude(category__name__contains="transfer").order_by('date')
    resource_name = 'brief_transaction'
    fields = ['date', 'amount', 'category']
    filtering = {
      "category": ALL_WITH_RELATIONS,
      "date": ALL
    }

  def obj_create(self, bundle, **kwargs):
    return super(TransactionResource, self).obj_create(
        bundle, user=bundle.request.user)


class CategoryRuleResource(AuthorizeUserResource):

  category = fields.ForeignKey(CategoryResource, 'category', null=True, full=True)

  class Meta(AuthorizeUserResource.Meta):
    queryset = CategoryRule.objects.all()
    resource_name = 'category_rule'

  def obj_create(self, bundle, **kwargs):
    return super(CategoryRuleResource, self).obj_create(
        bundle, user=bundle.request.user)
