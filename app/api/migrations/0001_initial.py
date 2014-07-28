# -*- coding: utf-8 -*-
from south.utils import datetime_utils as datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Institution'
        db.create_table(u'api_institution', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('organization', self.gf('django.db.models.fields.TextField')()),
            ('fid', self.gf('django.db.models.fields.TextField')(unique=True)),
        ))
        db.send_create_signal(u'api', ['Institution'])

        # Adding model 'Account'
        db.create_table(u'api_account', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('user', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['auth.User'])),
            ('account_id', self.gf('django.db.models.fields.TextField')()),
            ('routing_number', self.gf('django.db.models.fields.TextField')()),
            ('branch_id', self.gf('django.db.models.fields.TextField')()),
            ('account_type', self.gf('django.db.models.fields.TextField')()),
            ('institution', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['api.Institution'])),
            ('type', self.gf('django.db.models.fields.SmallIntegerField')()),
        ))
        db.send_create_signal(u'api', ['Account'])

        # Adding unique constraint on 'Account', fields ['user', 'institution', 'account_id']
        db.create_unique(u'api_account', ['user_id', 'institution_id', 'account_id'])

        # Adding model 'Transaction'
        db.create_table(u'api_transaction', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('user', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['auth.User'])),
            ('account', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['api.Account'])),
            ('fitid', self.gf('django.db.models.fields.TextField')()),
            ('payee', self.gf('django.db.models.fields.TextField')(blank=True)),
            ('type', self.gf('django.db.models.fields.TextField')()),
            ('date', self.gf('django.db.models.fields.DateTimeField')()),
            ('amount', self.gf('django.db.models.fields.DecimalField')(max_digits=10, decimal_places=2)),
            ('memo', self.gf('django.db.models.fields.TextField')(blank=True)),
            ('sic', self.gf('django.db.models.fields.PositiveSmallIntegerField')(null=True, blank=True)),
            ('mcc', self.gf('django.db.models.fields.PositiveSmallIntegerField')(null=True, blank=True)),
            ('checknum', self.gf('django.db.models.fields.PositiveSmallIntegerField')(null=True, blank=True)),
        ))
        db.send_create_signal(u'api', ['Transaction'])

        # Adding unique constraint on 'Transaction', fields ['user', 'account', 'fitid']
        db.create_unique(u'api_transaction', ['user_id', 'account_id', 'fitid'])


    def backwards(self, orm):
        # Removing unique constraint on 'Transaction', fields ['user', 'account', 'fitid']
        db.delete_unique(u'api_transaction', ['user_id', 'account_id', 'fitid'])

        # Removing unique constraint on 'Account', fields ['user', 'institution', 'account_id']
        db.delete_unique(u'api_account', ['user_id', 'institution_id', 'account_id'])

        # Deleting model 'Institution'
        db.delete_table(u'api_institution')

        # Deleting model 'Account'
        db.delete_table(u'api_account')

        # Deleting model 'Transaction'
        db.delete_table(u'api_transaction')


    models = {
        u'api.account': {
            'Meta': {'unique_together': "(('user', 'institution', 'account_id'),)", 'object_name': 'Account'},
            'account_id': ('django.db.models.fields.TextField', [], {}),
            'account_type': ('django.db.models.fields.TextField', [], {}),
            'branch_id': ('django.db.models.fields.TextField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'institution': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['api.Institution']"}),
            'routing_number': ('django.db.models.fields.TextField', [], {}),
            'type': ('django.db.models.fields.SmallIntegerField', [], {}),
            'user': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['auth.User']"})
        },
        u'api.institution': {
            'Meta': {'object_name': 'Institution'},
            'fid': ('django.db.models.fields.TextField', [], {'unique': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'organization': ('django.db.models.fields.TextField', [], {})
        },
        u'api.transaction': {
            'Meta': {'unique_together': "(('user', 'account', 'fitid'),)", 'object_name': 'Transaction'},
            'account': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['api.Account']"}),
            'amount': ('django.db.models.fields.DecimalField', [], {'max_digits': '10', 'decimal_places': '2'}),
            'checknum': ('django.db.models.fields.PositiveSmallIntegerField', [], {'null': 'True', 'blank': 'True'}),
            'date': ('django.db.models.fields.DateTimeField', [], {}),
            'fitid': ('django.db.models.fields.TextField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'mcc': ('django.db.models.fields.PositiveSmallIntegerField', [], {'null': 'True', 'blank': 'True'}),
            'memo': ('django.db.models.fields.TextField', [], {'blank': 'True'}),
            'payee': ('django.db.models.fields.TextField', [], {'blank': 'True'}),
            'sic': ('django.db.models.fields.PositiveSmallIntegerField', [], {'null': 'True', 'blank': 'True'}),
            'type': ('django.db.models.fields.TextField', [], {}),
            'user': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['auth.User']"})
        },
        u'auth.group': {
            'Meta': {'object_name': 'Group'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '80'}),
            'permissions': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['auth.Permission']", 'symmetrical': 'False', 'blank': 'True'})
        },
        u'auth.permission': {
            'Meta': {'ordering': "(u'content_type__app_label', u'content_type__model', u'codename')", 'unique_together': "((u'content_type', u'codename'),)", 'object_name': 'Permission'},
            'codename': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'content_type': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['contenttypes.ContentType']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '50'})
        },
        u'auth.user': {
            'Meta': {'object_name': 'User'},
            'date_joined': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime.now'}),
            'email': ('django.db.models.fields.EmailField', [], {'max_length': '75', 'blank': 'True'}),
            'first_name': ('django.db.models.fields.CharField', [], {'max_length': '30', 'blank': 'True'}),
            'groups': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'related_name': "u'user_set'", 'blank': 'True', 'to': u"orm['auth.Group']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'is_staff': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'is_superuser': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'last_login': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime.now'}),
            'last_name': ('django.db.models.fields.CharField', [], {'max_length': '30', 'blank': 'True'}),
            'password': ('django.db.models.fields.CharField', [], {'max_length': '128'}),
            'user_permissions': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'related_name': "u'user_set'", 'blank': 'True', 'to': u"orm['auth.Permission']"}),
            'username': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '30'})
        },
        u'contenttypes.contenttype': {
            'Meta': {'ordering': "('name',)", 'unique_together': "(('app_label', 'model'),)", 'object_name': 'ContentType', 'db_table': "'django_content_type'"},
            'app_label': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'model': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '100'})
        }
    }

    complete_apps = ['api']