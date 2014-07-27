from django.db import models
from django.contrib.auth.models import User

class Transaction(models.Model):
  user = models.ForeignKey(User)
  fitid = models.TextField()
  payee = models.TextField(blank=True)
  type = models.TextField()
  date = models.DateTimeField()
  amount = models.DecimalField(max_digits=10, decimal_places=2)
  memo = models.TextField(blank=True)
  # Standard Industry Code
  sic = models.PositiveSmallIntegerField(blank=True)
  # Merchant Category Code
  mcc = models.PositiveSmallIntegerField(blank=True)
  checknum = models.PositiveSmallIntegerField(blank=True)

  class Meta:
    unique_together = (('user', 'fitid'),)
