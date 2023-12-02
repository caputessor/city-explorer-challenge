import { useEffect, useState } from 'react';
import { getAllCities } from '../api/CityService';
import { City } from '../types/CityTypes';
import CityCard from './CityCard';

const Home = () => {
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    getAllCities()
      .then(response => {
        setCities(response.data);
      })
  }, [])

  return (
    <div role="main">
      <h2 className="text-4xl font-extrabold dark:text-white" role="heading">List of cities</h2>

      {cities && (
        <ul data-testid="cities-list">
          {cities.map((city: City, index: number) => (
            <CityCard city={city} key={index} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Home;