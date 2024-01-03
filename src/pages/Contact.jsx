import React from 'react';
import { useTranslation } from 'react-i18next';
import "../components/Contact.css";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div  className='contact'>
            <h2 id='contact' className='contact_title'>{t('contact')}</h2>
            <section className='contact_content'>
                <div className='contact_data'>
                    <a href="mailto:cpalate18@gmail.com">
                        <p><i className='bx bx-envelope'></i> cpalate18@gmail.com</p>
                    </a>
                    
                    <a href="https://wa.me/593962628217">
                        <p><i className='bx bx-phone'></i> +593 967473971</p>
                    </a>
                    
                </div>
                <div className='contact_social'>
                    <article className='content_social_icon'>
                        <a target="_blank" href="https://www.linkedin.com/in/juan-carlos-palate-549907256/">
                            <i className='bx bxl-linkedin'></i>
                        <h5>LinkedIn</h5>
                        </a>
                    </article>
                    <article className='content_social_icon'>
                        <a target="_blank"  href="https://github.com/Carlos-120">
                          <i className='bx bxl-github'></i>
                        <h5>GitHub</h5>  
                        </a>
                        
                    </article>
                </div>
            </section>
            <footer className='contact_footer'>
                <p>{t('contact_p')}</p>
            </footer>
        </div>
    )
}

export default Contact;
