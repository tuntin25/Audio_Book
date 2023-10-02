from django.shortcuts import render
from rest_framework import generics
from rest_framework import viewsets
from .serializers import BookSerializer
from .models import Book

# Create your views here.

class BookView(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()

class SearchAPIView(generics.ListAPIView):
    serializer_class = BookSerializer

    def get_queryset(self):
        query = self.request.GET.get('query')
        if query:
            # Implement your search logic here (e.g., filtering based on query)
            queryset = Book.objects.filter(title__icontains=query) | Book.objects.filter(author__icontains=query) | Book.objects.filter(genre__icontains=query)
        else:
            queryset = Book.objects.all()
        return queryset