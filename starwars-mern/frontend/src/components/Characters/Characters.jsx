import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Characters.css';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };
    fetchCharacters();
  }, []);

  return (
    <div className="characters-container">
      {characters.map((character, index) => (
        <Link key={index} to={`/character/${index + 1}`} className="character-card-link">
          <div className="character-card">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
              alt={character.name}
              className="character-image"
            />
            <div className="character-name">{character.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};


export default Characters;
