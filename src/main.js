const profile = {
  name: "Adil Ahmet Sargin",
  email: "adilahmetsargin@gmail.com",
  github: "https://github.com/adilahmetsargin",
};

const audienceCopy = {
  automotive: {
    title: "For automotive and manufacturing recruiters",
    text:
      "I can speak the language of production pressure: quality issues, station status, supplier follow-up, takt time, defect trends, and visibility across teams.",
    proof: ["Plant dashboards", "Quality intelligence", "Supplier trackers", "3D process visuals"],
  },
  startup: {
    title: "For startup founders and product teams",
    text:
      "I can turn a rough workflow into a product-shaped MVP quickly: user flows, admin screens, payment or CRM integrations, and practical launch scope.",
    proof: ["MVP builds", "SaaS workflows", "Admin panels", "Customer portals"],
  },
  corporate: {
    title: "For corporate and operations teams",
    text:
      "I build internal tools that reduce manual work, make status visible, and replace fragile spreadsheet processes with reliable web applications.",
    proof: ["Internal tools", "Dashboards", "Data cleanup", "Workflow automation"],
  },
  upwork: {
    title: "For Upwork clients",
    text:
      "I focus on clear scope, fast prototypes, business-friendly communication, and deployed software that solves the actual problem behind the request.",
    proof: ["Clear milestones", "Fast demos", "Deployable apps", "Ongoing improvements"],
  },
};

const projects = [
  {
    name: "Shopify Vehicle Fitment Finder",
    type: "Automotive ecommerce workflow",
    categories: ["Automotive", "Corporate", "Upwork"],
    problem: "Automotive shoppers need to narrow parts by Year, Make, Model, and Product Type without landing on the wrong Shopify collection.",
    solution: "Built a client-safe demo of a cascading fitment workflow with generated Shopify-style collection URLs and fully fictional vehicle data.",
    value: "Shows the exact automotive ecommerce pattern recruiters and Shopify clients care about without exposing any client name, data, or code.",
    stack: ["JavaScript", "Vehicle data modeling", "Shopify URL logic", "Responsive UI"],
    live: "#lab",
    liveLabel: "Open fitment demo",
    code: "https://github.com/adilahmetsargin/adil-ahmet-sargin-portfolio",
  },
  {
    name: "Automotive Operations Live Lab",
    type: "Manufacturing workflow prototype",
    categories: ["Automotive", "Corporate"],
    problem: "Manufacturing teams need fast, scan-friendly ways to review shift handoffs, supplier follow-ups, and quality issues.",
    solution: "Built interactive portfolio demos for shift handoff, supplier risk, and quality console workflows using realistic plant operations language.",
    value: "Gives automotive recruiters something clickable inside the portfolio while showing how I structure operations software around real decisions.",
    stack: ["JavaScript", "Operations UX", "Dashboard UI", "Responsive design"],
    live: "#lab",
    liveLabel: "Open live lab",
    code: "https://github.com/adilahmetsargin/adil-ahmet-sargin-portfolio",
  },
  {
    name: "Customer Support Ticketing Dashboard",
    type: "Internal operations dashboard",
    categories: ["Corporate", "Startup", "Upwork"],
    problem: "Support teams need one console for ticket queues, SLA risk, customer conversations, internal notes, and create-ticket workflows.",
    solution: "Built a React TypeScript dashboard with searchable/filterable queues, ticket detail management, validated forms, persistence, and tests.",
    value: "Shows production-style frontend thinking: business language, state management, responsive layouts, accessible forms, and workflow coverage.",
    stack: ["React", "TypeScript", "Vite", "Zustand", "React Hook Form", "Zod", "Vitest"],
    live: "#lab",
    liveLabel: "View workflow demo",
    code: "https://github.com/adilahmetsargin/customer-support-ticketing-dashboard",
  },
  {
    name: "UiPath Practice Lab",
    type: "Full-stack automation learning platform",
    categories: ["Corporate", "Startup", "Upwork"],
    problem: "RPA learners need hands-on practice tasks, progress tracking, feedback, and simulated automation scenarios instead of passive lessons.",
    solution: "Built a Next.js TypeScript practice platform with missions, scenarios, demo auth mode, Supabase-ready schema, and AI/mock feedback paths.",
    value: "Strong proof for automation-adjacent roles: it connects product UX, training workflows, database design, and practical RPA concepts.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase-ready", "AI feedback", "LocalStorage"],
    live: "#lab",
    liveLabel: "View automation demo",
    code: "https://github.com/adilahmetsargin/UiPath-Practice-Lab",
  },
  {
    name: "Northstar Analytics Dashboard",
    type: "SaaS analytics dashboard",
    categories: ["Startup", "Corporate", "Upwork"],
    problem: "SaaS teams need quick visibility into revenue, churn, account health, and filters without digging through raw tables.",
    solution: "Built a production-ready analytics dashboard with KPI cards, charts, account health filtering, dark mode, form validation, and test coverage.",
    value: "Useful for startup and corporate dashboard roles because it shows data presentation, UX structure, state, validation, and testing.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Zustand", "Recharts", "Jest"],
    live: "#lab",
    liveLabel: "View dashboard demo",
    code: "https://github.com/adilahmetsargin/northstar-analytics-dashboard",
  },
  {
    name: "Job Finder / Resume Tailoring MVP",
    type: "Career product MVP",
    categories: ["Startup", "Upwork"],
    problem: "Job seekers waste time switching between job feeds, resume edits, ATS checks, PDF export, and outreach messages.",
    solution: "Built a mobile-first MVP with job feeds, ATS scoring, AI-assisted rewrites, PDF export, and outreach templates.",
    value: "Shows product thinking for a real user workflow: discovery, scoring, editing, exporting, and outreach in one experience.",
    stack: ["JavaScript", "MVP UX", "ATS workflow", "PDF export", "AI-assisted copy"],
    live: "https://aasresumebuilder.netlify.app/",
    liveLabel: "Open live app",
    code: "https://github.com/adilahmetsargin/job-finder",
  },
  {
    name: "Flagship Commerce",
    type: "E-commerce platform concept",
    categories: ["Startup", "Corporate", "Upwork"],
    problem: "Commerce projects often need catalog UX, admin workflows, checkout logic, and scalable frontend structure from the start.",
    solution: "Built a modern e-commerce platform with product flows, admin dashboard patterns, simulated checkout, state management, and test coverage.",
    value: "Good proof for freelance and product teams that need polished, deployable commerce interfaces with maintainable architecture.",
    stack: ["Next.js", "TypeScript", "Tailwind", "TanStack Query", "Zustand", "Supabase-ready"],
    live: "#work",
    liveLabel: "View project",
    code: "https://github.com/adilahmetsargin/flagship-commerce",
  },
];

