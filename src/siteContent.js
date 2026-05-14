/**
 * Personalización del sitio — edita este archivo para cambiar textos, enlaces,
 * experiencia, proyectos, habilidades y redes. Las rutas URL (/about, etc.) no cambian.
 */

// ----- Medios compartidos (vídeo/audio de fondo) -----
import videoMenu from "./assets/Mainn-web.mp4";
import videoExperiencia from "./assets/main2-web.mp4";
import audioFondo from "./assets/Color Your Night - Lotus Juice - Topic (128k).mp3";

// ----- Sobre mí -----
import sobreMiVideo from "./assets/main1.mp4";
import retratoSobreMi1 from "./assets/mainm.jpeg";
import retratoSobreMi2 from "./assets/mainm2.jpeg";
import retratoSobreMi3 from "./assets/mainf.jpeg";
import sobreMiPersonaje1 from "./assets/char1.png";
import sobreMiPersonaje2 from "./assets/char2.png";
import sobreMiPersonaje3 from "./assets/char3.png";

// ----- Proyectos (intro velada) -----
import imgGuiaIntro from "./assets/igor.png";
import imgAsistenteIntro from "./assets/elizabeth-2.png";

// ----- Habilidades -----
import habVideo from "./assets/main2-web.mp4";
import habImgLenguajes from "./assets/char5.png";
import habImgFrameworks from "./assets/char6.jpg";
import habImgCloud from "./assets/char7.jpg";
import habImgMl from "./assets/char4.jpg";

// ----- Redes -----
import redesVideo from "./assets/main3-web.mp4";
import redesPersonaje1 from "./assets/char1.png";
import redesPersonaje2 from "./assets/char2.png";
import redesPersonaje3 from "./assets/char3.png";

export const metaSitio = {
  tituloPagina: "Angel Gabriel Morales Aguilar — Portafolio",
  idiomaHtml: "es",
};

/** Texto que aparece junto al reproductor de música */
export const musicaFondo = {
  tituloMostrado: "Color Your Night — Azumi Takahashi & Lotus Juice",
  etiquetas: {
    pulsarParaEmpezar: "MÚSICA: TECLA M O CLIC PARA REPRODUCIR",
    activaMuteada: "MÚSICA: EN SILENCIO (MAYÚS+M O CLIC PARA SONIDO)",
    activa: "MÚSICA: ACTIVA (M O CLIC PARA PAUSAR)",
    pausada: "MÚSICA: PAUSADA (M O CLIC PARA REPRODUCIR)",
  },
  accesibilidadPausar: "Pausar música de fondo",
  accesibilidadReproducir: "Reproducir música de fondo",
};

export const mediosGlobales = {
  videoMenuPrincipal: videoMenu,
  videoExperienciaFondo: videoExperiencia,
  audioFondo,
};

export const marcaMenu = {
  linea1: "Angel Gabriel",
  linea2: "Morales Aguilar",
};

export const menuPrincipal = [
  { id: "about", etiqueta: "SOBRE MÍ", pagina: "about", fontSize: 80, offsetX: 0, offsetY: 0, skew: -6, skewY: 10 },
  { id: "experience", etiqueta: "EXPERIENCIA", pagina: "experience", fontSize: 66, offsetX: 20, offsetY: 8, skew: -11, skewY: -10 },
  { id: "projects", etiqueta: "PROYECTOS", pagina: "projects", fontSize: 68, offsetX: 8, offsetY: 6, skew: 0, skewY: -4 },
  { id: "skills", etiqueta: "HABILIDADES", pagina: "skills", fontSize: 74, offsetX: 16, offsetY: 8, skew: -3, skewY: 5 },
  { id: "socials", etiqueta: "REDES", pagina: "socials", fontSize: 56, offsetX: 10, offsetY: 6, skew: -4, skewY: 7 },
];

export const ayudaMenu = {
  seleccionar: "SELECCIONAR",
  confirmar: "CONFIRMAR",
};

