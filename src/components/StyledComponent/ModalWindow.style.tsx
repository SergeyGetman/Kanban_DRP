import { Box, styled, Typography } from '@mui/material';

export const WindowModalStyle = styled(Typography)(( ) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  height: '50vh',
  width: '100%',
  backgroundImage: 'url(https://i.pinimg.com/originals/24/ae/3a/24ae3a446a327998d404729123ea4be0.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

  border: '3px solid black',
}));

export const WindowForButtonStyle = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  margin: '20px',
  padding: '10px',

  '&:first-of-type': {
    marginLeft: '20px',
    backgroundColor: '#20bc20',
  },
}));
