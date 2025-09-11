import { useState } from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import useAuth from '@/hooks/useAuth';
import NavigateWrapper from '@/components/navigate';
import { HomeBlockStyle } from '@/pages/HomeStyled.style';

const Home = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const { token, id, isAuth } = useAuth();

  const localENV = import.meta.env.VITE_API_KEY_FIREBASE;

  const decodeJwt = (token: string) => {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (error) {
      console.error('Ошибка декодирования JWT', error);
      return null;
    }
  };

  const handleSuccess = (credentialResponse: CredentialResponse) => {
    console.log('Успешный вход:', credentialResponse);

    if (credentialResponse.credential) {
      const token = credentialResponse.credential;

      localStorage.setItem('google_token', token);

      const decoded = decodeJwt(token);

      if (decoded) {
        const { name, email, picture, sub } = decoded;

        localStorage.setItem(
          'user',
          JSON.stringify({ name, email, picture, id: sub })
        );
      } else {
        setError('Не удалось расшифровать данные пользователя.');
        return;
      }

      setError(null);
      navigate('/register-new-user');
    } else {
      setError('Отсутствует токен авторизации.');
    }
  };

  const handleError = () => {
    console.error('Ошибка входа через Google');
    setError('Не удалось войти через Google. Попробуйте снова.');
  };

  return (
    <>
      <HomeBlockStyle>
        <Typography>Войдите через Google</Typography>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          useOneTap={false}
          text="signin_with"
          size="large"
          shape="rectangular"
          theme="outline"
        />
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      </HomeBlockStyle>
    </>
  );
};

export default Home;