export const sobreMi = {
  videoFondo: sobreMiVideo,
  imagenesRetrato: [retratoSobreMi1, retratoSobreMi2, retratoSobreMi3],
  personajesBarra: [sobreMiPersonaje1, sobreMiPersonaje2, sobreMiPersonaje3],
  rolesBarra: [{ texto: "LÍDER" }, { texto: "EQUIPO" }, { texto: "EQUIPO" }],
  seccionesMenu: [
    { id: "perfil", etiqueta: "PERFIL" },
    { id: "formacion", etiqueta: "FORMACIÓN" },
    { id: "actualidad", etiqueta: "EN QUÉ ESTOY" },
  ],
  contenidoAlRevelar: [
    {
      superior: [
        "Estudiante de Ingeniería de Software con IA, Senati (Lima).",
        "Desarrollo web: React, HTML, CSS, JavaScript; APIs REST (Axios); Git / GitHub.",
        "Prácticas (6 meses, 2025) en APM Inversiones: interfaces web, componentes reutilizables, trabajo en equipo.",
        "Python, bases de datos (MySQL, PostgreSQL, Supabase), fundamentos MVC.",
      ],
      inferior: "Lima, Perú",
    },
    {
      superior: [
        "Senati — Ingeniería de Software con IA (en curso, previsto 2026).",
        "Cisco Networking Academy (2024): Ciencia de Datos, Hardware, Redes, Ciberseguridad, IoT.",
        "Stack: JavaScript, Python, React, HTML5, CSS3, MySQL, PostgreSQL, Supabase.",
        "Herramientas: MVC, APIs REST, Git, GitHub, VS Code.",
      ],
      inferior: "Graduación prevista: 2026",
    },
    {
      superior: [
        "Proyectos destacados en este portafolio:",
        "Sistema web institucional (PHP, Yii2, MySQL) con buscador con IA.",
        "Sistema de votación digital (TypeScript, Java, Supabase) con dashboard en tiempo real.",
        "Este portafolio interactivo (React, Vite, Framer Motion, React Router).",
      ],
      inferior: "Contacto: gabrielmoralesaguilar5@gmail.com · +51 929 674 111 · GitHub: AngeLL-cmd",
    },
  ],
  ayuda: {
    seleccionar: "SELECCIONAR (↑↓ O RATÓN)",
    revelar: "MOSTRAR (↵ O CLIC)",
    volver: "ATRÁS",
  },
  movil: {
    volver: "ATRÁS",
    ocultar: "OCULTAR",
    mostrar: "MOSTRAR",
  },
  ariaControlesMovil: "Controles táctiles (sobre mí)",
};

export const experienciaUi = {
  codigoCabecera: "NOMBRE EN CLAVE: Angel Gabriel Morales Aguilar",
  titulo: "ARCHIVO DE PROYECTOS",
  subtitulo: "Estudiante de Ingeniería de Software con IA · Desarrollo web",
  logTitulo: "REGISTRO",
  archivoPrevio: "◀ ARCHIVO ANTERIOR",
  archivoSiguiente: "SIGUIENTE ARCHIVO ▶",
  etiquetasTarjeta: {
    empresa: "ORGANIZACIÓN",
    fechas: "FECHAS",
    resumen: "RESUMEN DEL CASO",
    tech: "TECNOLOGÍAS",
    briefing: "PARTES DESTACADAS",
    habilidades: "HABILIDADES ASOCIADAS",
    estadoCompleto: "COMPLETADA",
    estadoActiva: "EN CURSO",
    estadoEntrante: "PRÓXIMA",
    liderMision: "REFERENCIA",
  },
  /** Texto accesible del panel derecho (contexto del caso, sin foto). */
  lateralAria: "Contexto del expediente",
  /** Valores internos de `estado` en cada misión → texto mostrado */
  textoPorEstado: {
    COMPLETE: "COMPLETADA",
    ACTIVE: "EN CURSO",
    INCOMING: "PRÓXIMA",
  },
  pie: {
    cambiar: "CAMBIAR ARCHIVO",
    volver: "ATRÁS",
  },
};

