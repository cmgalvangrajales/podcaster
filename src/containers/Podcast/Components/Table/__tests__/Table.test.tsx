import { render, screen } from '@config/tests/utils';

import * as mock from '@services/Podcast/mocks/podcast.json';

import Table from '../index';

const defaultComponent = <Table episodes={mock.episodes} podcastId={mock.id} />;

describe('<Table />', () => {
  test('Episodes table exists', async () => {
    render(defaultComponent);
    const table = screen.getByTestId('episodes');

    expect(table).toBeInTheDocument();
  });
});
