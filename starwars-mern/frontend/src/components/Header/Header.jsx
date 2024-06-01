import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaGlobe, FaUser, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="Star Wars Logo" className="header__logo-img" />
        </Link>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/planets" className="header__nav-link">
            <FaGlobe className="header__nav-icon" /> Planets
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/characters" className="header__nav-link">
            <FaUser className="header__nav-icon" />  Characters
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/search" className="header__nav-link">
            <FaSearch className="header__nav-icon" /> Search
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
