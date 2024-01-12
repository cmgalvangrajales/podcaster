import React from 'react';

import { AppThemeInterface } from '@contexts/ThemeContext';

export enum Variants {
  Base225 = 'Base225',
  Base112 = 'Base112',
  Base110 = 'Base110',
  Base108 = 'Base108',
  Base210 = 'Base210',
  Base215 = 'Base215',
}

export enum Colors {
  Gray900 = 'gray900',
  Gray400 = 'gray400',
  Gray500 = 'gray500',
  Blue400 = 'blue400',
  Primary = 'primary',
}

export interface TypographyStylesInterface {
  variant: Variants;
  color: Colors;
  theme?: AppThemeInterface;
}

export interface TypographyInterface {
  children: React.ReactNode;
  variant?: Variants;
  mobileVariant?: Variants;
  color?: Colors;
  tagAs?: React.ElementType;
  style?: React.CSSProperties;
}
