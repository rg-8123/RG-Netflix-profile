/* =========================================================
   Rajath Gowda — Netflix-style interactive resume
   Three profiles: recruiter | engineer | visitor
   ---------------------------------------------------------
   EASY EDITS:
   - LINKS        -> update LinkedIn / GitHub URLs below
   - GITHUB_REPOS -> add your repos for the Engineer page
   - images/      -> drop posters/photos (got.jpg, sports.jpg, ...)
   ========================================================= */

/* ---------- Links (update these) ---------- */
const LINKS = {
  // TODO: replace with your real profile URLs
  linkedin: "https://www.linkedin.com/in/rajath-gowda/",
  github: "https://github.com/",            // your GitHub profile
  email: "mailto:rajathg64@gmail.com",
  phone: "tel:+918123200196",
  resume: "RajathGowda-SDET-2026.pdf",
};

/* ---------- GitHub repos for the Engineer page (add later) ---------- */
// Fill these in any time. Leave empty for "Add repo" placeholders.
const GITHUB_REPOS = [
  // { title: "my-automation-framework", desc: "Selenium + Cucumber BDD framework", url: "https://github.com/you/repo", tags: ["Java", "Selenium"] },
];

/* ---------- Tech stack (devicon classes or emoji fallback) ---------- */
const TECH = {
  java:        { icon: "devicon-java-plain colored", name: "Java" },
  python:      { icon: "devicon-python-plain colored", name: "Python" },
  javascript:  { icon: "devicon-javascript-plain colored", name: "JavaScript" },
  typescript:  { icon: "devicon-typescript-plain colored", name: "TypeScript" },
  kotlin:      { icon: "devicon-kotlin-plain colored", name: "Kotlin" },
  selenium:    { icon: "devicon-selenium-original colored", name: "Selenium" },
  postman:     { icon: "devicon-postman-plain colored", name: "Postman" },
  docker:      { icon: "devicon-docker-plain colored", name: "Docker" },
  kubernetes:  { icon: "devicon-kubernetes-plain colored", name: "Kubernetes" },
  jenkins:     { icon: "devicon-jenkins-line colored", name: "Jenkins" },
  gradle:      { icon: "devicon-gradle-plain colored", name: "Gradle" },
  git:         { icon: "devicon-git-plain colored", name: "Git" },
  github:      { icon: "devicon-github-original", name: "GitHub" },
  grafana:     { icon: "devicon-grafana-original colored", name: "Grafana" },
  prometheus:  { icon: "devicon-prometheus-original colored", name: "Prometheus" },
  postgres:    { icon: "devicon-postgresql-plain colored", name: "PostgreSQL" },
  mysql:       { icon: "devicon-mysql-plain colored", name: "MySQL" },
  mongodb:     { icon: "devicon-mongodb-plain colored", name: "MongoDB" },
  oracle:      { icon: "devicon-oracle-original colored", name: "Oracle" },
  spring:      { icon: "devicon-spring-plain colored", name: "Spring" },
  angular:     { icon: "devicon-angularjs-plain colored", name: "Angular" },
  html:        { icon: "devicon-html5-plain colored", name: "HTML5" },
  css:         { icon: "devicon-css3-plain colored", name: "CSS3" },
  jira:        { icon: "devicon-jira-plain colored", name: "Jira" },
  intellij:    { icon: "devicon-intellij-plain colored", name: "IntelliJ" },
  // emoji fallbacks (no devicon available)
  cucumber:    { emoji: "🥒", name: "Cucumber" },
  restassured: { emoji: "🧪", name: "REST Assured" },
  llm:         { emoji: "🤖", name: "LLMs" },
  rag:         { emoji: "🔎", name: "RAG" },
  mcp:         { emoji: "🔗", name: "MCP" },
  copilot:     { emoji: "🧠", name: "Copilot" },
  otel:        { emoji: "📡", name: "OpenTelemetry" },
  loki:        { emoji: "🪵", name: "Loki" },
  snowflake:   { emoji: "❄️", name: "Snowflake" },
  jfrog:       { emoji: "🐸", name: "JFrog" },
  shell:       { emoji: "🐚", name: "Shell" },
  plsql:       { emoji: "🗄️", name: "PL/SQL" },
};

/* =========================================================
   PROFILE 1: RECRUITER  (formal full resume + tech icons)
   ========================================================= */
