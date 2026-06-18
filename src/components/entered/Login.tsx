import React from 'react';
import { useAppDispatch } from '@/hooks/redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import FormregisterComponent from '@/components/entered/FormRegisterComponent';
import { use, Suspense } from 'react';

// export function MessageFn({ messagePromise }: string) {
//   const contextMessage = use(messagePromise);
//   return <p>Sending {messagePromise}</p>;
// }

const Login = () => {
  const dispatch = useAppDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <Suspense fallback={<p>⌛Downloading message...</p>}>
      {/*<MessageFn messagePromise="qweqwe" />*/}
      <FormregisterComponent title="Sign In" handleClick={handleLogin} />
    </Suspense>
  );
};

export default Login;
