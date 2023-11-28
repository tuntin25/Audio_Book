// material-ui
import { Typography, Box, Container, ButtonBase, Avatar, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import BookCard from './BookCard.js';
import { Link } from 'react-router-dom';
//import SearchIcon from "@mui/icons-material/Search";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getAllBooks } from 'api';
import { IconMicrophone } from '@tabler/icons';
import { useTheme } from '@mui/material/styles';
import SearchModal from 'ui-component/modal/SearchModal';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// project imports
//import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const LandingPage = () => {
  const [bookList, setBookList] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
    SpeechRecognition.startListening({ language: 'vi-VN' });
    console.log('modal opened');
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    SpeechRecognition.stopListening();
    console.log('modal closed');
  };

  // const [show, setShow] = useState(false);
  // const handleShow = () => setShow(true);

  const [searchValue, setSearchValue] = useState('');
  const { listening, transcript } = useSpeechRecognition();

  useEffect(() => {
    setSearchValue(transcript);
    console.log(transcript);
  }, [transcript]);

  useEffect(() => {
    getAllBooks()
      .then((data) => {
        setBookList(data);
      })
      .catch((error) => {
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
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const MicSearchIcon = () => {
    const theme = useTheme();

    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ButtonBase
          sx={{ borderRadius: '300px' }}
          onClick={() => {
            handleOpenModal();
          }}
        >
          <Avatar
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: theme.palette.secondary.dark,
              color: theme.palette.secondary.light,
              '&:hover': {
                background: theme.palette.secondary.light,
                color: theme.palette.secondary.dark
              },
              height: '25vh',
              width: '25vh',
              borderRadius: '50%'
            }}
            // onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            {/* <HeaderAvatarStyle variant="rounded" {...bindToggle(popupState)}> */}
            <IconMicrophone stroke={1.5} size="40vw" />
            {/* </HeaderAvatarStyle> */}
          </Avatar>
        </ButtonBase>
      </Box>
    );
  };

  return (
    <>
      <Box
        sx={{
          //background: 'url(https://wallpaperaccess.com/full/3847553.jpg)',
          backgroundSize: 'cover',
          height: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container>
          <Typography textAlign="center" sx={{ fontSize: { xs: 65, md: 85 }, color: '#000' }}>
            SACHNOI
          </Typography>
          <Typography textAlign="center" mt="25px" mb="50px" color="black">
            Free Audio Books
          </Typography>
          <MicSearchIcon />

          <SearchModal openModal={openModal} handleCloseModal={handleCloseModal} searchValue={searchValue} listening={listening} />
        </Container>
      </Box>

      <Box sx={{ background: 'white', backgroundSize: 'cover', height: '100vh', display: 'flex', alignItems: 'center' }}>
        <Container>
          <Typography textAlign="center" fontSize="8vh" mb="50px">
            About us
          </Typography>
          <Typography textAlign="center" fontSize="4vw">
            We are a non-profit organization with a mission to bring audio books to everyone for free.
          </Typography>
          <Container sx={{ textAlign: 'center' }}>
            <Button variant="contained" sx={{ mt: '50px', textAlign: 'center' }}>
              More info
            </Button>
          </Container>
        </Container>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
        <Container>
          <Typography variant="h1" textAlign="center" mb="50px" gutterBottom>
            Top Books
          </Typography>
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
                  <div className="carouselItem" key={index} style={{ overflow: 'hidden' }}>
                    <Link to={`/book/${book.id}`} style={{ textDecoration: 'none' }}>
                      <BookCard book={book}></BookCard>
                    </Link>
                  </div>
                );
              })}
            </Carousel>
          </Box>
        </Container>
      </Box>

      <Box sx={{}} component="footer">
        <Container maxWidth="sm">
          <Typography variant="body1" align="center">
            © {new Date().getFullYear()} Sachnoi. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default LandingPage;
