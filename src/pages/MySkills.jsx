import { useTranslation } from 'react-i18next';
import "../components/MySkills.css"
import React from 'react';

const MySkills = () => {
    const { t } = useTranslation();

    return (
        <div className='skill'>
            <h1 className='skill_title'>Mis Habilidades</h1>
            <div className='skill_content'>
                
                <div>
                <i className="fa-brands fa-js fa-beat js" ></i>
                <i className="fa-brands fa-react fa-spin fa-spin-reverse re" ></i>
                <i class="fa-brands fa-node node"></i>
                </div>
            </div>
            <section>
              <li>Diseño responsivo</li>
              <li>Bases de datos</li>
              <li>control de versiones</li>
              <li>Conocimiento de UX/UI</li>
              <li>Manejo de APIs:</li>
            </section>
        </div>
    )
}

export default MySkills