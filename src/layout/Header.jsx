import React from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom'
const Header = ({isDarkMode,handleDarkModeToggle}) => {
   

    const {t, i18n} = useTranslation();

const toggleLanguage = () => {
    const newLanguage = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
};

    return (
        <header className="flex items-center justify-between py-4 bg-gray-200 dark:bg-gray-800">
  <ul className="flex flex-row">
    <li className="mr-4">
      <NavLink to="/">
        <h3>{t('home')}</h3>
      </NavLink>
    </li>
    <li className="mr-4">
      <NavLink to="/aboutme">
        <h3>{t('aboutMe')}</h3>
      </NavLink>
    </li>
    <li className="mr-4">
      <NavLink to="/myskills">
        <h3>{t('mySkills')}</h3>
      </NavLink>
    </li>
    <li className="mr-4">
      <NavLink to="/experience">
        <h3>{t('experience')}</h3>
      </NavLink>
    </li>
    <li className="mr-4">
      <NavLink to="/projects">
        <h3>{t('projects')}</h3>
      </NavLink>
    </li>
    <li>
      <NavLink to="contact/">
        <h3>{t('contact')}</h3>
      </NavLink>
    </li>
    <div className="flex flex-row">
    <button
      className="px-4 py-2 mr-4 text-white rounded-md bg-blue-500 focus:outline-none"
      onClick={handleDarkModeToggle}
    >
      {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
    <button
      className="px-4 py-2 text-white rounded-md bg-blue-500 focus:outline-none"
      onClick={toggleLanguage}
    >
      {i18n.language === 'es' ? 'English' : 'Español'}
    </button>
  </div>
  </ul>
  
</header>

    )
}

export default Header