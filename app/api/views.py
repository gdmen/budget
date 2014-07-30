import json
from django.http import HttpResponseRedirect
from django.shortcuts import render
from .forms import UploadFileForm

from .parser import handle_uploaded_file
from .models import Category


def Index(request):
  categories = list(Category.objects.all().values())
  return render(request, 'index.html',
                dictionary={'categories': json.dumps(categories)})


def ImportFile(request):
  if request.method == 'POST':
    form = UploadFileForm(request.POST, request.FILES)
    if form.is_valid():
      handle_uploaded_file(request.FILES['file'], request.user)
      return HttpResponseRedirect('/import/')
  else:
    form = UploadFileForm()
  return render(request, 'import.html', dictionary={'form': form})
