from ofxparse import OfxParser
from .models import *

def handle_uploaded_file(f, user):
  ofx = OfxParser.parse(f)

  # Create Account
  ofx.account.number
  ofx.account.routing_number

  # Create Transactions
  for transaction in ofx.account.statement.transactions:
    Transaction.objects.get_or_create(
      user = user,
      fitid = transaction.id,
      payee = transaction.payee,
      type = transaction.type,
      date = transaction.date,
      amount = transaction.amount,
      memo = transaction.memo,
      sic = transaction.sic or None,
      mcc = transaction.mcc or None,
      checknum = transaction.checknum or None
    )
