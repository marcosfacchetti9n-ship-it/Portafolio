# Portfolio - Marcos Facchetti

Demo: https://portafolio-mf.netlify.app/

Portafolio estatico para presentar mi perfil como Backend Developer con foco en IA aplicada, APIs, Docker, SQL y proyectos full stack desplegados.

## Contenido

- Hero con propuesta profesional, CTA a proyectos y descarga de CV.
- Proyecto destacado: RiskShield AI.
- Grilla filtrable de proyectos.
- Stack tecnico agrupado por area.
- CV resumido y PDF descargable.
- Contacto con email, GitHub y LinkedIn.

## Stack del sitio

- HTML
- CSS
- JavaScript vanilla

La pagina sigue siendo estatica para que sea facil de publicar en GitHub Pages, Netlify, Vercel o cualquier hosting simple.

## Estructura

```txt
.
|-- index.html
|-- styles.css
|-- data.js
|-- app.js
|-- assets/
|   `-- marcos-facchetti-cv.pdf
`-- README.md
```

## Actualizar contenido

El contenido principal vive en `data.js`:

- `hero`: texto principal y botones.
- `projects`: proyectos, tecnologias, demos y repositorios.
- `stack`: habilidades agrupadas.
- `cv`: resumen profesional.
- `contact`: email y redes.

## Ejecutar local

El sitio puede abrirse directamente desde `index.html`.

Para servirlo por HTTP:

```bash
python -m http.server 8000
```

Luego abrir:

```txt
http://localhost:8000
```
