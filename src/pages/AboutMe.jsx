// AboutMe.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../components/AboutMe.css';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className='about'>
      <div className='about_content_padre'>
        <h2 className='about_title'>{t('About Me')}</h2>
        <div className='about_content'>
          <p className='typewriter-text'>{t('I am a person eager to learn new challenges.')}</p>
          <p className='typewriter-text'>{t('I like to work as a team on large projects.')}</p>
          <p className='typewriter-text'>{t('I am willing to learn new technologies to push my limits.')} </p>
          <p className='typewriter-text'>{t('I like to go out on the field, meditate and exercise.')}</p>
        </div>
        <p className='about_personalizado '>
          {t('aboutMe_5')}{' '}
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
