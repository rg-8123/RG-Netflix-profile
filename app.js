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
  linkedin: "https://www.linkedin.com/in/rajath-g",
  github: "https://github.com/",            // your GitHub profile
  email: "mailto:rajathg64@gmail.com",
  phone: "tel:+918123200196",
  resume: "RajathGowda-SDE.pdf",
};

/* ---------- GitHub repos for the Engineer page (add later) ---------- */
// Fill these in any time. Leave empty for "Add repo" placeholders.
const GITHUB_REPOS = [
  // { title: "my-automation-framework", desc: "Selenium + Cucumber BDD framework", url: "https://github.com/you/repo", tags: ["Java", "Selenium"] },
];

/* ---------- Tech stack (devicon classes or emoji fallback) ---------- */
const TECH = {
  java: { icon: "devicon-java-plain colored", name: "Java" },
  python: { icon: "devicon-python-plain colored", name: "Python" },
  javascript: { icon: "devicon-javascript-plain colored", name: "JavaScript" },
  typescript: { icon: "devicon-typescript-plain colored", name: "TypeScript" },
  kotlin: { icon: "devicon-kotlin-plain colored", name: "Kotlin" },
  selenium: { icon: "devicon-selenium-original colored", name: "Selenium" },
  postman: { icon: "devicon-postman-plain colored", name: "Postman" },
  docker: { icon: "devicon-docker-plain colored", name: "Docker" },
  kubernetes: { icon: "devicon-kubernetes-plain colored", name: "Kubernetes" },
  jenkins: { icon: "devicon-jenkins-line colored", name: "Jenkins" },
  gradle: { icon: "devicon-gradle-plain colored", name: "Gradle" },
  git: { icon: "devicon-git-plain colored", name: "Git" },
  github: { icon: "devicon-github-original", name: "GitHub" },
  grafana: { icon: "devicon-grafana-original colored", name: "Grafana" },
  prometheus: { icon: "devicon-prometheus-original colored", name: "Prometheus" },
  postgres: { icon: "devicon-postgresql-plain colored", name: "PostgreSQL" },
  mysql: { icon: "devicon-mysql-plain colored", name: "MySQL" },
  mongodb: { icon: "devicon-mongodb-plain colored", name: "MongoDB" },
  oracle: { icon: "devicon-oracle-original colored", name: "Oracle" },
  spring: { icon: "devicon-spring-plain colored", name: "Spring" },
  springboot: { icon: "devicon-spring-plain colored", name: "Spring Boot" },
  angular: { icon: "devicon-angularjs-plain colored", name: "Angular" },
  html: { icon: "devicon-html5-plain colored", name: "HTML5" },
  css: { icon: "devicon-css3-plain colored", name: "CSS3" },
  jira: { icon: "devicon-jira-plain colored", name: "Jira" },
  intellij: { icon: "devicon-intellij-plain colored", name: "IntelliJ" },
  // emoji fallbacks (no devicon available)
  cucumber: { emoji: "🥒", name: "Cucumber" },
  restassured: { emoji: "🧪", name: "REST Assured" },
  llm: { emoji: "🤖", name: "LLMs" },
  rag: { emoji: "🔎", name: "RAG" },
  mcp: { emoji: "🔗", name: "MCP" },
  copilot: { emoji: "🧠", name: "Copilot" },
  otel: { emoji: "📡", name: "OpenTelemetry" },
  loki: { emoji: "🪵", name: "Loki" },
  snowflake: { emoji: "❄️", name: "Snowflake" },
  jfrog: { emoji: "🐸", name: "JFrog" },
  shell: { emoji: "🐚", name: "Shell" },
  plsql: { emoji: "🗄️", name: "PL/SQL" },
  microservices: { emoji: "🧩", name: "Microservices" },
  hibernate: { emoji: "🗄️", name: "Hibernate" },
  multithreading: { emoji: "🧵", name: "Multithreading" },
  designpatterns: { emoji: "🧠", name: "Design Patterns" },
  vertica: { emoji: "📊", name: "Vertica" },
  db2: { emoji: "🗄️", name: "DB2" },
  jmeter: { emoji: "⚙️", name: "JMeter" },
  ycrash: { emoji: "💥", name: "YCrash" },
  datadog: { emoji: "📈", name: "Datadog" },
  newman: { emoji: "🧪", name: "Newman" },
  robocorp: { emoji: "🤖", name: "Robocorp" },
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
    subtitle: "Senior Software Development Engineer",
    meta: [
      { type: "badge", text: "Nearly a decade in IT" },
      { type: "text", text: "Bengaluru, India" },
      { type: "green", text: "96% Match" },
    ],
    overview:
      "Senior Software Development Engineer with nearly a decade of experience architecting and delivering " +
      "reliable software, automation frameworks, performance engineering solutions, and recent AI-powered " +
      "platforms across the full product lifecycle. Built solutions that improved release quality, reduced " +
      "manual effort, and solved real business problems in Agile environments.",
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
          meta: "Senior Software Development Engineer",
          metaTime: "Sept 2020 – Present",
          tags: ["AI/LLMs", "Automation", "Performance Eng"],
          icons: ["llm", "rag", "mcp", "selenium", "restassured", "grafana", "docker"],
          modalSubtitle: "Senior Software Development Engineer · Bengaluru · Pentaho / Hitachi Vantara",
          points: [
            "Designed and built custom, AI-powered data identification tools for enterprise customers that automatically tag sensitive customer data with PII classifications using LLMs integrated with Pentaho Data Catalog (PDC) to achieve ~80% detection accuracy relative to PDC's standard, non-LLM approach.",
            "Led cross-functional engineering teams to design and build custom software solutions for Pentaho customers.",
            "Architected and maintained end-to-end test automation frameworks, automating REST API testing with REST Assured and Postman and authoring BDD suites with Selenium and Cucumber for GUI automation, to maximize coverage and minimize regression risk.",
            "Built an observability stack with Grafana, Prometheus, OpenObserve, Loki, and OpenTelemetry to monitor live application data, logs, metrics, and system performance, enabling proactive issue detection and resolution.",
            "Operated within the Production Engineering team to triage and resolve customer-reported issues on a sprint basis in an Agile environment.",
            "Built agentic AI workflows leveraging RAG and prompt engineering to detect, classify, and govern PII across large enterprise datasets.",
            "Integrated Model Context Protocol (MCP) to connect LLMs with internal product tooling for reusable, context-aware AI services.",
          ],
        },
        {
          grad: "card-grad-2", badge: "DEV + LEADERSHIP", title: "Decathlon Sports India",
          logo: "images/decathlon.png", brand: { bg: "linear-gradient(135deg,#0082c3,#10437a)", fg: "#ffffff", text: "DECATHLON" },
          meta: "IT Technical Leader",
          metaTime: "July 2019 – Sept 2020",
          tags: ["Java", "PL/SQL", "REST APIs"],
          icons: ["java", "plsql", "javascript", "postgres", "shell"],
          modalSubtitle: "IT Technical Leader · Bengaluru, India",
          points: [
            "Implemented a data archival solution using Shell and PL/SQL that cut AWS server costs by ~50% while improving system performance and resolving longstanding data issues.",
            "Led the technical team through an organization-wide upgrade of Openbravo billing software and PostgreSQL across all India POS systems, and rolled out new features and improved stability.",
            "Designed and built Spring Boot based REST APIs to integrate Decathlon's billing software with the wireless card payment terminal, and this integration continued to power transactions across stores in India.",
            "Migrated the code repository from Mercurial to GitHub and strengthened security and release management.",
            "Resolved real-time production incidents while maintaining code quality and customer support standards.",
          ],
        },
        {
          grad: "card-grad-3", badge: "WHERE IT BEGAN", title: "Tech Mahindra Limited",
          logo: "images/techm.png", brand: { bg: "linear-gradient(135deg,#c8102e,#7a0a1d)", fg: "#ffffff", text: "TECH MAHINDRA" },
          meta: "Application Developer",
          metaTime: "Sept 2016 – June 2019",
          tags: ["Java", "JSP", "ETL"],
          icons: ["java", "javascript", "plsql", "html", "css"],
          modalSubtitle: "Application Developer · Bengaluru · The foundation: hands-on software development",
          points: [
            "Developed web applications using Java, JSP, PL/SQL, JavaScript, HTML, and CSS to visualize database statistics for client users.",
            "Designed and built custom client applications using Java, JavaScript, and PL/SQL based on business requirements.",
            "Enhanced the internal ETL tool with new features, defect fixes, and UI improvements that boosted overall performance.",
            "Developed scheduled jobs (cron) for various business needs, reducing manual effort and improving efficiency.",
            "Authored JUnit tests and automation scripts for unit testing.",
          ],
        },
      ],
    },
    {
      id: "projects", title: "Key Projects", sub: "Selected highlights",
      cards: [
        {
          grad: "card-grad-1", badge: "DATA PLATFORM", title: "Data Migration Platform", meta: "Pentaho (PDC) · Java + PDI/PDC",
          tags: ["Java", "Pentaho", "Data Migration"], icons: ["java", "springboot", "oracle"], iconTop: ["java", "springboot"],
          modalSubtitle: "Led a cross-functional team to build a data migration platform for heterogeneous systems",
          points: ["Led a team of 4 to 6 engineers to design and build DataPipes, a Java-based platform that migrated data between heterogeneous source and target systems using Pentaho Data Integration (PDI) and Pentaho Data Catalog (PDC).", "Designed and developed custom Java modules packaged as executable JAR files that extended PDI and PDC with masking and encryption functions to protect sensitive data during cross-system transfers.", "Architected a modular pipeline design that supported multiple source and target data types without requiring pipeline-specific rework."]
        },
        {
          grad: "card-grad-2", badge: "PAYMENTS", title: "Wireless Card Payment Integration", meta: "Decathlon Sports India · Spring Boot + REST APIs",
          tags: ["Spring Boot", "REST APIs", "Payments"], icons: ["springboot", "javascript", "plsql"], iconTop: ["springboot", "javascript"],
          modalSubtitle: "Integrated billing software with wireless card payment terminals across all Decathlon stores in India",
          points: ["Designed and built Spring Boot based REST APIs to integrate Decathlon's billing software with the wireless card payment terminal.", "The integration continued to power card transactions across all Decathlon stores in India."]
        },
        {
          grad: "card-grad-3", badge: "AI ENGINEERING", title: "LLM-Powered PII Detection", meta: "Pentaho Data Catalog · ~80% accuracy",
          tags: ["LLMs", "RAG", "PII"], icons: ["llm", "rag", "mcp"], iconTop: ["llm", "rag"],
          modalSubtitle: "Architected an LLM-based PII detection system layered on Pentaho Data Catalog",
          points: ["Architected an LLM-based PII detection system layered on Pentaho Data Catalog (PDC) and improved detection accuracy by ~80% over PDC's native, non-LLM classifier.", "Used RAG-based retrieval pipelines and prompt engineering to identify and classify sensitive data across large enterprise datasets."]
        },
      ],
    },
    {
      id: "skills", title: "Skills", sub: "My genres",
      cards: [
        {
          grad: "card-grad-1", badge: "AI / ML", title: "AI & Machine Learning", meta: "LLMs, RAG, Agentic AI",
          tags: ["GPT", "Claude", "Gemini", "MCP"], icons: ["llm", "rag", "mcp", "copilot"], iconTop: ["llm", "rag", "copilot"],
          modalSubtitle: "Artificial Intelligence & Agentic Workflows",
          points: ["LLMs (GPT, Claude, Gemini)", "Retrieval-Augmented Generation (RAG)", "Prompt Engineering", "AI Agents & Agentic Workflows", "Model Context Protocol (MCP)", "AI-Assisted Testing, GitHub Copilot"]
        },
        {
          grad: "card-grad-2", badge: "AUTOMATION", title: "Test Automation", meta: "API & UI frameworks",
          tags: ["Selenium", "Cucumber", "REST Assured"], icons: ["selenium", "cucumber", "restassured", "postman", "newman"], iconTop: ["selenium", "cucumber", "postman"],
          modalSubtitle: "Quality engineering & test frameworks",
          points: ["Selenium, Cucumber (BDD/Gherkin)", "REST Assured, Postman, Newman", "JUnit, Robocorp", "API & UI Automation", "Pairwise test design and regression coverage"]
        },
        {
          grad: "card-grad-5", badge: "PERFORMANCE", title: "Performance Engineering", meta: "Profiling & tuning",
          tags: ["Load Testing", "Observability", "Tuning"], icons: ["grafana", "prometheus", "otel", "jmeter", "datadog"], iconTop: ["grafana", "prometheus", "otel"],
          modalSubtitle: "Performance & reliability engineering",
          points: ["Performance & Load Testing with JMeter", "Latency & Throughput Profiling", "Application Tuning", "Observability-Driven Optimization", "Production Engineering and incident triage"]
        },
        {
          grad: "card-grad-3", badge: "CODE", title: "Languages", meta: "Polyglot developer",
          tags: ["Java", "Python", "TypeScript"], icons: ["java", "python", "javascript", "typescript", "kotlin", "plsql"], iconTop: ["java", "python", "typescript"],
          modalSubtitle: "Programming languages",
          points: ["Java", "Python", "JavaScript / TypeScript", "Kotlin", "PL/SQL", "Shell"]
        },
        {
          grad: "card-grad-6", badge: "DEVOPS", title: "CI/CD & DevOps", meta: "Pipelines & containers",
          tags: ["GitHub Actions", "Docker", "K8s"], icons: ["docker", "kubernetes", "jenkins", "gradle", "jfrog"], iconTop: ["docker", "kubernetes", "jenkins"],
          modalSubtitle: "Build, ship, and deploy",
          points: ["GitHub Actions, Jenkins", "Gradle, Maven, Apache Ant", "Docker, Kubernetes", "AWS (S3, EC2, Lambda, Secrets Manager)", "JFrog, Traefik"]
        },
        {
          grad: "card-grad-4", badge: "DATA", title: "Data & Databases", meta: "SQL & data platforms",
          tags: ["Oracle", "PostgreSQL", "MongoDB"], icons: ["oracle", "postgres", "mysql", "mongodb", "snowflake", "vertica", "db2"], iconTop: ["oracle", "postgres", "mongodb"],
          modalSubtitle: "Data engineering & databases",
          points: ["Pentaho Data Catalog, Pentaho", "MongoDB, Oracle, PostgreSQL", "MySQL, MS SQL, Snowflake", "Vertica, DB2", "JDBC"]
        },
      ],
    },
    {
      id: "techstack", title: "Tech Stack", sub: "The toolbox", variant: "tech",
      tech: ["java", "python", "javascript", "typescript", "kotlin", "selenium", "cucumber", "restassured",
        "postman", "newman", "spring", "springboot", "microservices", "hibernate", "docker", "kubernetes",
        "jenkins", "gradle", "git", "github", "grafana", "prometheus", "otel", "jmeter", "datadog",
        "oracle", "postgres", "mysql", "mongodb", "snowflake", "vertica", "db2", "jira", "llm", "mcp"],
    },
    {
      id: "education", title: "Education", sub: "Origin story",
      cards: [
        {
          grad: "card-grad-2", badge: "DEGREE", title: "B.E., Electronics & Communications", meta: "Aug 2012 – June 2016", emoji: "🎓",
          tags: ["Engineering", "ECE"], modalSubtitle: "New Horizon College of Engineering, Bengaluru",
          points: ["Bachelor of Engineering in Electronics & Communications Engineering.", "New Horizon College of Engineering, Bengaluru.", "Foundation in systems, electronics, and software fundamentals."]
        },
      ],
    },
    {
      id: "achievements", title: "Achievements & Awards", sub: "Award-winning",
      cards: [
        {
          grad: "card-grad-3", badge: "AWARD", title: "Pat on the Back", meta: "Tech Mahindra · Dec 2017 & Dec 2018", emoji: "🏆",
          tags: ["Recognition"], modalSubtitle: "Tech Mahindra Ltd.", points: ["Awarded twice for outstanding contribution and delivery."]
        },
        {
          grad: "card-grad-2", badge: "AWARD", title: "Certificate of Appreciation", meta: "Decathlon · Jun 2020", emoji: "📜",
          tags: ["Recognition"], modalSubtitle: "Decathlon Sports India", points: ["Recognized for technical leadership and impactful delivery."]
        },
        {
          grad: "card-grad-1", badge: "RECOGNITION", title: "AI Delivery Recognition", meta: "Hitachi Vantara · Dec 2025", emoji: "🤖",
          tags: ["AI", "Customer Impact"], modalSubtitle: "Hitachi Vantara Ltd.", points: ["Recognized by leadership for identifying critical performance issues and driving improvements that enhanced system reliability.", "Consistently recognized for delivering customer-facing AI solutions on Pentaho Data Catalog."]
        },
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
    title: "Software Engineer",
    subtitle: "Application Development • AI Engineering • Automation • Performance Engineering",
    meta: [
      { type: "badge", text: "Frameworks & Pipelines" },
      { type: "text", text: "AI / LLM Systems" },
      { type: "green", text: "Always shipping" },
    ],
    overview:
      "A closer look at what I actually build: AI-powered data solutions, end-to-end automation " +
      "frameworks, performance tooling, and CI/CD pipelines. The projects below reflect the same " +
      "Senior Software Development Engineer profile from the updated resume, with a stronger emphasis " +
      "on agentic AI, platform engineering, and reliability work.",
    actions: [
      { label: "▶ View Projects", cls: "btn-play", scrollTo: "row-projects" },
      { label: "★ GitHub", cls: "btn-accent", href: LINKS.github, external: true },
    ],
  },
  rows: [
    {
      id: "projects", title: "Featured Projects", sub: "Deep dives",
      cards: [
        {
          grad: "card-grad-1", badge: "AI · FLAGSHIP", title: "LLM-Powered PII Detection", meta: "Pentaho Data Catalog · ~80% accuracy",
          tags: ["LLMs", "RAG", "Data Governance"], icons: ["llm", "rag", "mcp"], iconTop: ["llm", "rag", "mcp"],
          modalSubtitle: "Custom AI data-identification engine for enterprise customers",
          points: [
            "Built an LLM-backed classification layer (RAG + prompt engineering) integrated directly into Pentaho Data Catalog.",
            "Achieved ~80% detection accuracy vs the standard non-LLM PDC solution while automatically tagging sensitive customer data with PII classifications.",
            "Stack: LLMs (GPT/Claude/Gemini), RAG pipelines, MCP for tool access, Java/Python services.",
          ]
        },
        {
          grad: "card-grad-4", badge: "AI AGENTS", title: "Agentic AI + MCP Integration", meta: "Context-aware AI services",
          tags: ["Agentic AI", "MCP", "Prompt Eng"], icons: ["mcp", "llm", "copilot"], iconTop: ["mcp", "llm", "copilot"],
          modalSubtitle: "Connecting LLMs to internal product tooling",
          points: [
            "Designed agentic workflows that detect, classify, and govern data with minimal human steering.",
            "Integrated Model Context Protocol (MCP) so LLMs can call internal product tools safely.",
            "Packaged reusable AI services consumed across multiple product use cases.",
          ]
        },
        {
          grad: "card-grad-2", badge: "AUTOMATION", title: "End-to-End Test Automation", meta: "API + UI frameworks",
          tags: ["Selenium", "Cucumber", "REST Assured"], icons: ["selenium", "cucumber", "restassured", "postman", "newman"], iconTop: ["selenium", "cucumber", "postman"],
          modalSubtitle: "Framework architecture for coverage & speed",
          points: [
            "Architected reusable automation frameworks for both API and GUI layers.",
            "REST Assured + Postman + Newman for API verification; Selenium + Cucumber BDD for UI flows.",
            "Cut regression risk and sped up releases; accelerated test authoring with AI/Copilot.",
            "Built smoke test coverage and BDD suites across core product workflows.",
          ]
        },
        {
          grad: "card-grad-5", badge: "PERFORMANCE", title: "Observability & Perf Tuning", meta: "Live monitoring + optimization",
          tags: ["Grafana", "Prometheus", "OpenTelemetry"], icons: ["grafana", "prometheus", "otel", "loki", "jmeter", "datadog"], iconTop: ["grafana", "prometheus", "loki"],
          modalSubtitle: "Performance engineering & production reliability",
          points: [
            "Profiled throughput, latency, and resource usage to hit enterprise scalability targets.",
            "Stood up Grafana + Prometheus + OpenObserve + Loki + OpenTelemetry for full visibility.",
            "Used the stack to identify Java performance bottlenecks, memory leak issues, and caching problems.",
          ]
        },
        {
          grad: "card-grad-3", badge: "IMPACT", title: "Data Archival — 50% Cost Cut", meta: "Decathlon · Shell + PL/SQL",
          tags: ["Shell", "PL/SQL", "AWS"], icons: ["shell", "plsql"], iconTop: ["shell", "plsql"],
          modalSubtitle: "Infrastructure cost optimization",
          points: ["Designed a data-archival solution in Shell + PL/SQL.", "Reduced AWS server cost by ~50% while improving performance.", "Cleared several longstanding production issues."]
        },
        {
          grad: "card-grad-6", badge: "CI/CD", title: "Data Migration Platform", meta: "Pentaho · Java + PDI/PDC",
          tags: ["Java", "Pentaho", "Data Migration"], icons: ["java", "springboot", "oracle"], iconTop: ["java", "springboot"],
          modalSubtitle: "Led a cross-functional team to build a data migration platform for heterogeneous systems",
          points: ["Led a team of 4 to 6 engineers to design and build DataPipes for source-to-target migrations across heterogeneous systems.", "Developed custom Java modules to extend Pentaho Data Integration and Data Catalog with masking and encryption capabilities.", "Supported a modular pipeline pattern that avoided pipeline-specific rework and kept delivery timelines on track."]
        },
      ],
    },
    {
      id: "github", title: "GitHub Projects", sub: "Live repos — more coming soon",
      isGithub: true,
    },
    {
      id: "techstack", title: "Tech Stack", sub: "What I build with", variant: "tech",
      tech: ["java", "python", "typescript", "selenium", "cucumber", "restassured", "spring", "springboot",
        "microservices", "hibernate", "docker", "kubernetes", "jenkins", "gradle", "git", "github",
        "grafana", "prometheus", "otel", "jmeter", "datadog", "postgres", "mongodb", "llm", "rag",
        "mcp", "copilot"],
    },
    {
      id: "experiments", title: "Lab / Experiments", sub: "Tinkering zone",
      cards: [
        {
          grad: "card-grad-4", badge: "WIP", title: "AI Agent Playground", meta: "RAG + tools sandbox",
          tags: ["Agentic AI", "RAG"], iconTop: ["llm", "rag", "mcp"], modalSubtitle: "Personal experiments with agent frameworks",
          points: ["A space for prototyping agentic AI patterns, prompt strategies, and MCP tools.", "Repos coming to the GitHub row above."]
        },
        {
          grad: "card-grad-2", badge: "WIP", title: "Automation Snippets", meta: "Reusable test utilities",
          tags: ["Selenium", "Java"], iconTop: ["selenium", "java", "git"], modalSubtitle: "Handy automation helpers",
          points: ["Collection of reusable framework utilities and patterns.", "To be published on GitHub."]
        },
      ],
    },
  ],
};

