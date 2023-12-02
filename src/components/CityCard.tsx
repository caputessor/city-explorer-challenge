import { City } from "../types/CityTypes";

type CityCardProps = {
  city: City;
};

const CityCard = ({ city }: CityCardProps) => {
  const placeholderImage = 'https://placehold.co/600x400';

  const onImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = placeholderImage;
  }

  return (
    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" data-testid="city-card">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={city.image_url} alt="City picture" onError={onImageError}  data-testid="city-image" />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"  data-testid="city-title">{city.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" data-testid="city-description">{city.content}</p>
      </div>
    </a>
  );
};

export default CityCard;