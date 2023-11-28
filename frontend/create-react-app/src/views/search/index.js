import React, { useEffect } from 'react';
import { Typography, Card, CardContent, CardMedia, Container, Grid,Box } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import {searchBooks} from 'api'


function Search() {

  const [bookList, setBookList] = React.useState([]);
  const { searchQuery } = useParams()

    useEffect(() => {
    searchBooks(searchQuery)
      .then(data => {
        setBookList(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  //console.log(bookList)

  const Book = ({ book }) => (
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
  );
  
  const linkStyle = {
    textDecoration: 'none', // Remove underline
    // Add any other desired styles here
  };

  // if (bookList.length > 0) 
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Kết quả tìm kiếm: {searchQuery}
      </Typography>
      <Grid container spacing={2}>
        {bookList.length > 0 ? bookList.map((book) => (

          <Grid key={book.id} item xs={12} sm={6} md={4} lg={3}>
            
            <Link to={`/book/${book.id}`}style={linkStyle}>
              <Book book={book} />
            </Link>
          </Grid>
        )) : (<Box sx={{display: 'flex',alignItems: 'center', justifyContent:'center', backgroundColor:'blue'}}><Box><Typography textAlign='center'>No book found</Typography></Box></Box>)
        }
      </Grid>
    </Container>
  );
}


export default Search;
