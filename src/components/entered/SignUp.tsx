import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '@/hooks/redux';
import FormregisterComponent from '@/components/entered/FormRegisterComponent';
import Forms from '@/components/Form';

const SignUp = () => {
  const dispatch = useAppDispatch();

  const handleRegister = (email, password) => {
    alert('SIGN_UP');
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('user Register', user);
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <>
      <FormregisterComponent
        title="REGISTER NEW USER"
        handleClick={handleRegister}
      />
    </>
  );
};

export default SignUp;
