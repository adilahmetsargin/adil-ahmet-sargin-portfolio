const profile = {
  name: "Adil Ahmet Sargin",
  email: "adilahmetsargin@gmail.com",
  github: "https://github.com/adilahmetsargin",
};

const audienceCopy = {
  automotive: {
    title: "Automotive and manufacturing fit",
    text:
      "Relevant work includes vehicle fitment routing, plant handoff samples, quality visibility, supplier follow-up, and operations dashboard patterns.",
    proof: ["Vehicle fitment", "Plant workflows", "Supplier follow-up", "Quality visibility"],
  },
  startup: {
    title: "Product frontend fit",
    text:
      "Project work shows React/TypeScript interfaces, data-heavy screens, product flows, responsive layouts, and deployable frontend structure.",
    proof: ["React interfaces", "TypeScript structure", "Responsive UI", "Product flows"],
  },
  corporate: {
    title: "Internal tools fit",
    text:
      "Internal tool projects focus on queues, filters, notes, ownership, SLA risk, admin workflows, and visibility across repeated business tasks.",
    proof: ["Ticket queues", "Admin workflows", "Dashboards", "Operational visibility"],
  },
  automation: {
    title: "Automation workflow fit",
    text:
      "Automation-adjacent work includes RPA practice flows, repeatable task screens, progress tracking, evidence capture, and AI-assisted review.",
    proof: ["RPA concepts", "Task flows", "Progress tracking", "Review workflows"],
  },
};

const projects = [
  {
    name: "Shopify Vehicle Fitment Finder",
    type: "Automotive ecommerce workflow",
    categories: ["Automotive", "Frontend"],
    signals: ["Shopify", "Vehicle fitment", "Catalog routing"],
    problem: "Automotive shoppers need to narrow parts by Year, Make, Model, and Product Type without landing on the wrong Shopify collection.",
    solution: "Built a cascading fitment workflow that maps vehicle choices to Shopify-style collection URLs and product filters.",
    value: "Shows automotive ecommerce experience: cleaner product discovery, fewer wrong-fit clicks, and faster catalog routing.",
    stack: ["JavaScript", "Vehicle data modeling", "Shopify URL logic", "Responsive UI"],
    live: "#lab",
    code: "https://github.com/adilahmetsargin/adil-ahmet-sargin-portfolio",
  },
  {
    name: "Automotive Operations Live Lab",
    type: "Manufacturing workflow prototype",
    categories: ["Automotive", "Internal Tools"],
    signals: ["Plant ops", "Quality", "Supplier risk"],
    problem: "Manufacturing teams need fast, scan-friendly ways to review shift handoffs, supplier follow-ups, and quality issues.",
    solution: "Built interactive demos for shift handoff, supplier risk, and quality console workflows using plant operations language.",
    value: "Shows how I structure operations software around status visibility, ownership, and fast decisions.",
    stack: ["JavaScript", "Operations UX", "Dashboard UI", "Responsive design"],
    live: "#lab",
    code: "https://github.com/adilahmetsargin/adil-ahmet-sargin-portfolio",
  },
  {
    name: "Customer Support Ticketing Dashboard",
    type: "Internal operations dashboard",
    categories: ["Internal Tools", "Frontend"],
    signals: ["SLA workflows", "Ticket queues", "Forms"],
    problem: "Support teams need one console for ticket queues, SLA risk, conversations, notes, and create-ticket workflows.",
    solution: "Built a React TypeScript dashboard with filters, ticket detail management, validated forms, persistence, and tests.",
    value: "Shows production-style frontend thinking: state management, responsive layouts, accessible forms, and workflow coverage.",
    stack: ["React", "TypeScript", "Vite", "Zustand", "React Hook Form", "Zod", "Vitest"],
    live: "#lab",
    code: "https://github.com/adilahmetsargin/customer-support-ticketing-dashboard",
  },
  {
    name: "UiPath Practice Lab",
    type: "Full-stack automation learning platform",
    categories: ["Automation", "Frontend"],
    signals: ["RPA", "Learning platform", "Supabase-ready"],
    problem: "RPA learners need hands-on tasks, progress tracking, feedback, and simulated automation scenarios.",
    solution: "Built a Next.js TypeScript platform with missions, scenario tasks, demo auth, Supabase-ready schema, and AI review flows.",
    value: "Shows automation-adjacent product work across UX, training workflows, database design, and RPA concepts.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase-ready", "AI feedback", "LocalStorage"],
    live: "#lab",
    code: "https://github.com/adilahmetsargin/UiPath-Practice-Lab",
  },
  {
    name: "Northstar Analytics Dashboard",
    type: "SaaS analytics dashboard",
    categories: ["Frontend", "Internal Tools"],
    signals: ["SaaS metrics", "Charts", "Account health"],
    problem: "SaaS teams need visibility into revenue, churn, account health, and filters without digging through raw tables.",
    solution: "Built an analytics dashboard with KPI cards, charts, account health filters, dark mode, validation, and tests.",
    value: "Shows dashboard UX, data presentation, state management, form validation, and testing discipline.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Zustand", "Recharts", "Jest"],
    live: "#lab",
    code: "https://github.com/adilahmetsargin/northstar-analytics-dashboard",
  },
  {
    name: "Job Finder / Resume Tailoring MVP",
    type: "Career product MVP",
    categories: ["Frontend", "Automation"],
    signals: ["ATS scoring", "PDF export", "Applications"],
    problem: "Job seekers switch between job feeds, resume edits, ATS checks, PDF export, and application notes.",
    solution: "Built a mobile-first MVP with job feeds, ATS scoring, AI-assisted rewrites, PDF export, and saved application materials.",
    value: "Shows product thinking across discovery, scoring, editing, exporting, and application workflow in one experience.",
    stack: ["JavaScript", "MVP UX", "ATS workflow", "PDF export", "AI-assisted writing"],
    live: "https://aasresumebuilder.netlify.app/",
    code: "https://github.com/adilahmetsargin/job-finder",
  },
  {
    name: "Flagship Commerce",
    type: "E-commerce platform concept",
    categories: ["Frontend"],
    signals: ["Commerce UX", "Admin flows", "Checkout"],
    problem: "Commerce projects need catalog UX, admin workflows, checkout logic, and scalable frontend structure.",
    solution: "Built an e-commerce platform concept with product flows, admin patterns, checkout logic, state, and tests.",
    value: "Shows polished commerce interfaces, maintainable architecture, and product workflow thinking.",
    stack: ["Next.js", "TypeScript", "Tailwind", "TanStack Query", "Zustand", "Supabase-ready"],
    live: "#work",
    code: "https://github.com/adilahmetsargin/flagship-commerce",
  },
];

