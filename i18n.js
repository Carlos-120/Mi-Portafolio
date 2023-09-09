// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Define los idiomas disponibles y sus textos
const resources = {
  en: {
    translation: {
      // pege 1
      welcome: "Welcome to my portfolio!",
      home: "Home",
      hometitile: "Briefcase",
      homecontent:
        "Versatile Full Stack professional developer, with professional experience on both the client and server side. With extensive knowledge in tools that allow me to face any phase in the construction of software.",
      homebutton: "Download CV",
      // Page 2
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
      // Page 3
      mySkills: "My Skills",
      skill_1: "Design: Mobile - Desktop",
      skill_2: "Knowledge in databases",
      skill_3: "Handling rest requests",
      skill_4: "JWT Handling, Authentication",
      skill_5: "Technology adaptability",
      // Page 4
      experience: "Experience",
      espe_1: "Work experience",
      espe_1_1: "In digital technologies none",
      espe_1_1_p:
        "I have had 4 jobs in which I have acquired adaptability, communication, and teamwork skills. I may not have work experience in the digital world but I can adapt quickly because I have the necessary knowledge in web development such as the client and server side, I am prepared to face new technologies and tools for web development",
      espe_2: "Studies",
      espe_2_2_p:
        "I took a 5-month course as a full stack programmer in which I put into practice certain skills such as teamwork, communication, the ease of solving problems, and optimizing web pages.",
      espe_3: "Goals",
      espe_3_p_1: "I'm working on personal projects",
      espe_3_p_2:
        "I am also studying new tools and frameworks to optimize projects, also delving into unit tests for the proper functioning of my projects.",
      // Page 5
      projects: "Projects",
      proyect_1_title: "Rick and Morty",
      proyect_1_vista: "Visit",
      proyect_1_detail: "Details",
      proyect_1_p_1: "Desktop design, navigation between dimensions",
      proyect_1_p_2: "Search functions by name or number of dimensions",
      proyect_1_p_3: "The API was manipulated with rest requests",
      //
      proyect_2_title: "Pokédex",
      proyect_2_p_1: "Desktop design, information interfaces for each pokemon.",
      proyect_2_p_2: "search by name and history by username",
      proyect_2_p_3: "show by maginas pokemon lists",
      //
      proyect_3_title: "Climate",
      proyect_3_p_1: "Desktop design, use of API",
      proyect_3_p_2: "Capturing temperature details in real-time",
      proyect_3_p_3: "Navigation of different climates in different places",
      //
      proyect_4_title: "Movies API",
      proyect_4_p_1: "Made with firebase, for data storage",
      proyect_4_p_2: "Documented with swaggerHup, all requests",
      proyect_4_p_3:
        "Resfull API, a custom skeleton of my own was also used, for the adjustment of the API",
      // Page 6
      contact: "Contact",
      contact_p: "Copyright © 2023 Juan Carlos",
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
      // paguina 1
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
      // paguina 2
      mySkills: "Mis habilidades",
      skill_1: "Diseño: Movil - Escritorio",
      skill_2: "Conocimientos en bases de datos",
      skill_3: "Manejo de peticiones Rest",
      skill_4: "Manejo de JWT, Autenticación",
      skill_5: "Adaptabilidad tecnológica",
      // paguina 3
      experience: "Experiencia",
      espe_1: "Experiencia laboral",
      espe_1_1: "En tecnologías digitales ninguno",
      espe_1_1_p:
        "He tenido 4 trabajos en los que he adquirido habilidades de adaptabilidad, comunicación y trabajo en equipo. Puede que no tenga experiencia laboral en el mundo digital pero puedo adaptarme rápidamente porque tengo los conocimientos necesarios en desarrollo web como el lado cliente y servidor, estoy preparado para enfrentar nuevas tecnologías y herramientas para el desarrollo web.",
      espe_2: "Estudios",
      espe_2_2_p:
        "Realicé un curso de 5 meses como programador full stack en el que puse en práctica ciertas habilidades como el trabajo en equipo, la comunicación, la facilidad para resolver problemas y la optimización de páginas web.",
      espe_3: "Metas",
      espe_3_p_1: "Estoy trabajando en proyectos personales",
      espe_3_p_2:
        "También estoy estudiando nuevas herramientas y frameworks para optimizar proyectos, profundizando también en pruebas unitarias para el buen funcionamiento de mis proyectos",

      // paguina 4
      projects: "Proyectos",
      proyect_1_title: "Rick y Morty",
      proyect_1_vista: "Visitar",
      proyect_1_detail: "Detalle",
      proyect_1_p_1: "Diseño de escritorio, navegación entre dimensiones.",
      proyect_1_p_2: "Funciones de búsqueda por nombre o número de dimensiones",
      proyect_1_p_3: "La API fue manipulada con solicitudes Rest",
      //
      proyect_2_title: "Pokedex",
      proyect_2_p_1:
        "Diseño de escritorio, interfaces de información para cada pokemon.",
      proyect_2_p_2: "Duscar por nombre e historial por nombre de usuario",
      proyect_2_p_3: "mostrar por maginas listas de pokemon",
      //
      proyect_3_title: "Clima",
      proyect_3_p_1: "Diseño de escritorio, uso de API.",
      proyect_3_p_2: "Captura de detalles de temperatura en tiempo real",
      proyect_3_p_3: "Navegación de diferentes climas en diferentes lugares",
      //
      proyect_4_title: "API de películas",
      proyect_4_p_1: "Hecho con firebase, para almacenamiento de datos.",
      proyect_4_p_2: "Documentada con swaggerHup, todas las solicitudes",
      proyect_4_p_3:
        "Resfull API, también se utilizó un esqueleto propio y personalizado, para el ajuste de la API.",
      // paguina 5
      contact: "Contacto",
      contact_p: "Derechos de autor © 2023  Juan Carlos",
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
