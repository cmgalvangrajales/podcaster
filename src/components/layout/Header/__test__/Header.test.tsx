import { render, screen } from '@config/tests/utils';

import Header from '../index';

const defaultComponent = <Header setIsLoading={() => {}} />;

describe('<Header />', () => {
  test('Home button exists', () => {
    render(defaultComponent);
    const buttonItem = screen.getByText('Podcaster');

    expect(buttonItem).toBeInTheDocument();
  });

  test('Home button click event has href', () => {
    render(defaultComponent);
    const buttonItem = screen.getByRole('link', { name: /podcaster/i });

    expect(buttonItem).toHaveAttribute('href', '/');
  });

  test('Spinner shows up when isLoading', () => {
    render(<Header isLoading setIsLoading={() => {}} />);
    const spinnerItem = screen.getByTestId('spinner');

    expect(spinnerItem).toBeInTheDocument();
  });

  test('Spinner doesnt shows up when isLoading is false', () => {
    render(defaultComponent);
    const spinnerItem = screen.queryByTestId('spinner');

    expect(spinnerItem).not.toBeInTheDocument();
  });
});
