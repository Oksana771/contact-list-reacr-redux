from django.shortcuts import render
from django.views.generic.detail import DetailView
from contact_list.models import ContactListModel


def index(request):
    return render(request, 'frontend/index.html')

class ContactListDetailView(DetailView):
    model = ContactListModel
    template_name = 'frontend/index.html'