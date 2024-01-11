import { render, screen } from '@config/tests/utils';

import Home from '../index';

const defaultComponent = <Home setIsLoading={() => {}} />;

describe('<Home />', () => {
  test('Podcasts container exists', () => {
    render(defaultComponent);
    const podcastContainer = screen.getByTestId('podcasts-container');

    expect(podcastContainer).toBeInTheDocument();
  });

  test('Podcasts has image alt text', () => {
    render(defaultComponent);
    const podcastContainer = screen.getByAltText('Podcast image');

    expect(podcastContainer).toBeInTheDocument();
  });

  test('Podcasts filter exists', () => {
    render(defaultComponent);
    const podcastContainer = screen.getByRole('input', { name: 'podcasts-filter' });

    expect(podcastContainer).toBeInTheDocument();
  });
});
