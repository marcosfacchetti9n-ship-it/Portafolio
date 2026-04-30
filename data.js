const portfolioData = {
  name: "Marcos Facchetti",
  pageTitle: "Marcos Facchetti | Backend Developer",
  role: "Backend Developer | AI & Full Stack",
  location: "Rosario, Argentina",
  cvUrl: "assets/marcos-facchetti-cv.pdf",

  hero: {
    eyebrow: "UNR - Backend - IA aplicada - Disponible para entrevistas",
    intro:
      "Construyo APIs, dashboards y sistemas con logica de negocio clara: autenticacion, persistencia, Docker, pruebas y modelos de IA aplicados a problemas concretos.",
    actions: [
      { label: "Ver proyectos", url: "#proyectos", variant: "primary" },
      { label: "Descargar CV", url: "assets/marcos-facchetti-cv.pdf", variant: "secondary", download: true },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/marcos-facchetti-50b184303/", variant: "ghost" }
    ],
    stats: [
      { value: "7", label: "proyectos publicados" },
      { value: "API + IA", label: "foco principal" },
      { value: "Docker", label: "deploy reproducible" }
    ]
  },

  projects: [
    {
      title: "RiskShield AI",
      featured: true,
      kind: "Full stack risk platform",
      categories: ["IA", "Backend", "Full Stack"],
      description:
        "Plataforma end-to-end para scoring de riesgo transaccional con FastAPI, PostgreSQL, reglas de negocio, Machine Learning y dashboard administrativo.",
      impact:
        "Simula un flujo profesional de riesgo: login con JWT, analisis de transacciones, decision APPROVE/REVIEW/BLOCK, metricas operativas y feedback manual para mejora futura del modelo.",
      technologies: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "scikit-learn", "React", "TypeScript", "Docker"],
      highlights: [
        "Arquitectura modular con routers, schemas, services y motor de riesgo testeable.",
        "Score final combinando reglas deterministicas y modelo ML opcional.",
        "Dashboard con metricas, transacciones recientes, detalle y feedback manual."
      ],
      repo: "https://github.com/marcosfacchetti9n-ship-it/Proyecto-RiskShield_AI",
      demo: "https://riskshield-dashboard.onrender.com",
      docs: "https://proyecto-riskshield-ai.onrender.com/docs"
    },
    {
      title: "Northstar Shop",
      kind: "E-commerce full stack",
      categories: ["Backend", "Full Stack"],
      description: "E-commerce con autenticacion JWT, roles, carrito, checkout y ordenes.",
      impact:
        "Backend por capas con Spring Boot, PostgreSQL y manejo global de errores; deploy real con frontend, API y base de datos cloud.",
      technologies: ["Java 17", "Spring Boot", "Spring Security", "PostgreSQL", "JWT", "Docker", "Render"],
      repo: "https://github.com/marcosfacchetti9n-ship-it/Proyecto-E-commerce",
      demo: "https://e-commerce-1-7jox.onrender.com"
    },
    {
      title: "FraudDetectionAI Engine",
      kind: "API de deteccion",
      categories: ["IA", "Backend"],
      description: "API de deteccion de anomalias en tiempo real.",
      impact:
        "Sistema backend para inferencia, variables de entorno y despliegue Docker, pensado para exponer predicciones desde una API mantenible.",
      technologies: ["Python", "Flask", "Machine Learning", "Docker"],
      repo: "https://github.com/marcosfacchetti9n-ship-it/Proyecto-FraudDetectionAI-",
      demo: "https://fraud-detection-api-jmx0.onrender.com/"
    },
    {
      title: "TaskFlow Backend",
      kind: "API REST",
      categories: ["Backend"],
      description: "API RESTful con autenticacion, usuarios y persistencia.",
      impact:
        "Proyecto enfocado en contratos REST, seguridad basica y gestion de datos relacionales para una app de tareas.",
      technologies: ["Java", "SQL", "API Design", "Authentication"],
      repo: "https://github.com/marcosfacchetti9n-ship-it/Proyecto-TaskFlow",
      demo: "https://codex-1-2dka.onrender.com/"
    },
    {
      title: "NeuroBallistics Engine",
      kind: "Simulacion",
      categories: ["Algoritmos", "Frontend"],
      description: "Motor de fisicas, cinematica y colisiones en tiempo real.",
      impact:
        "Implementa vectores, game loop y logica algoritmica para punteria autonoma, con foco en rendimiento e interaccion visual.",
      technologies: ["JavaScript", "Math & Physics", "Algorithmic Logic"],
      repo: "https://github.com/marcosfacchetti9n-ship-it/Proyecto-NeuroBallistics",
      demo: "https://neuroballistics.netlify.app/"
    },
    {
      title: "Usuarios CRUD",
      kind: "Frontend + API",
      categories: ["Backend", "Frontend"],
      description: "Aplicacion web para crear, listar, editar y eliminar usuarios.",
      impact:
        "Frontend en JavaScript vanilla conectado a API REST con persistencia PostgreSQL y flujo completo de edicion/eliminacion.",
      technologies: ["HTML", "CSS", "JavaScript", "REST API", "PostgreSQL"],
      repo: "https://github.com/marcosfacchetti9n-ship-it/Proyecto-Usuarios-CRUD",
      demo: "https://mftestfrontend.netlify.app/"
    },
    {
      title: "GeoEngine 3D",
      kind: "Motor matematico",
      categories: ["Algoritmos"],
      description: "Simulacion matematica y renderizado geometrico.",
      impact:
        "Exploracion de algebra lineal 3D, proyecciones y calculos geometricos aplicados a entornos de simulacion.",
      technologies: ["Python", "Linear Algebra", "Geometry"],
      repo: "https://github.com/marcosfacchetti9n-ship-it/Proyecto-GeoEngine"
    }
  ],

  stack: [
    {
      title: "Backend",
      items: ["Java", "Spring Boot", "Python", "FastAPI", "Flask", "REST APIs"]
    },
    {
      title: "Datos e IA",
      items: ["PostgreSQL", "SQLAlchemy", "pandas", "numpy", "scikit-learn", "risk scoring"]
    },
    {
      title: "Frontend",
      items: ["React", "TypeScript", "Vite", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Infra y calidad",
      items: ["Docker", "Docker Compose", "Render", "Git workflows", "pytest", "env config"]
    }
  ],

  cv: [
    {
      title: "Perfil profesional",
      items: [
        "Desarrollador orientado a backend, IA aplicada y productos full stack con deploy real.",
        "Interes fuerte en arquitectura limpia, legibilidad, pruebas y separacion de responsabilidades.",
        "Estudiante en UNR, Rosario, con foco en crecer hacia equipos de software profesionales."
      ]
    },
    {
      title: "Fortalezas tecnicas",
      items: [
        "Diseno de APIs, autenticacion JWT, persistencia SQL y manejo de errores.",
        "Dockerizacion, variables de entorno y despliegues reproducibles.",
        "Modelos simples de ML, reglas de negocio explicables y procesamiento de datos."
      ]
    },
    {
      title: "Forma de trabajo",
      items: [
        "Proyectos documentados con README, demos publicas y repositorios navegables.",
        "Mentalidad de producto: mostrar flujos completos, no solo ejercicios aislados.",
        "Cuidado por la experiencia de quien evalua: demo, repo, contexto tecnico y CV disponibles."
      ]
    }
  ],

  contact: {
    email: "marcosfacchetti9n@gmail.com",
    message:
      "Si estas buscando un perfil junior con base fuerte en backend, IA aplicada y ganas reales de construir, hablemos.",
    socials: [
      { label: "GitHub", url: "https://github.com/marcosfacchetti9n-ship-it" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/marcos-facchetti-50b184303/" }
    ]
  }
};
