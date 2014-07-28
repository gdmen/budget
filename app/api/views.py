from django.http import HttpResponseRedirect
from django.shortcuts import render
from .forms import UploadFileForm

from .parser import handle_uploaded_file


def ImportFile(request):
  if request.method == 'POST':
    form = UploadFileForm(request.POST, request.FILES)
    if form.is_valid():
      handle_uploaded_file(request.FILES['file'], request.user)
      return HttpResponseRedirect('/success/url/')
  else:
    form = UploadFileForm()
  return render(request, 'import.html', dictionary={'form': form})
