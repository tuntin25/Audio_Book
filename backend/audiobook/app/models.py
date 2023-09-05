from django.db import models

# Create your models here.

class Book(models.Model):
    title = models.CharField(max_length=120)
    author = models.CharField(max_length=120)
    publication_date = models.DateField
    isbn = models.CharField(max_length=120)
    genre = models.TextField()
    description = models.TextField()
    audio = models.TextField()


    def _str_(self):
        return self.title