/**
 * Cada entrada es una experiencia en /experience.
 * Opcional: `visual` (import de imagen). Si no se define, el panel derecho muestra solo datos del caso.
 */
export const experiencias = [
  {
    id: "mission-apm",
    codigoMision: "Prácticas 2025",
    operacion: "APM INVERSIONES E.I.R.L.",
    rol: "Practicante de Desarrollo de Software",
    organizacion: "APM INVERSIONES E.I.R.L.",
    referencia:
      "Prácticas profesionales: interfaces web con React, consumo de APIs REST y trabajo colaborativo con Git.",
    estado: "COMPLETE",
    resumen:
      "Seis meses desarrollando interfaces web con React, HTML, CSS y JavaScript; implementación de componentes reutilizables; consumo de APIs REST con Axios; control de versiones con Git y trabajo en equipo.",
    fechas: "[2025] · 6 meses",
    tecnologias: ["React", "JavaScript", "HTML5", "CSS3", "Axios", "REST API", "Git", "GitHub"],
    logros: [
      "Desarrollo de interfaces de usuario con React y stack web estándar",
      "Integración de servicios mediante consumo de APIs REST (Axios)",
      "Componentes reutilizables y mantenimiento de código en equipo",
      "Uso de Git para flujo de trabajo y revisión colaborativa",
    ],
    habilidadesDesbloqueadas: [
      "Desarrollo frontend con React",
      "Consumo e integración de APIs REST",
      "Trabajo en equipo y buenas prácticas con Git",
    ],
  },
  {
    id: "mission-01",
    codigoMision: "Proyecto 1",
    operacion: "INSTITUCION EDUCATIVA",
    rol: "Software Developer (Full Stack)",
    organizacion: "CODAINI",
    referencia: "Proyecto desarrollado para una institución educativa",
    estado: "COMPLETE",
    resumen: "Rediseño y desarrollo full stack de la web de un colegio",
    fechas: "[Abril 2026] – [Abril 2026]",
    tecnologias: ["PHP, Yii2, Composer, HTML, CSS, JavaScript, MySQL."],
    logros: [
      "Rediseño completo del sistema web, mejorando usabilidad y estructura",
      "Optimización del rendimiento y organización de la información",
      "Integración de buscador inteligente con IA",
    ],
    habilidadesDesbloqueadas: ["Desarrollo web full stack", "Programación en PHP", "Diseño e implementación de bases de datos"],
  },
  {
    id: "mission-02",
    codigoMision: "Proyecto 2",
    operacion: "Sistema de votación",
    rol: "Software Developer (Full Stack)",
    organizacion: "Senati",
    referencia: "Proyecto académico enfocado en el desarrollo de un sistema de votación digital con análisis de datos y visualización de resultados.",
    estado: "COMPLETE",
    fechas: "[Octubre 2025] – [Octubre 2025]",
    resumen: "Sistema de votación digital con autenticación por DNI, tiempo limitado de votación, resultados en tiempo real y análisis estadístico.",
    tecnologias: ["TypeScript", "JavaScript", "Java", "Supabase", "API REST"],
    logros: ["Hecho Sistema de votación con autenticación por DNI y tiempo limitado", "Dashboard interactivo con resultados en tiempo real y visualización de porcentajes", "Módulo de análisis estadístico (tendencias, participación y detección de anomalías)", "Limpieza y validación de datos (nulos y duplicados)", "Generación y exportación de reportes del sistema"],
    habilidadesDesbloqueadas: ["Desarrollo full stack", "Diseño de sistemas en tiempo real", "Análisis y procesamiento de datos", "Visualización de datos", "Validación y limpieza de datos", "Implementación de lógica de negocio compleja", "Gestión de autenticación y control de acceso"],
  },
  {
    id: "mission-03",
    codigoMision: "Proyecto 3",
    operacion: "PORTAFOLIO PERSONALIZADO",
    rol: "Frontend Developer",
    organizacion: "Proyecto personal (Angel Gabriel Morales Aguilar)",
    referencia:
      "Proyecto personal de portafolio interactivo desarrollado de forma individual.",
    estado: "COMPLETE",
    fechas: "[Enero 2026] – ACTUALIDAD",
    resumen: "Desarrollo de un portafolio personal interactivo tipo SPA inspirado en la interfaz de Persona 3, con navegación por secciones, animaciones dinámicas y contenido multimedia.",
    tecnologias: ["React", "TypeScript / JavaScript", "HTML5", "CSS3", "React Router DOM", "Framer Motion", "Vite"],
    logros: [
      "Desarrollo de portafolio interactivo tipo SPA con navegación sin recargas",
      "Implementación de animaciones avanzadas con transiciones entre vistas",
      "Diseño inspirado en interfaz de videojuego (Persona 3)",
      "Integración de contenido dinámico centralizado para fácil mantenimiento",
      "Optimización de experiencia de usuario con navegación fluida",
    ],
    habilidadesDesbloqueadas: [
      "Desarrollo frontend con React",
      "Creación de interfaces interactivas",
      "Animaciones web (Framer Motion)",
      "Diseño de experiencias de usuario (UI/UX)",
      "Manejo de rutas en aplicaciones SPA",
      "Organización de contenido dinámico",
    ],
  },
];

