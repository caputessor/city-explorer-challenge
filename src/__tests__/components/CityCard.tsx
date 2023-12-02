import { render } from '@testing-library/react';
import CityCard from '../../components/CityCard';

const mockCity = {
  title: 'Random city',
  content: 'Random content',
  image_url: 'Random image',
  lat: 'Random latitude',
  long: 'Random longitude'
} 

it('should render content from props', () => {
  const { getByTestId } = render(<CityCard city={mockCity} />);

  const cityTitle = getByTestId('city-title');
  const cityDescription = getByTestId('city-description');
  const cityImage = getByTestId('city-image');

  expect(cityTitle).toHaveTextContent(mockCity.title);
  expect(cityDescription).toHaveTextContent(mockCity.content);
  expect(cityImage).toHaveAttribute('src', mockCity.image_url);

})