const featuredProjects = [
  {
    title: "Butler",
    company: "FinTech product",
    timeline: "2023",
    role: "Product Designer / Product Owner",
    status: "+40% retention",
    summary: "Redesigned the landing and home experience to improve product clarity, trust, and repeat usage.",
    tags: ["UX redesign", "Product thinking", "Delivery ownership"]
  },
  {
    title: "SM Meta-passport",
    company: "SM Entertainment",
    timeline: "2022",
    role: "Product Designer / Design Manager",
    status: "UI public",
    summary: "Designed membership flows and interface patterns for a global entertainment fan ecosystem.",
    tags: ["Service design", "IA", "Stakeholder alignment"]
  },
  {
    title: "Bero AI",
    company: "Bero AI",
    timeline: "2025 - Present",
    role: "Product Manager / Product Designer",
    status: "In progress",
    summary: "Framing an AI communication product through research, feature screens, and early interaction models.",
    tags: ["AI", "Research", "Prototyping"]
  },
  {
    title: "Brickmate Design Operations",
    company: "Brickmate",
    timeline: "2020 - 2023",
    role: "Design Manager",
    status: "Anonymized",
    summary: "Built guidelines, templates, and team workflows to support consistent delivery for global client products.",
    tags: ["Design systems", "Documentation", "QA/QC"]
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
    summary: "Emoji creation flow for a playful creator-facing product experience."
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
    summary: "Built digital agency operations, proposal flow, team structure, and delivery pipeline."
  },
  {
    title: "E-commerce Education Work",
    meta: "E-commerce / UI design",
    summary: "Early interface, content, and digital asset work across commerce and education websites."
  }
];

function tagList(tags) {
  return `<ul class="tag-list">${tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>`;
}

function renderFeaturedProjects() {
  const mount = document.querySelector("#featured-projects");
  if (!mount) return;

  mount.innerHTML = featuredProjects
    .map(
      (project) => `
        <article class="project-row">
          <a class="project-title" href="#contact" aria-label="${project.title} case study coming soon">
            <span>${project.title}</span>
            <small>${project.summary}</small>
          </a>
          <div class="project-meta">
            <span>${project.company}</span>
            <span>${project.role}</span>
            <span>${project.timeline}</span>
          </div>
          <div class="project-status">
            <strong>${project.status}</strong>
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

renderFeaturedProjects();
renderArchiveProjects();
