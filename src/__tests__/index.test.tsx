import { render } from '@testing-library/react';
import App from '../App';

it('should render App component', () => {
  const { getByRole } = render(<App />);

  expect(getByRole('application')).toBeInTheDocument();
});
