const state = {
  activeFilter: "Todos"
};

function byId(id) {
  return document.getElementById(id);
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function createLink(item, extraClass) {
  const link = document.createElement("a");
  link.href = item.url;
  link.className = extraClass || "";
  link.textContent = item.label;

  if (item.download) {
    link.setAttribute("download", "");
  }

  if (item.url.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }

  return link;
}

function createChips(items) {
  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    const chip = createElement("span", "chip", item);
    fragment.appendChild(chip);
  });
  return fragment;
}

function createProjectLinks(project) {
  const actions = createElement("div", "card-actions");

  if (project.demo) {
    actions.appendChild(createLink({ label: "Demo", url: project.demo }, "btn btn-small btn-primary"));
  }

  if (project.docs) {
    actions.appendChild(createLink({ label: "API docs", url: project.docs }, "btn btn-small btn-secondary"));
  }

  if (project.repo) {
    actions.appendChild(createLink({ label: "Repositorio", url: project.repo }, "btn btn-small btn-ghost"));
  }

  return actions;
}

function createProjectVisual(project) {
  const visual = createElement("div", "project-visual");
  const kind = createElement("span", "project-kind", project.kind);
  const title = createElement("strong", "", project.title);
  const line = createElement("span", "visual-line");
  const lineAlt = createElement("span", "visual-line visual-line-short");

  visual.append(kind, title, line, lineAlt);
  return visual;
}

function createProjectCard(project) {
  const article = createElement("article", "project-card");
  article.appendChild(createProjectVisual(project));

  const title = createElement("h3", "", project.title);
  const description = createElement("p", "project-description", project.description);
  const impact = createElement("p", "project-impact", project.impact);

  const chips = createElement("div", "chip-row");
  chips.appendChild(createChips(project.technologies));

  article.append(title, description, impact, chips, createProjectLinks(project));
  return article;
}

function createFeaturedProject(project) {
  const wrapper = createElement("article", "featured-card");
  const content = createElement("div", "featured-copy");

  content.appendChild(createElement("p", "featured-kicker", "Proyecto destacado"));
  content.appendChild(createElement("h3", "", project.title));
  content.appendChild(createElement("p", "featured-description", project.description));
  content.appendChild(createElement("p", "featured-impact", project.impact));

  const highlights = createElement("ul", "featured-highlights");
  project.highlights.forEach((item) => {
    highlights.appendChild(createElement("li", "", item));
  });

  const chips = createElement("div", "chip-row");
  chips.appendChild(createChips(project.technologies));
  content.append(highlights, chips, createProjectLinks(project));

  const panel = createElement("div", "featured-panel");
  panel.appendChild(createElement("span", "panel-label", "risk_engine.py"));

  const scoreRows = [
    ["rule_score", "0.88"],
    ["ml_score", "0.81"],
    ["final_score", "0.924"],
    ["decision", "BLOCK"]
  ];

  scoreRows.forEach(([label, value]) => {
    const row = createElement("div", "panel-row");
    row.append(createElement("span", "", label), createElement("strong", "", value));
    panel.appendChild(row);
  });

  wrapper.append(content, panel);
  return wrapper;
}

function getFilters(projects) {
  const filters = new Set(["Todos"]);
  projects.forEach((project) => {
    project.categories.forEach((category) => filters.add(category));
  });
  return Array.from(filters);
}

function renderProjectFilters(projects) {
  const filtersEl = byId("project-filters");
  filtersEl.replaceChildren();

  getFilters(projects).forEach((filter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-button";
    button.textContent = filter;
    button.dataset.filter = filter;
    button.setAttribute("aria-pressed", String(state.activeFilter === filter));
    filtersEl.appendChild(button);
  });
}

function renderProjects(data) {
  const featured = data.projects.find((project) => project.featured);
  const projects = data.projects.filter((project) => !project.featured);
  const visibleProjects =
    state.activeFilter === "Todos"
      ? projects
      : projects.filter((project) => project.categories.includes(state.activeFilter));

  byId("featured-project").replaceChildren(createFeaturedProject(featured));
  byId("project-count").textContent = `${visibleProjects.length} proyectos filtrados`;

  const list = byId("project-list");
  list.replaceChildren();
  visibleProjects.forEach((project) => list.appendChild(createProjectCard(project)));

  renderProjectFilters(projects);
}

function renderHero(data) {
  document.title = data.pageTitle;
  byId("hero-title").textContent = data.name;
  byId("hero-role").textContent = data.role;
  byId("hero-eyebrow").textContent = data.hero.eyebrow;
  byId("hero-intro").textContent = data.hero.intro;

  const actions = byId("hero-actions");
  actions.replaceChildren();
  data.hero.actions.forEach((action) => {
    actions.appendChild(createLink(action, `btn btn-${action.variant}`));
  });

  const stats = byId("hero-stats");
  stats.replaceChildren();
  data.hero.stats.forEach((stat) => {
    const item = createElement("div", "stat-item");
    item.append(createElement("dt", "", stat.value), createElement("dd", "", stat.label));
    stats.appendChild(item);
  });

  byId("topbar-cv").href = data.cvUrl;
  byId("cv-download").href = data.cvUrl;
}

function renderStack(data) {
  const stack = byId("stack-list");
  stack.replaceChildren();

  data.stack.forEach((section) => {
    const card = createElement("article", "stack-card");
    card.appendChild(createElement("h3", "", section.title));

    const chips = createElement("div", "chip-row");
    chips.appendChild(createChips(section.items));
    card.appendChild(chips);

    stack.appendChild(card);
  });
}

function renderCv(data) {
  const cvList = byId("cv-list");
  cvList.replaceChildren();

  data.cv.forEach((section) => {
    const card = createElement("article", "cv-card");
    card.appendChild(createElement("h3", "", section.title));

    const list = createElement("ul", "");
    section.items.forEach((item) => list.appendChild(createElement("li", "", item)));
    card.appendChild(list);
    cvList.appendChild(card);
  });
}

function renderContact(data) {
  byId("contact-message").textContent = data.contact.message;

  const email = byId("contact-email");
  email.href = `mailto:${data.contact.email}`;
  email.textContent = data.contact.email;

  const socials = byId("social-links");
  socials.replaceChildren();
  data.contact.socials.forEach((item) => {
    socials.appendChild(createLink(item, "social-link"));
  });

  const copyButton = byId("copy-email");
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(data.contact.email);
      copyButton.textContent = "Email copiado";
      setTimeout(() => {
        copyButton.textContent = "Copiar email";
      }, 1800);
    } catch (error) {
      window.location.href = `mailto:${data.contact.email}`;
    }
  });
}

function renderPortfolio(data) {
  renderHero(data);
  renderProjects(data);
  renderStack(data);
  renderCv(data);
  renderContact(data);
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof portfolioData !== "undefined") {
    renderPortfolio(portfolioData);
  }
});

document.addEventListener("click", (event) => {
  const filterButton = event.target.closest("[data-filter]");
  if (!filterButton || typeof portfolioData === "undefined") return;

  state.activeFilter = filterButton.dataset.filter;
  renderProjects(portfolioData);
});
