import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MediaCardInfoUser from './components/MediaCardInfo';
import * as React from 'react';
import FormregisterComponent from './components/FormRegisterComponent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="avtorized" element={<MediaCardInfoUser />} />
      <Route path="auth-new-user" element={<FormregisterComponent />} />
    </Routes>
  );
}

export default App;
