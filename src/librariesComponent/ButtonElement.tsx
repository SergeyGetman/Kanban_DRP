import React, { FC } from 'react';
import { Button } from '@mui/material';
import { IButtonPr } from '../types';

export const ButtonElement: FC<IButtonPr> = ({ text, handleClick, variant }) => {
  return (
    <>
      <Button variant={variant} onClick={handleClick}>
        {text}
      </Button>
    </>
  );
};

export default ButtonElement;
