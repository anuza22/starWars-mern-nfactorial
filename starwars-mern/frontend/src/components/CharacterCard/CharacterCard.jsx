import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CharacterCard.css';

const CharacterCard = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
        setCharacter(response.data);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };
    fetchCharacter();
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="character-card-container">
      <div className="character-card">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt={character.name}
          className="character-card-image"
        />
        <div className="character-card-info">
          <h2>{character.name}</h2>
          <p><strong>Height:</strong> {character.height} cm</p>
          <p><strong>Mass:</strong> {character.mass} kg</p>
          <p><strong>Hair Color:</strong> {character.hair_color}</p>
          <p><strong>Skin Color:</strong> {character.skin_color}</p>
          <p><strong>Eye Color:</strong> {character.eye_color}</p>
          <p><strong>Birth Year:</strong> {character.birth_year}</p>
          <p><strong>Gender:</strong> {character.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
