import { Typography, Card, CardMedia, CardContent } from '@mui/material';
const BookCard = ({book}) => {

  // const StyledCard = styled (Card) (() => ({
  // transition: 'transform 0.15s ease-in-out',
  // '&:hover': {
  //   transform: 'scale(1.01)'
  // },
  // }));
  return (
    // <Card sx={{textDecorationStyle: "none", }}>
    //   <CardMedia align="center" component="img" height="250px"
    //   src='https://m.media-amazon.com/images/I/61YvLnnYfmL._AC_UF1000,1000_QL80_.jpg' 
    //   sx={{objectFit: 'contain'}}>
        
    //     {//<img  src='https://m.media-amazon.com/images/I/61YvLnnYfmL._AC_UF1000,1000_QL80_.jpg' alt="books" height="200vh"/>
    //   }</CardMedia>
    //   <CardContent>
    //     <Typography variant="h5" align="center">{book.title}</Typography>
    //     <Typography variant="body1" textAlign="center">{book.author}</Typography>
    //   </CardContent>
    // </Card>


      <Card style={{width: 'auto', height:'auto', margin: 8}}>
        <CardMedia
          component="img"
          alt="Book Cover"
          
          style={{ width: '100%',height:'auto', objectFit:'cover'}}
          image={book.imgURL}
        />
        <CardContent style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h3" component="div" noWrap>
            {book.title}
          </Typography>
          <Typography variant="h5" color="text.secondary" noWrap>
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
    )
}

export default BookCard;