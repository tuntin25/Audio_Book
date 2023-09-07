import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { useParams } from 'react-router-dom'

function Book() {

  // Dummy data
  const DummyBook = {
    id: 1,
    name: 'Dark Nhan Tam',
    author: 'Me',
    description: 'Buy ingredients to prepare dinner',
    coverImage: process.env.PUBLIC_URL + '/book-images/dac_nhan_tam__dale_carnegie.jpg',
  };

  const { id } = useParams()
  console.log(id)

  // const BootstrapButton = styled(Button)({
  //   boxShadow: 'none',
  //   textTransform: 'none',
  //   fontSize: 16,
  //   padding: '6px 12px',
  //   border: '1px solid',
  //   lineHeight: 1.5,
  //   backgroundColor: '#0063cc',
  //   borderColor: '#0063cc',
  //   fontFamily: [
  //     '-apple-system',
  //     'BlinkMacSystemFont',
  //     '"Segoe UI"',
  //     'Roboto',
  //     '"Helvetica Neue"',
  //     'Arial',
  //     'sans-serif',
  //     '"Apple Color Emoji"',
  //     '"Segoe UI Emoji"',
  //     '"Segoe UI Symbol"',
  //   ].join(','),
  //   '&:hover': {
  //     backgroundColor: '#0069d9',
  //     borderColor: '#0062cc',
  //     boxShadow: 'none',
  //   },
  //   '&:active': {
  //     boxShadow: 'none',
  //     backgroundColor: '#0062cc',
  //     borderColor: '#005cbf',
  //   },
  //   '&:focus': {
  //     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  //   },
  // });

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

  return (
    <Card>
      <Grid container>
        {/* Left side (Cover Image) */}
        <Grid item xs={12} md={4}>
          <CardMedia
            component="img"
            alt="Book Cover"
            height="500" // Set the desired height of the cover image
            style={{ width: '100%', height: 'auto' }}
            image={DummyBook.coverImage}
          />
        </Grid>
        {/* Right side (Book Details) */}
        <Grid item xs={12} md={8}>
          <CardContent>
            {/* Book Title */}
            <Typography variant="h5" component="div">
              {DummyBook.name}
            </Typography>
            {/* Book Author */}
            <Typography variant="subtitle1" color="text.secondary">
              Author: {DummyBook.author}
            </Typography>
            {/* Book Description */}
            <Typography variant="body2" color="text.secondary">
              {DummyBook.description}
            </Typography>
            <Stack spacing={1} direction="row">
              <ColorButton variant="contained">Nghe</ColorButton>
            </Stack>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Book;