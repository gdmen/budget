import pytz

from ofxparse import OfxParser
from .models import *


def handle_uploaded_file(f, user):
  ofx = OfxParser.parse(f)

  CATEGORY_RULES = CategoryRule.objects.all()
  TRANSFERS_CATEGORY = Category.objects.get(name = 'transfers')

  for ofxAccount in ofx.accounts:
    # Create Institution
    institution = Institution.objects.get(
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

    # Categorize and create Transactions
    for ofxTransaction in ofxAccount.statement.transactions:
      _payee = ofxTransaction.payee
      _amount = ofxTransaction.amount
      _date = ofxTransaction.date.replace(tzinfo=pytz.UTC)
      _type = ofxTransaction.type
      category = None

      # Try rules based categorization
      for rule in CATEGORY_RULES:
        if rule.term in _payee:
          category = rule.category
          break

      # Check if this is a transfer or refund
      if not category:
        opposite_type = 'credit' if _type == 'debit' else 'debit'
        possibly_neutral = Transaction.objects.filter(
          amount = -1 * _amount,
          type = opposite_type
        )
        for trans in possibly_neutral:
          # Transfer (within 1 day of each other)
          if trans.account != account and abs(trans.date - _date).total_seconds() <= 129600:
            trans.category = TRANSFERS_CATEGORY
            trans.save(update_fields=['category'])
            category = TRANSFERS_CATEGORY

      Transaction.objects.get_or_create(
        user = user,
        account = account,
        fitid = ofxTransaction.id,
        payee = _payee,
        type = _type,
        date = _date,
        amount = _amount,
        memo = ofxTransaction.memo,
        sic = ofxTransaction.sic or None,
        mcc = ofxTransaction.mcc or None,
        checknum = ofxTransaction.checknum or None,
        category = category
      )
