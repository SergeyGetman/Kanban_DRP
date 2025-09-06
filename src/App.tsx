import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MediaCardInfoUser from './components/MediaCardInfo';
import * as React from 'react';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="avtorized" element={<MediaCardInfoUser />} />
    </Routes>
  );
}

export default App;