const RECRUITER = {
  accent: "#e50914",
  glow: "rgba(229,9,20,0.35)",
  hero: {
    eyebrow: "★ TOP PICK FOR YOUR TEAM",
    title: "Rajath Gowda",
    subtitle: "SDET • AI, Test Automation & Performance Engineering",
    meta: [
      { type: "badge", text: "Nearly a decade in IT" },
      { type: "text", text: "Bengaluru, India" },
      { type: "green", text: "98% Match" },
    ],
    overview:
      "SDET and automation engineer with nearly a decade of experience architecting and delivering " +
      "automated quality, performance, and data-engineering solutions across the full software " +
      "development lifecycle. Began as a hands-on developer before advancing into test automation, " +
      "performance engineering, and AI-powered enterprise solutions.",
    actions: [
      { label: "▶ Play Resume", cls: "btn-play", href: LINKS.resume, download: true },
      { label: "ⓘ More Info", cls: "btn-info", modalRef: ["experience", 0] },
    ],
  },
  rows: [
    {
      id: "experience", title: "Experience", sub: "Where I've been featured",
      cards: [
        {
          grad: "card-grad-1", badge: "NOW STREAMING", title: "Hitachi Vantara Ltd.",
          logo: "images/hitachi.png", brand: { bg: "linear-gradient(135deg,#e60027,#7a0015)", fg: "#ffffff", text: "HITACHI VANTARA" },
          meta: "SDET — AI & Automation · Sept 2020 – Present",
          tags: ["AI/LLMs", "Automation", "Performance Eng"],
          icons: ["llm", "rag", "mcp", "selenium", "restassured", "grafana", "docker"],
          modalSubtitle: "Software Development Engineer in Test · Bengaluru · IO Tahoe LLC merged into Hitachi Vantara",
          points: [
            "Design and deliver custom, AI-powered data identification solutions that automatically tag sensitive customer data with PII classifications using LLMs integrated with Pentaho Data Catalog (PDC) — achieving ~80% detection accuracy vs PDC's standard non-LLM solution.",
            "Build agentic AI workflows leveraging RAG and prompt engineering to detect, classify, and govern PII across large, heterogeneous enterprise datasets.",
            "Integrate Model Context Protocol (MCP) to connect LLMs with internal product tooling for reusable, context-aware AI services.",
            "Architect and maintain end-to-end test automation frameworks — REST Assured + Postman for APIs and Selenium + Cucumber BDD for GUI — to maximize coverage and minimize regression risk.",
            "Accelerate test creation with AI-assisted testing and GitHub Copilot, reducing manual scripting and review cycles.",
            "Drive performance engineering by profiling throughput, latency, and resource utilization and tuning systems to meet enterprise scalability targets.",
            "Implement an observability stack with Grafana, Prometheus, OpenObserve, Loki, and OpenTelemetry for live monitoring of data, logs, metrics, and performance.",
            "Build and maintain CI/CD pipelines with Gradle, GitHub Actions, JFrog, Docker, and Jenkins.",
            "Operate within Production Engineering to triage and resolve customer-reported issues each sprint in an Agile environment.",
          ],
        },
        {
          grad: "card-grad-2", badge: "DEV + LEADERSHIP", title: "Decathlon Sports India",
          logo: "images/decathlon.png", brand: { bg: "linear-gradient(135deg,#0082c3,#10437a)", fg: "#ffffff", text: "DECATHLON" },
          meta: "IT Technical Leader · July 2019 – Sept 2020",
          tags: ["Java", "PL/SQL", "REST APIs"],
          icons: ["java", "plsql", "javascript", "postgres", "shell"],
          modalSubtitle: "IT Technical Leader · Bengaluru, India",
          points: [
            "Implemented a data-archival solution using Shell and PL/SQL that reduced AWS server costs by ~50%, improved performance, and resolved longstanding issues.",
            "Led the technical team in upgrading Openbravo billing software and PostgreSQL across all POS systems in India, delivering new features and improved stability.",
            "Developed and integrated an API-based card-payment device using REST APIs, JavaScript, Java, and PL/SQL, reducing billing time and improving customer satisfaction.",
            "Migrated the code repository from Mercurial to GitHub, strengthening security and release management.",
            "Resolved real-time production incidents, improved code quality, and delivered strong customer support.",
          ],
        },
        {
          grad: "card-grad-3", badge: "WHERE IT BEGAN", title: "Tech Mahindra Limited",
          logo: "images/techm.png", brand: { bg: "linear-gradient(135deg,#c8102e,#7a0a1d)", fg: "#ffffff", text: "TECH MAHINDRA" },
          meta: "Application Developer · Sept 2016 – June 2019",
          tags: ["Java", "JSP", "ETL"],
          icons: ["java", "javascript", "plsql", "html", "css"],
          modalSubtitle: "Application Developer · Bengaluru · The foundation: hands-on software development",
          points: [
            "Developed web applications using Java, JSP, PL/SQL, JavaScript, HTML, and CSS to surface database statistics to end users.",
            "Designed and delivered custom client solutions using Java, JavaScript, and PL/SQL based on business requirements.",
            "Enhanced a custom ETL tool with new features, defect fixes, and UI improvements that boosted performance.",
            "Developed scheduled jobs (cron) for various business needs, reducing manual effort and improving efficiency.",
            "Authored high-quality JUnit tests and automation scripts for unit testing.",
          ],
        },
      ],
    },
    {
      id: "skills", title: "Skills", sub: "My genres",
      cards: [
        { grad: "card-grad-1", badge: "AI / ML", title: "AI & Machine Learning", meta: "LLMs, RAG, Agentic AI",
          tags: ["GPT", "Claude", "Gemini", "MCP"], icons: ["llm", "rag", "mcp", "copilot"], iconTop: ["llm", "rag", "copilot"],
          modalSubtitle: "Artificial Intelligence & Agentic Workflows",
          points: ["LLMs (GPT, Claude, Gemini)", "Retrieval-Augmented Generation (RAG)", "Prompt Engineering", "AI Agents & Agentic Workflows", "Model Context Protocol (MCP)", "AI-Assisted Testing, GitHub Copilot"] },
        { grad: "card-grad-2", badge: "AUTOMATION", title: "Test Automation", meta: "API & UI frameworks",
          tags: ["Selenium", "Cucumber", "REST Assured"], icons: ["selenium", "cucumber", "restassured", "postman"], iconTop: ["selenium", "cucumber", "postman"],
          modalSubtitle: "Quality engineering & test frameworks",
          points: ["Selenium, Cucumber (BDD/Gherkin)", "REST Assured, Postman", "JUnit, RPA", "API & UI Automation", "Test Framework Design"] },
        { grad: "card-grad-5", badge: "PERFORMANCE", title: "Performance Engineering", meta: "Profiling & tuning",
          tags: ["Load Testing", "Observability", "Tuning"], icons: ["grafana", "prometheus", "otel"], iconTop: ["grafana", "prometheus", "otel"],
          modalSubtitle: "Performance & reliability engineering",
          points: ["Performance & Load Testing", "Latency & Throughput Profiling", "Application Tuning", "Observability-Driven Optimization", "Production Engineering"] },
        { grad: "card-grad-3", badge: "CODE", title: "Languages", meta: "Polyglot developer",
          tags: ["Java", "Python", "TypeScript"], icons: ["java", "python", "javascript", "typescript", "kotlin", "plsql"], iconTop: ["java", "python", "typescript"],
          modalSubtitle: "Programming languages",
          points: ["Java", "Python", "JavaScript / TypeScript", "Kotlin", "PL/SQL", "Shell"] },
        { grad: "card-grad-6", badge: "DEVOPS", title: "CI/CD & DevOps", meta: "Pipelines & containers",
          tags: ["GitHub Actions", "Docker", "K8s"], icons: ["docker", "kubernetes", "jenkins", "gradle", "jfrog"], iconTop: ["docker", "kubernetes", "jenkins"],
          modalSubtitle: "Build, ship, and deploy",
          points: ["GitHub Actions, Jenkins", "Gradle, Maven, Apache Ant", "Docker, Kubernetes", "JFrog, Traefik"] },
        { grad: "card-grad-4", badge: "DATA", title: "Data & Databases", meta: "SQL & data platforms",
          tags: ["Oracle", "PostgreSQL", "MongoDB"], icons: ["oracle", "postgres", "mysql", "mongodb", "snowflake"], iconTop: ["oracle", "postgres", "mongodb"],
          modalSubtitle: "Data engineering & databases",
          points: ["Pentaho Data Catalog, Pentaho", "MongoDB, Oracle, PostgreSQL", "MySQL, MS SQL, Snowflake", "JDBC"] },
      ],
    },
    {
      id: "techstack", title: "Tech Stack", sub: "The toolbox", variant: "tech",
      tech: ["java", "python", "javascript", "typescript", "kotlin", "selenium", "cucumber", "restassured",
             "postman", "spring", "angular", "docker", "kubernetes", "jenkins", "gradle", "git", "github",
             "grafana", "prometheus", "otel", "oracle", "postgres", "mysql", "mongodb", "snowflake", "jira", "llm", "mcp"],
    },
    {
      id: "education", title: "Education", sub: "Origin story",
      cards: [
        { grad: "card-grad-2", badge: "DEGREE", title: "B.E., Electronics & Communications", meta: "Aug 2012 – June 2016", emoji: "🎓",
          tags: ["Engineering", "ECE"], modalSubtitle: "New Horizon College of Engineering, Bengaluru",
          points: ["Bachelor of Engineering in Electronics & Communications Engineering.", "New Horizon College of Engineering, Bengaluru.", "Foundation in systems, electronics, and software fundamentals."] },
      ],
    },
    {
      id: "achievements", title: "Achievements & Awards", sub: "Award-winning",
      cards: [
        { grad: "card-grad-3", badge: "AWARD", title: "Pat on the Back", meta: "Tech Mahindra · Dec 2017 & Dec 2018", emoji: "🏆",
          tags: ["Recognition"], modalSubtitle: "Tech Mahindra Ltd.", points: ["Awarded twice for outstanding contribution and delivery."] },
        { grad: "card-grad-2", badge: "AWARD", title: "Certificate of Appreciation", meta: "Decathlon · Jun 2020", emoji: "📜",
          tags: ["Recognition"], modalSubtitle: "Decathlon Sports India", points: ["Recognized for technical leadership and impactful delivery."] },
        { grad: "card-grad-1", badge: "RECOGNITION", title: "AI Delivery Recognition", meta: "Hitachi Vantara", emoji: "🤖",
          tags: ["AI", "Customer Impact"], modalSubtitle: "Hitachi Vantara Ltd.", points: ["Consistently recognized for delivering customer-facing AI solutions on Pentaho Data Catalog."] },
      ],
    },
  ],
};

