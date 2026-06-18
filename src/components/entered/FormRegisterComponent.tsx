import React, {useActionState, useState} from 'react';
import {
  FormEBox,
  FormEnteredForm,
  FormEnteredFormButton,
} from '@/components/StyledComponent/FormEntered.style';
import ButtonElement from '@/librariesComponent';
import { useFormStatus } from 'react-dom';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { Box } from '@mui/material';
import firebase from "firebase/compat";
import auth = firebase.auth;

function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Отправка...' : 'Войти'}
    </button>
  );
}

const FormregisterComponent = ({ title, handleClick }) => {
  const loginAction = async (previousState: any, formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const emailSendForm = formData.get('email');
    const passwordSecondForm = formData.get('password');
    console.log('emailSendForm', emailSendForm);
    console.log('passwordSecondForm', passwordSecondForm);
    return { success: true, message: "Данные успешно получены!" };
  };

  const [state, formAction] = useActionState(loginAction, {
    susses: false,
    message: ""
  })

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
      <FormEBox >


      <form action={loginAction}>
        <input name="email" type="email"  />

        <input name="password" type="password" />
        <SubmitBtn />
        {state.susses && <p style={{backgroundColor: 'white', color: 'black'}}>{state.message}</p>}
      </form>
      </FormEBox>
    </>
  );
};

export default FormregisterComponent;
