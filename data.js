/**
 * Fuente de datos del portafolio.
 * Este objeto es consumido por `app.js` para renderizar el HTML.
 *
 * Estructura esperada:
 * - `name`, `profession`, `intro` para el Hero
 * - `projects[]` para la grilla de proyectos (botones Demo/Repo opcionales)
 * - `cv[]` para tarjetas de CV (bullets)
 * - `contact` para email y redes
 */
const portfolioData = {
  name: "Marcos Facchetti",
  profession: "Software Developer | AI & Backend",
  intro:
    "Desarrollador con enfoque en arquitectura Backend e IA. Estudiante en UNR (Rosario) apasionado por la ingeniería de software, la optimización de procesos y el despliegue de soluciones escalables mediante Docker.",
  
  /**
   * Proyectos destacados.
   * - `demo` es opcional: si existe, aparece el botón "Demo"
   * - `repo` es opcional: si existe, aparece el botón "Repositorio"
   */
  projects: [
    {
      title: "FraudDetectionAI Engine",
      description: "API de detección de anomalías en tiempo real.",
      technologies: ["Python", "Flask", "Machine Learning", "Docker"],
      details: "Sistema backend robusto para detección de fraude. Enfocado en arquitectura limpia, manejo de variables de entorno, Dockerización para despliegue y lógica de inferencia optimizada.",
      repo: "https://github.com/marcosfacchetti9n-ship-it/Proyecto-FraudDetectionAI-",
      demo: "https://fraud-detection-api-jmx0.onrender.com/"
    },
    {
      title: "NeuroBallistics Engine",
      description: "Motor de físicas y cinemática en tiempo real.",
      technologies: ["JavaScript", "Math & Physics", "Algorithmic Logic"],
      details: "Desarrollo de motor propio implementando vectores, cinemática y colisiones. Enfoque en optimización del Game Loop y lógica algorítmica para puntería autónoma.",
      repo: "https://github.com/marcosfacchetti9n-ship-it/Proyecto-NeuroBallistics",
      demo: "https://neuroballistics.netlify.app/"
    },
    {
      title: "TaskFlow Backend",
      description: "API RESTful con gestión de persistencia.",
      technologies: ["Java", "SQL", "API Design", "Authentication"],
      details: "Gestor de tareas enfocado en diseño de API REST, autenticación segura de usuarios y gestión eficiente de bases de datos relacionales.",
      repo: "https://github.com/marcosfacchetti9n-ship-it/Proyecto-TaskFlow",
      demo: "https://codex-1-2dka.onrender.com/"
    },
    {
      title: "GeoEngine 3D",
      description: "Simulación matemática y renderizado.",
      technologies: ["Python", "Linear Algebra", "Geometry"],
      details: "Exploración de álgebra lineal 3D y proyecciones geométricas. Aplicación práctica de cálculos matemáticos avanzados en entornos de simulación.",
      repo: "https://github.com/marcosfacchetti9n-ship-it/Proyecto-GeoEngine"
    },
    {
      title: "Northstar Shop (E-commerce Full Stack)",
      description: "E-commerce full stack con autenticación JWT, roles y flujo de compra.",
      technologies: ["Java 17", "Spring Boot", "Spring Security", "PostgreSQL", "JWT", "Docker", "Render"],
      details:
        "Aplicación full stack end-to-end: modelado relacional, autenticación y autorización (roles USER/ADMIN), carrito, checkout y órdenes. Backend por capas (controller/service/repository) con manejo global de errores y deploy real (frontend + API + DB cloud).",
      repo: "https://github.com/marcosfacchetti9n-ship-it/Proyecto-E-commerce",
      demo: "https://e-commerce-1-7jox.onrender.com"
    },
    {
      title: "Usuarios CRUD (Frontend + API REST)",
      description: "Aplicación web para crear, listar, editar y eliminar usuarios.",
      technologies: ["HTML", "CSS", "JavaScript", "REST API", "PostgreSQL"],
      details:
        "Frontend en JavaScript vanilla conectado a una API REST (backend en Java) con persistencia en PostgreSQL. Incluye operaciones CRUD completas con UI simple y flujo de edición/eliminación.",
      repo: "https://github.com/marcosfacchetti9n-ship-it/Proyecto-Usuarios-CRUD",
      demo: "https://mftestfrontend.netlify.app/"
    }
  ],

  /**
   * Secciones de CV: cada sección se renderiza como tarjeta con bullets.
   */
  cv: [
    {
      title: "Perfil Profesional",
      items: [
        "Enfoque en metodologías de desarrollo profesional (Git workflows, Docker, Docstrings).",
        "Capacidad de resolución de problemas algorítmicos y matemáticos aplicados a IA.",
        "Mentalidad orientada a la calidad de código, legibilidad y mantenibilidad."
      ]
    },
    {
      title: "Habilidades Técnicas",
      items: [
        "Lenguajes: Python, JavaScript, Java.",
        "Backend & Dev: APIs, Docker, Git (Branching), Bases de Datos SQL.",
        "IA & Math: Algoritmos, Álgebra Lineal, Cinemática."
      ]
    }
  ],

  /**
   * Bloque de contacto: email + mensaje + links externos.
   */
  contact: {
    email: "marcosfacchetti9n@gmail.com",
    message: "Construyo soluciones enfocadas en escalabilidad y limpieza de código. ¿Tienes un desafío técnico donde pueda aportar? Escríbeme.",
    socials: [
      { label: "GitHub", url: "https://github.com/marcosfacchetti9n-ship-it" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/marcos-facchetti-50b184303/" }
    ]
  }
};