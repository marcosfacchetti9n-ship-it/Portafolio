# Portafolio — Marcos Facchetti

Soy **Marcos Facchetti** y este es mi portafolio estático: una página simple, rápida y fácil de mantener que resume quién soy, qué proyectos hice y cómo contactarme.

La idea fue construir algo **presentable para recruiters** y a la vez **bien diseñado a nivel código**: sin frameworks, con render dinámico desde datos, accesible, y con un UI moderno.

## Qué vas a encontrar

- **Hero** con mi perfil (nombre, rol e introducción).
- **Proyectos** en formato tarjetas con:
  - stack/tecnologías (chips)
  - links a **Demo** (si existe) y **Repositorio**
- **CV** resumido en secciones.
- **Contacto** con email y redes.

## Por qué este proyecto es “mantenible”

- **Contenido desacoplado del HTML**: edito proyectos/CV/contacto desde `data.js`.
- **Render robusto**: el DOM se arma con `createElement` y `textContent` (evito `innerHTML`).
- **Accesibilidad**: estilos `:focus-visible` para navegación por teclado + `prefers-reduced-motion`.
- **Diseño consistente**: tokens CSS en `:root` y componentes reutilizables (botones, chips, cards).

## Stack

- **HTML** (estructura)
- **CSS** (tema, layout, responsive)
- **JavaScript vanilla** (render del contenido)

## Demos de mis proyectos (selección)

- **FraudDetectionAI Engine**: `https://fraud-detection-api-jmx0.onrender.com/`
- **NeuroBallistics Engine**: `https://neuroballistics.netlify.app/`
- **TaskFlow Backend**: `https://codex-1-2dka.onrender.com/`
- **Northstar Shop (E-commerce Full Stack)**: `https://e-commerce-1-7jox.onrender.com/`
- **Usuarios CRUD**: `https://mftestfrontend.netlify.app/`

> Nota: no todos los proyectos tienen demo publicada (por ejemplo, algunos son exploraciones o engines).

## Cómo correrlo en local

Este proyecto es 100% estático.

1. Cloná el repo
2. Abrí `index.html` con **Live Server** (VSCode/Cursor) o cualquier servidor estático

## Estructura del repo

```txt
.
├── index.html   # estructura + contenedores (IDs que el JS completa)
├── styles.css   # tema + componentes + responsive
├── data.js      # datos del portfolio (proyectos, CV, contacto)
└── app.js       # render (crea DOM a partir de data.js)
```

## Contacto

- Email: **marcosfacchetti9n@gmail.com**
- GitHub: `https://github.com/marcosfacchetti9n-ship-it`
- LinkedIn: `https://www.linkedin.com/in/marcos-facchetti-50b184303/`

