import { Box, styled, Typography } from '@mui/material';
import { CustomStepperEnum } from './src/types/enam';
import { keyframes } from '@emotion/react';

export const HeaderAppStyle = styled(Typography)(({ step }: { step: CustomStepperEnum }) => ({
  margin: '0',
  padding: '0',
  background: !step
    ? 'linear-gradient(#e66465, #9198e5);'
    : 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)',
}));

export const CircularStyle = styled(Box)(() => ({
  color: '#b5a13c',
  minHeight: '250px',
  width: '80%',
  margin: '14px 14px',
  marginTop: '1rem%',
  backgroundColor: 'rgba(0,0,0,0.1)',
  borderColor: '2px solid #1976d2',
  borderRadius: '10px',
}));

// 1. Определяем анимацию
const slideInFromLeft = keyframes`
  0% {
    margin-left: 50px;
    opacity: 0;
  }
  50% {
    margin-left: 60px;
    opacity: 1;
  }
  100% {
    margin-left: 50px; 
    opacity: 0.8;
  }
`;

export const FormStyle = styled(Box)(() => ({
  margin: '0 auto',
  marginTop: '20px',
  color: '#786262',
  width: 'auto',

  '& form': {
    marginLeft: '50px',
  },

  '& form input': {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: 'transparent',
    color: '#827a7a',
    fontSize: 'auto',
    fontWeight: 700,
  },
  '& form input:hover': {
    backgroundColor: 'rgba(17,14,14,0.51)',
    cursor: 'pointer',
    color: '#e7e0e0',
    fontSize: 'auto',
    fontWeight: 700,
  },

  '& form #basic-button': {
    marginLeft: '10px',
    animation: `${slideInFromLeft} 3s ease-in-out infinite`,
  },

  '& form input::placeholder': {
    color: '#999',
  },

  '& form input:focus': {
    outline: 'none',
    color: 'white',
    borderColor: '#0c3380',
  },
}));

export const FormStyleAffterUpload = styled(Box)(() => ({
  margin: '0 auto',
  marginTop: '20px',
  color: '#fff',
}));
