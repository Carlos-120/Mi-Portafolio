import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CV_en from "../assets/CV_en.pdf"
import CV_es from "../assets/CV_es.pdf"
import "../components/Home.css"
import CustomAlert from '../components/CustomAlert'
const Home = () => {
  const { t, i18n } = useTranslation(); 
  const [showAlert, setShowAlert] = useState(false);
 
  const handleDownload = () => {
    let CV;
    if (i18n.language === 'es') {
      CV = CV_es;
    } else if (i18n.language === 'en') {
      CV = CV_en;
    } else {
      
      return;
    }

    const link = document.createElement('a');
    link.href = CV;
    link.download = i18n.language === 'es' ? 'mi_cv.pdf' : 'my_cv.pdf'; 
    link.click();
  };
  
  useEffect(() => {
    
    const timeoutId = setTimeout(() => {
      setShowAlert(true);
    }, 15000);
    return () => clearTimeout(timeoutId);
  }, []);
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
        show={showAlert} 
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
