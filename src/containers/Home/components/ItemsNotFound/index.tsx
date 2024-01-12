import { FormattedMessage } from 'react-intl';

import Typography, { Variants } from '@components/commons/Typography';

import message from '../../Home.message';

const ItemsNotFound = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center overflow-hidden h-full">
      <Typography variant={Variants.Base225} style={{ textAlign: 'center' }}>
        <FormattedMessage {...message.notFound} />
      </Typography>
    </div>
  );
};

export default ItemsNotFound;
