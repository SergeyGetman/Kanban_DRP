import './App.css';
import KanbanBoard from './components/KanbanBoard';
import ModalBtsp from './librariesComponent/ModalBTSP';
import { useState } from 'react';
import ButtonElement from './librariesComponent/ButtonElement';
import { useAppSelector } from './hooks/redux';

function App() {
  const mock_text = 'tested_lorem';

  const stateVisble = useAppSelector((state) => state.globalState.statusView);
  console.log('this is STATE_3', stateVisble);

  const [show, setShow] = useState(false);

  console.log('THIS IS SHOW', show);
  console.log('THIS IS state222', stateVisble);

  return (
    <>
      <KanbanBoard />
      {show && <ModalBtsp text={'HELLO BRO'} name={mock_text} />}
      <ButtonElement handleClick={() => setShow((prev) => !prev)} text="open" variant="outlined" />
    </>
  );
}

export default App;
