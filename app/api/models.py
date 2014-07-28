from django.db import models
from django.contrib.auth.models import User


class Institution(models.Model):

  name = models.TextField(blank=True)
  organization = models.TextField(blank=True)
  fid = models.TextField(unique=True)


class Account(models.Model):

  user = models.ForeignKey(User)
  account_id = models.TextField()
  routing_number = models.TextField()
  branch_id = models.TextField()
  account_type = models.TextField()
  institution = models.ForeignKey(Institution)
  type = models.SmallIntegerField(choices=(
    (0, 'Unknown'), (1, 'Bank'), (2, 'CreditCard'), (3, 'Investment'))
  )

  class Meta:
    unique_together = (('user', 'institution', 'account_id'))


class Transaction(models.Model):

  user = models.ForeignKey(User)
  account = models.ForeignKey(Account)
  fitid = models.TextField()
  payee = models.TextField(blank=True)
  type = models.TextField()
  date = models.DateTimeField()
  amount = models.DecimalField(max_digits=10, decimal_places=2)
  memo = models.TextField(blank=True)
  # Standard Industry Code
  sic = models.PositiveSmallIntegerField(blank=True, null=True)
  # Merchant Category Code
  mcc = models.PositiveSmallIntegerField(blank=True, null=True)
  checknum = models.PositiveSmallIntegerField(blank=True, null=True)

  class Meta:
    unique_together = (('user', 'account', 'fitid'),)
