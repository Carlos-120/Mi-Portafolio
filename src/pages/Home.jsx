import React from 'react';
import { useTranslation } from 'react-i18next';
import CV_en from "../assets/CV_en.pdf"
import CV_es from "../assets/CV_es.pdf"
import "../components/Home.css"
const Home = () => {
  const { t, i18n } = useTranslation(); // Obtenemos el objeto de i18n desde useTranslation

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
  return (
    <div className="home">
     <div className="home_content">
      <h1 className="home_title">{t('hometitile')}</h1>
      <p className="home_description">{t('homecontent')}</p>
     
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
