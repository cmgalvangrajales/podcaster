import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@src/globalStyle';

import { theme } from './ThemeContext.theme';
import { ThemeProviderInterface } from './ThemeContext.types';

/**
 * Create provider to manage Language context
 *
 * @param { LanguageProviderInterface } props - Properties to inject in context
 *
 * @returns JSX.Element
 */
export const AppThemeProvider = ({ children }: ThemeProviderInterface): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProvider;
