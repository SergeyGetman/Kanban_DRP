import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MediaCardInfoUser from './components/MediaCardInfo';
import * as React from 'react';
import Login from '@/components/entered/Login';
import SignUp from '@/components/entered/SignUp';
import Forms from '@/components/Form';
import NavigateWrapper from '@/components/navigate';

function App() {
  return (
    <Routes>
      <Route element={<NavigateWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="avtorized" element={<MediaCardInfoUser />} />
        <Route path="auth-new-user" element={<Login />} />
        <Route path="register-new-user" element={<SignUp />} />
        <Route path="attach-files" element={<Forms />} />
      </Route>
    </Routes>
  );
}

export default App;
