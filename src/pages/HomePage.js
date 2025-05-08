import React, { useState, useEffect } from 'react';
import './../styles/HomePage.css';
import { FaBookMedical, FaSearch, FaGlobeAmericas } from 'react-icons/fa';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
    } else {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      setLoading(true);
      setShowResults(false);
      setTimeout(() => {
        setLoading(false);
        setShowResults(true); // Show search results after "loading"
      }, 1500);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`homepage ${darkMode ? 'dark' : 'light'}`}>
      {/* Header Section */}
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
              onChange={toggleDarkMode}
            />
            <label htmlFor="check-5"></label>
          </div>
        </div>
      </header>

      {/* Main Search Section */}
      <main>
        <form onSubmit={handleSubmit} className="search-wrapper">
          <div className="searchBox">
            <input
              className="searchInput"
              type="text"
              placeholder="Search for articles, topics or keywords..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="searchButton">
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                <g clipPath="url(#clip0_2_17)">
                  <g filter="url(#filter0_d_2_17)">
                    <path
                      d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      shapeRendering="crispEdges"
                    />
                  </g>
                </g>
                <defs>
                  <filter id="filter0_d_2_17" x="-0.418549" y="3.70435" width="29.7139" height="29.7139" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_17" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_17" result="shape" />
                  </filter>
                  <clipPath id="clip0_2_17">
                    <rect width="28.0702" height="28.0702" fill="white" transform="translate(0.403503 0.526367)" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </form>

        {/* Loading Indicator */}
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

      {/* Info Section */}
      <section className="info-section">
        <div className="info-row">
          <div className="info-card">
            <FaBookMedical className="info-icon" />
            <h3>Learn</h3>
            <p>Access peer-reviewed studies and reliable health sources.</p>
          </div>
          <div className="info-card">
            <FaSearch className="info-icon" />
            <h3>Find</h3>
            <p>Locate precise medical information in seconds.</p>
          </div>
          <div className="info-card">
            <FaGlobeAmericas className="info-icon" />
            <h3>Explore</h3>
            <p>Browse a wide range of scientific topics and articles.</p>
          </div>
        </div>

        {/* About & Contact Section */}
        <div className="about-contact-section">
          <div className="about-us">
            <h2>About MedBrowse</h2>
            <p>
              A professional platform designed to provide easy access to medical research and publications for healthcare professionals and researchers.
            </p>
          </div>

          <div className="contact-box">
            <div className="contact-icons">
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:youremail@example.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
