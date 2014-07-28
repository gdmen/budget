import pytz

from ofxparse import OfxParser
from .models import *


def handle_uploaded_file(f, user):
  ofx = OfxParser.parse(f)

  for ofxAccount in ofx.accounts:
    # Create Institution
    institution, _ = Institution.objects.get_or_create(
      fid = ofxAccount.institution.fid
    )
    # Create Account
    account, _ = Account.objects.get_or_create(
      user = user,
      account_id = ofxAccount.account_id,
      routing_number = ofxAccount.routing_number,
      branch_id = ofxAccount.branch_id,
      account_type = ofxAccount.account_type,
      institution = institution,
      type = ofxAccount.type
    )

    # Create Transactions
    for ofxTransaction in ofxAccount.statement.transactions:
      Transaction.objects.get_or_create(
        user = user,
        account = account,
        fitid = ofxTransaction.id,
        payee = ofxTransaction.payee,
        type = ofxTransaction.type,
        date = ofxTransaction.date.replace(tzinfo=pytz.UTC),
        amount = ofxTransaction.amount,
        memo = ofxTransaction.memo,
        sic = ofxTransaction.sic or None,
        mcc = ofxTransaction.mcc or None,
        checknum = ofxTransaction.checknum or None
      )
