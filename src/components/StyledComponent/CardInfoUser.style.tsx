import { styled, Typography } from '@mui/material';

export const CardInfoUserStyle = styled(Typography)(() => ({
  position: 'absolute',
  bottom: '0',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

  border: 'none',
}));
