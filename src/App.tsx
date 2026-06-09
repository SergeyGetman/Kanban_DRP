import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import MediaCardInfoUser from './components/MediaCardInfo';
import * as React from 'react';
import Login from '@/components/entered/Login';
import SignUp from '@/components/entered/SignUp';
import Forms from '@/components/Form';
import NavigateWrapper from '@/components/navigate';
import CursorRipple from '@/components/CursorTrail';
import TestedComponent from '@/components/TestedComponent';
import { useEffect, useState } from 'react';
import QueryList from '@/components/queryClient/QueryList';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { useTheme } from '@/theme/ThemeContext.tsx';

function App() {
  const navigate = useNavigate();
  const { mode, toggleTheme } = useTheme();
  console.log('mode', mode);
  const [switcherForAutorized, setSwitcherForAutorized] = useState(true);

  return (
    <>
      <CssBaseline />
      <Button onClick={toggleTheme}> theme now: {mode} </Button>
      <CursorRipple />
      {switcherForAutorized ? (
        <Routes>
          <Route
            path="/tested"
            element={<TestedComponent text="user-list-query" />}
          />
          <Route path="/query-list" element={<QueryList />} />
        </Routes>
      ) : (
        <Routes>
          <Route element={<NavigateWrapper />}>
            <Route path="/" element={<Home />} />
            <Route path="avtorized" element={<MediaCardInfoUser />} />
            <Route path="auth-new-user" element={<Login />} />
            <Route path="register-new-user" element={<SignUp />} />
            <Route path="attach-files" element={<Forms typeOfForm={true} />} />
            <Route path="tested" element={<div>Нет доступа</div>} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
