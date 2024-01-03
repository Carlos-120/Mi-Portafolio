import { useTranslation } from 'react-i18next';
import "../components/MySkills.css"
import React from 'react';

const MySkills = () => {
    const { t } = useTranslation();

    return (
        <div id='myskills' className='skill'>
            <div className='myskills' >
                <h1 className='skill_title'>{t('mySkills')}</h1>
            <div className='skill_content'>
                
                <div>
                <i className="fa-brands fa-js fa-beat js" ></i>
                <i className="fa-brands fa-react fa-spin fa-spin-reverse re" ></i>
                <i className="fa-brands fa-node node"></i>
                </div>
            </div>
            <section>
              <li>{t('skill_1')}</li>
              <li>{t('skill_2')}</li>
              <li>{t('skill_3')}</li>
              <li>{t('skill_4')}</li>
              <li>{t('skill_5')}</li>
            </section>
            </div>
            
        </div>
    )
}

export default MySkills