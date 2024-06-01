import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = ({ item }) => {
  const isPlanet = item.url.includes('/planets/');
  const id = item.url.split('/').slice(-2, -1)[0];

  return (
    <Link to={isPlanet ? `/planet/${id}` : `/characters/${id}`} className="search-card">
      <p>{item.name}</p>
    </Link>
  );
};

const SearchResults = ({ searchResults }) => (
  <div className="search-results">
    {searchResults && searchResults.length > 0 ? (
      searchResults.map((item, index) => (
        <SearchResult key={index} item={item} />
      ))
    ) : (
      <p>No results found</p>
    )}
  </div>
);

export default SearchResults;
