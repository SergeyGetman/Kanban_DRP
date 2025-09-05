import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import { FileProvider } from './store/ContextSaved';
import { BrowserRouter } from 'react-router-dom'; // 👈 Импортируем

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <FileProvider>
        <BrowserRouter basename="/Kanban_DRP">
          <App />
        </BrowserRouter>
      </FileProvider>
    </Provider>
  </React.StrictMode>,
);
