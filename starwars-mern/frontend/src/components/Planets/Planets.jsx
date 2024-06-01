import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Planets.css';
import { Link } from 'react-router-dom';


const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/planets/');
        setPlanets(response.data.results);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };
    fetchPlanets();
  }, []);

//   return (
//     <div className="planets-container">
//       {planets.map((planet, index) => (
//         <div key={index} className="planet-card">
//           <img
//             src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
//             alt={planet.name}
//             className="planet-image"
//           />
//           <div className="planet-name">{planet.name}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

return (
  <div className="planets-container">
    {planets.map((planet, index) => (
      <Link key={index} to={`/planet/${index + 1}`} className="planet-card-link">
        <div className="planet-card">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
            alt={planet.name}
            className="planet-image"
          />
          <div className="planet-name">{planet.name}</div>
        </div>
      </Link>
    ))}
  </div>
);
};

export default Planets;
