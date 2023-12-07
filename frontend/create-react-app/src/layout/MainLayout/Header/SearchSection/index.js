import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, ButtonBase, Card, Grid, InputAdornment, OutlinedInput, Popper } from '@mui/material';

// third-party
import PopupState, { bindPopper, bindToggle } from 'material-ui-popup-state';

// project imports
import Transitions from 'ui-component/extended/Transitions';

// assets
import { IconSearch, IconX, IconMicrophone } from '@tabler/icons';
import { shouldForwardProp } from '@mui/system';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import SearchModal from 'ui-component/modal/SearchModal';

// styles
const PopperStyle = styled(Popper, { shouldForwardProp })(({ theme }) => ({
  zIndex: 1100,
  width: '99%',
  top: '-55px !important',
  padding: '0 12px',
  [theme.breakpoints.down('sm')]: {
    padding: '0 10px'
  }
}));

const OutlineInputStyle = styled(OutlinedInput, { shouldForwardProp })(({ theme }) => ({
  width: 434,
  marginLeft: 16,
  paddingLeft: 16,
  paddingRight: 16,
  '& input': {
    background: 'transparent !important',
    paddingLeft: '4px !important'
  },
  [theme.breakpoints.down('lg')]: {
    width: 250
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginLeft: 4,
    background: '#fff'
  }
}));

const HeaderAvatarStyle = styled(Avatar, { shouldForwardProp })(({ theme }) => ({
  ...theme.typography.commonAvatar,
  ...theme.typography.mediumAvatar,
  background: theme.palette.secondary.light,
  color: theme.palette.secondary.dark,
  '&:hover': {
    background: theme.palette.secondary.dark,
    color: theme.palette.secondary.light
  }
}));

// ==============================|| SEARCH INPUT - MOBILE||============================== //

const MobileSearch = ({ value, setValue, popupState, openModal, handleOpenModal, handleCloseModal, listening, transcript }) => {
  const theme = useTheme();

  const navigate = useNavigate();
  const handleButtonClick = (value) => {
    if (value) {
      navigate('/search/' + value);
      navigate(0);
    }
  };

  useEffect(() => {
    setValue(transcript);
  }, [listening]);

  // const {
  //   transcript,
  //   listening,
  //   resetTranscript,
  //   browserSupportsSpeechRecognition
  // } = useSpeechRecognition();

  // if (!browserSupportsSpeechRecognition) {
  //   return <span>Browser does not support speech recognition.</span>;
  // }

  return (
    <>
      <OutlineInputStyle
        id="input-search-header"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Tìm Theo Sách, Tác Giả hoặc Thể Loại"
        // startAdornment={
        //   <InputAdornment position="start">
        //     <IconSearch stroke={1.5} size="1rem" color={theme.palette.grey[500]} />
        //   </InputAdornment>
        // }
        endAdornment={
          <InputAdornment position="end">
            <ButtonBase
              sx={{ borderRadius: '12px' }}
              onClick={() => {
                handleButtonClick(value);
              }}
            >
              <HeaderAvatarStyle variant="rounded">
                <IconSearch stroke={1.5} size="1.3rem" />
              </HeaderAvatarStyle>
            </ButtonBase>
            <Box sx={{ ml: 2 }}>
              <ButtonBase
                sx={{ borderRadius: '12px' }}
                onClick={() => {
                  // handleMicrophone();
                  handleOpenModal();
                }}
              >
                <HeaderAvatarStyle variant="rounded">
                  <IconMicrophone stroke={1.5} size="1.3rem" />
                </HeaderAvatarStyle>
              </ButtonBase>
            </Box>
            <Box sx={{ ml: 2 }}>
              <ButtonBase sx={{ borderRadius: '12px' }}>
                <Avatar
                  variant="rounded"
                  sx={{
                    ...theme.typography.commonAvatar,
                    ...theme.typography.mediumAvatar,
                    background: theme.palette.orange.light,
                    color: theme.palette.orange.dark,
                    '&:hover': {
                      background: theme.palette.orange.dark,
                      color: theme.palette.orange.light
                    }
                  }}
                  {...bindToggle(popupState)}
                >
                  <IconX stroke={1.5} size="1.3rem" />
                </Avatar>
              </ButtonBase>
            </Box>
          </InputAdornment>
        }
        aria-describedby="search-helper-text"
        inputProps={{ 'aria-label': 'weight' }}
      />
      <SearchModal openModal={openModal} handleCloseModal={handleCloseModal} searchValue={value} listening={listening} />
    </>
  );
};

