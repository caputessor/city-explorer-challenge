import { useEffect, useState } from 'react';
import { getAllCities } from '../api/CityService';

type City = {
  id?: number;
  title: string;
  content: string;
  lat: string;
  long: string;
  image_url: string;
  created_at?: string;
  updated_at?: string;
}

const Home = () => {
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    getAllCities()
      .then(response => {
        setCities(response.data);
      })
  })

  return (
    <div role="main">
      <h1 role="heading">List of cities</h1>
      
      {cities && (
        <ul data-testid="cities-list">
          {cities.map((city: City) => (
            <li>{city.title}<br />{city.content}<br /><img src={city.image_url} alt="city picture" /></li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Home;