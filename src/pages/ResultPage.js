// src/pages/ResultPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './../styles/HomePage.css';

const ResultPage = () => {
  const location = useLocation();
  const query = location.state?.query || '';

  return (
    <div className="homepage">
      <header className="header-section">
        <div className="brand-title">
          <span className="med">Med</span><span className="browse">Browse</span>
        </div>
      </header>

      <main className="search-results">
        <h2>Results for: <span className="highlight">{query}</span></h2>
        <div className="result-card">
          {/* You can render real results here */}
          <p>This is where search results for "<strong>{query}</strong>" will appear.</p>
        </div>
      </main>
    </div>
  );
};

export default ResultPage;
