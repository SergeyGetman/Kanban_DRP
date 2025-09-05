import MediaCard from './components/CardsForm';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="avtorized" element={<MediaCard />} />
    </Routes>
  );
}

export default App;
