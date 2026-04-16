import { ThemeOptions } from '@mui/material/styles';

export const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
    primary: {
      main: '#5c6bc0',
      light: '#76ff03',
    },
    secondary: {
      main: '#e53935',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#555555',
    },
    divider: 'rgba(0,0,0,0.12)',
  },
};
