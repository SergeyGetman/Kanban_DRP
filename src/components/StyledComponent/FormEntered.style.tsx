import { styled, Typography } from '@mui/material';

export const FormEnteredForm = styled(Typography)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gridGap: '10px',
  margin: '22% auto',
  backgroundColor: '#4338388c',

  '& input': {
    width: '50%',
    color: 'black',
  },
}));
