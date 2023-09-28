from django.contrib import admin
from .models import Book

# Register your models here.
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'description', 'genre', 'imgURL', 'audioURL')

# Register your models here.

admin.site.register(Book, BookAdmin)