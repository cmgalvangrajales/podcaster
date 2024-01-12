import { render, screen } from '@config/tests/utils';

import ComingSoon from '../index';

const defaultComponent = <ComingSoon />;

describe('<ComingSoon />', () => {
  test('should have Coming soon message', () => {
    render(defaultComponent);
    const title = screen.getByText('COMING SOON');
    const viteLogo = screen.getByAltText('Vite logo');
    const reactLogo = screen.getByAltText('React logo');
    const tailwindLogo = screen.getByAltText('Tailwind logo');

    expect(title).toBeInTheDocument();
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
    expect(tailwindLogo).toBeInTheDocument();
  });
});