const demos = {
  fitment: {
    title: "Shopify Vehicle Fitment Finder",
  },
  handoff: {
    title: "Shift Handoff Board",
    rows: [
      ["Open", "Paint line", "Orange peel trend on left rear door", "M. Carter"],
      ["Watch", "Final QA", "Two repeat trim clips flagged", "A. Singh"],
      ["Open", "Weld cell", "Robot 3 cycle delay after reset", "J. Miller"],
    ],
  },
  supplier: {
    title: "Supplier Follow-up Tracker",
    rows: [
      ["High", "Great Lakes Fasteners", "Clip B-114", "Due today"],
      ["Medium", "Motor City Plastics", "Console bracket", "Due Fri"],
      ["Low", "Nova Seating", "Foam insert", "Next week"],
    ],
  },
  quality: {
    title: "Quality Console",
    rows: [
      ["Critical", "Door seal", "42 claims", "Inspect build window 06/10-06/17"],
      ["Medium", "Infotainment", "19 claims", "Review harness supplier notes"],
      ["Watch", "Rear camera", "11 claims", "Monitor next release"],
    ],
  },
};

const fitments = [
  {
    year: "2024",
    make: "Aster",
    model: "Ridge LX",
    productType: "Front Bumper",
    handle: "2024-aster-ridge-lx",
  },
  {
    year: "2024",
    make: "Aster",
    model: "Ridge LX",
    productType: "Fender Set",
    handle: "2024-aster-ridge-lx",
  },
  {
    year: "2023",
    make: "Aster",
    model: "Trail Pro",
    productType: "Hood Panel",
    handle: "2023-aster-trail-pro",
  },
  {
    year: "2022",
    make: "Northline",
    model: "Hauler 2500",
    productType: "Rear Bumper",
    handle: "2022-northline-hauler-2500",
  },
  {
    year: "2021",
    make: "Northline",
    model: "Hauler 3500",
    productType: "Grille Assembly",
    handle: "2021-northline-hauler-3500",
  },
  {
    year: "2020",
    make: "CanyonWorks",
    model: "Mesa Sport",
    productType: "Mirror Cover",
    handle: "2020-canyonworks-mesa-sport",
  },
];

const fitmentState = {
  year: "2024",
  make: "Aster",
  model: "Ridge LX",
  productType: "Front Bumper",
};

function renderAudience(key = "automotive") {
  const target = audienceCopy[key];
  document.querySelectorAll(".audience-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.audience === key);
  });
  document.querySelector("#audience-detail").innerHTML = `
    <div>
      <p class="eyebrow">Selected path</p>
      <h3>${target.title}</h3>
      <p>${target.text}</p>
    </div>
    <div class="proof-chips">
      ${target.proof.map((item) => `<span>${item}</span>`).join("")}
    </div>
  `;
}

