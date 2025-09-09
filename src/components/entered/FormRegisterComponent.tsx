import { useState } from 'react';
import {
  FormEnteredForm,
  FormEnteredFormButton,
} from '@/components/StyledComponent/FormEntered.style';
import ButtonElement from '@/librariesComponent';
import { useNavigate } from 'react-router-dom';
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

  localStorage.setItem('ERW', email);
  return (
    <>
      <FormEnteredForm>
        <input
          value={email}
          type="email"
          placeholder="enter your email"
          onChange={e => setEmail(e.target.value)}
        />
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
        </FormEnteredFormButton>
      </FormEnteredForm>
    </>
  );
};

export default FormregisterComponent;
