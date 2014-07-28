import pytz

from ofxparse import OfxParser
from .models import *

def handle_uploaded_file(f, user):
  ofx = OfxParser.parse(f)

  for account in ofx.accounts:
    # Create Account
    Account.objects.get_or_create(

    # Create Transactions
    for transaction in account.statement.transactions:
      Transaction.objects.get_or_create(
        user = user,
        fitid = transaction.id,
        payee = transaction.payee,
        type = transaction.type,
        date = transaction.date.replace(tzinfo=pytz.UTC),
        amount = transaction.amount,
        memo = transaction.memo,
        sic = transaction.sic or None,
        mcc = transaction.mcc or None,
        checknum = transaction.checknum or None
      )
