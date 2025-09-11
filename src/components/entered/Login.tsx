import React from 'react';
import { useAppDispatch } from '@/hooks/redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import FormregisterComponent from '@/components/entered/FormRegisterComponent';

const Login = () => {
  const dispatch = useAppDispatch();

  const handleLogin = (email, password) => {
    alert('qweqwe');
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div>
      <FormregisterComponent title="Sign In" handleClick={handleLogin} />
    </div>
  );
};

export default Login;