export const arcanosProyectos = {
  FOOL: {
    num: "0",
    nombre: "Proyecto",
    color: "#4de8ff",
    dimColor: "rgba(77,232,255,0.12)",
    bordeActivo: "rgba(77,232,255,0.7)",
  },
  MAGICIAN: {
    num: "I",
    nombre: "EL MAGO",
    color: "#f0c040",
    dimColor: "rgba(240,192,64,0.12)",
    bordeActivo: "rgba(240,192,64,0.7)",
  },
  JUSTICE: {
    num: "XI",
    nombre: "LA JUSTICIA",
    color: "#90d8ff",
    dimColor: "rgba(144,216,255,0.12)",
    bordeActivo: "rgba(144,216,255,0.7)",
  },
  HERMIT: {
    num: "IX",
    nombre: "EL ERMITAÑO",
    color: "#9898ee",
    dimColor: "rgba(152,152,238,0.12)",
    bordeActivo: "rgba(152,152,238,0.7)",
  },
};

/** Cada proyecto: `arcano` debe ser exactamente FOOL | MAGICIAN | JUSTICE | HERMIT (ver `arcanosProyectos`). */
export const proyectosLista = [
  {
    id: "proyecto-01",
    titulo: "Sistema Web de Gestión para Colegio",
    arcano: "FOOL",
    stack: ["PHP", "Yii2", "MySQL", "Composer", "HTML", "CSS", "JavaScript", "IA API"],
    resumen: "Sistema web para gestión y rediseño de plataforma institucional con buscador inteligente.",
    impacto: "Demuestra capacidad full stack, integración de IA y mejora de experiencia de usuario en sistemas reales.",
    detalles:
      "Desarrollo basado en arquitectura MVC con Yii2. Implementación de backend en PHP con Composer, base de datos MySQL y frontend con HTML, CSS y JavaScript. Se integró un sistema de búsqueda inteligente con IA para mejorar el acceso a la información. Se optimizó la estructura del sistema y la experiencia de usuario mediante rediseño completo de la interfaz.",
    enlace: "https://github.com/AngeLL-cmd/espinosanuevo-main.git"
  },
  {
    id: "proyecto-02",
    titulo: "Sistema de Votación Digital",
    arcano: "JUSTICE",
    stack: ["Java", "TypeScript", "JavaScript", "Supabase", "API REST"],
    resumen: "Plataforma de votación digital con autenticación por DNI, tiempo limitado y análisis en tiempo real.",
    impacto: "Demuestra manejo de sistemas en tiempo real, análisis de datos y lógica compleja de negocio.",
    detalles:
      "Backend desarrollado en Java con API REST y frontend en TypeScript/JavaScript. Uso de Supabase como base de datos cloud. Implementación de autenticación por DNI con control de tiempo de votación. Desarrollo de dashboard en tiempo real con visualización de resultados y porcentajes. Integración de módulos de análisis estadístico, limpieza de datos y exportación de reportes.",
    enlace: "https://github.com/AngeLL-cmd/FRONTENDULTIMOLLLL.git"
  },
  {
    id: "proyecto-03",
    titulo: "Portafolio Interactivo Persona 3",
    arcano: "FOOL",
    stack: ["React", "Vite", "Framer Motion", "React Router", "JavaScript", "CSS"],
    resumen: "Portafolio web interactivo tipo SPA inspirado en estilo de videojuego Persona 3.",
    impacto: "Demuestra habilidades avanzadas en frontend, diseño UI/UX y animaciones web modernas.",
    detalles:
      "Desarrollo de SPA con React y Vite, utilizando React Router para navegación sin recarga y Framer Motion para animaciones avanzadas. Diseño inspirado en interfaz de videojuego con experiencia inmersiva. Implementación de sistema centralizado de contenido mediante siteContent.js para fácil mantenimiento. Integración de audio, video y transiciones dinámicas para mejorar la experiencia de usuario.",
    enlace: "https://github.com/AngeLL-cmd/Persona-Portafolio.git"
  },
];

