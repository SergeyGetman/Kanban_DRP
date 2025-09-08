import { useState } from 'react';
import { FormEnteredForm } from '@/components/StyledComponent/FormEntered.style';

const FormregisterComponent = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

        <button type="button" onClick={() => handleClick(email, password)}>
          {title}
        </button>
      </FormEnteredForm>
    </>
  );
};

export default FormregisterComponent;
