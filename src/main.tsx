import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import { FileProvider } from './store/ContextSaved';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { MOCK_DATA } from './mock/data';

const { DATA_KEY_VAL } = MOCK_DATA;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <FileProvider>
        <BrowserRouter basename="/Kanban_DRP">
          <GoogleOAuthProvider clientId={DATA_KEY_VAL.API_KEY}>
            <App />
          </GoogleOAuthProvider>
        </BrowserRouter>
      </FileProvider>
    </Provider>
  </React.StrictMode>,
);
