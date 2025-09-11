import React from 'react';
import { ButtonGroup } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonElement from '@/librariesComponent';
import { useNavigate } from 'react-router-dom';

const NavigateWrapper = () => {
  const navigate = useNavigate();

  const handleClickNavigateAuth = () => {
    navigate('/auth-new-user');
  };
  const handleNavigateForSignUp = () => {
    navigate('/register-new-user');
  };

  const handleAttach = () => {
    navigate('/attach-files');
  };
  return (
    <>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <ButtonElement
          text="auth-new-user"
          variant="contained"
          handleClick={handleClickNavigateAuth}
        />
        <ButtonElement
          text="register-new-user"
          variant="contained"
          handleClick={handleNavigateForSignUp}
        />
        <ButtonElement
          text="attach"
          variant="contained"
          handleClick={handleAttach}
        />
      </ButtonGroup>
    </>
  );
};
export default NavigateWrapper;
