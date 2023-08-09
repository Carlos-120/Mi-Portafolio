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
        "Versatile Full Stack professional developer, with professional experience on both the client and server side. With extensive knowledge in tools that allow me to face any phase in the construction of software.",
      homebutton: "Download CV",
      aboutMe: "About Me",
      aboutMe_1: "I am a person eager to learn new challenges.",
      aboutMe_2: "I like to work as a team, in innovative projects.",
      aboutMe_3: "I am willing to learn new technologies to push my limits.",
      aboutMe_4:
        "I like to go out to the field, meditate, exercise and learn new technologies",
      aboutMe_5: "My favorite movie is from ",
      aboutMe_5_5: "Stephen Hawking's",
      aboutMe_6:
        "'The Theory of Everything' Love and Survival: There Should Be No Limits to Human Endeavor. No matter how hard life seems to us, there is hope as long as there is life.",
      aboutMePublic: "",
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
        "        Desarrollador profesional versátil Full Stack, con experiencia profesional tanto en el lado del cliente como del servidor. Con amplios conocimientos en herramientas que me permiten afrontar cualquier fase en la construcción de software.",
      homebutton: "Descargar CV",
      aboutMe: "Sobre mí",
      aboutMe_1: "Soy una persona con ganas de aprender nuevos retos.",
      aboutMe_2: "Me gusta trabajar en equipo, en proyectos innovadores.",
      aboutMe_3:
        "Estoy dispuesto a aprender nuevas tecnologías para superar mis límites.",
      aboutMe_4:
        "Me gusta salir al campo, meditar, hacer ejercicio y aprender nuevas tecnologías",
      aboutMe_5:
        "Mi peli favorita es de la 'La teoría del todo' Amor y supervivencia de",
      aboutMe_5_5: "Stephen Hawking:",
      aboutMe_6:
        " No debería haber límites para el esfuerzo humano. No importa cuán dura nos parezca la vida, mientras haya vida hay esperanza.",
      aboutMePublic: "",
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
