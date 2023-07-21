// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Define los idiomas disponibles y sus textos
const resources = {
  en: {
    translation: {
      welcome: "Welcome to my portfolio!",
      home: "Home",
      hometitile: "Briefcase",
      homecontent:
        "Versatile Full Stack professional developer capable of developing web development both in the Front End client part and in the Back End server part. With extensive knowledge and tools that allow him to face any phase in the construction of software.",
      homebutton: "Download CV",
      aboutMe: "About Me",
      mySkills: "My Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
  },
  es: {
    translation: {
      welcome: "¡Bienvenido a mi portafolio!",
      home: "Inicio",
      hometitile: "Portafolio",
      homecontent:
        "Versátil desarrollador profesional Full Stack capaz de desarrollarse en un desarrollo web tanto en la parte de cliente Front End como en la de servidor Back End. Con amplios conocimientos y herramientas que le permiten afrontar cualquier fase en la construcción de un software.",
      homebutton: "Descargar CV",
      aboutMe: "Sobre mí",
      mySkills: "Mis habilidades",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      // Agrega más textos en español según sea necesario
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // Idioma por defecto
  fallbackLng: "es", // Idioma de fallback si la traducción no está disponible
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
