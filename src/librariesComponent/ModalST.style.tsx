import { Box, styled, Typography } from '@mui/material';
import { CustomStepperEnum } from '../types/enam';

export const HeaderAppStyle = styled(Typography)(({ step }: { step: CustomStepperEnum }) => ({
  margin: '0',
  padding: '0',
  background: !step
    ? 'linear-gradient(#e66465, #9198e5);'
    : 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)',
}));

export const ModalCustomStyleBTNS = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-around',
  width: 'auto',
}));

export const ModalCustomStyle = styled(Box)(({ classes }: string) => ({
  background: classes,
  position: 'absolute',
  width: '50%',
  height: '50%',
  top: '15%',
  left: '25%',
}));
