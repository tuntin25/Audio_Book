import React from 'react';
import { useEffect } from 'react';
import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import { purple, red } from '@mui/material/colors';
import { useParams } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import { getBookById } from 'api';

function Book() {
  const [book, setBook] = React.useState([]);
  const { id } = useParams();

  useEffect(() => {
    getBookById(id)
      .then((data) => {
        setBook(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

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

  // const ColorButtonPurple = styled(Button)(({ theme }) => ({
  //   color: theme.palette.getContrastText(purple[500]),
  //   backgroundColor: purple[500],
  //   '&:hover': {
  //     backgroundColor: purple[700],
  //   },
  // }));

  // const ColorButtonRed = styled(Button)(({ theme }) => ({
  //   color: theme.palette.getContrastText(red[500]),
  //   backgroundColor: red[500],
  //   '&:hover': {
  //     backgroundColor: red[700],
  //   },
  // }));

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
            // image={book.coverImage}
            image={book.imgURL}
          />
        </Grid>
        {/* Right side (Book Details) */}
        <Grid item xs={12} md={8}>
          <CardContent>
            {/* Book Title */}
            <Typography variant="h1" component="div">
              {book.title}
            </Typography>
            {/* Book Author */}
            <Typography variant="subtitle1">Tác Giả: {book.author}</Typography>
            {/* Book Genre*/}
            <Typography variant="subtitle1">Thể Loại: {book.genre}</Typography>
            {/* Book Description */}
            <Typography variant="body1">{book.description}</Typography>
            {/* <Stack spacing={1} direction="row">
              <ColorButtonPurple variant="contained">Nghe</ColorButtonPurple>
              <ColorButtonRed variant="contained">Dừng</ColorButtonRed>
            </Stack> */}
            <ReactAudioPlayer
              src={book.audioURL}
              controlsList="nodownload" // Add this line to remove the download button
              // autoPlay // remove Autoplay
              controls
            />
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Book;