/* =========================================================
   PROFILE 2: ENGINEER  (deep projects + GitHub space)
   ========================================================= */
const ENGINEER = {
  accent: "#1f8ef1",
  glow: "rgba(31,142,241,0.35)",
  hero: {
    eyebrow: "</> BUILT BY RAJATH",
    title: "The Build Log",
    subtitle: "Automation • AI Engineering • Performance",
    meta: [
      { type: "badge", text: "Frameworks & Pipelines" },
      { type: "text", text: "AI / LLM Systems" },
      { type: "green", text: "Always shipping" },
    ],
    overview:
      "A closer look at what I actually build: AI-powered data solutions, end-to-end automation " +
      "frameworks, performance tooling, and CI/CD pipelines. Dig into the projects below — and the " +
      "GitHub row is reserved for repos I'll be adding here.",
    actions: [
      { label: "▶ View Projects", cls: "btn-play", scrollTo: "row-projects" },
      { label: "★ GitHub", cls: "btn-accent", href: LINKS.github, external: true },
    ],
  },
  rows: [
    {
      id: "projects", title: "Featured Projects", sub: "Deep dives",
      cards: [
        { grad: "card-grad-1", badge: "AI · FLAGSHIP", title: "LLM-Powered PII Detection", meta: "Pentaho Data Catalog · ~80% accuracy",
          tags: ["LLMs", "RAG", "Data Governance"], icons: ["llm", "rag", "mcp"], iconTop: ["llm", "rag", "mcp"],
          modalSubtitle: "Custom AI data-identification engine for enterprise customers",
          points: [
            "Problem: enterprises needed to locate & classify sensitive PII across massive, messy datasets where rule-based catalog scans fell short.",
            "Approach: built an LLM-backed classification layer (RAG + prompt engineering) integrated directly into Pentaho Data Catalog.",
            "Result: ~80% detection accuracy vs the standard non-LLM PDC solution, automatically tagging sensitive customer data with PII classifications.",
            "Stack: LLMs (GPT/Claude/Gemini), RAG pipelines, MCP for tool access, Java/Python services.",
          ] },
        { grad: "card-grad-4", badge: "AI AGENTS", title: "Agentic AI + MCP Integration", meta: "Context-aware AI services",
          tags: ["Agentic AI", "MCP", "Prompt Eng"], icons: ["mcp", "llm", "copilot"], iconTop: ["mcp", "llm", "copilot"],
          modalSubtitle: "Connecting LLMs to internal product tooling",
          points: [
            "Designed agentic workflows that detect, classify, and govern data with minimal human steering.",
            "Integrated Model Context Protocol (MCP) so LLMs can call internal product tools safely.",
            "Packaged reusable AI services consumed across multiple product use cases.",
          ] },
        { grad: "card-grad-2", badge: "AUTOMATION", title: "End-to-End Test Automation", meta: "API + UI frameworks",
          tags: ["Selenium", "Cucumber", "REST Assured"], icons: ["selenium", "cucumber", "restassured", "postman"], iconTop: ["selenium", "cucumber", "postman"],
          modalSubtitle: "Framework architecture for coverage & speed",
          points: [
            "Architected reusable automation frameworks for both API and GUI layers.",
            "REST Assured + Postman for API verification; Selenium + Cucumber BDD for UI flows.",
            "Cut regression risk and sped up releases; accelerated test authoring with AI/Copilot.",
          ] },
        { grad: "card-grad-5", badge: "PERFORMANCE", title: "Observability & Perf Tuning", meta: "Live monitoring + optimization",
          tags: ["Grafana", "Prometheus", "OpenTelemetry"], icons: ["grafana", "prometheus", "otel", "loki"], iconTop: ["grafana", "prometheus", "loki"],
          modalSubtitle: "Performance engineering & production reliability",
          points: [
            "Profiled throughput, latency, and resource usage to hit enterprise scalability targets.",
            "Stood up Grafana + Prometheus + OpenObserve + Loki + OpenTelemetry for full visibility.",
            "Enabled proactive detection and faster resolution of production incidents.",
          ] },
        { grad: "card-grad-3", badge: "IMPACT", title: "Data Archival — 50% Cost Cut", meta: "Decathlon · Shell + PL/SQL",
          tags: ["Shell", "PL/SQL", "AWS"], icons: ["shell", "plsql"], iconTop: ["shell", "plsql"],
          modalSubtitle: "Infrastructure cost optimization",
          points: ["Designed a data-archival solution in Shell + PL/SQL.", "Reduced AWS server cost by ~50% while improving performance.", "Cleared several longstanding production issues."] },
        { grad: "card-grad-6", badge: "CI/CD", title: "CI/CD Pipeline Engineering", meta: "Automated quality gates",
          tags: ["GitHub Actions", "Docker", "Jenkins"], icons: ["docker", "jenkins", "gradle", "jfrog", "github"], iconTop: ["docker", "jenkins", "github"],
          modalSubtitle: "Continuous integration & delivery",
          points: ["Built pipelines with Gradle, GitHub Actions, JFrog, Docker, and Jenkins.", "Enforced code quality and systematic testing for smooth deployments."] },
      ],
    },
    {
      id: "github", title: "GitHub Projects", sub: "Live repos — more coming soon",
      isGithub: true,
    },
    {
      id: "techstack", title: "Tech Stack", sub: "What I build with", variant: "tech",
      tech: ["java", "python", "typescript", "selenium", "cucumber", "restassured", "spring", "docker",
             "kubernetes", "jenkins", "gradle", "git", "github", "grafana", "prometheus", "otel",
             "postgres", "mongodb", "llm", "rag", "mcp", "copilot"],
    },
    {
      id: "experiments", title: "Lab / Experiments", sub: "Tinkering zone",
      cards: [
        { grad: "card-grad-4", badge: "WIP", title: "AI Agent Playground", meta: "RAG + tools sandbox",
          tags: ["Agentic AI", "RAG"], iconTop: ["llm", "rag", "mcp"], modalSubtitle: "Personal experiments with agent frameworks",
          points: ["A space for prototyping agentic AI patterns, prompt strategies, and MCP tools.", "Repos coming to the GitHub row above."] },
        { grad: "card-grad-2", badge: "WIP", title: "Automation Snippets", meta: "Reusable test utilities",
          tags: ["Selenium", "Java"], iconTop: ["selenium", "java", "git"], modalSubtitle: "Handy automation helpers",
          points: ["Collection of reusable framework utilities and patterns.", "To be published on GitHub."] },
      ],
    },
  ],
};

