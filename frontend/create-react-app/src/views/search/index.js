import React, { useEffect } from 'react';
import { Typography, Card, CardContent, CardMedia, Container, Grid } from '@mui/material';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';


function Search() {

  const [bookList, setBookList] = React.useState([]);
  const { searchQuery } = useParams()

  useEffect(() => {
    axios.get("/api/search/?query="+searchQuery)
      .then((res) => setBookList(res.data))
      .catch((err) => console.log(err));
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
        Sách Thịnh Hành
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


export default Search;
