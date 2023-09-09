import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import "../components/Projects.css"
const Portafolio = () => {
    const { t } = useTranslation();
    const [detail1, setDetail1] = useState(false);
    const [detail2, setDetail2] = useState(false);
    const [detail3, setDetail3] = useState(false);
    const [detail4, setDetail4] = useState(false);

    const toggleDetail = () => {
        setDetail1(!detail1);
      };
      const toggleDetail2 = () => {
        setDetail2(!detail2);
      };
      const toggleDetail3 = () => {
        setDetail3(!detail3);
      };
      const toggleDetail4 = () => {
        setDetail4(!detail4);
      };
    return (
        <div className='proy'>
            <div className='proy_content'>
                <h1 className='proy_title'>{t('projects')}</h1>
                <section className='proy_content_hijo'>
                     <div className='proy_academlo'>
                    {
                        detail1 == false ? <article className='proy_1'>
                        <h2 className='proy_title_proyect'>{t('proyect_1_title')}</h2>
                        <div> 
                           <a target='_blank' href="https://rick-and-morty-120.netlify.app/">  <button>{t('proyect_1_vista')}</button></a>
                            <button onClick={toggleDetail}>{t('proyect_1_detail')}</button>
                        </div>
                    </article> : <article className='proy_detail' onClick={toggleDetail}>
                        <p>{t('proyect_1_p_1')}</p>
                        <p>{t('proyect_1_p_2')}</p>
                        <p>{t('proyect_1_p_3')}</p>
                    </article>
                    }
                </div>
                <div className='proy_academlo'>
                    {
                        detail2 == false ? <article className='proy_2'>
                        <h2 className='proy_title_proyect'>{t('proyect_2_title')}</h2>
                        <div> 
                             <a target='_blank' href="https://pokemon-120.netlify.app/#/pokedex"><button>{t('proyect_1_vista')}</button></a>
                            <button onClick={toggleDetail2}>{t('proyect_1_detail')}</button>
                        </div>
                    </article> : <article className='proy_detail' onClick={toggleDetail2}>
                        <p>{t('proyect_2_p_1')}</p>
                        <p>{t('proyect_2_p_2')} </p>
                        <p>{t('proyect_2_p_3')} </p>
                    </article>
                    }
                </div>
                <div className='proy_academlo'>
                    {
                        detail3 == false ? <article className='proy_3'>
                        <h2 className='proy_title_proyect'>{t('proyect_3_title')}</h2>
                        <div> 
                            <a target='_blank' href="https://pronostico-del-clima.netlify.app/"><button> {t('proyect_1_vista')}</button></a>
                            <button onClick={toggleDetail3}>{t('proyect_1_detail')}</button>
                        </div>
                    </article> : <article className='proy_detail' onClick={toggleDetail3}>
                        <p>{t('proyect_3_p_1')}</p>
                        <p>{t('proyect_3_p_2')}</p>
                        <p>{t('proyect_3_p_3')}</p>
                    </article>
                    }
                </div>
                <div className='proy_academlo'>
                    {
                        detail4 == false ? <article className='proy_4'>
                        <h2 className='proy_title_proyect'>{t('proyect_4_title')}</h2>
                        <div> 
                            <a target='_blank' href="https://app.swaggerhub.com/apis-docs/CPALATE18/api/1.0.0"><button>{t('proyect_1_vista')}</button></a>
                            <button onClick={toggleDetail4}>{t('proyect_1_detail')}</button>
                        </div>
                    </article> : <article className='proy_detail' onClick={toggleDetail4}>
                        <p>{t('proyect_4_p_1')}</p>
                        <p>{t('proyect_4_p_2')}</p>
                        <p>{t('proyect_4_p_2')}</p>
                    </article>
                    }
                </div>
                </section>
               
            </div>
        </div>
    )
}

export default Portafolio