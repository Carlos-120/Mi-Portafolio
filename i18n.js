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
      home_alert:
        "Hello 👋, if you liked my portfolio✨ I invite you to contact me by 📧mail or 📞whatsapp",
      hometitile: "Briefcase",
      homecontent:
        "Hello! I'm Carlos, a web developer with a passion for web design and structure. With a background in Full-Stack Programming, I have developed solid skills in team development and communication. I like to spend time solving logic exercises and listening to music, I'm also open to new experiences whether they're client-side or server-side.   ",
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
      espe_1_1: "Description",
      espe_1_1_p:
        "I have worked in various sectors such as agriculture, construction, mechanics, and garment making. Throughout my career, I have held prominent roles where obedience and ingenuity have been crucial for adapting and working efficiently. I have always carried out my tasks with responsibility, maintaining a light-hearted and graceful demeanor. I believe effective communication, particularly the ability to listen to others, has been key to my performance.",
      espe_2: "Studies",
      espe_2_2_p:
        "I completed a 5-month full-stack developer program where I honed essential skills such as teamwork, effective communication, problem-solving, and website optimization. Additionally, I independently delved into basic testing concepts in Express, Vue, and React.",
      espe_3: "Goals",
      espe_3_p_1: "I am training as a Backend Developer",
      espe_3_p_2:
        "I will focus on more specific topics and explore new ways to optimize and solve problems, covering areas such as Frameworks, Databases, Security, Software Architecture, Optimization, Automation, and Deployment.",
      projects: "Projects",
      proyect_1_title: "Rick and Morty",
      proyect_1_vista: "Visit",
      proyect_1_detail: "Details",
      proyect_1_p_1: "Search Engine",
      proyect_1_p_2: "Rest requests",
      proyect_1_p_3: "Responsible design",
      //
      proyect_2_title: "Pokédex",
      proyect_2_p_1: "Search Engine",
      proyect_2_p_2: "Single factor authentication",
      proyect_2_p_3: "Paguination",
      //
      proyect_3_title: "Climate",
      proyect_3_p_1: "Search Engine",
      proyect_3_p_2: "Ambient details",
      proyect_3_p_3: "Rest requests",
      //
      proyect_4_title: "Movies API",
      proyect_4_p_1: "Use Firebase",
      proyect_4_p_2: "Documented with swaggerHup",
      proyect_4_p_3: "Resfull API",
      // Page 6
      contact: "Contact",
      contact_p: "Copyright © 2023 Juan Carlos",
    },
  },
  es: {
    translation: {
      welcome: "¡Bienvenido a mi portafolio!",
      home: "Inicio",
      home_alert:
        "Hola 👋, si te gusto mi portafolio ✨ te invito a contactarme por  📧  correo o por   📞  whatsapp",
      hometitile: "Portafolio",
      homecontent:
        "¡Hola! Soy Carlos, un Desarrollador web apasionado por el diseño y estructura web. Con una formación en Programación full-stack, he desarrollado habilidades sólidas desarrollo en quipo y la comunicación. Me gusta pasar tiempo resolviendo ejercicios de lógica y escuchando música, también estoy abierto a nuevas experiencias ya sean tanto del lado del cliente o del lado del servidor.   ",
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
      aboutMe_5_5: " Stephen Hawking:",
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
      espe_1_1: "Descripción",
      espe_1_1_p:
        "He trabajado en diversos sectores como agricultura, construcción, mecánica y confección. Durante mi trayectoria, he desempeñado roles destacados donde la obediencia y el ingenio han sido fundamentales para adaptarme y trabajar de manera eficiente. Siempre he llevado a cabo mis tareas con responsabilidad, manteniendo un ambiente de humor y gracia. Considero que la comunicación efectiva, especialmente la habilidad para escuchar a los demás, ha sido clave en mi desempeño. ",
      espe_2: "Estudios",
      espe_2_2_p:
        "Realicé un curso de programación full stack de 5 meses en el que desarrollé y puse en práctica habilidades fundamentales como el trabajo en equipo, la comunicación efectiva, la resolución de problemas y la optimización de páginas web. Además, he profundizado de forma autodidacta en temas de pruebas básicas en Express, Vue y React.",
      espe_3: "Metas",
      espe_3_p_1: "Desarrollándome como programador Backend",
      espe_3_p_2:
        "Me centraré en temas más específicos y en nuevas formas de optimizar y resolver problemas, abordando áreas como Frameworks, Bases de Datos, Seguridad, Arquitectura de Software, Optimización, Automatización y Despliegue.",

      // paguina 4
      projects: "Proyectos",
      proyect_1_title: "Rick y Morty",
      proyect_1_vista: "Visitar",
      proyect_1_detail: "Detalle",
      proyect_1_p_1: "Diseño Responsibo.",
      proyect_1_p_2: "Motor de Busqueda",
      proyect_1_p_3: "Peticiones Rest",
      //
      proyect_2_title: "Pokedex",
      proyect_2_p_1: "Motor de busqueda",
      proyect_2_p_2: "Autenticación  de un  solo factor",
      proyect_2_p_3: "Paguinación",
      //
      proyect_3_title: "Clima",
      proyect_3_p_1: "Motor de busuqeda",
      proyect_3_p_2: "Detalles de ambiente",
      proyect_3_p_3: "Peticiones Rest",
      //
      proyect_4_title: "API de películas",
      proyect_4_p_1: "Se uso firebase",
      proyect_4_p_2: "Documentada con swaggerHup",
      proyect_4_p_3: "Resfull API",
      // paguina 5
      contact: "Contacto",
      contact_p: "Derechos de autor © 2023  Juan Carlos",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
