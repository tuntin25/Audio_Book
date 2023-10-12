// material-ui
import { Typography, Box, Container,Grid,/*InputAdornment, TextField,*/ Button, MobileStepper} from '@mui/material';
import {useState} from 'react'
import BookCard from './BookCard.js';
import {Link} from 'react-router-dom';
//import SearchIcon from "@mui/icons-material/Search";
import {autoPlay} from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';

// project imports
// import MainCard from 'ui-component/cards/MainCard';


// ==============================|| SAMPLE PAGE ||============================== //

// const book1 = {
//     id: 1,
//     title: 'Dark Nhan Tam',
//     author: 'Me',
//     description: 'Buy ingredients to prepare dinner',
//     imgURL: process.env.PUBLIC_URL + '/book-images/dac_nhan_tam__dale_carnegie.jpg',
//    };

const books = [{id: 1,
    title: 'Dark Nhan Tam',
    author: 'Me',
    description: 'Buy ingredients to prepare dinner',
    imgURL: process.env.PUBLIC_URL + '/book-images/dac_nhan_tam__dale_carnegie.jpg',
}, {
  id: 1,
    title: 'Dac Nhan Tam',
    author: 'author',
    description: 'Buy ingredients to prepare dinner',
    imgURL: process.env.PUBLIC_URL + '/book-images/dac_nhan_tam__dale_carnegie.jpg'

}
, {
  id: 2,
    title: 'Dac Nhan Tam',
    author: 'author',
    description: 'Buy ingredients to prepare dinner',
    imgURL: process.env.PUBLIC_URL + '/book-images/dac_nhan_tam__dale_carnegie.jpg'

}
, {
  id: 2,
    title: 'Dac Nhan Tam',
    author: 'author',
    description: 'Buy ingredients to prepare dinner',
    imgURL: process.env.PUBLIC_URL + '/book-images/dac_nhan_tam__dale_carnegie.jpg'

}];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const LandingPage = () => {

  // const [searchTerm, setSearchTerm] = useState("");

  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  const [activeStep, setActiveStep] = useState('');
  const maxSteps = books.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  }

  return (
  <>
 {/* <MainCard title="Sample Card">
    <Typography variant="body2">
      Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
      minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in reprehended
      in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui officiate
      descent molls anim id est labours.
    </Typography>
  </MainCard>*/}

    {/*Dummy data*/}
    


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
      {/*<Container maxWidth="md" sx={{ mt: 20, textAlign:"center" }}>
        <TextField
          id="search"
          type="search"
          label="Search"
          value={searchTerm}
          onChange={handleChange}
          sx={{ width: "50vw"}}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Container>*/}
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
      <Grid container justifyContent="center">
        
        {/* books.map((book) => {
          return (
            <Link to={`/book/${book.id}`} style={{textDecoration:'none'}}>
              <BookCard book={book}
            </Link>
          )
        });*/}

        {/*<Grid item>
          <Link to={`/book/${book1.id}`} style={{textDecoration: 'none'}}>
            <BookCard book={book1}/>
          </Link>
        </Grid>
        <Grid item >
          <Link to={`/book/${book1.id}`}>
            <BookCard book={book1}/>
          </Link>
        </Grid>
        <Grid item>
          <BookCard book={book1}></BookCard>
        </Grid>*/}

        <AutoPlaySwipeableViews
          index= {activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >

        {books.map((book, index) => {
          return (
            <Box key={book.title} display="flex" justifyContent="center">
              {Math.abs(activeStep - index) <= 4 ? (
                
              <Grid container justifyContent="center">
                <Grid item xs={4} sm={6} md={4} lg={3}>
                  <Link to={`/book/${book.id}`} style={{textDecoration:'none'}}>
                    <BookCard book={book}></BookCard>
                  </Link>
                </Grid>
              </Grid>
                 
                ) : null}
            </Box>
            )
        })}
        </AutoPlaySwipeableViews> 
        <MobileStepper
          steps={maxSteps} 
          position='static'
          activeStep = {activeStep}
          />
          
        
      </Grid>
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
