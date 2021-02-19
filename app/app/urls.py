from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include("contact_list.urls")),
    
    path('admin/', admin.site.urls),
]
