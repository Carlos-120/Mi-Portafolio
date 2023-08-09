import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import "../components/Projects.css"
const Portafolio = () => {
    const { t } = useTranslation();
    const [detail, setDetail] = useState(false)

    const toggleDetail = () => {
        setDetail(!detail);
      };
    return (
        <div className='proy'>
            <div className='proy_content'>
                <h1>Proyectos</h1>
                <section className='proy_content_hijo'>
                     <div className='proy_academlo'>
                    {
                        detail == false ? <article>
                        <img src="" alt="" />
                        <p></p>
                        <div> 
                            <button>Visitar</button>
                            <button onClick={toggleDetail}>detalles</button>
                        </div>
                    </article> : <article onClick={toggleDetail}>
                        <p></p>
                        <p></p>
                        <p></p>
                    </article>
                    }
                </div>
                <div className='proy_academlo'>
                    {
                        detail == false ? <article>
                        <img src="" alt="" />
                        <p></p>
                        <div> 
                            <button>Visitar</button>
                            <button onClick={toggleDetail}>detalles</button>
                        </div>
                    </article> : <article onClick={toggleDetail}>
                        <p></p>
                        <p></p>
                        <p></p>
                    </article>
                    }
                </div>
                <div className='proy_academlo'>
                    {
                        detail == false ? <article>
                        <img src="" alt="" />
                        <p></p>
                        <div> 
                            <button>Visitar</button>
                            <button onClick={toggleDetail}>detalles</button>
                        </div>
                    </article> : <article onClick={toggleDetail}>
                        <p></p>
                        <p></p>
                        <p></p>
                    </article>
                    }
                </div>
                <div className='proy_academlo'>
                    {
                        detail == false ? <article>
                        <img src="" alt="" />
                        <p></p>
                        <div> 
                            <button>Visitar</button>
                            <button onClick={toggleDetail}>detalles</button>
                        </div>
                    </article> : <article onClick={toggleDetail}>
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