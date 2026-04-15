import { ThemeOptions } from '@mui/material/styles';

export const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    background: {
      default: '#0d0d0d',
      paper: '#595c64',
    },
    primary: {
      main: '#9198e5',
    },
    secondary: {
      main: '#e66465',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
    divider: 'rgba(255,255,255,0.12)',
  },
};