/* =========================================================
   PROFILE 3: VISITOR  (casual / sarcastic, hobbies, GoT)
   ========================================================= */
const VISITOR = {
  accent: "#7b4397",
  glow: "rgba(123,67,151,0.4)",
  hero: {
    eyebrow: "🍿 NOW PLAYING",
    title: "The Rajath Show",
    subtitle: "A dramedy about sports, gaming, travel & questionable photography",
    meta: [
      { type: "badge", text: "Unscripted" },
      { type: "text", text: "Bengaluru, India" },
      { type: "green", text: "99% would hang out again" },
    ],
    overview:
      "Welcome to my corner of the internet. You came for a resume, but plot twist — this profile " +
      "has snacks. Expect more talk about Game of Thrones theories and slightly-too-many vacation " +
      "photos than enterprise software. The serious, suit-and-tie version is one profile over. " +
      "You've been warned. Enjoy the show.",
    actions: [
      { label: "▶ Skip Intro", cls: "btn-play", scrollTo: "row-binging" },
      { label: "＋ The Boring Version", cls: "btn-info", href: LINKS.resume, download: true },
    ],
  },
  rows: [
    {
      id: "binging", title: "Currently Binging", sub: "On repeat, no regrets", variant: "poster",
      cards: [
        { image: "images/got.jpg", grad: "card-grad-got", emoji: "🐉", badge: "S1–S8", title: "Game of Thrones",
          tags: ["Fantasy", "Re-watch #?"], modalSubtitle: "Winter came. I stayed.",
          points: ["Watched it all. Twice. Maybe three times — who's counting?", "Will defend (most of) the ending in a debate you didn't ask for.", "House words around here: 'One more episode.'"] },
        { grad: "card-grad-5", emoji: "🎮", badge: "CO-OP", title: "Game Night", variant: "poster",
          tags: ["Gaming", "Late nights"], modalSubtitle: "Just one more match.",
          points: ["Controller in hand, snacks within reach.", "Competitive enough to care, chill enough to lose gracefully... mostly."] },
        { grad: "card-grad-2", emoji: "⚽", badge: "LIVE", title: "Sports O'Clock", variant: "poster",
          tags: ["Sports", "Match day"], modalSubtitle: "Will watch, play, or argue about it.",
          points: ["If there's a ball, a score, or a rivalry, I'm in.", "Equally happy playing or yelling at a screen."] },
      ],
    },
    {
      id: "hobbies", title: "Top Picks: My Hobbies", sub: "Because you clicked 'Visitor'", variant: "poster",
      cards: [
        { image: "images/sports.jpg", grad: "card-grad-2", emoji: "🏏", badge: "TEAM PLAYER", title: "Sports",
          tags: ["Cricket", "Football", "Anything"], modalSubtitle: "Cardio disguised as fun.",
          points: ["Play it, watch it, overanalyze it.", "Great for teamwork talking points in interviews. Also just fun."] },
        { image: "images/gaming.jpg", grad: "card-grad-5", emoji: "🎮", badge: "PRESS START", title: "Gaming",
          tags: ["Console", "Strategy"], modalSubtitle: "Problem-solving with extra explosions.",
          points: ["From strategy to shooters — I like a good challenge.", "Yes, debugging and boss fights are basically the same skill."] },
        { image: "images/travel.jpg", grad: "card-grad-3", emoji: "✈️", badge: "WANDERLUST", title: "Travel",
          tags: ["Roadtrips", "New places"], modalSubtitle: "Collecting places, not things.",
          points: ["New city, new food, new wrong turn that becomes the best part.", "The map app and I have trust issues, and I love it."] },
        { image: "images/photography.jpg", grad: "card-grad-6", emoji: "📷", badge: "SHOT ON RG", title: "Photography",
          tags: ["Landscapes", "Candids"], modalSubtitle: "Making strangers wait while I 'get the shot'.",
          points: ["Always the one who says 'wait, one more.'", "Travel + photography = a camera roll that needs its own hard drive."] },
      ],
    },
    {
      id: "facts", title: "Trailers & Fun Facts", sub: "No spoilers",
      cards: [
        { grad: "card-grad-1", emoji: "⏳", badge: "PLOT", title: "Nearly a Decade In", meta: "Started Sept 2016",
          tags: ["Origin story"], modalSubtitle: "The 'experience' montage",
          points: ["Been in IT since 2016 — that's nearly 10 years of plot development.", "Started as a developer, leveled up into automation, performance, and AI."] },
        { grad: "card-grad-got", emoji: "🐺", badge: "FANDOM", title: "GoT Certified", meta: "Westeros resident",
          tags: ["Dragons", "Debates"], modalSubtitle: "House motto: one more episode",
          points: ["Strong opinions about dragons, thrones, and who should've won.", "Will absolutely theorize with you."] },
        { grad: "card-grad-4", emoji: "🤖", badge: "BONUS", title: "The Day Job (skip if bored)", meta: "SDET + AI",
          tags: ["AI", "Automation"], modalSubtitle: "Okay, a little tech talk",
          points: ["By day: I build AI-powered testing and automation for enterprise software.", "Curious about the real details? Switch to the Recruiter or Engineer profile.", "That's enough work talk for the fun page."] },
      ],
    },
  ],
};

