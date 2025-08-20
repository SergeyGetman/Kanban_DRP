import './App.css';
import KanbanBoard from './components/KanbanBoard';
import ModalBtsp from './librariesComponent/ModalBTSP';

function App() {
  const mock_text = 'tested_lorem';

  return (
    <>
      <KanbanBoard />
      {true && <ModalBtsp text={'HELLO BRO'} name={mock_text} />}
    </>
  );
}

export default App;
