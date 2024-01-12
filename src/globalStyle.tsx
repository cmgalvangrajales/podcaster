import { Global, css } from '@emotion/react';

const globalStyle = () => (
  <Global
    styles={css`
      body: {
        padding: 0;
        margin: 0;
        font-family:
          -apple-system,
          Segoe UI,
          Roboto,
          Oxygen,
          Ubuntu,
          Cantarell,
          Fira Sans,
          Droid Sans,
          Helvetica Neue,
          sans-serif;

        div: {
          color: #3e3e3e;
        }
      }
    `}
  />
);

export default globalStyle;
