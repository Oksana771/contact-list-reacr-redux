from django.db import models


class ContactListModel(models.Model):
    name = models.CharField(max_length=200)
    surname = models.CharField(max_length=200)
    phone = models.CharField(max_length=100)
    avatar = models.CharField(max_length=100, default='')
    status = models.CharField(max_length=100)
    email = models.EmailField(max_length=254, unique=True)
    gender = models.CharField(max_length=5)

    def __str__(self):
        return self.surname
