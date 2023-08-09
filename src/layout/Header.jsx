import React from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom'
import "../components/Header.css"
const Header = ({isDarkMode,handleDarkModeToggle}) => {
   

    const {t, i18n} = useTranslation();

const toggleLanguage = () => {
    const newLanguage = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
};

    return (
        <header className='header'>
  <ul className="header_ul">
    <li className="header_ul_li">
      <NavLink to="/">
        <h3>{t('home')}</h3>
      </NavLink>
    </li>
    <li className="header_ul_li">
      <NavLink to="/aboutme">
        <h3>{t('aboutMe')}</h3>
      </NavLink>
    </li>
    <li className="header_ul_li">
      <NavLink to="/myskills">
        <h3>{t('mySkills')}</h3>
      </NavLink>
    </li>
    <li className="header_ul_li">
      <NavLink to="/experience">
        <h3>{t('experience')}</h3>
      </NavLink>
    </li>
    <li className="header_ul_li">
      <NavLink to="/projects">
        <h3>{t('projects')}</h3>
      </NavLink>
    </li>
    <li className='header_ul_li'>
      <NavLink to="contact/">
        <h3>{t('contact')}</h3>
      </NavLink>
    </li>
  </ul>
  <div className="header_content-btn">
    <button
      className="mi-boton-genial"
      onClick={handleDarkModeToggle}
    >
      {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
    <button
      className="mi-boton-genial"
      onClick={toggleLanguage}
    >
      {i18n.language === 'es' ? 'English' : 'Español'}
    </button>
  </div>
</header>

    )
}

export default Header