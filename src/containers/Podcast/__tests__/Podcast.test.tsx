import { render, screen } from '@config/tests/utils';

import * as mock from '@services/Podcast/mocks/podcast.json';

import Podcast from '../index';

const defaultComponent = <Podcast setIsLoading={() => {}} />;

describe('<Podcast />', () => {
  test('Text Episodes exists', async () => {
    render(defaultComponent);
    const title = screen.getByText(`Episodes: ${mock.episodes.length}`);

    expect(title).toBeInTheDocument();
  });
});
