import * as React from 'react';
import { Modal } from '@mui/material';
import { Typography, Box, ButtonBase, Avatar } from '@mui/material';
//import {useState} from 'react'
import { IconMicrophone } from '@tabler/icons';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function SearchModal(props) {
  const { openModal, handleCloseModal, searchValue, listening } = props;
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };
  const theme = useTheme();

  // const [openModal, setOpenModal] = useState(false);
  // const handleOpenModal = () => setOpenModal(true);
  // const handleCloseModal = () => setOpenModal(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchValue && !listening) {
      console.log('Search : ' + searchValue);
      handleCloseModal();
      navigate('/search/' + searchValue);
    }
  }, [listening]);

  return (
    <>
      {/*<Button onClick={handleOpenModal}>Open modal</Button>*/}
      <Modal open={openModal} onClose={handleCloseModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" textAlign="center">
            {listening ? 'Listening ...' : ''}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
          <Typography>{searchValue}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <ButtonBase
              sx={{ borderRadius: '300px' }}
              onClick={() => {
                goToSearch();
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
                  height: '20px',
                  width: '20px',
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
        </Box>
      </Modal>
    </>
  );
}
