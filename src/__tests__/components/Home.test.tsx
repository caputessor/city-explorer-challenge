import { render } from '@testing-library/react';
import Home from '../../components/Home';

it('should display a title', () => {
  const { getByRole } = render(<Home />);
  const homeTitle = getByRole('heading');

  expect(homeTitle).toBeInTheDocument();
  expect(homeTitle).toHaveTextContent(/list of cities/i);
})

it('should display the list of cities from API', () => {
  const { getByTestId } = render(<Home />);
 
  const listOfCities = getByTestId('cities-list');
  expect(listOfCities).toBeInTheDocument();
})
