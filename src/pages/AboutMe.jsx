import React from 'react'
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t('About Me')}</h2>
            <p>{t('I am a person eager to learn new challenges.')}</p>
            <p>{t('I like to work as a team on large projects.')}</p>
            <p>{t('I am willing to learn new technologies to push my limits.')} </p>
            <p>{t('I like to go out on the field, meditate and exercise.')}</p>
            <p>{t('My favorite quote is from the movie "The Theory Of Everything" love and survival of')} <strong><a href="https://www.youtube.com/watch?v=pOsMMutM8C0" rel="nofollow noreferrer" target="_blank">{('Stephen Hawkig')}</a></strong>{(': There should be no boundaries for human effort. No matter how hard life may seem to us, as long as there is life there is hope.')}</p>
        </div>
    )
}

export default AboutMe