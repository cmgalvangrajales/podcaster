import { render, screen } from '@config/tests/utils';

import Home from '../index';

const defaultComponent = <Home setIsLoading={() => {}} />;

describe('<Home />', () => {
  test('Podcasts not showing no items found', () => {
    render(defaultComponent);
    const itemsNotFound = screen.queryByText('Items not found');

    expect(itemsNotFound).toBeNull();
  });
});
