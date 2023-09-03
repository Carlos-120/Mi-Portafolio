import React from 'react'
import { useTranslation } from 'react-i18next';
import "../components/Experience.css"
const Experience = () => {
    const { t } = useTranslation();

    return (
        <div className='espe'>
        <div className='espe_content'>
            <section className='espe_principal'>
                <h3>Experiencia laboral</h3>
                <h5>En el mundo diguital ninguna</h5>
                <p>He tenido 4 trabajos, en los cuales he adquirido, habilidades como: adaptabilidad, comunicasion, trabajo en quipo. Puedo no tener experiencia laboral en el mundo diguital pero puedo adaptarme con facilida porque tengo conocimientos necesarios en el desarollo web como el lado del cliente y del servidor, estoy preparado para enfrentarme a nuevas tegnologuias y herramientas para el desarrollo web</p>
            </section>
            <section className='espe_secundario'>
                <h3>Estudios</h3>
                <h5>Academlo</h5>
                <p>
                  Curse un curso de 5 meses como programador full stack y en las cuales he puesto en practica siertas abilidades como: trabajo en quipo, la comunicasion, la facilidad de resolver problemas y optimizar paguinas web.  
                </p>
                
            </section>
        </div>
        <div className='espe_ultimo'>
                <h3 >Metas</h3>
                <p>Estoy trabajando en proyectos personales que seran subidas a produccion en beneficio a mi ciudad.</p>
                <p>Me encuentro tambien en estudio de nuevas herramientas y framewords para optimizar los proyectos, tambien adentrandome a las pruevas unitarias para el correcto funcionamiento de mis proyectos </p>
            </div>
    </div>
    )
}

export default Experience