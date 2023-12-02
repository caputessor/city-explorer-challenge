import { useEffect, useState } from 'react';
import { getAllCities } from '../api/CityService';
import { City } from '../types/CityTypes';
import CityCard from './CityCard';
import AddCityButton from './AddCity/AddCityButton';
import AddCityForm from './AddCity/AddCityForm';

const Home = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getAllCities()
      .then(response => {
        setCities(response.data);
      })
  }, [])

  const displayForm = (formDisplayed: boolean) => {
    console.log('formDisplayed, ', formDisplayed)
    setShowForm(formDisplayed);
  
  }

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

      <AddCityButton displayForm={displayForm} isFormDisplayed={showForm} />

      {showForm && <AddCityForm />}
    </div>
  )
}

export default Home;