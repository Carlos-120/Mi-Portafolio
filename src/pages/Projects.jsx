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
                        <h2 className='proy_title_proyect'>Rik and Morty</h2>
                        <div> 
                            <button>Visitar</button>
                            <button onClick={toggleDetail}>detalles</button>
                        </div>
                    </article> : <article className='proy_detail' onClick={toggleDetail}>
                        <p>Diseño de escritorio, naegacion entre dimenciones</p>
                        <p>Funcionalidades de busquedas por nombre o numero de dimenciones</p>
                        <p>Se manipulo la api con peticiones rest</p>
                    </article>
                    }
                </div>
                <div className='proy_academlo'>
                    {
                        detail2 == false ? <article className='proy_2'>
                        <h2 className='proy_title_proyect'>Pokedex</h2>
                        <div> 
                            <button>Visitar</button>
                            <button onClick={toggleDetail2}>detalles</button>
                        </div>
                    </article> : <article className='proy_detail' onClick={toggleDetail2}>
                        <p>Diseño de escritorio, interfas de informacion de cada pokemon</p>
                        <p>Funcionalidad de buscar por nombre y historial por nombre de usuario</p>
                        <p>mostrar por maginas listas de pokemons </p>
                    </article>
                    }
                </div>
                <div className='proy_academlo'>
                    {
                        detail3 == false ? <article className='proy_3'>
                        <h2 className='proy_title_proyect'>Clima</h2>
                        <div> 
                            <button>Visitar</button>
                            <button onClick={toggleDetail3}>detalles</button>
                        </div>
                    </article> : <article className='proy_detail' onClick={toggleDetail3}>
                        <p>Diseño de escritorio, utilizacion de Api</p>
                        <p>captacion de detalles de temperaturas en tiempo real</p>
                        <p>navegacion de diferentes climas en distintos lugares</p>
                    </article>
                    }
                </div>
                <div className='proy_academlo'>
                    {
                        detail4 == false ? <article className='proy_4'>
                        <h2 className='proy_title_proyect'>Api de Peliculas </h2>
                        <div> 
                            <button>Visitar</button>
                            <button onClick={toggleDetail4}>detalles</button>
                        </div>
                    </article> : <article className='proy_detail' onClick={toggleDetail4}>
                        <p>Eleborado con firebase, para el almacenamiento de datos</p>
                        <p>documentado con swwager hup, todas las peticiones </p>
                        <p>Api resfull, tambien se uso un skeleton personalizado propio, para la ajilitacion de la api</p>
                    </article>
                    }
                </div>
                </section>
               
            </div>
        </div>
    )
}

export default Portafolio