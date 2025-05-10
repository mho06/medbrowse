import React, { useState } from 'react';
import './../styles/HomePage.css';
import { FaBookMedical, FaSearch, FaGlobeAmericas } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ darkMode, toggleTheme }) => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      navigate('/results', { state: { query } });
    }
  };

  return (
    <div className={`homepage ${darkMode ? 'dark' : 'light'}`}>
      <header className="header-section">
        <div className="brand-title">
          <span className="med">Med</span><span className="browse">Browse</span>
        </div>
        <div className="hero-text">
          <h1 className="hero-heading">
            Discover Medical Research <span className="highlight">Effortlessly</span>
          </h1>
          <p className="hero-subtext">
            Search millions of articles, case studies, and clinical trials from trusted medical journals and publications.
          </p>
        </div>

        {/* Dark Mode Toggle */}
        <div className="checkbox-wrapper-5">
          <div className="check">
            <input
              id="check-5"
              type="checkbox"
              checked={darkMode}
              onChange={toggleTheme}
            />
            <label htmlFor="check-5"></label>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <main>
        <form onSubmit={handleSearch} className="search-wrapper">
          <div className="searchBox">
            <input
              className="searchInput"
              type="text"
              placeholder="Search for articles, topics or keywords..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="searchButton">
              {/* Search Icon */}
            </button>
          </div>
        </form>

        {/* Loading Screen */}
        {loading && (
          <div className="loading-screen">
            <div className="spinner-medical"></div>
            <p>Scanning medical literature...</p>
          </div>
        )}

        {/* Search Results */}
        {showResults && !loading && (
          <div className="search-results">
            <div className="result-card">Result for: {query}</div>
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;
