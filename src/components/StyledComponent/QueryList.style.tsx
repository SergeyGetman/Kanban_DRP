import { BorderAll } from '@mui/icons-material';
import { backdropClasses, Box, styled } from '@mui/material';
import { boolean } from 'yup';

export const QueryTableWrapper = styled(Box)(() => ({
  width: '80%',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',

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

  '& th': {
    '@media (max-width: 600px)': {
      '&:nth-of-type(1)': {
        display: 'none',
      },
    },
  },

  '& td': {
    '@media (max-width: 600px)': {
      '&:nth-of-type(1)': {
        display: 'none',
      },
    },
  },
}));