const PROFILES = { recruiter: RECRUITER, engineer: ENGINEER, visitor: VISITOR };
const PROFILE_LABEL = { recruiter: "Recruiter", engineer: "Engineer", visitor: "Visitor" };
const PROFILE_AVATAR = { recruiter: "RG", engineer: "</>", visitor: "🍿" };

/* ---------- DOM helpers ---------- */
const $ = (sel) => document.querySelector(sel);
const create = (tag, cls) => { const el = document.createElement(tag); if (cls) el.className = cls; return el; };
let CURRENT = null;

/* ---------- Profile gate ---------- */
function initProfileGate() {
  $("#profile-list").querySelectorAll(".profile").forEach((p) => {
    const key = p.dataset.profile;
    const enter = () => selectProfile(key);
    p.addEventListener("click", enter);
    p.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); enter(); } });
  });
}

function selectProfile(key) {
  CURRENT = key;
  const gate = $("#profile-gate");
  const app = $("#app");
  renderProfile(PROFILES[key], key);
  gate.classList.add("fade-out");
  setTimeout(() => { gate.classList.add("hidden"); app.classList.remove("hidden"); window.scrollTo(0, 0); }, gate.classList.contains("hidden") ? 0 : 500);
}

function showGate() {
  const gate = $("#profile-gate");
  $("#app").classList.add("hidden");
  gate.classList.remove("hidden", "fade-out");
  window.scrollTo(0, 0);
}

