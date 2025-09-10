import React, { useState } from 'react';
import {
  FormEnteredForm,
  FormEnteredFormButton,
} from '@/components/StyledComponent/FormEntered.style';
import ButtonElement from '@/librariesComponent';
import { useNavigate } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { Box } from '@mui/material';

const FormregisterComponent = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate('/auth-new-user');
  };
  const handleNavigateForSignUp = () => {
    navigate('/register-new-user');
  };

  const handleAttach = () => {
    navigate('/attach-files');
  };

  localStorage.setItem('ERW', email);
  return (
    <>
      <FormEnteredForm>
        <Box sx={{ position: 'absolute', left: '30%', top: '0' }}>
          <EmailOutlinedIcon />
        </Box>

        <input
          value={email}
          type="email"
          placeholder="enter your email"
          onChange={e => setEmail(e.target.value)}
        />
        <Box sx={{ position: 'absolute', left: '30%', top: '32%' }}>
          <LockOpenOutlinedIcon />
        </Box>
        <input
          value={password}
          type="password"
          placeholder="enter your password"
          onChange={e => setPassword(e.target.value)}
        />
        <FormEnteredFormButton>
          <ButtonElement
            variant="outlined"
            text="Sign-UP"
            handleClick={handleNavigateForSignUp}
          />

          <ButtonElement
            variant="outlined"
            text="Sign-In"
            handleClick={handleClickNavigate}
          />
          <ButtonElement
            variant="outlined"
            text="Attach"
            handleClick={handleAttach}
          />
        </FormEnteredFormButton>
      </FormEnteredForm>
    </>
  );
};

export default FormregisterComponent;
