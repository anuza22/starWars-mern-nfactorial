import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/films/');
        setFilms(response.data.results);
      } catch (error) {
        console.error('Error fetching films:', error);
      }
    };
    fetchFilms();
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Star Wars Films</h1>
      <div className="films-grid">
        {films.map((film) => (
          <div key={film.episode_id} className="film-card">
            <img
              src={`https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`}
              alt={film.title}
              className="film-image"
            />
            <div className="film-info">
              <h2>{film.title}</h2>
              <p>{film.opening_crawl}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