MobileSearch.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  popupState: PopupState
};

// ==============================|| SEARCH INPUT ||============================== //

const SearchSection = () => {
  // Need to fix: value does not retain after re-rendering
  const theme = useTheme();
  const { searchQuery } = useParams();
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(searchQuery);
  }, [searchQuery]);

  const navigate = useNavigate();
  const handleButtonClick = (value) => {
    if (value) {
      navigate('/search/' + value);
      navigate(0);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleButtonClick(value);
    }
  };

  // const {
  //   transcript,
  //   listening,
  //   // resetTranscript,
  //   browserSupportsSpeechRecognition
  // } = useSpeechRecognition();

  // if (!browserSupportsSpeechRecognition) {
  //   windows.alert('Browser does not support speech recognition');
  // }
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
    setValue(transcript);
  }, [listening]);

  // const handleMicrophone = () => {
  //   SpeechRecognition.startListening({ language: 'vi-VN' });
  // };

  return (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <PopupState variant="popper" popupId="demo-popup-popper">
          {(popupState) => (
            <>
              <Box sx={{ ml: 2 }}>
                <ButtonBase
                  sx={{ borderRadius: '12px' }}
                  onClick={() => {
                    handleButtonClick(value);
                  }}
                >
                  <HeaderAvatarStyle variant="rounded" {...bindToggle(popupState)}>
                    <IconSearch stroke={1.5} size="1.2rem" />
                  </HeaderAvatarStyle>
                </ButtonBase>
              </Box>
              <PopperStyle {...bindPopper(popupState)} transition>
                {({ TransitionProps }) => (
                  <>
                    <Transitions type="zoom" {...TransitionProps} sx={{ transformOrigin: 'center left' }}>
                      <Card
                        sx={{
                          background: '#fff',
                          [theme.breakpoints.down('sm')]: {
                            border: 0,
                            boxShadow: 'none'
                          }
                        }}
                      >
                        <Box sx={{ p: 2 }}>
                          <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item xs>
                              <MobileSearch
                                value={value}
                                setValue={setValue}
                                popupState={popupState}
                                openModal={openModal}
                                handleOpenModal={handleOpenModal}
                                handleCloseModal={handleCloseModal}
                                listening={listening}
                                transcript={transcript}
                              />
                            </Grid>
                          </Grid>
                        </Box>
                      </Card>
                    </Transitions>
                  </>
                )}
              </PopperStyle>
            </>
          )}
        </PopupState>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <OutlineInputStyle
          id="input-search-header"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Tìm Theo Sách, Tác Giả hoặc Thể Loại"
          onKeyDown={handleKeyDown}
          // startAdornment={
          //   <InputAdornment position="start">
          //     <IconSearch stroke={1.5} size="1rem" color={theme.palette.grey[500]} />
          //   </InputAdornment>
          // }
          endAdornment={
            <InputAdornment position="end">
              <ButtonBase
                sx={{ borderRadius: '12px', marginRight: '8px' }}
                onClick={() => {
                  handleButtonClick(value);
                }}
              >
                <HeaderAvatarStyle variant="rounded">
                  <IconSearch stroke={1.5} size="1.3rem" />
                </HeaderAvatarStyle>
              </ButtonBase>
              <ButtonBase
                sx={{ borderRadius: '12px' }}
                onClick={() => {
                  // handleMicrophone();
                  handleOpenModal();
                }}
              >
                <HeaderAvatarStyle variant="rounded">
                  <IconMicrophone stroke={1.5} size="1.3rem" />
                </HeaderAvatarStyle>
              </ButtonBase>
            </InputAdornment>
          }
          aria-describedby="search-helper-text"
          inputProps={{ 'aria-label': 'weight' }}
        />
        <SearchModal openModal={openModal} handleCloseModal={handleCloseModal} searchValue={searchValue} listening={listening} />
      </Box>
    </>
  );
};

export default SearchSection;
