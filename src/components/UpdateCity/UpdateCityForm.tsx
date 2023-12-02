import { useState } from "react";
import { City } from "../../types/CityTypes";
import { v4 as uuidv4 } from 'uuid';

type UpdateCityFormProps = {
  city: City;
  updateCity: (updatedCity: City) => void;
}

const UpdateCityForm = ({ city, updateCity }: UpdateCityFormProps) => {
  const [editedCity, setEditedCity] = useState<City>(city);

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.id === 'city-name') setEditedCity({ ...editedCity, title: target.value })
    if (target.id === 'city-description') setEditedCity({ ...editedCity, content: target.value })
    if (target.id === 'city-image') setEditedCity({ ...editedCity, image_url: target.value })
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCityId = uuidv4();
    setEditedCity({ ...editedCity, id: Number(newCityId)});
    updateCity(editedCity);
  }

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="city-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City name</label>
        <input type="text" id="city-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} defaultValue={city.title} />
      </div>

      <div className="mb-5">
        <label htmlFor="city-description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City description</label>
        <input type="text" id="city-description" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} defaultValue={city.content} />
      </div>

      <div>
        <label htmlFor="city-image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image url</label>
        <input type="text" id="city-image" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} defaultValue={city.image_url} />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default UpdateCityForm;