/* =========================================================
   PROFILE 3: VISITOR  (casual / personal / Netflix-style)
   ========================================================= */
const VISITOR = {
  accent: "#7b4397",
  glow: "rgba(123,67,151,0.4)",
  hero: {
    eyebrow: "🍿 NOW PLAYING",
    title: "The Rajath Show",
    subtitle: "Senior SDE by day, curious traveler and weekend storyteller by night",
    meta: [
      { type: "badge", text: "Unfiltered" },
      { type: "text", text: "Bengaluru, India" },
      { type: "green", text: "Low-key fun, high-energy stories" },
    ],
    overview:
      "This is the more personal side of my profile. It is a mix of travel plans, on-field energy, " +
      "camera roll chaos, and the kinds of things that make a week feel full. I like good company, " +
      "late-night matches, quick getaways, and the kind of conversations that start with one random story " +
      "and somehow turn into an hour of nostalgia.",
    actions: [
      { label: "▶ Skip Intro", cls: "btn-play", scrollTo: "row-binging" },
      { label: "📸 A peek into my travel stories", cls: "btn-info", href: "https://www.instagram.com/", external: true },
      { label: "＋ The Work Version", cls: "btn-info", href: LINKS.resume, download: true },
    ],
  },
  rows: [
    {
      id: "binging", title: "My Current Vibe", sub: "A little movement, a little mischief", variant: "poster",
      cards: [
        {
          image: "images/travel.jpg", grad: "card-grad-3", emoji: "🛣️", badge: "ROAD TRIP", title: "Travel Mode",
          tags: ["Road trips", "Monsoon rides", "Weekend escapes"], modalSubtitle: "The plan is usually simple: go.",
          points: ["I am happiest when the route is open and the destination is still a surprise.", "A good ride, a scenic stop, and a story to bring back home.", "Monsoon rides, long drives and random detours are all part of the fun."]
        },
        {
          image: "images/sports.jpg", grad: "card-grad-2", emoji: "🏏", badge: "MATCHDAY", title: "Sport, Always",
          tags: ["Cricket", "Football", "Basketball"], modalSubtitle: "If there is a match, I am there.",
          points: ["RCB, Lakers, Messi and BFC all have a place in my matchday calendar.", "I am equally happy playing or yelling from the couch.", "The energy before a big game is too good to miss."]
        },
        {
          image: "images/gaming.jpg", grad: "card-grad-5", emoji: "🎮", badge: "CO-OP", title: "Game Night",
          tags: ["Gaming", "Late nights", "Snacks"], modalSubtitle: "One more round, then sleep.",
          points: ["A good game session is a perfect reset button.", "I like games that are competitive but still easy to laugh about.", "A controller, a snack, and a low-stakes challenge is the formula."]
        },
      ],
    },
    {
      id: "hobbies", title: "My Favorite Things", sub: "The little things that keep life interesting", variant: "poster",
      cards: [
        {
          image: "images/photography.jpeg", grad: "card-grad-6", emoji: "📷", badge: "FRAMES", title: "Photography",
          tags: ["Travel shots", "Candids", "Sunsets"], modalSubtitle: "I will wait for the perfect frame.",
          points: ["I am always the one saying one more photo, one more angle.", "The best moments are the ones that feel worth saving.", "Travel and photography together are a very dangerous combo."]
        },
        {
          image: "images/OP.jpg", grad: "card-grad-got", emoji: "🐺", badge: "SERIES", title: "Comfort Shows",
          tags: ["GoT", "One Piece", "Friends"], modalSubtitle: "My idea of a perfect evening",
          points: ["Game of Thrones, One Piece, Friends, Brooklyn 99 and Sherlock all fit the vibe.", "A good show can turn a quiet evening into a full reset.", "I am very easy to please when there is a story and a snack."]
        },
        {
          image: "images/got.jpg", grad: "card-grad-got", emoji: "🐉", badge: "FANDOM", title: "The Pop Culture Side",
          tags: ["Fantasy", "Theories", "Rewatch"], modalSubtitle: "A little dramatic, a little obsessed",
          points: ["I will absolutely defend a favorite ending or a questionable plot twist.", "There is a reason I keep coming back to rewatch some of these.", "The best stories are the ones that still feel fun the third time."]
        },
        {
          logo: "images/rcb-logo.png", grad: "card-grad-2", emoji: "🏏", badge: "RCB", title: "Royal Challengers Bangalore",
          tags: ["Cricket", "IPL", "Fandom"], modalSubtitle: "The heart of my matchday energy",
          points: ["Fun fact: RCB is the team that turned every season into a full emotional rollercoaster.", "The loyalty is real, even when the script is not.", "Every big match feels like a little bit of drama and a little bit of hope."]
        },
        {
          logo: "images/lakers-logo.jpg", grad: "card-grad-5", emoji: "🏀", badge: "LAKERS", title: "Los Angeles Lakers",
          tags: ["Basketball", "LeBron", "Legacy"], modalSubtitle: "A franchise with a lot of history and a lot of drama",
          points: ["Fun fact: the Lakers have one of the most iconic basketball identities in the world.", "Every era feels like a movie trailer with a scoreboard.", "I love the mix of talent, history and chaos."]
        },
        {
          logo: "images/messi-logo.jpg", grad: "card-grad-3", emoji: "⚽", badge: "MESSI", title: "Lionel Messi",
          tags: ["Football", "GOAT", "Storytelling"], modalSubtitle: "A player who makes football feel cinematic",
          points: ["Fun fact: Messi has the rare ability to make even simple moments look effortless.", "He is the kind of player who turns football into a story rather than just a sport.", "Watching him feels less like a match and more like a masterclass."]
        },
        {
          logo: "images/bfc-logo.png", grad: "card-grad-4", emoji: "⚽", badge: "BFC", title: "Bengaluru FC",
          tags: ["Football", "Local pride", "Indian football"], modalSubtitle: "A club that brings the city together",
          points: ["Fun fact: Bengaluru FC has a strong identity and a loyal fan culture that feels personal.", "It is the kind of club that makes football feel close to home.", "The energy around matches feels proud, local and a little intense."]
        },
      ],
    },
    {
      id: "facts", title: "Quick Bits & Fun Facts", sub: "A handful of details that make me, me",
      cards: [
        {
          grad: "card-grad-1", emoji: "⏳", badge: "ORIGIN", title: "Nearly 10 Years In", meta: "Since Sept 2016",
          tags: ["IT", "Experience"], modalSubtitle: "A long and slightly chaotic journey",
          points: ["Started in IT back in 2016 and have grown through development, automation and AI.", "The path has been more varied than planned and honestly more fun because of it.", "I still keep a little room for life outside the laptop."]
        },
        {
          grad: "card-grad-2", emoji: "🏏", badge: "RCB", title: "Matchday Energy", meta: "Cricket and emotion",
          tags: ["RCB", "Cricket"], modalSubtitle: "The highs, the heartbreaks, the hope",
          points: ["RCB has been a big part of my life for years.", "The matchday feeling never really gets old.", "I will happily talk through a game with anyone who will listen."]
        },
        {
          grad: "card-grad-3", emoji: "✈️", badge: "TRAVEL", title: "A Few Favorite Places", meta: "Mountains and beaches",
          tags: ["Himalayas", "Beaches", "Road trips"], modalSubtitle: "Some places stay with you",
          points: ["Mountains in the Himalayas and sunsets by the beach both mean a lot to me.", "A trip is rarely about the place alone; it is about the memory attached to it.", "I am always collecting the next favorite view."]
        },
        {
          grad: "card-grad-5", emoji: "📸", badge: "CAMERA", title: "The Camera Roll Problem", meta: "Too many photos, never enough space",
          tags: ["Photography", "Memories"], modalSubtitle: "A little overprepared, honestly",
          points: ["I tend to take one more photo than I need.", "The camera roll keeps growing faster than I can organize it.", "Some of my best memories are just random frames from a trip."]
        },
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
  if (a.scrollTo) btn.addEventListener("click", () => {
    const target = document.getElementById(a.scrollTo);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
  if (a.modalRef) btn.addEventListener("click", () => {
    const [rowId, idx] = a.modalRef;
    const row = PROFILES[CURRENT].rows.find((r) => r.id === rowId);
    if (row && row.cards && row.cards[idx]) openModal(row.cards[idx]);
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
  if (card.meta || card.metaTime) {
    const metaStack = create("div", "card-meta-stack");
    if (card.meta) { const meta = create("div", "card-meta"); meta.textContent = card.meta; metaStack.appendChild(meta); }
    if (card.metaTime) { const metaTime = create("div", "card-meta-secondary"); metaTime.textContent = card.metaTime; metaStack.appendChild(metaTime); }
    body.appendChild(metaStack);
  }
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

/* ---------- Intro splash ---------- */
function playIntroSplash() {
  const overlay = $("#intro-overlay");
  const flash = $("#intro-flash");
  if (!overlay) return;
  document.body.classList.add("intro-active");
  overlay.classList.remove("hidden");

  if (flash) {
    flash.classList.remove("active");
    void flash.offsetWidth;
    flash.classList.add("active");
  }

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (AudioContext) {
    try {
      const ctx = new AudioContext();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(540, now);
      osc.frequency.exponentialRampToValueAtTime(860, now + 0.06);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.035, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
      setTimeout(() => ctx.close(), 250);
    } catch (e) { }
  }

  setTimeout(() => {
    overlay.classList.add("hide");
    document.body.classList.remove("intro-active");
    setTimeout(() => overlay.classList.add("hidden"), 800);
  }, 1400);
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  playIntroSplash();
  initProfileGate();
  initChrome();
});
