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
                <h1 className='proy_title'>Proyectos</h1>
                <section className='proy_content_hijo'>
                     <div className='proy_academlo'>
                    {
                        detail1 == false ? <article className='proy_1'>
                        <p></p>
                        <div> 
                            <button>Visitar</button>
                            <button onClick={toggleDetail}>detalles</button>
                        </div>
                    </article> : <article className='proy_detail' onClick={toggleDetail}>
                        <p></p>
                        <p></p>
                        <p></p>
                    </article>
                    }
                </div>
                <div className='proy_academlo'>
                    {
                        detail2 == false ? <article className='proy_2'>
                        <p></p>
                        <div> 
                            <button>Visitar</button>
                            <button onClick={toggleDetail2}>detalles</button>
                        </div>
                    </article> : <article className='proy_detail' onClick={toggleDetail2}>
                        <p></p>
                        <p></p>
                        <p></p>
                    </article>
                    }
                </div>
                <div className='proy_academlo'>
                    {
                        detail3 == false ? <article className='proy_3'>
                        <p></p>
                        <div> 
                            <button>Visitar</button>
                            <button onClick={toggleDetail3}>detalles</button>
                        </div>
                    </article> : <article className='proy_detail' onClick={toggleDetail3}>
                        <p></p>
                        <p></p>
                        <p></p>
                    </article>
                    }
                </div>
                <div className='proy_academlo'>
                    {
                        detail4 == false ? <article className='proy_4'>
                        <p></p>
                        <div> 
                            <button>Visitar</button>
                            <button onClick={toggleDetail4}>detalles</button>
                        </div>
                    </article> : <article className='proy_detail' onClick={toggleDetail4}>
                        <p></p>
                        <p></p>
                        <p></p>
                    </article>
                    }
                </div>
                </section>
               
            </div>
        </div>
    )
}

export default Portafolio