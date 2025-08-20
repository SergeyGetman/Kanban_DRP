import { Box, styled, Typography } from '@mui/material';
import { CustomStepperEnum } from './enam';

export const HeaderAppStyle = styled(Typography)(({ step }: { step: CustomStepperEnum }) => ({
  margin: '0',
  padding: '0',
  background: !step
    ? 'linear-gradient(#e66465, #9198e5);'
    : 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)',
}));

export const CircularStyle = styled(Box)(() => ({
  color: '#b5a13c',
  height: '100px',
  width: '100%',
  margin: '10px',
  marginTop: '30%',
}));

export const FormStyle = styled(Box)(() => ({
  margin: '10px',
  marginTop: '10px',
  color: '#fff',
}));
