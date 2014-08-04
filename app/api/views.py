import json
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.forms.models import model_to_dict
from .forms import UploadFileForm

from .parser import handle_uploaded_file
from .models import Category


def generate_category_tree(element):
  parent = model_to_dict(element[0])
  children = element[1].all()
  if children:
    parent['children'] = [generate_category_tree((c, c.children)) for c in children]
  return parent


def Index(request):
  categories = [(c, c.children) for c in Category.objects.filter(parent=None)]
  category_tree = [generate_category_tree(c) for c in categories]

  return render(request, 'index.html',
                dictionary={'categories': json.dumps(category_tree)})


def ImportFile(request):
  if request.method == 'POST':
    form = UploadFileForm(request.POST, request.FILES)
    if form.is_valid():
      handle_uploaded_file(request.FILES['file'], request.user)
      return HttpResponseRedirect('/import/')
  else:
    form = UploadFileForm()
  return render(request, 'import.html', dictionary={
      'form': form, 'categories': '[]'
  })
