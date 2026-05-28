const featuredProjects = [
  {
    title: "Butler",
    company: "FinTech product",
    timeline: "2023",
    role: "Product Designer / Product Owner",
    type: "Flagship case",
    category: "ux",
    tone: "blue",
    mark: "BU",
    scope: "Landing, home, product clarity, retention loop",
    problem: "A clearer first-use and repeat-use experience for financial-service customers.",
    contribution: "Redesigned the landing and home flow, clarified value messaging, and aligned product decisions with delivery constraints.",
    outcome: "+40% retention",
    status: "Case study in progress",
    tags: ["UX redesign", "Product thinking", "Retention", "Delivery"]
  },
  {
    title: "SM Meta-passport",
    company: "SM Entertainment",
    timeline: "2022",
    role: "Product Designer / Design Manager",
    type: "Service design case",
    category: "service",
    tone: "green",
    mark: "SM",
    scope: "Membership flows, IA, global fan ecosystem",
    problem: "A membership experience for identity, access, and participation across a global service.",
    contribution: "Designed core user flows and interface patterns while coordinating launch-readiness decisions.",
    outcome: "Public UI",
    status: "Public-safe visuals",
    tags: ["Service design", "IA", "Membership", "Stakeholders"]
  },
  {
    title: "Bero AI",
    company: "Bero AI",
    timeline: "2025 - Present",
    role: "Product Manager / Product Designer",
    type: "AI product case",
    category: "ai",
    tone: "violet",
    mark: "AI",
    scope: "Problem framing, feature UX, prototype direction",
    problem: "An ambiguous AI communication product shaped into testable product direction.",
    contribution: "Frames product requirements, explores interaction models, and turns research into feature screens.",
    outcome: "Early direction",
    status: "Current work",
    tags: ["AI", "Ambiguity", "Research", "Prototype"]
  },
  {
    title: "Brickmate Design Operations",
    company: "Brickmate",
    timeline: "2020 - 2023",
    role: "Design Manager",
    type: "Systems case",
    category: "ux",
    tone: "cool",
    mark: "DO",
    scope: "Guidelines, templates, QA, team workflow",
    problem: "A growing delivery team needed repeatable practices for consistent client-product quality.",
    contribution: "Built design guidelines, templates, documentation, and handoff patterns across projects.",
    outcome: "$1.2M+ scale",
    status: "Anonymized case",
    tags: ["Design systems", "Docs", "Design ops", "QA"]
  }
];

const archiveProjects = [
  {
    title: "iTOO",
    meta: "AI commerce / Product UX",
    summary: "Fashion commerce experience exploring discovery, styling, and purchase confidence."
  },
  {
    title: "Smile Me",
    meta: "AI creative tool / Interaction design",
    summary: "Emoji creation flow for a creator-facing product experience."
  },
  {
    title: "YZYZ",
    meta: "Service commerce / UX/UI",
    summary: "Digital service and commerce experience showing product range beyond enterprise systems."
  },
  {
    title: "Kiosk Usability Research",
    meta: "MFA research / Accessibility",
    summary: "Service design research on kiosk accessibility and usability for older adults."
  },
  {
    title: "Rise Partners Digital Ops",
    meta: "Digital operations / IT PM",
    summary: "Built agency operations, proposal flow, team structure, and delivery pipeline."
  },
  {
    title: "E-commerce Education Work",
    meta: "E-commerce / UI design",
    summary: "Early interface, content, and digital asset work across commerce and education websites."
  }
];

let activeFilter = "all";
let activeSort = "review";

function tagList(tags) {
  return `<ul class="tag-list">${tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>`;
}

function projectFacts(project) {
  const facts = [project.role, project.timeline, project.scope];
  return `<ul class="project-facts">${facts.map((fact) => `<li>${fact}</li>`).join("")}</ul>`;
}

function statItem(label, value) {
  return `
    <div>
      <dt>${label}</dt>
      <dd>${value}</dd>
    </div>
  `;
}

function bookmarkIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 4.8c0-1 .8-1.8 1.8-1.8h7.4c1 0 1.8.8 1.8 1.8v16.1l-5.5-3.1-5.5 3.1V4.8Z"></path>
    </svg>
  `;
}

function thumbPattern() {
  return `
    <div class="thumb-system" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;
}

function sortedProjects(projects) {
  if (activeSort === "recent") {
    return [...projects].sort((a, b) => {
      const aYear = Number.parseInt(a.timeline.match(/\d{4}/)?.[0] || "0", 10);
      const bYear = Number.parseInt(b.timeline.match(/\d{4}/)?.[0] || "0", 10);
      return bYear - aYear;
    });
  }

  return projects;
}

function visibleProjects() {
  const filtered =
    activeFilter === "all" ? featuredProjects : featuredProjects.filter((project) => project.category === activeFilter);
  return sortedProjects(filtered);
}

function renderFeaturedProjects() {
  const mount = document.querySelector("#featured-projects");
  if (!mount) return;

  mount.innerHTML = visibleProjects()
    .map(
      (project) => `
        <article class="project-card" data-category="${project.category}">
          <div class="project-thumb" data-tone="${project.tone}">
            ${thumbPattern()}
            <span class="project-kind">${project.type}</span>
            <button class="bookmark-button" type="button" aria-label="Save ${project.title}">
              ${bookmarkIcon()}
            </button>
            <div class="project-logo" aria-hidden="true">${project.mark}</div>
          </div>
          <div class="project-body">
            <div class="project-card-head">
              <p class="project-company">${project.company}</p>
              <h3>${project.title}</h3>
            </div>
            <p class="project-problem">${project.problem}</p>
            <dl>
              ${statItem("Outcome", project.outcome)}
              ${statItem("Status", project.status)}
            </dl>
            ${projectFacts(project)}
            ${tagList(project.tags)}
          </div>
        </article>
      `
    )
    .join("");
}

function renderArchiveProjects() {
  const mount = document.querySelector("#archive-projects");
  if (!mount) return;

  mount.innerHTML = archiveProjects
    .map(
      (project) => `
        <article class="archive-row">
          <h3>${project.title}</h3>
          <span>${project.meta}</span>
          <p>${project.summary}</p>
        </article>
      `
    )
    .join("");
}

function setActiveButton(buttons, activeButton) {
  buttons.forEach((button) => {
    button.classList.toggle("is-active", button === activeButton);
  });
}

function bindProjectControls() {
  const filterButtons = document.querySelectorAll("[data-filter]");
  const sortButtons = document.querySelectorAll("[data-sort]");
  const projectMount = document.querySelector("#featured-projects");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      setActiveButton(filterButtons, button);
      renderFeaturedProjects();
    });
  });

  sortButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeSort = button.dataset.sort;
      setActiveButton(sortButtons, button);
      renderFeaturedProjects();
    });
  });

  projectMount?.addEventListener("click", (event) => {
    const button = event.target.closest(".bookmark-button");
    if (!button) return;

    button.classList.toggle("is-saved");
    const isSaved = button.classList.contains("is-saved");
    button.setAttribute("aria-label", isSaved ? "Saved project" : "Save project");
  });
}

renderFeaturedProjects();
renderArchiveProjects();
bindProjectControls();
