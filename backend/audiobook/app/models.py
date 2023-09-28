from django.db import models

# Create your models here.

class Book(models.Model):
    title = models.CharField(max_length=120)
    author = models.CharField(max_length=120)
    genre = models.CharField(max_length=120)
    description = models.TextField()
    imgURL = models.TextField(default="")
    audioURL = models.TextField(default="")

    def _str_(self):
        return self.title