const demos = {
  fitment: {
    title: "Shopify Vehicle Fitment Finder",
  },
  handoff: {
    title: "Shift Handoff Board",
  },
  supplier: {
    title: "Supplier Follow-up Tracker",
  },
  quality: {
    title: "Quality Console",
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

const handoffItems = [
  {
    id: "H-1042",
    status: "Open",
    area: "Paint line",
    issue: "Orange peel trend on left rear door",
    owner: "M. Carter",
    next: "Check booth humidity log",
    priority: "High",
  },
  {
    id: "H-1043",
    status: "Watch",
    area: "Final QA",
    issue: "Two repeat trim clips flagged",
    owner: "A. Singh",
    next: "Compare supplier lot photos",
    priority: "Medium",
  },
  {
    id: "H-1044",
    status: "Open",
    area: "Weld cell",
    issue: "Robot 3 cycle delay after reset",
    owner: "J. Miller",
    next: "Review reset sequence timing",
    priority: "Medium",
  },
];

const supplierItems = [
  {
    id: "S-210",
    risk: "High",
    supplier: "Lakeside Fasteners",
    part: "Clip B-114",
    due: "Today",
    owner: "M. Carter",
    action: "Confirm revised ship time",
    contacted: false,
  },
  {
    id: "S-211",
    risk: "Medium",
    supplier: "Woodward Plastics",
    part: "Console bracket",
    due: "Friday",
    owner: "A. Singh",
    action: "Request updated PPAP notes",
    contacted: true,
  },
  {
    id: "S-212",
    risk: "Low",
    supplier: "Riverbend Seating",
    part: "Foam insert",
    due: "Next week",
    owner: "J. Miller",
    action: "Schedule routine follow-up",
    contacted: false,
  },
];

const qualityItems = [
  {
    id: "Q-330",
    severity: "Critical",
    component: "Door seal",
    claims: 42,
    action: "Inspect build window 06/10-06/17",
    status: "Review",
  },
  {
    id: "Q-331",
    severity: "Medium",
    component: "Infotainment",
    claims: 19,
    action: "Review harness supplier notes",
    status: "Open",
  },
  {
    id: "Q-332",
    severity: "Watch",
    component: "Rear camera",
    claims: 11,
    action: "Monitor next release",
    status: "Open",
  },
];

const sampleState = {
  handoffStatus: "All",
  supplierRisk: "All",
  qualitySeverity: "All",
  selectedSupplierId: "S-210",
  selectedQualityId: "Q-330",
};

function renderAudience(key = "automotive") {
  const target = audienceCopy[key];
  document.querySelectorAll(".audience-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.audience === key);
  });
  document.querySelector("#audience-detail").innerHTML = `
    <div>
      <p class="eyebrow">Role match</p>
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
            <span>${project.signals.join(" • ")}</span>
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
            <a href="${project.live}">Live</a>
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

  if (key === "handoff") {
    renderHandoffDemo(demo);
    return;
  }

  if (key === "supplier") {
    renderSupplierDemo(demo);
    return;
  }

  if (key === "quality") {
    renderQualityDemo(demo);
    return;
  }
}

function renderDemoShell(demo, eyebrow, content) {
  document.querySelector("#demo-panel").innerHTML = `
    <div class="demo-heading">
      <p class="eyebrow">${eyebrow}</p>
      <h3>${demo.title}</h3>
    </div>
    ${content}
  `;
}

function renderSummary(items) {
  return items
    .map(
      (item) => `
        <article>
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </article>
      `,
    )
    .join("");
}

function renderPillOptions(name, options, activeValue) {
  return options
    .map(
      (option) => `
        <button class="${option === activeValue ? "active" : ""}" type="button" data-filter-group="${name}" data-filter-value="${option}">
          ${option}
        </button>
      `,
    )
    .join("");
}

function renderHandoffDemo(demo) {
  const statuses = ["Open", "Watch", "Done"];

  renderDemoShell(
    demo,
    "Shift-change kanban sample",
    `
      <div class="handoff-board">
        ${statuses
          .map(
            (status) => `
              <section class="handoff-column">
                <div class="handoff-column-top">
                  <strong>${status}</strong>
                  <span>${handoffItems.filter((item) => item.status === status).length}</span>
                </div>
                <div class="handoff-cards">
                  ${handoffItems
                    .filter((item) => item.status === status)
                    .map(
                      (item) => `
                        <article>
                          <span class="status-badge ${item.priority.toLowerCase()}">${item.priority}</span>
                          <h4>${item.area}</h4>
                          <p>${item.issue}</p>
                          <small>${item.owner} • ${item.id}</small>
                          <div class="handoff-card-actions">
                            <button type="button" data-handoff-id="${item.id}" data-handoff-status="Watch">Watch</button>
                            <button type="button" data-handoff-id="${item.id}" data-handoff-status="Done">Done</button>
                          </div>
                        </article>
                      `,
                    )
                    .join("")}
                </div>
              </section>
            `,
          )
          .join("")}
      </div>
      <div class="handoff-footer">
        <strong>Next shift note</strong>
        <span>${handoffItems.find((item) => item.status !== "Done")?.next || "No open handoff items"}</span>
      </div>
    `,
  );

  document.querySelectorAll("[data-handoff-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = handoffItems.find((entry) => entry.id === button.dataset.handoffId);
      item.status = button.dataset.handoffStatus;
      renderHandoffDemo(demo);
    });
  });
}

function renderSupplierDemo(demo) {
  const selected = supplierItems.find((item) => item.id === sampleState.selectedSupplierId) || supplierItems[0];
  const riskScore = { High: 84, Medium: 56, Low: 24 }[selected.risk];

  renderDemoShell(
    demo,
    "Supplier follow-up sample",
    `
      <div class="supplier-workspace">
        <div class="supplier-list">
          ${supplierItems
            .map(
              (item) => `
                <button class="${item.id === selected.id ? "active" : ""}" type="button" data-supplier-select="${item.id}">
                  <span class="status-badge ${item.risk.toLowerCase()}">${item.risk}</span>
                  <strong>${item.supplier}</strong>
                  <small>${item.part} • Due ${item.due}</small>
                </button>
              `,
            )
            .join("")}
        </div>
        <section class="supplier-detail">
          <div class="supplier-score">
            <span>Risk score</span>
            <strong>${riskScore}</strong>
            <div><i style="width: ${riskScore}%"></i></div>
          </div>
          <div class="supplier-detail-body">
            <p>${selected.action}</p>
            <dl>
              <div><dt>Part</dt><dd>${selected.part}</dd></div>
              <div><dt>Owner</dt><dd>${selected.owner}</dd></div>
              <div><dt>Status</dt><dd>${selected.contacted ? "Contacted" : "Needs follow-up"}</dd></div>
            </dl>
          </div>
          <div class="supplier-timeline">
            <span>Created request</span>
            <span>${selected.contacted ? "Supplier contacted" : "Waiting on supplier"}</span>
            <span>${selected.due}</span>
          </div>
          <button type="button" data-supplier-id="${selected.id}">
            ${selected.contacted ? "Undo contact" : "Mark contacted"}
          </button>
        </section>
      </div>
    `,
  );

  document.querySelectorAll("[data-supplier-select]").forEach((button) => {
    button.addEventListener("click", () => {
      sampleState.selectedSupplierId = button.dataset.supplierSelect;
      renderSupplierDemo(demo);
    });
  });

  document.querySelectorAll("[data-supplier-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = supplierItems.find((entry) => entry.id === button.dataset.supplierId);
      item.contacted = !item.contacted;
      renderSupplierDemo(demo);
    });
  });
}

function renderQualityDemo(demo) {
  const selected = qualityItems.find((item) => item.id === sampleState.selectedQualityId) || qualityItems[0];
  const totalClaims = qualityItems.reduce((sum, item) => sum + item.claims, 0);
  const maxClaims = Math.max(...qualityItems.map((item) => item.claims));

  renderDemoShell(
    demo,
    "Warranty claim analysis sample",
    `
      <div class="quality-console">
        <div class="quality-metrics">
          ${renderSummary([
            { label: "Total claims", value: totalClaims },
            { label: "Top issue", value: qualityItems[0].component },
            { label: "In review", value: qualityItems.filter((item) => item.status === "Review").length },
          ])}
        </div>
        <div class="quality-bars">
          ${qualityItems
            .map(
              (item) => `
                <button class="${item.id === selected.id ? "active" : ""}" type="button" data-quality-select="${item.id}">
                  <span>${item.component}</span>
                  <i style="width: ${(item.claims / maxClaims) * 100}%"></i>
                  <strong>${item.claims}</strong>
                </button>
              `,
            )
            .join("")}
        </div>
        <section class="quality-detail">
          <span class="status-badge ${selected.severity.toLowerCase()}">${selected.severity}</span>
          <h4>${selected.component}</h4>
          <p>${selected.action}</p>
          <small>${selected.id} • Status: ${selected.status}</small>
          <button type="button" data-quality-id="${selected.id}">
            ${selected.status === "Review" ? "Close review" : "Send to review"}
          </button>
        </section>
      </div>
    `,
  );

  document.querySelectorAll("[data-quality-select]").forEach((button) => {
    button.addEventListener("click", () => {
      sampleState.selectedQualityId = button.dataset.qualitySelect;
      renderQualityDemo(demo);
    });
  });

  document.querySelectorAll("[data-quality-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = qualityItems.find((entry) => entry.id === button.dataset.qualityId);
      item.status = item.status === "Review" ? "Closed" : "Review";
      renderQualityDemo(demo);
    });
  });
}

function bindSampleFilters() {
  document.querySelectorAll("[data-filter-group]").forEach((button) => {
    button.addEventListener("click", () => {
      sampleState[button.dataset.filterGroup] = button.dataset.filterValue;
      renderDemo(document.querySelector(".lab-tabs button.active").dataset.demo);
    });
  });
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
        <small>Example catalog flow showing how vehicle fitment choices can route shoppers to the right Shopify collection.</small>
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
  link.href = `mailto:${profile.email}?subject=Software role conversation&body=Hi ${profile.name},%0D%0A%0D%0AI reviewed your portfolio and would like to talk about a software role.`;
});

renderAudience();
renderProjects();
renderDemo();