/* ---------- Render a whole profile ---------- */
function renderProfile(profile, key) {
  document.documentElement.style.setProperty("--accent", profile.accent);
  $("#hero").style.setProperty("--hero-glow", profile.glow);

  renderHero(profile.hero);
  renderNav(profile, key);
  renderRows(profile.rows);
  renderFooter();
  $("#year").textContent = new Date().getFullYear();
}

/* ---------- Hero ---------- */
function renderHero(hero) {
  $("#hero-eyebrow").textContent = hero.eyebrow;
  $("#hero-title").textContent = hero.title;
  $("#hero-subtitle").textContent = hero.subtitle;
  $("#hero-overview").textContent = hero.overview;

  const meta = $("#hero-meta"); meta.innerHTML = "";
  hero.meta.forEach((m, i) => {
    if (i > 0) { const dot = create("span", "dot"); dot.textContent = "•"; meta.appendChild(dot); }
    const span = create("span", m.type === "badge" ? "badge" : m.type === "green" ? "badge-green" : "");
    span.textContent = m.text; meta.appendChild(span);
  });

  const actions = $("#hero-actions"); actions.innerHTML = "";
  hero.actions.forEach((a) => actions.appendChild(buildAction(a)));
}

function buildAction(a) {
  if (a.href) {
    const link = create("a", `btn ${a.cls}`);
    link.textContent = a.label; link.href = a.href;
    if (a.download) link.setAttribute("download", "");
    if (a.external) { link.target = "_blank"; link.rel = "noopener"; }
    return link;
  }
  const btn = create("button", `btn ${a.cls}`);
  btn.textContent = a.label;
  if (a.scrollTo) btn.addEventListener("click", () => document.getElementById(a.scrollTo)?.scrollIntoView({ behavior: "smooth" }));
  if (a.modalRef) btn.addEventListener("click", () => {
    const [rowId, idx] = a.modalRef;
    const row = PROFILES[CURRENT].rows.find((r) => r.id === rowId);
    if (row?.cards?.[idx]) openModal(row.cards[idx]);
  });
  return btn;
}

