import { render, screen } from '@config/tests/utils';

import NotFound from '../index';

const defaultComponent = <NotFound />;

describe('<NotFound />', () => {
  test('NotFound not found message', () => {
    render(defaultComponent);
    const code = screen.getByText('404');
    const title = screen.getByText('Page not found');

    expect(code).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
