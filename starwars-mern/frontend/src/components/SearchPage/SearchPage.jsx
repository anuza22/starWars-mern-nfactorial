import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SearchPage.css';
import SearchResultCard from './SearchResultCard';


const starWarsIcon = 'https://st4.depositphotos.com/24409500/25635/i/450/depositphotos_256359544-stock-photo-saint-petersburg-russia-april-6.jpg'

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/films/');
        const quotes = response.data.results.map((film) => `"${film.title}: ${film.opening_crawl}"`);
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    fetchQuote();
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const planetResponse = await axios.get(`https://swapi.dev/api/planets/?search=${query}`);
      const characterResponse = await axios.get(`https://swapi.dev/api/people/?search=${query}`);
      const planetResults = planetResponse.data.results;
      const characterResults = characterResponse.data.results;
      const searchResults = [...planetResults, ...characterResults];
      setSearchResults(searchResults);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div className="search-container">
      <div className="search-form-container">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Search for planets or characters..."
            value={query}
            onChange={handleChange}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <img src={starWarsIcon} alt="Search" className="search-icon" />
          </button>
        </form>
      </div>
      <div className="quote-container">
        <p className="quote">{quote}</p>
      </div>
      <div className="search-results">
        {searchResults.map((item, index) => (
           <SearchResultCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
