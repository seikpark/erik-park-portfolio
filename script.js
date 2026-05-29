const featuredProjects = [
  {
    title: "Butler",
    company: "FinTech product",
    timeline: "2023",
    role: "Product Designer / Product Owner",
    type: "Flagship case",
    href: "butler.html",
    tone: "blue",
    mark: "BU",
    summary: "Redesigned the landing and home experience to improve product clarity, trust, and repeat usage.",
    outcome: "+40% retention",
    tags: ["UX redesign", "Product thinking", "Retention"]
  },
  {
    title: "SM Meta-passport",
    company: "SM Entertainment",
    timeline: "2022",
    role: "Product Designer / Design Manager",
    type: "Service design case",
    href: "sm-meta-passport.html",
    tone: "green",
    mark: "SM",
    summary: "Designed membership flows and interface patterns for a global entertainment fan ecosystem.",
    outcome: "Public UI",
    tags: ["Service design", "IA", "Membership"]
  },
  {
    title: "Bero AI",
    company: "Bero AI",
    timeline: "2025 - Present",
    role: "Product Manager / Product Designer",
    type: "AI product case",
    href: "bero-ai.html",
    tone: "violet",
    mark: "AI",
    summary: "Framing an AI communication product through research, feature screens, and early interaction models.",
    outcome: "Current work",
    tags: ["AI", "Research", "Prototyping"]
  }
];

const workshopItems = [
  {
    title: "Brickmate Design Operations",
    meta: "Design systems / Documentation / QA",
    summary: "Guidelines, templates, and team workflows for consistent delivery across client-product teams."
  },
  {
    title: "Kiosk Usability Research",
    meta: "MFA research / Accessibility",
    summary: "Service design research on kiosk accessibility and usability for older adults."
  },
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
    title: "Rise Partners Digital Ops",
    meta: "Digital operations / IT PM",
    summary: "Agency operations, proposal flow, team structure, and delivery pipeline."
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

function thumbnail(project) {
  return `
    <div class="project-thumb" data-tone="${project.tone}">
      <div class="thumb-system" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <span class="project-kind">${project.type}</span>
      <div class="project-logo" aria-hidden="true">${project.mark}</div>
    </div>
  `;
}

function renderFeaturedProjects() {
  const mount = document.querySelector("#featured-projects");
  if (!mount) return;

  mount.innerHTML = featuredProjects
    .map(
      (project) => `
        <a class="project-card" href="${project.href}" aria-label="View ${project.title} case study">
          ${thumbnail(project)}
          <div class="project-body">
            <div>
              <p class="project-company">${project.company}</p>
              <h3>${project.title}</h3>
            </div>
            <p>${project.summary}</p>
            <dl>
              <div>
                <dt>Role</dt>
                <dd>${project.role}</dd>
              </div>
              <div>
                <dt>Outcome</dt>
                <dd>${project.outcome}</dd>
              </div>
            </dl>
            <p class="project-time">${project.timeline}</p>
            ${tagList(project.tags)}
          </div>
        </a>
      `
    )
    .join("");
}

function renderWorkshopItems() {
  const mount = document.querySelector("#workshop-items");
  if (!mount) return;

  mount.innerHTML = workshopItems
    .map(
      (item, index) => `
        <article class="workshop-card">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <h3>${item.title}</h3>
          <p class="workshop-meta">${item.meta}</p>
          <p>${item.summary}</p>
        </article>
      `
    )
    .join("");
}

renderFeaturedProjects();
renderWorkshopItems();
