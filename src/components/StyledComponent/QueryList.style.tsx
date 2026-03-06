import { Box, styled } from '@mui/material';
import { BorderAll } from '@mui/icons-material';
import { boolean } from 'yup';

interface QueryTableWrapperProps {
  mobileView: boolean;
}

export const QueryTableWrapper = styled(Box, {
  shouldForwardProp: prop => prop !== 'mobileView',
})<QueryTableWrapperProps>(({ mobileView }) => ({
  width: '80%',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',

  ...(mobileView && {
    width: '100%',
  }),
  '& table': {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#4e4e4eff',
    border: '3px solid #003b32ff',
  },

  '& thead tr': {
    backgroundColor: '#808080ff',
  },

  '& td, & th': {
    border: '2px solid #124120ff',
  },
}));
