const featuredProjects = [
  {
    title: "Butler",
    framing: "Improving retention through a clearer fintech product experience.",
    role: "Product Designer / Product Owner",
    timeline: "2023",
    domain: "FinTech",
    impact: "+40% user retention",
    status: "Metric rationale ready",
    visual: "butler",
    tags: ["UX redesign", "Product thinking", "Delivery ownership"],
    nutshell:
      "A product redesign focused on making the landing and home experience clearer, more trustworthy, and easier to act on.",
    details: [
      ["What I did", "Redesigned core entry screens, aligned priorities, and improved the delivery workflow with Jira and Notion."],
      ["Next artifact needed", "Before/after screens, retention definition, and the key UX decisions that moved the metric."]
    ]
  },
  {
    title: "SM Meta-passport",
    framing: "Designing a global membership experience for entertainment fans.",
    role: "Product Designer / Design Manager",
    timeline: "2022",
    domain: "Membership",
    impact: "Public UI available",
    status: "UI can be shown",
    visual: "sm",
    tags: ["Service design", "IA", "Stakeholder alignment"],
    nutshell:
      "A membership service case that can show complex user flows, account states, access rules, and brand-sensitive UI decisions.",
    details: [
      ["What I did", "Structured user flows and product screens within a high-stakeholder entertainment ecosystem."],
      ["Next artifact needed", "Final UI screens, membership structure, IA, and Erik's exact contribution area."]
    ]
  },
  {
    title: "Bero AI",
    framing: "Designing an AI communication experience from ambiguity to product direction.",
    role: "Product Manager / Product Designer",
    timeline: "2025 - Present",
    domain: "AI Product",
    impact: "Direction and feature screens available",
    status: "In progress, not launched",
    visual: "bero",
    tags: ["AI", "Research", "Prototyping"],
    nutshell:
      "An in-progress AI product case showing problem framing, feature direction, and interaction design for an emerging product space.",
    details: [
      ["What I did", "Lead research, product direction, feature UX, and early experience design for an AI communication service."],
      ["Next artifact needed", "Feature screens, AI interaction model, research inputs, and honest next steps before launch."]
    ]
  },
  {
    title: "Brickmate Design Operations",
    framing: "Building design systems and workflows for consistent product delivery.",
    role: "Design Manager",
    timeline: "2020 - 2023",
    domain: "Design Systems",
    impact: "$1.2M+ delivery support",
    status: "Anonymized artifacts available",
    visual: "system",
    tags: ["Design systems", "Documentation", "QA/QC"],
    nutshell:
      "A Senior-level systems case showing how guidelines, templates, and workflows helped teams ship more consistent client products.",
    details: [
      ["What I did", "Built design guidelines, project templates, onboarding processes, and delivery rituals across product teams."],
      ["Next artifact needed", "Anonymized components, templates, handoff examples, and before/after workflow evidence."]
    ]
  }
];

const archiveProjects = [
  {
    title: "iTOO",
    category: "ai commerce",
    role: "Product / UX design",
    summary: "AI-powered fashion commerce experience exploring discovery, styling, and purchase confidence.",
    tags: ["AI", "Commerce", "UX"]
  },
  {
    title: "Smile Me",
    category: "ai",
    role: "Interaction design",
    summary: "AI-generated emoji creation flow for a playful, creator-facing product experience.",
    tags: ["AI", "Creator tools", "UI"]
  },
  {
    title: "YZYZ",
    category: "service commerce",
    role: "UX/UI design",
    summary: "Digital service and commerce experience that can show range beyond enterprise products.",
    tags: ["Service", "Commerce", "Visual UI"]
  },
  {
    title: "Kiosk Usability Research",
    category: "research service",
    role: "Service design research",
    summary: "MFA research on kiosk accessibility and usability for older adults.",
    tags: ["Research", "Accessibility", "Service design"]
  },
  {
    title: "Rise Partners Digital Ops",
    category: "service",
    role: "IT Project Manager",
    summary: "Built digital agency operations, proposal flow, team structure, and delivery pipeline.",
    tags: ["Operations", "B2B", "Delivery"]
  },
  {
    title: "E-commerce Education Work",
    category: "commerce",
    role: "UI/UX Designer",
    summary: "Early UI, content, and digital asset work across e-commerce and educational web experiences.",
    tags: ["E-commerce", "Education", "UI"]
  }
];

function createTagList(tags) {
  return `<ul class="tag-list">${tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>`;
}

function createVisual(type) {
  if (type === "sm") {
    return `
      <div class="visual-board sm" aria-hidden="true">
        <span class="node"></span>
        <span class="node"></span>
        <span class="node"></span>
        <span class="node"></span>
      </div>
    `;
  }

  if (type === "bero") {
    return `
      <div class="visual-board bero" aria-hidden="true">
        <span class="screen"></span>
        <span class="screen"></span>
      </div>
    `;
  }

  if (type === "system") {
    return `
      <div class="visual-board system" aria-hidden="true">
        <span class="tile"></span>
        <span class="tile"></span>
        <span class="tile"></span>
        <span class="tile"></span>
        <span class="tile"></span>
        <span class="tile"></span>
      </div>
    `;
  }

  return `
    <div class="visual-board butler" aria-hidden="true">
      <span class="bar"></span>
      <span class="tile"></span>
      <span class="tile"></span>
    </div>
  `;
}

function renderFeaturedProjects() {
  const mount = document.querySelector("#featured-projects");
  if (!mount) return;

  mount.innerHTML = featuredProjects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-visual">${createVisual(project.visual)}</div>
          <div class="project-body">
            <div class="project-meta">
              <span>${project.role}</span>
              <span>${project.timeline}</span>
            </div>
            <h3>${project.title}</h3>
            <p><strong>${project.framing}</strong></p>
            <p>${project.nutshell}</p>
            ${createTagList(project.tags)}
            <dl class="case-details">
              ${project.details
                .map(
                  ([term, description]) => `
                    <div>
                      <dt>${term}</dt>
                      <dd>${description}</dd>
                    </div>
                  `
                )
                .join("")}
            </dl>
            <div class="card-foot">
              <span class="status-pill">${project.status}</span>
              <span>${project.impact}</span>
            </div>
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
        <article class="archive-card" data-category="${project.category}">
          <div class="archive-meta">
            <span>${project.role}</span>
            <span class="archive-dot" aria-hidden="true"></span>
          </div>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          ${createTagList(project.tags)}
        </article>
      `
    )
    .join("");
}

function setupArchiveFilters() {
  const buttons = Array.from(document.querySelectorAll(".filter-button"));
  const cards = Array.from(document.querySelectorAll(".archive-card"));
  if (!buttons.length || !cards.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      buttons.forEach((item) => item.classList.toggle("is-active", item === button));

      cards.forEach((card) => {
        const categories = card.dataset.category.split(" ");
        card.hidden = filter !== "all" && !categories.includes(filter);
      });
    });
  });
}

function setupNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector("#nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

renderFeaturedProjects();
renderArchiveProjects();
setupArchiveFilters();
setupNavToggle();
