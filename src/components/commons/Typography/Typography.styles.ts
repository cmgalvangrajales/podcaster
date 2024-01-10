import styled from '@emotion/styled';

import { TypographyStylesInterface } from './Typography.types';

const Base = styled.div<TypographyStylesInterface>(({ theme, variant, color }) => {
  return (
    variant &&
    color && {
      fontSize: theme.typography[variant].fontSize,
      fontFamily: theme.typography[variant].fontFamily,
      lineHeight: theme.typography[variant].lineHeight,
      letterSpacing: theme.typography[variant].letterSpacing,
      fontWeight: theme.typography[variant].fontWeight,
      color: `${theme.palette[color]} !important`,
    }
  );
});

export default Base;
