// AboutMe.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../components/AboutMe.css';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div  id='aboutMe' className='about'>
      <div className='about_content_padre'>
        <h2 className='about_title'>{t('About Me')}</h2>
        <div className='about_content'>
          <p className='typewriter-text'>{t('aboutMe_1')}</p>
          <p className='typewriter-text'>{t('aboutMe_2')}</p>
          <p className='typewriter-text'>{t('aboutMe_3')} </p>
          <p className='typewriter-text'>{t('aboutMe_4')}</p>
        </div>
        <p className='about_personalizado '>
          {t('aboutMe_5')}
          <strong>
            <a href='https://www.youtube.com/watch?v=pOsMMutM8C0' rel='nofollow noreferrer' target='_blank'>
              {t('aboutMe_5_5')}
            </a>
          </strong>
          {t('aboutMe_6')}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
