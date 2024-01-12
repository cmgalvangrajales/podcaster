import { render, screen } from '@config/tests/utils';

import ItemsNotFound from '../index';

const defaultComponent = <ItemsNotFound />;

describe('<ItemsNotFound />', () => {
  test('ItemsNotFound shows empty message', () => {
    render(defaultComponent);
    const podcastContainer = screen.getByText('Items not found');

    expect(podcastContainer).toBeInTheDocument();
  });
});
