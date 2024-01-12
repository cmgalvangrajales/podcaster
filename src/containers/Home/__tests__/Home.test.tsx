import { render, screen } from '@config/tests/utils';

import Home from '../index';

const defaultComponent = <Home setIsLoading={() => {}} />;

describe('<Home />', () => {
  test('Podcasts shows empty message', () => {
    render(defaultComponent);
    const podcastContainer = screen.getByText('Items not found');

    expect(podcastContainer).toBeInTheDocument();
  });
});
