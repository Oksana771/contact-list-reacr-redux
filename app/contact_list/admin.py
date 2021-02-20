from django.contrib import admin

from .models import ContactListModel


class ContactListAdmin(admin.ModelAdmin):
    list_display = ('id', "name", "surname", "phone",
                     "status", "email", )
    list_filter = ("name",)
    list_filter = ("surname",)
    list_per_page = 300


admin.site.register(ContactListModel, ContactListAdmin)
