import React from 'react'
import { useTranslation } from 'react-i18next';
import "../components/Experience.css"
const Experience = () => {
    const { t } = useTranslation();

    return (
        <div className='espe'>
            <div>
        <h1 id='experience' className='experiencia_title'>{t('experience')}</h1>
        <div className='espe_content'>
            <section className='espe_principal'>
                <h3>{t('espe_1')}</h3>
                <h5>{t('espe_1_1')}</h5>
                <p>{t('espe_1_1_p')}</p>
            </section>
            <section className='espe_secundario'>
                <h3>{t('espe_2')}</h3>
                <h5>Academlo</h5>
                <p>{t('espe_2_2_p')}</p>
                
            </section>
        </div>
        <div className='espe_ultimo'>
                <h3 >{t('espe_3')}</h3>
                <p>{t('espe_3_p_1')}</p>
                <p>{t('espe_3_p_2')}</p>
            </div>
            </div>
           
    </div>
    )
}

export default Experience