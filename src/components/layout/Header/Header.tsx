import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import message from './Header.message';
import { HeaderInterface } from './Header.types';
import SpinnerBall from './components/BallSpinner';

const Header = ({ isLoading = false, setIsLoading }: HeaderInterface): JSX.Element => {
  return (
    <div className="flex justify-between p-3 shadow-md items-center">
      <Link to={'/'} className="text-primary" onClick={() => setIsLoading(true)}>
        <FormattedMessage {...message.title} />
      </Link>
      {isLoading ? <SpinnerBall /> : null}
    </div>
  );
};

export default Header;
