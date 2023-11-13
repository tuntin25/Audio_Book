// material-ui
import { Typography, Box, Container,/*Grid,InputAdornment, TextField,*/ Button} from '@mui/material';
import {useState, useEffect} from 'react'
import BookCard from './BookCard.js';
import {Link} from 'react-router-dom';
//import SearchIcon from "@mui/icons-material/Search";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {getAllBooks} from 'api'

// project imports
// import MainCard from 'ui-component/cards/MainCard';


// ==============================|| SAMPLE PAGE ||============================== //



const LandingPage = () => {

const [bookList, setBookList] = useState([]);



  useEffect(() => {
    getAllBooks()
      .then(data => {
        setBookList(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

 const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
  <>
    


  <Box sx={{//background: 'url(https://wallpaperaccess.com/full/3847553.jpg)', 
            backgroundSize:'cover', 
            height: "100vh",
            display: "flex",
            alignItems: "center"
          }}> 
    <Container> 
      <Typography  
      textAlign="center"
      sx={{fontSize: {xs:65, md:85}, color: "#000"}}
      >SACHNOI
      </Typography> 
      <Typography textAlign="center" pt="25" color="black"> 
          Free Audio Books
      </Typography>

    </Container>  
  </Box>

  <Box sx={{background: 'white', 
  backgroundSize: 'cover', 
  height: "100vh",
  display: "flex",
  alignItems: "center"
  }}>
    <Container>
      <Typography textAlign="center" fontSize="8vh" mb="50px">
        About us
      </Typography>
      <Typography textAlign="center" fontSize="4vw">
        We are a non-profit organization with a mission to bring audio books to everyone for free.
      </Typography>
      <Container sx={{textAlign:"center"}}>
      <Button variant="contained" sx={{mt: "50px", textAlign: "center"}}>
        More info
      </Button>
      </Container>
    </Container>
  </Box>

  <Box sx={{display: "flex",
        alignItems: "center",
        height: "100vh",

      }}>
    <Container>
      <Typography variant="h1" textAlign="center" mb="50px" gutterBottom>Top Books</Typography>
      <Box>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={true}
        renderButtonGroupOutside={true}
        centerMode={false}
        removeArrowOnDeviceType={['tablet', 'mobile']}
      >
      {bookList.map((book, index) => {
        return (
          <div className="carouselItem" key={index} style={{overflow: 'hidden'}}>
            <Link to={`/book/${book.id}`} style={{textDecoration: 'none'}}>
              <BookCard book={book}></BookCard>
            </Link>
          </div>)
      })}
      </Carousel>
      </Box>
        
    </Container>
  </Box>

  <Box sx={{}} component="footer">
    <Container maxWidth="sm">
      <Typography variant="body1" align="center">© {new Date().getFullYear()} Sachnoi. All rights reserved.</Typography>
    </Container>
  </Box>
  </>
);
}

export default LandingPage;