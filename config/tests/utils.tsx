/* eslint-disable import/export */

/* eslint-disable react-refresh/only-export-components */

/* eslint-disable import/named */
import { RenderOptions, render } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { LanguageProvider } from '@contexts/LanguageContext';
import { AppThemeProvider } from '@contexts/ThemeContext';

const AllTheProviders = ({ children }) => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppThemeProvider>{children}</AppThemeProvider>
      </BrowserRouter>
    </LanguageProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
