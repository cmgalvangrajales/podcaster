/** @type {import('tailwindcss').Config} */
import { theme } from './src/contexts/ThemeContext/ThemeContext.theme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { ...theme.palette },
    },
  },
  plugins: [],
};
