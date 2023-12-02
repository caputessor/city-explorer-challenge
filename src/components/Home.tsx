import { useEffect, useState } from 'react';
import { createCity, getAllCities, removeCity } from '../api/CityService';
import { City } from '../types/CityTypes';
import CityCard from './CityCard';
import AddCityButton from './AddCity/AddCityButton';
import AddCityForm from './AddCity/AddCityForm';

const Home = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    getAllCities()
      .then(response => {
        setCities(response.data);
      })
  }, [cities])

  const displayForm = (formDisplayed: boolean) => {
    console.log('formDisplayed, ', formDisplayed)
    setShowForm(formDisplayed);
  }

  const addNewCity = (newCity: City) => {
    createCity(newCity)
    .then(response => console.log('RESPONSE CREATE', response))
    .catch(err => console.log('error', err));
  }

  const deleteCity = (cityId: number) => {
    removeCity(cityId)
    .then(response => console.log('RESPONSE DELETE', response))
    .catch(err => console.log('error', err));
  }

  return (
    <div role="main">
      <h2 className="text-4xl font-extrabold dark:text-white" role="heading">List of cities</h2>

      {cities && (
        <ul data-testid="cities-list">
          {cities.map((city: City, index: number) => (
            <CityCard city={city} key={index} deleteCity={deleteCity} />
          ))}
        </ul>
      )}

      <AddCityButton displayForm={displayForm} isFormDisplayed={showForm} />

      {showForm && <AddCityForm addNewCity={addNewCity} />}
    </div>
  )
}

export default Home;