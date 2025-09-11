import React, { useState } from 'react';
import {
  FormEnteredForm,
  FormEnteredFormButton,
} from '@/components/StyledComponent/FormEntered.style';
import ButtonElement from '@/librariesComponent';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { Box } from '@mui/material';

const FormregisterComponent = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            variant="text"
            text={title}
            handleClick={() => handleClick(email, password)}
          />
        </FormEnteredFormButton>
      </FormEnteredForm>
    </>
  );
};

export default FormregisterComponent;
