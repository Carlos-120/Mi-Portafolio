import React, { useState } from 'react';
import { useRoutes, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import MySkills from './pages/MySkills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './layout/Header';

const routes = [
  { path: '/', element: <Home /> },
  { path: 'aboutme', element: <AboutMe /> },
  { path: 'myskills', element: <MySkills /> },
  { path: 'experience', element: <Experience /> },
  { path: 'projects', element: <Projects /> },
  { path: 'contact', element: <Contact /> },
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const routing = useRoutes(routes);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : 'light'}`}>
      <Header handleDarkModeToggle={handleDarkModeToggle} isDarkMode={isDarkMode} />
      {routing}
    </div>
  );
}

export default App;
