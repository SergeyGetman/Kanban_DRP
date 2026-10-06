import React, { useState, useEffect, use, Suspense } from 'react';
import { useFormStatus } from 'react-dom';
import ButtonElement from '@/librariesComponent';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { useActionState } from 'react';
import {
  FormEnteredForm,
  FormEnteredFormButton,
} from '@/components/StyledComponent/FormEntered.style';
import { SearchInputComponent } from '@/components/SearchInput';
import { tasksApi } from '@/api/taskApi';
import { Box } from '@mui/material';

const taskPromise = tasksApi.getAll();

const GeterDataApiUse = () => {
  const task = use(taskPromise);

  return <div>{task.length} задач (через use + Suspense)</div>;
};

const DataFromApi = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await tasksApi.getAll();
        console.log('RES useEffect:', result);
        setData(result);
      } catch (error) {
        console.error('Ошибка:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? 'Загрузка задач...' : `Загружено задач: ${data.length}`}
    </div>
  );
};

const FormregisterComponent = ({
  title,
  handleClick,
}: {
  title: string;
  handleClick: (email: string, password: string) => void;
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (email) {
      localStorage.setItem('ERW', email);
    }
  }, [email]);

  const loginAction = async (previousState: any, formData: FormData) => {
    console.log('=== loginAction вызван ===');

    const emailSendForm = formData.get('email') as string;
    const passwordSecondForm = formData.get('password') as string;

    console.log('emailSendForm:', emailSendForm);
    console.log('passwordSecondForm:', passwordSecondForm);

    await new Promise(resolve => setTimeout(resolve, 1500));

    return { success: true, message: 'Данные успешно получены!' };
  };

  const [state, formAction] = useActionState(loginAction, {
    success: false,
    message: '',
  });

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

      <DataFromApi />

      <Suspense fallback={<div>Життя таке бентежне...</div>}>
        <GeterDataApiUse />
      </Suspense>
    </>
  );
};

export default FormregisterComponent;
