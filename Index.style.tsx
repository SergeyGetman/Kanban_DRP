import { Box, styled, Typography } from '@mui/material';
import { CustomStepperEnum } from './src/types/enam';

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

export const FormStyle = styled(Box)(() => ({
  margin: '0 auto',
  marginTop: '20px',
  color: '#fff',
  width: 'auto',

  '& form': {
    marginLeft: '50px',
  },

  '& form input': {
    padding: '10px',
    borderRadius: '4px',
    border: '3px solid #ccc',
    backgroundColor: '#979c9c',
    color: '#1a1919',
    fontSize: 'auto',
    fontWeight: 700,
  },

  '& form input::placeholder': {
    color: '#999',
  },

  '& form input:focus': {
    outline: 'none',
    borderColor: '#0c3380',
  },
}));

export const FormStyleAffterUpload = styled(Box)(() => ({
  margin: '0 auto',
  marginTop: '20px',
  color: '#fff',
}));
