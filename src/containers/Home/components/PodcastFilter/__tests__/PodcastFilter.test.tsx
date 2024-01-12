import { render, screen } from '@config/tests/utils';

import Filter from '../index';

const defaultComponent = <Filter filteredPodcasts={[]} handleFilterChange={() => {}} />;

describe('<Filter />', () => {
  test('Podcasts filter exists', async () => {
    render(defaultComponent);
    const podcastContainer = screen.getByPlaceholderText('Filter Podcasts...');

    expect(podcastContainer).toBeInTheDocument();
  });
});
