import { createTheme, Theme } from '@mui/material/styles';
import { darkTheme } from './dark';
import { lightTheme } from './light';

export type ThemeMode = 'dark' | 'light';

export const getTheme = (mode: ThemeMode): Theme =>
  createTheme(mode === 'dark' ? darkTheme : lightTheme);