import React from 'react'
import { useTranslation } from 'react-i18next';
import "../components/Header.css"
const Header = ({isDarkMode,handleDarkModeToggle}) => {
   

    const {t, i18n} = useTranslation();

const toggleLanguage = () => {
    const newLanguage = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
};

    return (
        
<>
<header className='header'>
  <ul className="header_ul">
    <li className="header_ul_li">
      <a href="#Home">
        <h3>{t('home')}</h3>
      </a>
    </li>
    <li className="header_ul_li">
      <a href='#aboutMe'>
        <h3>{t('aboutMe')}</h3>
      </a>
    </li>
    <li className="header_ul_li">
      <a href="#myskills">
        <h3>{t('mySkills')}</h3>
      </a>
    </li>
    <li className="header_ul_li">
      <a href="#experience">
        <h3>{t('experience')}</h3>
      </a>
    </li>
    <li className="header_ul_li">
      <a href="#projects">
        <h3>{t('projects')}</h3>
      </a>
    </li>
    <li className='header_ul_li'>
      <a href="#contact">
        <h3>{t('contact')}</h3>
      </a>
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
      {i18n.language === 'es' ? 'Ingles' : 'Spanish'}
    </button>
  </div>
</header>

</>

    )
}

export default Header