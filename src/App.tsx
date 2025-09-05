import KanbanBoard from './components/KanbanBoard';

import { useState } from 'react';

import { useAppSelector } from './hooks/redux';
import ExampleProgress from './components/Progress';
import MediaCard from './components/CardsForm';
import { Box } from '@mui/material';
import Played from './components/Played';

function App() {
  const [changeVis, setchangeVis] = useState(true);

  const changeVisiblyStatus = () => {
    setchangeVis(true);
  };

  setTimeout(() => {
    changeVisiblyStatus();
  }, 5000);

  const stateVisble = useAppSelector((state) => state.globalState.statusView);

  return (
    <>
      <Box style={{ display: 'block', margin: '30px 30px' }}>
        <ExampleProgress />
      </Box>

      {changeVis && <MediaCard />}
    </>
  );
}

export default App;
