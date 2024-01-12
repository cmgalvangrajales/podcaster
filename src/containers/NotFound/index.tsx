import { FormattedMessage } from 'react-intl';

import Typography, { Colors, Variants } from '@components/commons/Typography';

import message from './NotFound.message';

const NotFound = (): JSX.Element => {
  return (
    <div className="overflow-hidden flex flex-1 items-center justify-center flex-col gap-2 h-full">
      <Typography variant={Variants.Base225} style={{ textAlign: 'center' }} color={Colors.Blue400}>
        404
      </Typography>
      <Typography variant={Variants.Base225} style={{ textAlign: 'center' }}>
        <FormattedMessage {...message.title} />
      </Typography>
      <Typography variant={Variants.Base112} style={{ textAlign: 'center' }}>
        <FormattedMessage {...message.description} />
      </Typography>
    </div>
  );
};

export default NotFound;