export const proyectosUi = {
  ceja: "ARCHIVO · PROYECTOS",
  titulo: "COMPENDIO",
  subtitulo: "Elige una entrada para ver detalles",
  proyectosEtiqueta: "PROYECTOS",
  estadoSistemaEtiqueta: "ESTADO DEL SISTEMA",
  estadoSistemaValor: "ACTIVO",
  perfilPanel: "PERFIL",
  complejidad: "COMPLEJIDAD",
  alcance: "ALCANCE",
  innovacion: "INNOVACIÓN",
  estadoEntrada: "ESTADO",
  estadoActivoTarjeta: "◆ ACTIVO",
  intro: {
    imgGuia: imgGuiaIntro,
    imgAsistente: imgAsistenteIntro,
    nombreGuia: "GUÍA",
    nombreAsistente: "ASISTENTE",
    textoGuia:
      "«Bienvenido/a… El compendio está listo. Elige una entrada para revisar los detalles.»",
    textoAsistente:
      "«Estás a punto de ver el archivo digital de Angel Gabriel Morales Aguilar: proyectos y notas reunidos en un solo lugar. ¿Continuar?»",
    volverInicio: "VOLVER",
    continuar: "CONTINUAR",
    noVolver: "NO, ATRÁS",
    siContinuar: "SÍ, CONTINUAR",
  },
  pie: {
    seleccionar: "SELECCIONAR",
    abrir: "ABRIR",
    volver: "ATRÁS",
  },
  modal: {
    invocacion: "VISTA DETALLE ·",
    salir: "✕ CERRAR",
    perfilProyecto: "FICHA DEL PROYECTO",
    resultado: "RESULTADO / IMPACTO",
    enlaceExterno: "⬡ ABRIR ENLACE",
  },
};

export const habilidadesMedios = {
  videoFondo: habVideo,
};

