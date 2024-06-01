import React from 'react';
import { Link } from 'react-router-dom';
// import './SearchResultCard.css';

const SearchResultCard = ({ item }) => {
  const id = item.url.split('/')[5];
  const type = item.url.includes('planets') ? 'planet' : 'character';

  return (
    <Link to={`/${type}/${id}`} className="search-result-card">
      <div className="result-card">

      <img
          src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
          alt={item.name}
          className="result-image"
        />
        {/* <img
          src={`https://starwars-visualguide.com/assets/img/${type === 'planet' ? 'planets' : 'characters'}/${id}.jpg`}
          alt={item.name}
          className="result-image"
        /> */}
        <div className="result-name">{item.name}</div>
      </div>
    </Link>
  );
};

export default SearchResultCard;

