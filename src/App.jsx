
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import MySkills from './pages/MySkills'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Header from './layout/Header'
import { useState } from 'react'


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : 'light'}`}>
      < Header handleDarkModeToggle={handleDarkModeToggle} isDarkMode={isDarkMode} />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/' element={<AboutMe />} />
        <Route path='/myskills' element={<MySkills />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
