import React, { useState } from 'react';
import Header from './layout/Header';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import MySkills from './pages/MySkills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : 'light'}`}>
      <Header handleDarkModeToggle={handleDarkModeToggle} isDarkMode={isDarkMode} />
      <Home />
      <AboutMe />
      <MySkills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
