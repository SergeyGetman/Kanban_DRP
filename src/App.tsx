import style from './index.module.css';
import KanbanBoard from './components/KanbanBoard';
import ModalBtsp from './librariesComponent/ModalBTSP';
import { useState } from 'react';
import ButtonElement from './librariesComponent/ButtonElement';
import { useAppSelector } from './hooks/redux';
import ExampleProgress from './components/Progress';
import MediaCard from './components/CardsForm';

function App() {
  const mock_text = 'tested_lorem';

  const [changeVis, setchangeVis] = useState(true);

  const changeVisiblyStatus = () => {
    setchangeVis(true);
  };

  setTimeout(() => {
    changeVisiblyStatus();
  }, 5000);

  const stateVisble = useAppSelector((state) => state.globalState.statusView);

  const [show, setShow] = useState(false);

  return (
    <>
      {changeVis ? (
        // <div style={{ display: 'block', margin: '44% 44%' }}>
        //   <ExampleProgress />
        // </div>
        ((<ExampleProgress />), (<MediaCard />))
      ) : (
        <>
          <KanbanBoard />
          {/*<ModalBtsp text={'HELLO BRO'} name={mock_text} />*/}
          <ButtonElement handleClick={() => setShow((prev) => !prev)} text="open" variant="outlined" />
        </>
      )}
    </>
  );
}

export default App;
