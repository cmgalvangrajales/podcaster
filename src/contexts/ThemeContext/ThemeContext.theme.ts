import { AppThemeInterface } from './ThemeContext.types';

export const theme: AppThemeInterface = {
  breakPointSize: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tabletS: '768px',
    tabletM: '769px',
    laptopS: '848px',
    laptopLG: '992px',
    laptopM: '1024px',
    laptopML: '1100px',
    laptopXL: '1200px',
    laptopL: '1440px',
    desktop: '2560px',
  },
  mediaQueries: {
    mobileS: '(min-width: 320px)',
    mobileM: '(min-width: 375px)',
    mobileL: '(min-width: 425px)',
    tabletS: '(min-width: 768px)',
    tabletM: '(min-width: 769px)',
    laptopS: '(min-width: 848px)',
    laptopLG: '(min-width: 992px)',
    laptopM: '(min-width: 1024px)',
    laptopL: '(min-width: 1440px)',
    desktop: '(min-width: 2560px)',
  },
  palette: {
    gray900: '#111827',
    primary: '#4b8ec7',
    blue400: '#60a5fa',
  },
  typography: {
    Base225: {
      fontFamily: 'Source Sans Pro Bold',
      fontSize: '2.25rem',
      lineHeight: '2.5rem',
      letterSpacing: 'normal',
      fontWeight: '600',
    },
    Base112: {
      fontFamily: 'Source Sans Pro Bold',
      fontSize: '1.2rem',
      lineHeight: '1,5rem',
      letterSpacing: 'normal',
      fontWeight: '400',
    },
  },
  button: {},
};
