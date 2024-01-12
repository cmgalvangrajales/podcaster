import { render, screen } from '@config/tests/utils';

import * as mock from '@services/Podcasts/mocks/podcasts.json';

import CardContainer from '../index';

const defaultComponent = <CardContainer podcasts={mock.feed.entry} setIsLoading={() => {}} />;

describe('<CardContainer />', () => {
  test('Podcasts card has image alt text', async () => {
    render(defaultComponent);
    const podcastContainer = screen.getByAltText('podcast_image_0');

    expect(podcastContainer).toBeInTheDocument();
  });
});
