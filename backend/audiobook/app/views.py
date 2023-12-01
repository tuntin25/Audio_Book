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
            # queryset = Book.objects.filter(title__icontains=query) | Book.objects.filter(author__icontains=query) | Book.objects.filter(genre__icontains=query)
            queryset = Book.objects.raw(
                """
                    SELECT *,
                    MATCH (title) AGAINST (%s) AS rel_title,
                    MATCH (author) AGAINST (%s) AS rel_author,
                    MATCH (genre) AGAINST (%s) AS rel_genre,
                    MATCH (description) AGAINST (%s) AS rel_description
                    FROM app_book
                    WHERE MATCH(title, author, genre, description) AGAINST (%s IN BOOLEAN MODE)
                    ORDER BY (rel_title*10) + (rel_author*3) + (rel_genre*3) + (rel_description) DESC
                """
                , [query, query, query, query, query]
            )
        else:
            queryset = Book.objects.all()
        return queryset