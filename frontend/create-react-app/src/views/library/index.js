import React, { useEffect } from 'react';
import { Typography, Card, CardContent, CardMedia, Container, Grid, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import {getAllBooks} from 'api'


function Library() {

  const [bookList, setBookList] = React.useState([]);

  useEffect(() => {
    getAllBooks()
      .then(data => {
        setBookList(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  //console.log(bookList)

  const Book = ({ book }) => (
    <StyledCard>
    <Card>
      <CardMedia
        component="img"
        alt="Book Cover"
        height="400"
        style={{ width: '100%', objectFit: 'cover'}}
        image={book.imgURL}
      />
      <CardContent style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h3" component="div" noWrap>
          {book.title}
        </Typography>
        <Typography variant="h5" color="text.secondary"noWrap>
           {book.author}
        </Typography>
        {/* <Typography variant="h5" color="text.secondary" noWrap>
          Thể loại: {book.genre}
        </Typography> */}
        {/* <Typography variant="body2" color="text.secondary">
          {book.description}
        </Typography> */}
      </CardContent>
    </Card>
    </StyledCard>
  );
  
  const linkStyle = {
    textDecoration: 'none', // Remove underline
    // Add any other desired styles here
    
  };
  const StyledCard = styled (Card) (() => ({
  transition: 'transform 0.15s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)'
  },
  }));

  // if (bookList.length > 0) 
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Sách Thịnh Hành
      </Typography>
      <Grid container spacing={2}>
        {bookList.map((book) => (

          <Grid key={book.id} item xs={12} sm={6} md={4} lg={3}>
            
            <Link to={`/book/${book.id}`}style={linkStyle}>
              <Book book={book}/>
            </Link>
            
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}


export default Library;
