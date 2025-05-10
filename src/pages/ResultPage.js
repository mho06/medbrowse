// ResultPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './../styles/ResultPage.css';

const ResultPage = ({ darkMode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = location.state?.query || '';

  const handleBack = () => navigate('/');
  const goHome = () => navigate('/');

  return (
    <div className={`homepage ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="header-section">
        <div className="header-wrapper">
          <div className="brand-title" onClick={goHome} style={{ cursor: 'pointer' }}>
            <span className="med">Med</span><span className="browse">Browse</span>
          </div>
          <button className="back-button" onClick={handleBack}>
            🔙 Back to Home
          </button>
        </div>
      </header>




      <main className="search-results">
        <h2>Results for: <span className="highlight">{query}</span></h2>
        <div className="result-card">
          <p>This is where search results for "<strong>{query}</strong>" will appear.</p>
        </div>
      </main>
    </div>
  );
};

export default ResultPage;
