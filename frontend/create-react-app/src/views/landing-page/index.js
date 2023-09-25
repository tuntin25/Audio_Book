// material-ui
import { Typography, Box, Container,Grid,InputAdornment, TextField, Button} from '@mui/material';
import {useState} from 'react'
import BookCard from './BookCard.js'
import {Link} from 'react-router-dom'
import SearchIcon from "@mui/icons-material/Search";

// project imports
// import MainCard from 'ui-component/cards/MainCard';


// ==============================|| SAMPLE PAGE ||============================== //

const book1 = {
    id: 1,
    title: 'Dark Nhan Tam',
    author: 'Me',
    description: 'Buy ingredients to prepare dinner',
    coverImage: process.env.PUBLIC_URL + '/book-images/dac_nhan_tam__dale_carnegie.jpg',
   };

const LandingPage = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
      <Container maxWidth="md" sx={{ mt: 20, textAlign:"center" }}>
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
      </Container>
    </Container>  
  </Box>

  <Box sx={{background: 'white', 
  backgroundSize: 'cover', 
  height: "100vh",
  display: "flex",
  alignItems: "center"
  }}>
    <Container>
      <Typography textAlign="center" fontSize="50px" mb="50px">
        About us
      </Typography>
      <Typography textAlign="center">
        We are a non-profit organization with a mission to bring audio books to everyone for free.
      </Typography>
      <Container sx={{justifyContent: "center"}}>
      <Button sx={{mt: "50px", textAlign: "center"}}>
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
      <Typography variant="h1" align="center" mb="50px">Top Books</Typography>
      <Grid container spacing={5} justifyContent="center" sx={{maxHeight: '400px', overflow: 'auto'}}>
        <Grid item >
          <Link to={`/book/${book1.id}`}>
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
        </Grid>
        <Grid item>
          <BookCard book={book1}></BookCard>
        </Grid>
        <Grid item>
          <BookCard book={book1}></BookCard>
        </Grid>
      </Grid>
    </Container>
  </Box>

  <Box sx={{}} component="footer">
    <Container maxWidth="sm">
      <Typography variant="body1" align="center">© 2023 Sachnoi. All rights reserved.</Typography>
    </Container>
  </Box>
  </>
);
}

export default LandingPage;
