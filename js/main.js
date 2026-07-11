/*
 * Renderização dos projetos e interações leves da página.
 * Os dados vêm de js/projects.js (FEATURED_PROJECTS e OTHER_PROJECTS).
 */

/** Cria um elemento com classe e conteúdo de texto opcionais. */
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

/** Lista de tecnologias do projeto ("pills"). */
function stackList(stack) {
  const list = el("ul", "stack-pills");
  list.setAttribute("aria-label", "Tecnologias utilizadas");
  for (const tech of stack) {
    list.appendChild(el("li", "pill", tech));
  }
  return list;
}

/** Links de repositório e demo do projeto. */
function projectLinks(project) {
  const wrap = el("div", "project-links");
  if (project.links?.repo) {
    const repo = el("a", "project-link", "ver código");
    repo.href = project.links.repo;
    repo.target = "_blank";
    repo.rel = "noopener";
    repo.setAttribute("aria-label", `Ver código de ${project.name} no GitHub`);
    wrap.appendChild(repo);
  }
  if (project.links?.demo) {
    const demo = el("a", "project-link project-link--demo", "ver demo");
    demo.href = project.links.demo;
    demo.target = "_blank";
    demo.rel = "noopener";
    demo.setAttribute("aria-label", `Abrir demo de ${project.name}`);
    wrap.appendChild(demo);
  }
  return wrap;
}

/** Bloco rotulado (PROBLEMA / ARQUITETURA / DESAFIO) dos cards em destaque. */
function labeledBlock(label, text) {
  const block = el("div", "project-block");
  block.appendChild(el("h4", "project-block-label", label));
  block.appendChild(el("p", "project-block-text", text));
  return block;
}

/** Card grande de projeto em destaque. */
function featuredCard(project) {
  const card = el("article", "project-card project-card--featured reveal");

  const header = el("header", "project-header");
  header.appendChild(el("h3", "project-name", project.name));
  header.appendChild(el("p", "project-tagline", project.tagline));
  card.appendChild(header);

  card.appendChild(labeledBlock("problema", project.problem));

  // Arquitetura, desafio e diagrama ficam num <details> colapsável: fechado
  // no celular (o card não vira um paredão de texto) e aberto no desktop.
  const hasDetails = project.architecture || project.challenge || project.diagram;
  if (hasDetails) {
    const details = el("details", "project-more");
    details.appendChild(el("summary", "project-more-summary", "detalhes técnicos"));

    if (project.architecture) details.appendChild(labeledBlock("arquitetura", project.architecture));
    if (project.challenge) details.appendChild(labeledBlock("desafio", project.challenge));

    // Diagrama de arquitetura (apenas projetos cloud-heavy têm um).
    if (project.diagram) {
      const figure = el("figure", "project-diagram");
      const img = document.createElement("img");
      img.src = project.diagram;
      img.alt = project.diagramAlt || `Diagrama de arquitetura de ${project.name}`;
      img.loading = "lazy";
      figure.appendChild(img);
      details.appendChild(figure);
    }

    details.open = window.matchMedia("(min-width: 640px)").matches;
    card.appendChild(details);
  }

  card.appendChild(stackList(project.stack));
  card.appendChild(projectLinks(project));
  return card;
}

/** Card compacto de "outros projetos". */
function compactCard(project) {
  const card = el("article", "project-card project-card--compact reveal");
  card.appendChild(el("h3", "project-name", project.name));
  card.appendChild(el("p", "project-tagline", project.tagline));
  card.appendChild(el("p", "project-block-text", project.problem));
  card.appendChild(stackList(project.stack));
  card.appendChild(projectLinks(project));
  return card;
}

function renderProjects() {
  const featured = document.getElementById("featured-projects");
  const others = document.getElementById("other-projects");
  if (featured) FEATURED_PROJECTS.forEach((p) => featured.appendChild(featuredCard(p)));
  if (others) OTHER_PROJECTS.forEach((p) => others.appendChild(compactCard(p)));
}

/** Revela seções conforme entram na viewport (desligado com reduced-motion). */
function setupReveal() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15 }
  );
  targets.forEach((t) => observer.observe(t));
}

renderProjects();
setupReveal();

// Ano corrente no rodapé.
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
