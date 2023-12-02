import { render } from '@testing-library/react';

import App from '../App';

it('should render App component', () => {
  const { container, getByRole } = render(<App />);

  expect(getByRole('main')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});