/* ---------- Nav ---------- */
function renderNav(profile, key) {
  const links = $("#nav-links"); links.innerHTML = "";
  profile.rows.forEach((r) => {
    const a = create("a"); a.href = `#row-${r.id}`; a.textContent = r.title; links.appendChild(a);
  });

  const right = $("#nav-right"); right.innerHTML = "";
  const resume = create("a", "nav-btn"); resume.href = LINKS.resume; resume.setAttribute("download", ""); resume.textContent = "⬇ Resume";
  right.appendChild(resume);

  const inIcon = create("a", "nav-icon"); inIcon.href = LINKS.linkedin; inIcon.target = "_blank"; inIcon.rel = "noopener"; inIcon.title = "LinkedIn"; inIcon.textContent = "in";
  const mail = create("a", "nav-icon"); mail.href = LINKS.email; mail.title = "Email"; mail.textContent = "✉";
  right.append(inIcon, mail);

  if (key !== "visitor") {
    const gh = create("a", "nav-icon"); gh.href = LINKS.github; gh.target = "_blank"; gh.rel = "noopener"; gh.title = "GitHub";
    gh.innerHTML = '<i class="devicon-github-original"></i>'; right.appendChild(gh);
  }

  const switcher = create("button", "nav-switch");
  switcher.innerHTML = `<span class="mini-avatar">${PROFILE_AVATAR[key]}</span><span>${PROFILE_LABEL[key]} ▾</span>`;
  switcher.addEventListener("click", showGate);
  right.appendChild(switcher);
}

/* ---------- Rows ---------- */
function renderRows(rows) {
  const container = $("#rows"); container.innerHTML = "";
  rows.forEach((row) => {
    const section = create("section", "row" + (row.variant === "poster" ? " row-poster" : ""));
    section.id = `row-${row.id}`;

    const header = create("div", "row-header");
    const h = create("h2", "row-title"); h.textContent = row.title;
    const sub = create("span", "row-sub"); sub.textContent = row.sub;
    header.append(h, sub);
    section.appendChild(header);

    if (row.variant === "tech") {
      section.appendChild(buildTechGrid(row.tech));
    } else if (row.isGithub) {
      section.appendChild(buildGithubTrack());
    } else {
      const track = create("div", "row-track");
      row.cards.forEach((card) => track.appendChild(buildCard(card)));
      section.appendChild(track);
    }
    container.appendChild(section);
  });
}

/* ---------- Tech grid ---------- */
function buildTechGrid(keys) {
  const grid = create("div", "tech-grid");
  keys.forEach((k) => {
    const t = TECH[k]; if (!t) return;
    const chip = create("div", "tech-chip");
    if (t.icon) { const i = create("i"); i.className = t.icon; chip.appendChild(i); }
    else { const e = create("span", "tech-emoji"); e.textContent = t.emoji; chip.appendChild(e); }
    const name = create("span"); name.textContent = t.name; chip.appendChild(name);
    grid.appendChild(chip);
  });
  return grid;
}

/* ---------- GitHub track (placeholders + real repos) ---------- */
function buildGithubTrack() {
  const track = create("div", "row-track");
  GITHUB_REPOS.forEach((repo) => {
    const card = buildCard({
      grad: "card-grad-6", badge: "REPO", title: repo.title, meta: repo.desc,
      tags: repo.tags || [], icons: ["github"], modalSubtitle: repo.desc,
      points: [repo.desc], ctaLabel: "View on GitHub", ctaHref: repo.url,
    });
    track.appendChild(card);
  });
  // Add-repo placeholders
  const slots = Math.max(2, 4 - GITHUB_REPOS.length);
  for (let i = 0; i < slots; i++) {
    const card = create("article", "card card-add");
    card.innerHTML = `<span class="plus">＋</span><span>Add a repo</span><small style="color:var(--muted-2);font-size:0.7rem;">edit GITHUB_REPOS in app.js</small>`;
    const link = create("a"); link.href = LINKS.github; link.target = "_blank"; link.rel = "noopener";
    link.style.cssText = "position:absolute;inset:0;";
    card.appendChild(link);
    track.appendChild(card);
  }
  return track;
}

