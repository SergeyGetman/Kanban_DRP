import { Box, styled } from '@mui/material';

export const QueryListStyle = styled(Box)(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.background.default,
}));

interface QueryListWrapperProps {
  checked: boolean;
}

export const QueryListWrapper = styled(Box, {
  shouldForwardProp: prop => prop !== 'checked',
})<QueryListWrapperProps>(({ theme, checked }) => ({
  height: '100%',
  backgroundColor: checked
    ? theme.palette.primary.light
    : theme.palette.background.paper,
  color: theme.palette.text.primary,
}));

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
