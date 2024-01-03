import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CV_en from "../assets/CV_en.pdf"
import CV_es from "../assets/CV_es.pdf"
import "../components/Home.css"
import CustomAlert from '../components/CustomAlert'
const Home = () => {
  const { t, i18n } = useTranslation(); // Obtenemos el objeto de i18n desde useTranslation
  const [showAlert, setShowAlert] = useState(false);
 
  const handleDownload = () => {
    let CV;
    if (i18n.language === 'es') {
      CV = CV_es;
    } else if (i18n.language === 'en') {
      CV = CV_en;
    } else {
      // En caso de que el idioma no sea ni "es" ni "en", puedes mostrar un mensaje de error o usar un valor predeterminado.
      return;
    }

    const link = document.createElement('a');
    link.href = CV;
    link.download = i18n.language === 'es' ? 'mi_cv.pdf' : 'my_cv.pdf'; // Nombre de archivo adecuado para cada idioma
    link.click();
  };
  
  useEffect(() => {
    // Activa la alerta después de 3000 milisegundos (3 segundos)
    const timeoutId = setTimeout(() => {
      setShowAlert(true);
    }, 15000);

    // Limpia el temporizador cuando el componente se desmonta o cuando la alerta se muestra
    return () => clearTimeout(timeoutId);
  }, []); // El segundo argumento es un array de dependencias vacío, lo que significa que se ejecutará una sola vez después del montaje inicial

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  
  return (
    
    <div id='Home' className="home">
     <div className="home_content">
      <h1 className="home_title">{t('hometitile')}</h1>
      <p className="home_description">{t('homecontent')}</p>
      <CustomAlert
        message="Mensaje de alerta personalizada"
        onClose={handleCloseAlert}
        show={showAlert} // Pasa el estado a CustomAlert para controlar su visibilidad
      />
    <button
      className="mi-boton-genial"
      onClick={handleDownload}
    >
      {t('homebutton')}
    </button>
    </div>
   </div>
  
    
  );
};

export default Home;
