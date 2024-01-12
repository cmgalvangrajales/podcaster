import { render, screen } from '@config/tests/utils';

import * as mock from '@services/Podcast/mocks/podcast.json';

import Episode from '../index';

const defaultComponent = <Episode setIsLoading={() => {}} mockedEpisode={mock.episodes[0]} />;

describe('<Episode />', () => {
  test('trackName exists', async () => {
    render(defaultComponent);
    const title = screen.getByTestId('trackname');

    expect(title).toBeInTheDocument();
  });

  test('trackDescription exists', async () => {
    render(defaultComponent);
    const title = screen.getByTestId('trackdescription');

    expect(title).toBeInTheDocument();
  });
});
