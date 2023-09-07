import React from 'react';
import { Typography, Card, CardContent, CardMedia, Container, Grid} from '@mui/material';

// Define an array of books organized by genre
const booksByGenre = [
  {
    genre: 'Trending',
    books: [
      {
        id: 1,
        name: 'Dark Nhan Tam',
        author: 'Me',
        description: 'Buy ingredients to prepare dinner',
        coverImage: process.env.PUBLIC_URL + '/book-images/dac_nhan_tam__dale_carnegie.jpg',
      },
      {
        id: 2,
        name: 'Dark Nhan Tam 2',
        author: 'Me',
        description: 'Buy ingredients to prepare dinner',
        coverImage: process.env.PUBLIC_URL + '/book-images/dac_nhan_tam__dale_carnegie.jpg',
      },
      {
        id: 3,
        name: 'Dark Nhan Tam 2',
        author: 'Me',
        description: 'Buy ingredients to prepare dinner',
        coverImage: process.env.PUBLIC_URL + '/book-images/dac_nhan_tam__dale_carnegie.jpg',
      },
      {
        id: 4,
        name: 'Dark Nhan Tam 3',
        author: 'Me',
        description: 'Buy ingredients to prepare dinner',
        coverImage: process.env.PUBLIC_URL + '/book-images/dac_nhan_tam__dale_carnegie.jpg',
      },
      {
        id: 5,
        name: 'Dark Nhan Tam 4',
        author: 'Me',
        description: 'Buy ingredients to prepare dinner',
        coverImage: process.env.PUBLIC_URL + '/book-images/dac_nhan_tam__dale_carnegie.jpg',
      },
      // Add more mystery books
    ],
  },
  {
    genre: 'Fantasy',
    books: [
      {
        id: 4,
        name: 'Dark Nhan Tam 4',
        author: 'Me',
        description: 'Buy ingredients to prepare dinner',
        coverImage: process.env.PUBLIC_URL + '/book-images/dac_nhan_tam__dale_carnegie.jpg',
      },
      {
        id: 5,
        name: 'Dark Nhan Tam 5',
        author: 'Me',
        description: 'Buy ingredients to prepare dinner',
        coverImage: process.env.PUBLIC_URL + '/book-images/dac_nhan_tam__dale_carnegie.jpg',
      },
      {
        id: 6,
        name: 'Dark Nhan Tam 6',
        author: 'Me',
        description: 'Buy ingredients to prepare dinner',
        coverImage: process.env.PUBLIC_URL + '/book-images/dac_nhan_tam__dale_carnegie.jpg',
      },
      {
        id: 7,
        name: 'Dark Nhan Tam 7',
        author: 'Me',
        description: 'Buy ingredients to prepare dinner',
        coverImage: process.env.PUBLIC_URL + '/book-images/dac_nhan_tam__dale_carnegie.jpg',
      },
      {
        id: 8,
        name: 'Dark Nhan Tam 8',
        author: 'Me',
        description: 'Buy ingredients to prepare dinner',
        coverImage: process.env.PUBLIC_URL + '/book-images/dac_nhan_tam__dale_carnegie.jpg',
      },
      {
        id: 9,
        name: 'Dark Nhan Tam 9',
        author: 'Me',
        description: 'Buy ingredients to prepare dinner',
        coverImage: process.env.PUBLIC_URL + '/book-images/dac_nhan_tam__dale_carnegie.jpg',
      },
      // Add more fantasy books
    ],
  },
  // Add more genres and books as needed
];

// Dummy Book component (similar to your previous code)
const Book = ({ book }) => (
  <Card>
    <CardMedia
      component="img"
      alt="Book Cover"
      height="500"
      style={{ width: '100%', height: 'auto' }}
      image={book.coverImage}
    />
    <CardContent>
      <Typography variant="h5" component="div">
        {book.name}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Author: {book.author}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {book.description}
      </Typography>
    </CardContent>
  </Card>
);


const Library = () => (
  <Container>
    {booksByGenre.map((genreData) => (
      <div key={genreData.genre}>
        <Typography variant="h4" gutterBottom>
          {genreData.genre}
        </Typography>
        <Grid container spacing={2}>
          {genreData.books.map((book) => (
            <Grid item key={book.id} xs={12} sm={6} md={4} lg={3}>
              <Book book={book} />
            </Grid>
          ))}
        </Grid>
      </div>
    ))}
  </Container>
);

export default Library;
