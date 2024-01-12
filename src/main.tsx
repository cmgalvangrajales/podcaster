import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental';
import { persistQueryClient } from 'react-query/persistQueryClient-experimental';
import { BrowserRouter } from 'react-router-dom';

import { LanguageProvider } from '@contexts/LanguageContext';
import { AppThemeProvider } from '@contexts/ThemeContext';

import App from '@pages/App';

const container = document.getElementById('root');
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const localStoragePersistor = createWebStoragePersistor({ storage: window.localStorage });

persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
});

ReactDOM.createRoot(container!).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <AppThemeProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </AppThemeProvider>
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>,
);