/* ---------- Card top (logo / icons / image / emoji) ---------- */
function buildCardTop(card, isPoster) {
  const top = create("div", `card-top ${card.grad || "card-grad-6"}`);
  if (card.badge) { const b = create("span", "card-badge"); b.textContent = card.badge; top.appendChild(b); }

  const brandText = () => {
    const t = create("span", "brand-text");
    t.textContent = (card.brand && card.brand.text) || card.title;
    if (card.brand && card.brand.fg) t.style.color = card.brand.fg;
    top.appendChild(t);
  };
  const iconStrip = (keys) => {
    const wrap = create("div", "card-icons");
    keys.forEach((k) => {
      const t = TECH[k]; if (!t) return;
      if (t.icon) { const i = create("i"); i.className = t.icon; i.title = t.name; wrap.appendChild(i); }
      else { const e = create("span", "tech-emoji"); e.textContent = t.emoji; e.title = t.name; wrap.appendChild(e); }
    });
    top.appendChild(wrap);
  };

  if (card.logo) {
    top.classList.add("card-logobox");
    const img = create("img", "card-logo"); img.src = card.logo; img.alt = card.title; img.loading = "lazy";
    img.onerror = () => {
      img.remove(); top.classList.remove("card-logobox");
      if (card.brand && card.brand.bg) top.style.background = card.brand.bg;
      brandText();
    };
    top.appendChild(img);
  } else if (card.iconTop && card.iconTop.length) {
    iconStrip(card.iconTop);
  } else if (card.image) {
    const img = create("img"); img.src = card.image; img.alt = card.title; img.loading = "lazy";
    img.onerror = () => { img.remove(); if (card.emoji) { const e = create("span", "card-emoji"); e.textContent = card.emoji; top.appendChild(e); } };
    top.appendChild(img);
  } else if (card.emoji) {
    const e = create("span", "card-emoji"); e.textContent = card.emoji; top.appendChild(e);
  } else {
    top.appendChild(document.createTextNode(card.title));
  }

  if (isPoster) {
    const fade = create("div", "poster-fade"); top.appendChild(fade);
    const label = create("div", "poster-label"); label.textContent = card.title; top.appendChild(label);
  }
  return top;
}

/* ---------- Card ---------- */
function buildCard(card) {
  const el = create("article", "card");
  const isPoster = card.variant === "poster";

  const top = buildCardTop(card, isPoster);
  el.appendChild(top);

  const body = create("div", "card-body");
  if (!isPoster) {
    const title = create("div", "card-title"); title.textContent = card.title; body.appendChild(title);
  }
  if (card.meta) { const meta = create("div", "card-meta"); meta.textContent = card.meta; body.appendChild(meta); }
  if (card.tags && card.tags.length) {
    const tags = create("div", "card-tags");
    card.tags.forEach((t) => { const tag = create("span", "tag"); tag.textContent = t; tags.appendChild(tag); });
    body.appendChild(tags);
  }
  const cta = create("span", "card-cta"); cta.textContent = "ⓘ More info"; body.appendChild(cta);
  el.appendChild(body);

  el.addEventListener("click", () => openModal(card));
  return el;
}

/* ---------- Modal ---------- */
function openModal(card) {
  const banner = $("#modal-banner");
  banner.className = `modal-banner ${card.grad || "card-grad-6"}`;
  banner.querySelectorAll("img").forEach((n) => n.remove());
  if (card.image) {
    const img = create("img"); img.src = card.image; img.alt = card.title;
    img.onerror = () => img.remove();
    banner.insertBefore(img, banner.firstChild);
  }
  $("#modal-title").textContent = card.title;
  $("#modal-subtitle").textContent = card.modalSubtitle || card.meta || "";

  const tags = $("#modal-tags"); tags.innerHTML = "";
  (card.tags || []).forEach((t) => { const tag = create("span", "tag"); tag.textContent = t; tags.appendChild(tag); });

  const list = $("#modal-list"); list.innerHTML = "";
  (card.points || []).forEach((p) => { const li = create("li"); li.textContent = p; list.appendChild(li); });

  const icons = $("#modal-icons"); icons.innerHTML = "";
  (card.icons || []).forEach((k) => {
    const t = TECH[k]; if (!t) return;
    if (t.icon) { const i = create("i"); i.className = t.icon; i.title = t.name; icons.appendChild(i); }
    else { const e = create("span", "tech-emoji"); e.textContent = t.emoji; e.title = t.name; icons.appendChild(e); }
  });

  const cta = $("#modal-cta"); cta.innerHTML = "";
  if (card.ctaHref) {
    const a = create("a"); a.href = card.ctaHref; a.target = "_blank"; a.rel = "noopener";
    a.innerHTML = `<i class="devicon-github-original"></i> ${card.ctaLabel || "View"}`;
    cta.appendChild(a);
  }

  $("#modal-overlay").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() { $("#modal-overlay").classList.add("hidden"); document.body.style.overflow = ""; }

/* ---------- Footer ---------- */
function renderFooter() {
  const f = $("#footer-links"); f.innerHTML = "";
  const items = [
    { t: "Download Resume", href: LINKS.resume, download: true },
    { t: "LinkedIn", href: LINKS.linkedin, ext: true },
    { t: "GitHub", href: LINKS.github, ext: true },
    { t: "rajathg64@gmail.com", href: LINKS.email },
    { t: "+91 8123200196", href: LINKS.phone },
  ];
  items.forEach((it) => {
    const a = create("a"); a.href = it.href; a.textContent = it.t;
    if (it.download) a.setAttribute("download", "");
    if (it.ext) { a.target = "_blank"; a.rel = "noopener"; }
    f.appendChild(a);
  });
}

/* ---------- Misc wiring ---------- */
function initChrome() {
  const nav = $("#nav");
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 40));
  $("#modal-close").addEventListener("click", closeModal);
  $("#modal-overlay").addEventListener("click", (e) => { if (e.target.id === "modal-overlay") closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initProfileGate();
  initChrome();
});
