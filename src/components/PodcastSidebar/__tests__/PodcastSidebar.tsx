import { render, screen } from '@config/tests/utils';

import PodcastSidebar from '../index';

describe('<PodcastSidebar />', () => {
  afterAll(async () => {
    // avoid jest open handle error
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));
  });

  test('PodcastSidebar exists', async () => {
    render(<PodcastSidebar setIsLoading={() => {}} podcastIdTest={'1724974482'} />);
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));
    const description = screen.getByText('Description:');

    expect(description).toBeInTheDocument();
  });
});
