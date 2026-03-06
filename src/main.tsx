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
import './firebase';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const { DATA_KEY_VAL } = MOCK_DATA;
const { API_KEY } = DATA_KEY_VAL;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <FileProvider>
          <BrowserRouter basename="/Kanban_DRP">
            <GoogleOAuthProvider clientId={API_KEY}>
              <App />
            </GoogleOAuthProvider>
          </BrowserRouter>
        </FileProvider>
      </Provider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