export const categoriasHabilidades = [
  {
    id: "lenguajes",
    titulo: "Lenguajes",
    imagen: habImgLenguajes,
    lista: [
      { nombre: "JavaScript", nivel: 4 },
      { nombre: "TypeScript", nivel: 3 },
      { nombre: "Python", nivel: 4 },
      { nombre: "HTML5 / CSS3", nivel: 4 },
      { nombre: "SQL (MySQL, PostgreSQL)", nivel: 4 },
      { nombre: "Java", nivel: 2 },
      { nombre: "PHP", nivel: 4 },
      { nombre: "C++", nivel: 2 },
    ],
  },
  {
    id: "frameworks",
    titulo: "Frameworks y librerías",
    imagen: habImgFrameworks,
    lista: [
      { nombre: "React (Hooks, Axios, React Router)", nivel: 4 },
      { nombre: "Vite", nivel: 4 },
      { nombre: "React Router DOM", nivel: 3 },
      { nombre: "Framer Motion", nivel: 3 },
      { nombre: "Next.js", nivel: 2 },
      { nombre: "Node.js", nivel: 2 },
      { nombre: "Spring Boot", nivel: 2 },
      { nombre: "Yii2", nivel: 3 },
      { nombre: "Composer", nivel: 3 },
    ],
  },
  {
    id: "cloud",
    titulo: "Nube y DevOps",
    imagen: habImgCloud,
    lista: [
      { nombre: "Git / GitHub", nivel: 4 },
      { nombre: "Visual Studio Code", nivel: 4 },
      { nombre: "CI/CD básico (deploy en Vercel / Netlify / GitHub Pages)", nivel: 3 },
      { nombre: "Supabase (Backend as a Service)", nivel: 3 }

    ],
  },
  {
    id: "ml",
    titulo: "IA / ML",
    imagen: habImgMl,
    lista: [
      { nombre: "Scikit-Learn", nivel: 3 },
      { nombre: "PyTorch", nivel: 3 },
      { nombre: "TensorFlow", nivel: 3 },
      { nombre: "Hugging Face", nivel: 3 }
    ],
  },
];

export const habilidadesUi = {
  titulo: "HABILIDADES",
  subtitulo: "Selecciona una tarjeta y pulsa Enter para ver las estadísticas.",
  ariaLista: "Categorías de habilidades",
  ariaAnterior: "Tarjeta anterior",
  ariaSiguiente: "Tarjeta siguiente",
  pieVolver: "ATRÁS",
  pieSeleccionar: "SELECCIONAR",
  pieVoltear: "VOLTEAR",
  estrellasAria: (n) => `${n} de 5`,
};

export const redes = {
  videoFondo: redesVideo,
  personajes: [redesPersonaje1, redesPersonaje2, redesPersonaje3],
  roles: [
    { texto: "LÍDER", color: "#e8c100", bg: "rgba(232,193,0,0.12)", border: "rgba(232,193,0,0.5)" },
    { texto: "EQUIPO", color: "#4a8fff", bg: "rgba(74,143,255,0.12)", border: "rgba(74,143,255,0.5)" },
    { texto: "EQUIPO", color: "#4a8fff", bg: "rgba(74,143,255,0.12)", border: "rgba(74,143,255,0.5)" },
  ],
  enlaces: [
    {
      id: "github",
      etiqueta: "GITHUB",
      usuario: "@AngeLL-cmd",
      href: "https://github.com/AngeLL-cmd",
      icono: "⌘",
      stats: [
        { etiqueta: "TIPO", valor: "DEV", color: "#9147ff" },
        { etiqueta: "FOCO", valor: "CÓDIGO", color: "#bf94ff" },
      ],
    },
    {
      id: "linkedin",
      etiqueta: "LINKEDIN",
      usuario: "/in/TU-PERFIL",
      href: "",
      icono: "in",
      stats: [
        { etiqueta: "TIPO", valor: "NO DISPONIBLE", color: "#0a66c2" },
        { etiqueta: "FOCO", valor: "POR EL MOMENTO", color: "#71b7fb" },
      ],
    },
    {
      id: "email",
      etiqueta: "CONTACTO",
      usuario: "gabrielmoralesaguilar5@gmail.com",
      href: "mailto:gabrielmoralesaguilar5@gmail.com",
      icono: "@",
      stats: [
        { etiqueta: "TIPO", valor: "DIRECTO", color: "#00f2ea" },
        { etiqueta: "RESP", valor: "48H", color: "#ff0050" },
      ],
    },
  ],
  ayuda: {
    seleccionar: "SELECCIONAR",
    abrir: "ABRIR",
    volver: "ATRÁS",
  },
  movil: {
    volver: "ATRÁS",
    abrir: "ABRIR",
  },
  ariaMovil: "Controles táctiles (redes)",
};
