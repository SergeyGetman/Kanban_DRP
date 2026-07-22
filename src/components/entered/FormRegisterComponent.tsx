import React, { useState, useEffect, use, Suspense } from 'react';
// useFormStatus импортируется из react-dom, а не через (React as any)
import { useFormStatus } from 'react-dom';
// В React 18 это useFormState, в React 19 переименовали в useActionState.
// Используй то, что поддерживает твоя версия React (здесь useActionState для новизны)
import ButtonElement from '@/librariesComponent';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { useActionState } from 'react';
import {
  FormEBox,
  FormEnteredForm,
  FormEnteredFormButton,
} from '@/components/StyledComponent/FormEntered.style';
import { SearchInputComponent } from '@/components/SearchInput';
import { tasksApi } from '@/api/taskApi';
import { Box } from '@mui/material';

// Импортируй свои компоненты и API здесь:
// import { tasksApi } from './api';
// import { FormEnteredForm, FormEBox, ... } from './components';
// import { SearchInputComponent } from './SearchInputComponent';

// ✅ 1. Промис объявлен ОДИН раз снаружи компонента
const taskPromise = tasksApi.getAll();

// ✅ 2. Компонент кнопки (чистый и правильный)
function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Отправка...' : 'Войти'}
    </button>
  );
}

// ✅ 3. Компонент с use() и Suspense
const GeterDataApiUse = () => {
  const task = use(taskPromise);
  return <div>{task.length} задач (через use + Suspense)</div>;
};

// ✅ 4. Компонент с классическим useEffect
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

// ✅ 5. Основной компонент
const FormregisterComponent = ({
  title,
  handleClick,
}: {
  title: string;
  handleClick: (email: string, password: string) => void;
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // localStorage безопасно вызывается только внутри useEffect
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

      <FormEBox>
        <form action={formAction}>
          <input name="email" type="email" required />
          <input name="password" type="password" minLength={5} required />
          <SubmitBtn />

          {state.success && (
            <div
              style={{
                backgroundColor: 'white',
                color: 'black',
                marginTop: '10px',
              }}
            >
              {state.message}
            </div>
          )}
        </form>
      </FormEBox>

      <h2>Задачи (useEffect)</h2>
      <DataFromApi />

      <h2>Задачи (Suspense + use)</h2>
      <Suspense fallback={<div>Життя таке бентежне...</div>}>
        <GeterDataApiUse />
      </Suspense>

    </>
  );
};

export default FormregisterComponent;
