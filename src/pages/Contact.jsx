import React from 'react'
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className='contact'>
            <div className='contact_content'>
                correo  telefono , links de redes etc.
            </div>
        </div>
    )
}

export default Contact