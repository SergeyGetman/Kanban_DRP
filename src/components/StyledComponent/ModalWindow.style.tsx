import { Box, styled, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

const slideInFromL = keyframes`
  0% {
    top: 5%
   
  }
  50% {
    top: 55%;
 
  }
  100% {
    top: 70%
   
  }
`;

export const WindowModalStyle = styled(Typography)(() => ({
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

  border: '1px solid black',
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

interface HandlerScrollProps {
  stateMove: boolean;
}

export const HandlerScroll = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'stateMove',
})<HandlerScrollProps>(({ stateMove }) => ({
  position: 'absolute',
  top: stateMove ? '35%' : '37%',
  left: '50%',
  display: !stateMove ? 'block' : 'none',
  transform: 'translate(-50%, -50%)',
  margin: '20px',
  padding: '10px',
}));

export const FormLayoutCustom = styled(Box)((stateMove: boolean) => ({
  margin: '20px',
  padding: '10px',
  animation: stateMove ? `${slideInFromL} 5s ease-in-out  ` : 'none',
  '&:first-of-type': {
    position: 'absolute',
    top: '0px',
  },
}));