function renderProjects(filter = "All") {
  const visible = projects.filter((project) => filter === "All" || project.categories.includes(filter));
  document.querySelector("#project-grid").innerHTML = visible
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-card-top">
            <p class="eyebrow">${project.type}</p>
            <span>${project.categories.join(" / ")}</span>
          </div>
          <h3>${project.name}</h3>
          <dl>
            <div>
              <dt>Problem</dt>
              <dd>${project.problem}</dd>
            </div>
            <div>
              <dt>Solution</dt>
              <dd>${project.solution}</dd>
            </div>
            <div>
              <dt>Business value</dt>
              <dd>${project.value}</dd>
            </div>
          </dl>
          <div class="stack-list">
            ${project.stack.map((item) => `<span>${item}</span>`).join("")}
          </div>
          <div class="project-actions">
            <a href="${project.live}">${project.liveLabel ?? "Live demo"}</a>
            <a href="${project.code}">Code</a>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderDemo(key = "handoff") {
  const demo = demos[key];
  document.querySelectorAll(".lab-tabs button").forEach((button) => {
    button.classList.toggle("active", button.dataset.demo === key);
  });

  if (key === "fitment") {
    renderFitmentDemo();
    return;
  }

  document.querySelector("#demo-panel").innerHTML = `
    <div class="demo-heading">
      <p class="eyebrow">Interactive sample</p>
      <h3>${demo.title}</h3>
    </div>
    <div class="demo-table">
      ${demo.rows
        .map(
          (row) => `
            <article>
              <span class="status-badge">${row[0]}</span>
              <strong>${row[1]}</strong>
              <p>${row[2]}</p>
              <small>${row[3]}</small>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function uniqueFitmentValues(field, constraints = {}) {
  return [
    ...new Set(
      fitments
        .filter((item) =>
          Object.entries(constraints).every(([key, value]) => !value || item[key] === value),
        )
        .map((item) => item[field]),
    ),
  ];
}

function syncFitmentState() {
  const years = uniqueFitmentValues("year");
  if (!years.includes(fitmentState.year)) fitmentState.year = years[0];

  const makes = uniqueFitmentValues("make", { year: fitmentState.year });
  if (!makes.includes(fitmentState.make)) fitmentState.make = makes[0];

  const models = uniqueFitmentValues("model", {
    year: fitmentState.year,
    make: fitmentState.make,
  });
  if (!models.includes(fitmentState.model)) fitmentState.model = models[0];

  const productTypes = uniqueFitmentValues("productType", {
    year: fitmentState.year,
    make: fitmentState.make,
    model: fitmentState.model,
  });
  if (!productTypes.includes(fitmentState.productType)) fitmentState.productType = productTypes[0];
}

function renderOptions(field, constraints) {
  return uniqueFitmentValues(field, constraints)
    .map((value) => `<option value="${value}" ${fitmentState[field] === value ? "selected" : ""}>${value}</option>`)
    .join("");
}

function renderFitmentDemo() {
  syncFitmentState();

  const selected = fitments.find(
    (item) =>
      item.year === fitmentState.year &&
      item.make === fitmentState.make &&
      item.model === fitmentState.model &&
      item.productType === fitmentState.productType,
  );

  const collectionUrl = selected
    ? `/collections/${selected.handle}?filter.p.product_type=${encodeURIComponent(selected.productType)}`
    : "/collections/no-fitment-found";

  document.querySelector("#demo-panel").innerHTML = `
    <div class="demo-heading">
      <p class="eyebrow">Shopify workflow sample</p>
      <h3>Shopify Vehicle Fitment Finder</h3>
    </div>
    <div class="fitment-demo">
      <div class="fitment-controls">
        <label>
          <span>Year</span>
          <select data-fitment-field="year">${renderOptions("year")}</select>
        </label>
        <label>
          <span>Make</span>
          <select data-fitment-field="make">${renderOptions("make", { year: fitmentState.year })}</select>
        </label>
        <label>
          <span>Model</span>
          <select data-fitment-field="model">${renderOptions("model", {
            year: fitmentState.year,
            make: fitmentState.make,
          })}</select>
        </label>
        <label>
          <span>Product type</span>
          <select data-fitment-field="productType">${renderOptions("productType", {
            year: fitmentState.year,
            make: fitmentState.make,
            model: fitmentState.model,
          })}</select>
        </label>
      </div>
      <div class="fitment-result">
        <span class="status-badge">Matched</span>
        <strong>${fitmentState.year} ${fitmentState.make} ${fitmentState.model}</strong>
        <p>${fitmentState.productType}</p>
        <code>${collectionUrl}</code>
        <small>Fictional dataset and Shopify-style routing built for portfolio demonstration.</small>
      </div>
    </div>
  `;

  document.querySelectorAll("[data-fitment-field]").forEach((select) => {
    select.addEventListener("change", (event) => {
      fitmentState[event.target.dataset.fitmentField] = event.target.value;
      renderFitmentDemo();
    });
  });
}

document.querySelectorAll(".audience-card").forEach((card) => {
  card.addEventListener("click", () => renderAudience(card.dataset.audience));
});

document.querySelectorAll(".filter-row button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-row button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

document.querySelectorAll(".lab-tabs button").forEach((button) => {
  button.addEventListener("click", () => renderDemo(button.dataset.demo));
});

document.querySelectorAll('a[href^="mailto:adilahmetsargin@gmail.com"]').forEach((link) => {
  link.href = `mailto:${profile.email}?subject=Portfolio conversation&body=Hi ${profile.name},%0D%0A%0D%0AI saw your portfolio and wanted to talk about a software project.`;
});

renderAudience();
renderProjects();
renderDemo();
