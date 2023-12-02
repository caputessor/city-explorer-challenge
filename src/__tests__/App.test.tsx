import { render } from '@testing-library/react';
import Home from '../components/Home';

it('should render Home component', () => {
  const { getByRole } = render(<Home />);

  expect(getByRole('main')).toBeInTheDocument();
});