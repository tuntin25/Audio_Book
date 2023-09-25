import { Typography, Card, CardMedia, CardContent } from '@mui/material';
const BookCard = ({book}) => {
  return (
    <Card sx={{textDecorationStyle: "none", }}>
      <CardMedia align="center" component="img" height="250"
      src='https://m.media-amazon.com/images/I/61YvLnnYfmL._AC_UF1000,1000_QL80_.jpg' 
      sx={{objectFit: 'contain'}}>
        
        {//<img  src='https://m.media-amazon.com/images/I/61YvLnnYfmL._AC_UF1000,1000_QL80_.jpg' alt="books" height="200vh"/>
      }</CardMedia>
      <CardContent>
        <Typography variant="h5" align="center">{book.title}</Typography>
        <Typography variant="body1" textAlign="center">{book.author}</Typography>
      </CardContent>
    </Card>
    )
}

export default BookCard;