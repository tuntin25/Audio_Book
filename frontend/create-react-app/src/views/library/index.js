import React, { useEffect } from 'react';
import { Typography, Card, CardContent, CardMedia, Container, Grid } from '@mui/material';
import axios from "axios";
import { Link } from 'react-router-dom';

function Library() {

  const [bookList, setBookList] = React.useState([]);

  useEffect(() => {
    axios.get("/api/books/")
      .then((res) => setBookList(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(bookList)

  const Book = ({ book }) => (
    <Card>
      <CardMedia
        component="img"
        alt="Book Cover"
        height="500"
        style={{ width: '100%', height: 'auto' }}
        image={process.env.PUBLIC_URL + '/book-images/dac_nhan_tam__dale_carnegie.jpg'}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {book.title}
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
  
  const linkStyle = {
    textDecoration: 'none', // Remove underline
    // Add any other desired styles here
  };

  // if (bookList.length > 0) 
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Trending
      </Typography>
      <Grid container spacing={2}>
        {bookList.map((book) => (

          <Grid key={book.id} item xs={4} sm={6} md={4} lg={3}>
            
            <Link to={`/book/${book.id}`}style={linkStyle}>
              <Book book={book} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}


export default Library;
