import { Box, styled, Typography } from '@mui/material';

export const FormEnteredForm = styled(Typography)(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gridGap: '30px',
  margin: '22% auto',

  '& input': {
    width: '30%',
    padding: '5px',
    fontSize: '15px',
    fontWeight: '700',
    fontFamily: 'cursive',
    borderRadius: '20px',
    color: 'grey',
    boxShadow: '-2px 0px 20px 4px #ce47d2a8',
  },
  '& input:hover': {
    backgroundColor: 'rgb(66 66 85 / 37%)',
    cursor: 'pointer',
  },
}));

export const FormEnteredFormButton = styled(Box)(() => ({
  display: 'flex',

  alignItems: 'center',
  gridGap: '10px',
  margin: '2% auto',

  '&:nth-of-type(1):hover': {
    cursor: 'pointer',
  },
}));

export const FormEBox = styled(Typography)(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gridGap: '30px',
  margin: '12% auto',

  '& input': {

    padding: '5px',
    fontSize: '15px',
    fontWeight: '700',
    fontFamily: 'cursive',
    borderRadius: '20px',
    color: 'grey',
    boxShadow: '-2px 0px 20px 4px #ce47d2a8',
  },
  '& input:hover': {
    backgroundColor: 'rgb(66 66 85 / 37%)',
    cursor: 'pointer',
  },
}));
