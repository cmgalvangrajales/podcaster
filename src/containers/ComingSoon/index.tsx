/* eslint-disable react/jsx-no-target-blank */
import { FormattedMessage } from 'react-intl';

import reactLogo from '@assets/react.svg';
import tailwindLogo from '@assets/tailwind.svg';

import Typography, { Variants } from '@components/commons/Typography';

import message from './ComingSoon.message';
import viteLogo from '/vite.svg';

const ComingSoon = () => {
  return (
    <div className="bg-gray-300 h-screen overflow-hidden flex items-center justify-center flex-col gap-5">
      <Typography variant={Variants.Base225} style={{ textAlign: 'center' }}>
        <FormattedMessage {...message.title} />
      </Typography>
      <div className="flex flex-row items-center gap-x-3">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        +
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
        +
        <a href="https://tailwindcss.com/" target="_blank">
          <img src={tailwindLogo} className="logo" alt="Tailwind logo" />
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;
