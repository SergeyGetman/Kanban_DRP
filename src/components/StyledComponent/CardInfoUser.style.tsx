import { styled, Typography } from '@mui/material';

export const CardInfoUserStyle = styled(Typography)(() => ({
  position: 'absolute',
  top: '20%',
  left: '15%',
  transform: 'translate(-50%, -50%)',

  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

  border: '1px solid black',
}));
