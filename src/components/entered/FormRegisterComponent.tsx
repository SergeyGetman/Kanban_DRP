import React, {Suspense, use, useActionState, useEffect, useState} from 'react';
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
import {IApiTask, tasksApi} from "@/api/taskApi";

function SubmitBtn() {
  const { pending, action, data, method } = useFormStatus();
  console.log("this is pending", pending)
  console.log("this is action", action)
  console.log("this is data", data)
  console.log("this is method", method)
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Отправка...' : 'Войти'}
    </button>
  );
}
const taskPromise = tasksApi.getAll();

const GeterDataApiUse = () => {

  const task = use(taskPromise);

  console.log("*****", task)

  return <div>{task.length} задач</div>;

}



export const DataFromApi = () => {
  const [data, setData] = useState<IApiTask[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await tasksApi.getAll();
        console.log("RES", result);
        setData(result);
      } catch (error) {
        console.error("Ошибка:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
}

const FormregisterComponent = ({ title, handleClick }) => {
  const loginAction = async (previousState: any, formData: FormData) => {
    console.log('=== loginAction вызван ===');
    console.log('previousState:', previousState);

    const emailSendForm = formData.get('email');
    const passwordSecondForm = formData.get('password');

    console.log('emailSendForm:', emailSendForm);
    console.log('passwordSecondForm:', passwordSecondForm);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    return { success: true, message: "Данные успешно получены!" };
  };

  const [state, formAction] = useActionState(loginAction, {
    success: false,
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
      <form action={formAction}>
        <input name="email" type="email"  required />
d
        <input name="password" type="password" minlength={5} />
        <SubmitBtn />
        {state.success &&( <p style={{backgroundColor: 'white', color: 'black'}}>{state.message}</p>)}
      </form>
      </FormEBox>
      <h2>Задачи </h2>
      <DataFromApi />

      <Suspense fallback={<div>Життя таке бентежне</div>}>
        <GeterDataApiUse />
      </Suspense>
    </>
  );
};

export default FormregisterComponent;
