import { useEffect } from "react";
import { getAllCities } from "./api/CityService";

const App = () => {
  useEffect(() => {
    getAllCities()
      .then(response => {
        console.log('RESPONSE', response);
      })
  })

  return (
    <div role='main'>
      <h1>Home</h1>
    </div>
  );
}

export default App;