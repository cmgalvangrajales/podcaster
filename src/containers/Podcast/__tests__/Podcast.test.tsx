import { render, screen } from '@config/tests/utils';

import Podcast from '../index';

describe('<Podcast />', () => {
  afterAll(async () => {
    // avoid jest open handle error
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));
  });

  test('Text Episodes exists', async () => {
    render(<Podcast setIsLoading={() => {}} useMock />);

    await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));

    const title = screen.getByTestId('episodesTitle');

    expect(title).toBeInTheDocument();
  });
});
