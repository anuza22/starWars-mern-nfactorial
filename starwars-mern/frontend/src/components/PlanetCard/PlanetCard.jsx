import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PlanetCard.css';

const PlanetCard = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/planets/${id}/`);
        setPlanet(response.data);
      } catch (error) {
        console.error('Error fetching planet:', error);
      }
    };
    fetchPlanet();
  }, [id]);

  if (!planet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="planet-card-container">
      <div className="planet-card">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt={planet.name}
          className="planet-card-image"
        />
        <div className="planet-card-info">
          <h2>{planet.name}</h2>
          <p><strong>Rotation Period:</strong> {planet.rotation_period} hours</p>
          <p><strong>Orbital Period:</strong> {planet.orbital_period} days</p>
          <p><strong>Diameter:</strong> {planet.diameter} km</p>
          <p><strong>Climate:</strong> {planet.climate}</p>
          <p><strong>Gravity:</strong> {planet.gravity}</p>
          <p><strong>Terrain:</strong> {planet.terrain}</p>
          <p><strong>Surface Water:</strong> {planet.surface_water}%</p>
          <p><strong>Population:</strong> {planet.population}</p>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;
