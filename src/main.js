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
    name: "Assembly Line Digital Twin",
    type: "Automotive operations demo",
    categories: ["Automotive", "Corporate"],
    problem: "Supervisors need fast visibility into station health, bottlenecks, and work-in-progress movement.",
    solution: "A 3D-inspired production monitor with station status, OEE signals, takt pressure, and issue summaries.",
    value: "Shows I can build visual operations software for manufacturing teams, not just static web pages.",
    stack: ["JavaScript", "Dashboard UX", "Operations modeling"],
    live: "#lab",
    code: profile.github,
  },
  {
    name: "Vehicle Quality Intelligence",
    type: "Quality analytics concept",
    categories: ["Automotive", "Corporate"],
    problem: "Warranty claims and defect notes are hard to scan when the team needs root-cause direction quickly.",
    solution: "A quality console that groups issues by zone, severity, claim volume, and suggested action.",
    value: "Frames data into decisions: where to inspect, what to prioritize, and which build window to review.",
    stack: ["Data UX", "Filtering", "Analytics UI"],
    live: "#lab",
    code: profile.github,
  },
  {
    name: "Startup Launch Board",
    type: "MVP planning system",
    categories: ["Startup", "Upwork"],
    problem: "Founders often have scattered feature ideas but no clear launch sequence.",
    solution: "A prioritization board that separates launch-critical workflows from later improvements.",
    value: "Helps clients move from vague idea to buildable scope with less wasted engineering time.",
    stack: ["Product thinking", "JavaScript", "Responsive UI"],
    live: "#work",
    code: profile.github,
  },
  {
    name: "Internal Workflow Command Center",
    type: "Business tool template",
    categories: ["Corporate", "Upwork"],
    problem: "Teams track requests, owners, due dates, and status across spreadsheets and chat.",
    solution: "A focused internal app pattern for queues, ownership, risk, notes, and follow-up.",
    value: "Demonstrates the kind of practical software many small and mid-sized teams actually need.",
    stack: ["Forms", "Tables", "Automation-ready UX"],
    live: "#lab",
    code: profile.github,
  },
];

const demos = {
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
            <a href="${project.live}">Live demo</a>
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
