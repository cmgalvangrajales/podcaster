import { render, screen } from '@config/tests/utils';

import Content from '../index';

const defaultComponent = (
  <Content>
    <div>testing</div>
  </Content>
);

describe('<Header />', () => {
  test('Home button exists', () => {
    render(defaultComponent);
    const temporalText = screen.getByText('testing');

    expect(temporalText).toBeInTheDocument();
  });
});
