import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Planets from './components/Planets/Planets';
import Characters from './components/Characters/Characters';
import CharacterCard from './components/CharacterCard/CharacterCard';
import PlanetCard from './components/PlanetCard/PlanetCard';
import SearchPage from './components/SearchPage/SearchPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/character/:id" element={<CharacterCard />} />
        <Route path="/planet/:id" element={<PlanetCard />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
};

export default App;


