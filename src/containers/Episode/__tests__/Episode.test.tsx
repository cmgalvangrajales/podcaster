import { render, screen } from '@config/tests/utils';

import Episode from '../index';

const defaultComponent = <Episode setIsLoading={() => {}} useMock />;

describe('<Episode />', () => {
  afterAll(async () => {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));
  });

  test('trackName exists', async () => {
    render(defaultComponent);
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));
    const title = screen.getByTestId('trackname');

    expect(title).toBeInTheDocument();
  });

  test('trackDescription exists', async () => {
    render(defaultComponent);
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));
    const title = screen.getByTestId('trackdescription');

    expect(title).toBeInTheDocument();
  });
});
