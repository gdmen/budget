from django import forms


class UploadFileForm(forms.Form):
  files  = forms.FileField(
    label="Select files"
  )
