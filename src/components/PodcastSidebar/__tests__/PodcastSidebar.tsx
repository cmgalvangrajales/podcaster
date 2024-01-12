import { render, screen } from '@config/tests/utils';

import * as mock from '@services/Podcast/mocks/podcast.json';

import PodcastSidebar from '../index';

const defaultComponent = (
  <PodcastSidebar
    image={mock.artworkUrl60}
    title={mock.title}
    author={mock.artistName}
    description={mock.description}
    podcastId={mock.id}
    setIsLoading={() => {}}
  />
);

describe('<PodcastSidebar />', () => {
  test('PodcastSidebar exists', async () => {
    render(defaultComponent);
    const title = screen.getByText(mock.title);
    const description = screen.getByText(mock.title);
    const author = screen.getByText(mock.title);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(author).toBeInTheDocument();
  });
});
