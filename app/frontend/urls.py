from django.urls import path
from .views  import index, ContactListDetailView


urlpatterns = [
    path('', index),
    path('search', ContactListDetailView.as_view()),
    path('edit/<int:pk>', ContactListDetailView.as_view()),
    path('delete/<int:pk>',  ContactListDetailView.as_view()),
    path('add-new-contact', ContactListDetailView.as_view()),
]
