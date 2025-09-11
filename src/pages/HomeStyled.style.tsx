import { Box, styled } from '@mui/material';

export const HomeBlockStyle = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#163946d6',
  height: '200px',

  alignItems: 'center',
  gridGap: '10px',
  margin: '2% auto',

  '&:nth-of-type(1):hover': {
    cursor: 'pointer',
  },
}));
