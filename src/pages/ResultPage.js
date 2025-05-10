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
  

const mockResults = [
  {
    id: 1,
    title: "The Effect of Vitamin D on Muscle Strength in Adults",
    authors: "Smith J, Patel R, Zhao L",
    journal: "Journal of Clinical Nutrition",
    date: "2023",
    abstract: "This study evaluates how vitamin D supplementation affects muscle strength in adults over 12 months..."
  },
  {
    id: 2,
    title: "A Meta-analysis of Cardio Training and Cognitive Health",
    authors: "Anderson K, Lee T",
    journal: "Brain Health Review",
    date: "2022",
    abstract: "Cardio training shows promising results in enhancing memory function and reducing cognitive decline risks..."
  },
];


  return (
    <div className={`homepage ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="header-section">
        <div className="header-wrapper">
          <button className="back-button" onClick={handleBack}>
            🔙 Back to Home
          </button>
          {/* <div className="brand-title" onClick={goHome} style={{ cursor: 'pointer' }}>
            <span className="med">Med</span><span className="browse">Browse</span>
          </div> */}
          
        </div>
      </header>




      <main className="search-results">
  <h2>Results for: <span className="highlight">{query}</span></h2>

  {[...Array(10)].map((_, index) => (
    <div className="result-card" key={index}>
      <h3>Study {index + 1}: The Impact of Lifestyle on Cardiovascular Health</h3>
      <p>
        Cardiovascular disease (CVD) remains the leading cause of mortality worldwide.
        Numerous observational studies have assessed the impact of modifiable lifestyle
        factors—including diet, physical activity, smoking, alcohol consumption, and sleep—
        on the risk of CVD. This meta-analysis evaluates the association between lifestyle
        patterns and CVD incidence across 28 prospective cohort studies involving over 1.2
        million participants and 52,000 cardiovascular events. Results show that individuals
        adhering to a healthy lifestyle had a 42% lower risk of developing CVD compared to
        those with poor lifestyle habits. These findings support the promotion of comprehensive
        lifestyle interventions as a public health priority.
      </p>
    </div>
  ))}
</main>


    </div>
  );
};

export default ResultPage;
