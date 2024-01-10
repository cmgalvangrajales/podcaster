import React from 'react';

import { AppThemeInterface } from '@contexts/ThemeContext';

export enum Variants {
  Base225 = 'Base225',
}

export enum Colors {
  Gray900 = 'gray900',
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
