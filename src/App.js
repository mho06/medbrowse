import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check the saved theme in localStorage on initial load
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : false; // Default to light mode if no saved theme
  });

  useEffect(() => {
    // Store the theme in localStorage whenever it changes
    const theme = darkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    // Apply the theme to the document body
    document.body.className = theme === 'dark' ? 'dark-mode' : 'light-mode';
  }, [darkMode]); // Only run when darkMode changes

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage darkMode={darkMode} toggleTheme={toggleTheme} />} />
        <Route path="/results" element={<ResultPage darkMode={darkMode} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
