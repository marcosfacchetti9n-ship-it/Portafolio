/**
 * Render del portafolio (sin frameworks)
 * - `data.js` define `portfolioData` (contenido)
 * - este archivo crea nodos DOM y los inserta en `index.html`
 * - evitamos `innerHTML` para que el render sea más robusto/seguro
 */

/**
 * Crea un fragmento con <li> por cada string (para listas del CV).
 * @param {string[]} items
 * @returns {DocumentFragment}
 */
function createList(items) {
  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    fragment.appendChild(li);
  });
  return fragment;
}

/**
 * Crea "chips" (badges) para mostrar tecnologías.
 * @param {string[]} items
 * @returns {DocumentFragment}
 */
function createChips(items) {
  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    const span = document.createElement("span");
    span.className = "chip";
    span.textContent = item;
    fragment.appendChild(span);
  });
  return fragment;
}

/**
 * Construye la tarjeta de un proyecto con:
 * - título + descripción + tecnologías (chips) + detalles
 * - acciones: Demo (si existe) y Repositorio (si existe)
 * @param {{title:string,description:string,technologies:string[],details:string,repo?:string,demo?:string}} project
 * @returns {HTMLElement}
 */
function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const title = document.createElement("h3");
  title.textContent = project.title;
  article.appendChild(title);

  const description = document.createElement("p");
  description.textContent = project.description;
  article.appendChild(description);

  const chips = document.createElement("div");
  chips.className = "chip-row";
  chips.appendChild(createChips(project.technologies));
  article.appendChild(chips);

  const details = document.createElement("p");
  details.textContent = project.details;
  details.className = "project-details";
  article.appendChild(details);

  const actions = document.createElement("div");
  actions.className = "card-actions";

  // Botón Demo (si el proyecto tiene URL publicada)
  if (project.demo) {
    const demo = document.createElement("a");
    demo.href = project.demo;
    demo.target = "_blank";
    demo.rel = "noopener noreferrer";
    demo.className = "btn btn-small btn-primary";
    demo.textContent = "Demo";
    actions.appendChild(demo);
  }

  // Botón Repositorio (si hay URL del repo)
  if (project.repo) {
    const link = document.createElement("a");
    link.href = project.repo;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "btn btn-small btn-ghost";
    link.textContent = "Repositorio";
    actions.appendChild(link);
  }

  article.appendChild(actions);

  return article;
}

/**
 * Construye una tarjeta del CV con un título y una lista de bullets.
 * @param {{title:string, items:string[]}} section
 * @returns {HTMLElement}
 */
function createCvCard(section) {
  const card = document.createElement("div");
  card.className = "cv-card";

  const title = document.createElement("h3");
  title.textContent = section.title;
  card.appendChild(title);

  const list = document.createElement("ul");
  list.appendChild(createList(section.items));
  card.appendChild(list);

  return card;
}

/**
 * Construye los links de redes sociales (GitHub, LinkedIn, etc.).
 * @param {{label:string, url:string}[]} socials
 * @returns {DocumentFragment}
 */
function createSocialLinks(socials) {
  const fragment = document.createDocumentFragment();
  socials.forEach((item, index) => {
    const link = document.createElement("a");
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "social-link";
    link.textContent = item.label;
    fragment.appendChild(link);
    if (index < socials.length - 1) fragment.appendChild(document.createTextNode(" "));
  });
  return fragment;
}

/**
 * Pinta todo el contenido de la página usando `portfolioData`.
 * Busca nodos por id y reemplaza sus hijos con contenido generado.
 * @param {any} data
 */
function renderPortfolio(data) {
  document.title = `${data.name} | Portafolio`;
  document.getElementById("hero-name").textContent = `Hola, soy ${data.name}`;
  const professionEl = document.getElementById("hero-profession");
  professionEl.textContent = data.profession ? data.profession : "";
  document.getElementById("hero-intro").textContent = data.intro;
  document.getElementById("projects-copy").textContent =
    "Aquí están algunos de mis proyectos. Cada tarjeta incluye una descripción, tecnologías usadas y el valor que aporta.";

  const projectList = document.getElementById("project-list");
  projectList.replaceChildren();
  data.projects.forEach((project) => projectList.appendChild(createProjectCard(project)));

  const cvList = document.getElementById("cv-list");
  cvList.replaceChildren();
  data.cv.forEach((section) => cvList.appendChild(createCvCard(section)));

  document.getElementById("contact-message").textContent = data.contact.message;
  const emailLink = document.getElementById("contact-email");
  emailLink.href = `mailto:${data.contact.email}`;
  emailLink.textContent = data.contact.email;
  const socialsEl = document.getElementById("social-links");
  socialsEl.replaceChildren();
  socialsEl.appendChild(createSocialLinks(data.contact.socials));
}

// Arranque: cuando el HTML está listo, renderizamos usando `portfolioData` (definido en `data.js`).
document.addEventListener("DOMContentLoaded", function () {
  if (typeof portfolioData !== "undefined") {
    renderPortfolio(portfolioData);
  }
});
