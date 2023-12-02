import { useState } from "react";
import { City } from "../types/CityTypes";
import UpdateCityForm from "./UpdateCity/UpdateCityForm";

type CityCardProps = {
  city: City;
  deleteCity: (id: number) => void;
  editCity: (updatedCity: City) => void;
};

const CityCard = ({ city, deleteCity, editCity }: CityCardProps) => {
  const [showEditForm, setShowEditForm] = useState<boolean>(false);
  const placeholderImage = 'https://placehold.co/600x400';

  const onImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = placeholderImage;
  }

  const handleDelete = (cityId: number) => {
    deleteCity(cityId);
  }

  const handleEdit = (cityId: number) => {
    setShowEditForm(true);
  }

  return (
    <div>
      <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" data-testid="city-card">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={city.image_url} alt="City picture" onError={onImageError} data-testid="city-image" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" data-testid="city-title">{city.title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" data-testid="city-description">{city.content}</p>
        </div>
        <button onClick={() => handleDelete(city.id)}>
          <svg className="h-4 w-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
          </svg>
        </button>
        <button onClick={() => handleEdit(city.id)}>
          <svg className="h-4 w-4 text-black" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
          </svg>
        </button>
      </a>
      {showEditForm && <UpdateCityForm city={city} updateCity={editCity} />}
    </div>

  );
};

export default CityCard;