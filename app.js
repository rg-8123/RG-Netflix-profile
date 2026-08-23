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
  github: "https://github.com/rg-8123",            // your GitHub profile
  email: "mailto:rajathg64@gmail.com",
  phone: "tel:+918123200196",
  resume: "RajathGowda-AI-Engineer.pdf",
};

/* ---------- GitHub repos for the Engineer page ---------- */
const GITHUB_REPOS = [
  {
    title: "texas-holdem-trainer",
    desc: "Browser-based Texas Hold'em equity trainer featuring a 7-to-5 card evaluator, 20,000-trial Monte Carlo & exact enumeration engines for street-by-street win-rate estimation against 1–5 bot opponents.",
    url: "https://github.com/rg-8123/texas-holdem-trainer",
    playUrl: "https://rg-8123.github.io/texas-holdem-trainer/",
    image: "images/poker.png",
    tags: ["JavaScript", "Monte Carlo", "Probability", "Poker"]
  },
  {
    title: "ai-stock-predictor",
    desc: "Stock price forecasting engine using time-series models combined with current market trends and fundamental financial data.",
    url: "https://github.com/rg-8123/ai-stock-predictor",
    image: "images/stockai.png",
    tags: ["Python", "Time Series", "Pandas", "Stock Fundamentals"]
  },
  {
    title: "mf-report-analyser",
    desc: "Mutual fund portfolio analyzer performing micro-level asset allocation breakdown and tailored investment suggestions based on market trends.",
    url: "https://github.com/rg-8123/mf-report-analyser",
    image: "images/mf_anlayser.png",
    tags: ["Java", "Spring AI", "Mutual Funds", "Portfolio Analytics"]
  }
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
  // AI & new tool logos (local image files)
  langchain: { img: "images/langchain-logo.svg", name: "LangChain" },
  langgraph: { img: "images/langgraph-logo.svg", name: "LangGraph" },
  springai: { img: "images/springai-logo.svg", name: "Spring AI" },
  chromadb: { img: "images/chromadb-logo.png", name: "ChromaDB" },
  n8n: { img: "images/n8n-logo.svg", name: "n8n" },
  langsmith: { img: "images/langsmith-logo.svg", name: "LangSmith" },
  ollama: { img: "images/ollama-logo.svg", name: "Ollama" },
  aws: { icon: "devicon-amazonwebservices-plain-wordmark colored", name: "AWS" },
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
    subtitle: "Software Development & AI Engineer",
    meta: [
      { type: "badge", text: "10 Years of Experience" },
      { type: "text", text: "Bengaluru, India" },
      { type: "green", text: "96% Match" },
    ],
    overview:
      "Software Development and AI Engineer with a decade of experience designing scalable enterprise software, " +
      "integrating LLM-powered applications, and solving complex client challenges in Agile environments. " +
      "Specialized in building advanced AI frameworks, Agentic RAG, and multi-agent orchestration using Python, " +
      "LangChain, LangGraph & Spring AI. Proven track record of leading cross-functional teams to build " +
      "automated, reliable data platforms and recognized across every role for improving infrastructure " +
      "reliability, cloud costs, and deployment speed.",
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
          meta: "Software Engineering Specialist — AI & Data",
          metaTime: "Sept 2020 – Present",
          tags: ["Agentic AI", "LLMs", "RAG", "Automation", "Performance Eng"],
          icons: ["langchain", "langgraph", "llm", "rag", "mcp", "springai", "selenium", "grafana", "docker"],
          modalSubtitle: "Software Engineering Specialist (AI & Data) · Bengaluru · Pentaho / Hitachi Vantara",
          points: [
            "Designed and delivered custom, AI-powered data identification solutions for enterprise customers that automatically tag sensitive customer data with PII classifications using LLMs integrated with Pentaho Data Catalog (PDC), achieving ~80% detection accuracy relative to PDC's standard (non-LLM) solution.",
            "Engineered and deployed a customer-facing AI chatbot to autonomously resolve client inquiries regarding application usage, utilizing LangChain to index and retrieve rich context from official Pentaho documentation and thousands of proprietary PractiTest QA test cases.",
            "Led a team of 5 to 8 engineers to design and build DataPipes, a Java-based platform that migrated data between heterogeneous source and target systems using Pentaho Data Integration (PDI) and Pentaho Data Catalog (PDC).",
            "Designed and developed custom Java modules packaged as executable JAR files that extended PDI and PDC with masking and encryption functions to protect sensitive data during cross-system transfers.",
            "Architected a modular pipeline design that supported multiple source and target data types without requiring pipeline-specific rework, and owned technical decisions, code reviews, and delivery timelines across the project lifecycle.",
            "Built an observability stack (Grafana, Prometheus, OpenObserve, Loki, OpenTelemetry) across both products for real-time metrics, logs, and performance monitoring. Used the stack to identify multiple performance bottlenecks and memory leak scenarios and drove improvements to the application's caching mechanism.",
            "Built an API automation suite (Postman, Newman CLI) covering hundreds of test cases across PDC's core features, applying pairwise test case design to maximize coverage while minimizing test count and maintenance overhead. Cut a 2-day manual regression cycle to ~2 hours of automated execution.",
            "Built smoke test GUI automation using the Robocorp framework for PDC and designed BDD-based UI test suites (Selenium, Cucumber) for the PDI web application, covering key user workflows end to end.",
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
          points: ["Led a team of 5 to 8 engineers to design and build DataPipes, a Java-based platform that migrated data between heterogeneous source and target systems using Pentaho Data Integration (PDI) and Pentaho Data Catalog (PDC).", "Designed and developed custom Java modules packaged as executable JAR files that extended PDI and PDC with masking and encryption capabilities to protect sensitive data during cross-system transfers.", "Architected a modular pipeline design that supported multiple source and target data types without requiring pipeline-specific rework."]
        },
        {
          grad: "card-grad-2", badge: "PAYMENTS", title: "Wireless Card Payment Integration", meta: "Decathlon Sports India · Spring Boot + REST APIs",
          tags: ["Spring Boot", "REST APIs", "Payments"], icons: ["springboot", "javascript", "plsql"], iconTop: ["springboot", "javascript"],
          modalSubtitle: "Integrated billing software with wireless card payment terminals across all Decathlon stores in India",
          points: ["Designed and built Spring Boot based REST APIs to integrate Decathlon's billing software with the wireless card payment terminal.", "The integration continued to power card transactions across all Decathlon stores in India."]
        },
        {
          grad: "card-grad-3", badge: "AI ENGINEERING", title: "LLM-Powered PII Detection", meta: "Pentaho Data Catalog · ~80% accuracy",
          tags: ["LLMs", "RAG", "PII"], icons: ["langchain", "llm", "rag", "mcp"], iconTop: ["langchain", "llm", "rag"],
          modalSubtitle: "Architected an LLM-based PII detection system layered on Pentaho Data Catalog",
          points: ["Architected an LLM-based PII detection system layered on Pentaho Data Catalog (PDC) and improved detection accuracy by ~80% over PDC's native, non-LLM classifier.", "Used RAG-based retrieval pipelines and prompt engineering to identify and classify sensitive data across large enterprise datasets.", "Integrated LangChain for orchestration and MCP for product tool access."]
        },
        {
          grad: "card-grad-4", badge: "PERSONAL AI", title: "Personal AI & Data Projects", meta: "Python · LangChain · Spring AI · ChromaDB · Ollama",
          tags: ["Agentic AI", "RAG", "LangChain", "Spring AI"], icons: ["langchain", "chromadb", "ollama", "springai", "python"], iconTop: ["langchain", "chromadb", "ollama"],
          modalSubtitle: "Self-driven AI engineering projects built outside of work",
          points: [
            "Legal Documents Agent: Engineered a private, local AI agent using Python, LangChain, and ChromaDB to analyze sensitive legal records through a RAG-based framework. Integrated Local Ollama for on-premise inference and built a Claude Code-driven agentic workflow to autonomously extract and query contractual terms, maintaining rigorous data confidentiality.",
            "Intelligent Mutual Fund & Market Analyzer: Architected a financial analytics platform focusing on micro-level analysis of mutual funds and asset allocations. Sanitizes portfolio PII and uses Spring AI to deliver granular asset breakdown and investment suggestions aligned with market trends.",
            "Texas Hold'em Trainer & AI Stock Predictor: Built a browser-based Texas Hold'em equity trainer using 20,000-trial Monte Carlo & exact street enumeration engines against bot opponents, and a stock forecasting engine combining time-series modeling with current market trends and stock fundamentals.",
          ]
        },
      ],
    },
    {
      id: "skills", title: "Skills", sub: "My genres",
      cards: [
        {
          grad: "card-grad-1", badge: "AI / AGENTIC", title: "AI & Agentic Engineering", meta: "LLMs, RAG, LangChain, LangGraph, MCP, Spring AI",
          tags: ["LangChain", "LangGraph", "MCP", "Spring AI", "Agentic RAG"], icons: ["langchain", "langgraph", "llm", "rag", "mcp", "springai", "ollama"], iconTop: ["langchain", "langgraph", "llm", "rag"],
          modalSubtitle: "AI & Agentic Engineering — LLM orchestration, RAG, multi-agent workflows",
          points: ["LLMs (GPT, Claude, Gemini) — prompt engineering & fine-tuning", "LangChain & LangGraph — orchestration & multi-agent workflows", "Agentic RAG — retrieval-augmented generation at enterprise scale", "Spring AI — Java-native LLM integration", "Model Context Protocol (MCP) — LLM-to-tool connectivity", "LangSmith — LLM evaluation & tracing", "Ollama — local on-premise model inference", "AI-Assisted Testing, GitHub Copilot"]
        },
        {
          grad: "card-grad-2", badge: "AUTOMATION", title: "Test Automation", meta: "API & UI frameworks",
          tags: ["Selenium", "Cucumber", "REST Assured"], icons: ["selenium", "cucumber", "restassured", "postman", "newman"], iconTop: ["selenium", "cucumber", "postman"],
          modalSubtitle: "Quality engineering & test frameworks",
          points: ["Selenium, Cucumber (BDD/Gherkin)", "REST Assured, Postman, Newman", "JUnit, Robocorp", "API & UI Automation", "Pairwise test design and regression coverage", "AI-assisted test authoring"]
        },
        {
          grad: "card-grad-5", badge: "PERFORMANCE", title: "Performance Engineering", meta: "Profiling & tuning",
          tags: ["Load Testing", "Observability", "Tuning"], icons: ["grafana", "prometheus", "otel", "jmeter", "datadog"], iconTop: ["grafana", "prometheus", "otel"],
          modalSubtitle: "Performance & reliability engineering",
          points: ["Performance & Load Testing with JMeter", "Latency & Throughput Profiling", "Application Tuning", "Observability-Driven Optimization", "Production Engineering and incident triage"]
        },
        {
          grad: "card-grad-3", badge: "CODE", title: "Languages", meta: "Polyglot developer",
          tags: ["Java", "Python", "JavaScript"], icons: ["java", "python", "javascript", "typescript", "kotlin", "plsql"], iconTop: ["java", "python", "typescript"],
          modalSubtitle: "Programming languages",
          points: ["Java", "Python", "JavaScript / TypeScript", "Kotlin", "SQL/PL/SQL", "Shell"]
        },
        {
          grad: "card-grad-6", badge: "DEVOPS", title: "CI/CD & DevOps", meta: "Pipelines & containers",
          tags: ["GitHub Actions", "Docker", "AWS"], icons: ["docker", "kubernetes", "jenkins", "gradle", "aws", "n8n"], iconTop: ["docker", "kubernetes", "aws"],
          modalSubtitle: "Build, ship, and deploy",
          points: ["GitHub Actions, Jenkins", "Gradle, Maven", "Docker, Kubernetes", "AWS (S3, EC2, Lambda, Secrets Manager)", "JFrog, Traefik", "n8n — workflow automation"]
        },
        {
          grad: "card-grad-4", badge: "DATA", title: "Data & Databases", meta: "SQL, vector stores & data platforms",
          tags: ["ChromaDB", "PostgreSQL", "Oracle", "MongoDB"], icons: ["chromadb", "oracle", "postgres", "mysql", "mongodb", "snowflake", "vertica", "db2"], iconTop: ["chromadb", "oracle", "postgres", "mongodb"],
          modalSubtitle: "Data engineering, databases & vector stores",
          points: ["ChromaDB (vector store for RAG)", "PostgreSQL, Oracle, MySQL, MS SQL", "MongoDB, Snowflake, Vertica, DB2", "Pentaho Data Catalog & Integration", "JDBC"]
        },
      ],
    },
    {
      id: "techstack", title: "Tech Stack", sub: "The toolbox", variant: "tech",
      tech: ["java", "python", "javascript", "typescript", "kotlin", "langchain", "langgraph", "springai", "chromadb",
        "langsmith", "ollama", "n8n", "aws", "selenium", "cucumber", "restassured",
        "postman", "newman", "spring", "springboot", "microservices", "hibernate", "docker", "kubernetes",
        "jenkins", "gradle", "git", "github", "grafana", "prometheus", "otel", "jmeter", "datadog",
        "oracle", "postgres", "mysql", "mongodb", "snowflake", "vertica", "db2", "jira", "llm", "rag", "mcp"],
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
    title: "AI & Software Engineer",
    subtitle: "AI Engineering • Application Development • Automation • Performance Engineering",
    meta: [
      { type: "badge", text: "10 Years in IT & AI" },
      { type: "text", text: "Building. Breaking. Automating. Improving." },
      { type: "green", text: "Turning coffee, code, and curiosity into things that actually work." },
    ],
    overview:
      "A closer look at what I actually build: Agentic AI systems, LLM-powered applications, " +
      "end-to-end automation frameworks, and performance tooling. Specializing in LangChain, LangGraph, " +
      "and Spring AI for multi-agent orchestration and RAG-based solutions. The projects below span " +
      "enterprise AI delivery, personal AI engineering experiments, and platform reliability work.",
    actions: [
      { label: "▶ View Projects", cls: "btn-play", scrollTo: "row-projects" },
      { label: "★ GitHub", cls: "btn-accent", href: LINKS.github, external: true },
    ],
  },
  rows: [
    {
      id: "projects", title: "Enterprise Projects", sub: "Work delivered at scale",
      cards: [
        {
          grad: "card-grad-1", badge: "AI - FLAGSHIP", title: "LLM-Powered PII Detection", meta: "Pentaho Data Catalog - approx. 80% accuracy",
          tags: ["LangChain", "RAG", "Data Governance"], icons: ["langchain", "llm", "rag", "mcp", "python"], iconTop: ["langchain", "llm", "rag"],
          modalSubtitle: "Custom AI data-identification engine for enterprise customers",
          points: [
            "Built an LLM-powered classification layer using LangChain, RAG, and prompt engineering, integrated directly into Pentaho Data Catalog.",
            "Achieved approximately 80% detection accuracy compared to PDC's standard non-LLM classifier, automatically tagging sensitive customer data with PII labels.",
            "Tech stack: LangChain, GPT/Claude/Gemini, RAG pipelines, MCP for tool access, Java and Python services.",
          ]
        },
        {
          grad: "card-grad-4", badge: "AI CHATBOT", title: "AI Chatbot - Pentaho Docs and QA", meta: "LangChain - RAG - PractiTest",
          tags: ["LangChain", "RAG", "Chatbot", "LLMs"], icons: ["langchain", "llm", "rag", "langsmith"], iconTop: ["langchain", "llm", "rag"],
          modalSubtitle: "Customer-facing AI chatbot for autonomous product support",
          points: [
            "Built and deployed a customer-facing AI chatbot that resolves client questions about Pentaho product usage without manual intervention.",
            "Used LangChain to index and retrieve context from official Pentaho documentation and thousands of PractiTest QA test cases.",
            "Built a RAG pipeline over multiple document sources including docs, tickets, and test cases to deliver accurate, grounded answers.",
            "Integrated LangSmith for LLM evaluation, trace logging, and quality monitoring in production.",
          ]
        },
        {
          grad: "card-grad-6", badge: "AGENTIC AI", title: "Agentic AI and MCP Integration", meta: "LangGraph - MCP - Context-aware services",
          tags: ["Agentic AI", "MCP", "LangGraph", "Prompt Eng"], icons: ["mcp", "langgraph", "llm", "langchain"], iconTop: ["mcp", "langgraph", "llm"],
          modalSubtitle: "Connecting LLMs to internal product tooling via MCP",
          points: [
            "Designed multi-step agentic workflows using LangGraph that detect, classify, and govern data with minimal manual involvement.",
            "Integrated Model Context Protocol (MCP) to allow LLMs to securely call internal product tools and fetch live context.",
            "Packaged these as reusable AI services that are consumed across multiple product features.",
          ]
        },
        {
          grad: "card-grad-2", badge: "AUTOMATION", title: "End-to-End Test Automation", meta: "API and UI frameworks",
          tags: ["Selenium", "Cucumber", "REST Assured"], icons: ["selenium", "cucumber", "restassured", "postman", "newman"], iconTop: ["selenium", "cucumber", "postman"],
          modalSubtitle: "Automation framework covering API and UI layers",
          points: [
            "Designed and built reusable automation frameworks covering both API and UI test layers.",
            "Used REST Assured, Postman, and Newman for API testing; Selenium and Cucumber BDD for UI test flows.",
            "Reduced a two-day manual regression cycle to approximately two hours of automated execution with 100% regression coverage.",
            "Accelerated test authoring by integrating AI tools and GitHub Copilot into the development workflow.",
          ]
        },
        {
          grad: "card-grad-5", badge: "PERFORMANCE", title: "Observability and Performance Tuning", meta: "Live monitoring and optimization",
          tags: ["Grafana", "Prometheus", "OpenTelemetry"], icons: ["grafana", "prometheus", "otel", "loki", "jmeter", "datadog"], iconTop: ["grafana", "prometheus", "loki"],
          modalSubtitle: "Performance engineering and production reliability",
          points: [
            "Profiled throughput, latency, and resource consumption to meet enterprise scalability targets.",
            "Set up a full observability stack using Grafana, Prometheus, OpenObserve, Loki, and OpenTelemetry.",
            "Used the observability data to identify Java performance bottlenecks, memory leaks, and caching issues, leading to targeted fixes.",
          ]
        },
        {
          grad: "card-grad-6", badge: "PLATFORM", title: "Data Migration Platform", meta: "Pentaho - Java - PDI and PDC",
          tags: ["Java", "Pentaho", "Data Migration"], icons: ["java", "springboot", "oracle"], iconTop: ["java", "springboot"],
          modalSubtitle: "Cross-functional team project to build a data migration platform",
          points: [
            "Led a team of 5 to 8 engineers to design and build DataPipes, a Java-based platform for migrating data between heterogeneous source and target systems.",
            "Built custom Java modules that extended Pentaho Data Integration and Data Catalog with masking and encryption to protect sensitive data during transfers.",
            "Designed a modular pipeline architecture that supported multiple data types without requiring system-specific rework.",
          ]
        },
      ],
    },
    {
      id: "personal", title: "Personal Projects", sub: "Self-built AI projects",
      cards: [
        {
          grad: "card-grad-5", badge: "PERSONAL AI", title: "Legal Documents Agent", meta: "Python - LangChain - ChromaDB - Ollama",
          tags: ["Agentic AI", "RAG", "ChromaDB", "Ollama"], icons: ["langchain", "chromadb", "ollama", "python"], iconTop: ["langchain", "chromadb", "ollama"],
          modalSubtitle: "Private local AI agent for analyzing sensitive legal documents",
          points: [
            "Built a fully local AI agent using Python, LangChain, and ChromaDB to analyze sensitive legal records through a RAG-based pipeline.",
            "Integrated Ollama for on-device model inference so no data is sent to external LLM providers, ensuring full privacy.",
            "Built an agentic workflow that autonomously extracts and answers questions about contract terms, clauses, and obligations.",
            "All processing runs locally on the machine with no cloud dependencies, maintaining strict data confidentiality.",
          ]
        },
        {
          grad: "card-grad-2", badge: "PERSONAL AI", title: "Mutual Fund and Market Analyzer", meta: "Spring Boot - Spring AI - Java",
          tags: ["Spring AI", "Java", "Spring Boot", "Mutual Funds"], icons: ["springai", "springboot", "java", "llm"], iconTop: ["springai", "springboot", "java"],
          modalSubtitle: "Mutual fund & asset allocation analyzer with market-driven suggestions",
          ctaLabel: "View on GitHub", ctaHref: "https://github.com/rg-8123/mf-report-analyser",
          points: [
            "Built a full-stack mutual fund analytics platform using Java and Spring Boot on the backend.",
            "Focuses on micro-level analysis of funds and detailed asset allocation breakdowns.",
            "Sanitizes portfolio data and uses Spring AI to analyze market trends and sector overlaps to provide targeted investment suggestions.",
            "Reports are displayed on an interactive frontend with granular asset visualization.",
          ]
        },
        {
          grad: "card-grad-3", badge: "PERSONAL AI", title: "Texas Hold'em Trainer & Stock Predictor", meta: "Python - JavaScript - Time Series - Monte Carlo",
          tags: ["JavaScript", "Python", "Time Series", "Monte Carlo"], icons: ["javascript", "python", "llm"], iconTop: ["javascript", "python"],
          modalSubtitle: "Poker equity trainer engine & stock time-series predictive model",
          ctaLabel: "Texas Hold'em Trainer Repo", ctaHref: "https://github.com/rg-8123/texas-holdem-trainer",
          playUrl: "https://rg-8123.github.io/texas-holdem-trainer/",
          points: [
            "Texas Hold'em Equity Trainer: Built a browser-based trainer (vanilla ES modules) for learning poker equity estimation against 1–5 hidden bot opponents across all streets (preflop → flop → turn → river).",
            "Poker Odds Engine: Implemented a 7-to-5 evaluator with exact enumeration (turn/river) and 20,000-trial Monte Carlo simulations (preflop/flop) with real-time accuracy feedback.",
            "AI Stock Predictor: Developed a stock forecasting engine using time-series modeling combined with current market trends and stock fundamental data.",
            "Market Analytics: Ingests live financial data and key fundamentals to identify historical patterns and forecast stock price movements.",
          ]
        },
      ],
    },
    {
      id: "github", title: "GitHub Projects", sub: "Live repos - more coming soon",
      isGithub: true,
    },
    {
      id: "techstack", title: "Tech Stack", sub: "What I build with", variant: "tech",
      tech: ["java", "python", "typescript", "langchain", "langgraph", "springai", "chromadb", "langsmith",
        "ollama", "n8n", "aws", "selenium", "cucumber", "restassured", "spring", "springboot",
        "microservices", "hibernate", "docker", "kubernetes", "jenkins", "gradle", "git", "github",
        "grafana", "prometheus", "otel", "jmeter", "datadog", "postgres", "mongodb", "llm", "rag",
        "mcp", "copilot"],
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
const PROFILE_AVATAR_IMG = {
  recruiter: "images/avatar-recruiter.png",
  engineer: "images/avatar-engineer.png",
  visitor: "images/avatar-visitor.png",
};

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
  const resume = create("a", "nav-btn"); resume.href = LINKS.resume; resume.setAttribute("download", ""); resume.innerHTML = '⬇ <span class="btn-text">Resume</span>';
  right.appendChild(resume);

  const inIcon = create("a", "nav-icon"); inIcon.href = LINKS.linkedin; inIcon.target = "_blank"; inIcon.rel = "noopener"; inIcon.title = "LinkedIn"; inIcon.textContent = "in";
  const mail = create("a", "nav-icon"); mail.href = LINKS.email; mail.title = "Email"; mail.textContent = "✉";
  right.append(inIcon, mail);

  if (key !== "visitor") {
    const gh = create("a", "nav-icon"); gh.href = LINKS.github; gh.target = "_blank"; gh.rel = "noopener"; gh.title = "GitHub";
    gh.innerHTML = '<i class="devicon-github-original"></i>'; right.appendChild(gh);
  }

  // Profile switcher - opens dropdown
  const switcher = create("button", "nav-switch");
  switcher.id = "nav-switcher";
  switcher.innerHTML = `<img src="${PROFILE_AVATAR_IMG[key]}" alt="${PROFILE_LABEL[key]}" class="mini-avatar-img" /><span class="switch-label">${PROFILE_LABEL[key]} &#9662;</span>`;
  switcher.addEventListener("click", (e) => { e.stopPropagation(); toggleDropdown(key); });
  right.appendChild(switcher);

  // Mark active item in dropdown
  document.querySelectorAll(".profile-dropdown-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.switch === key);
  });
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
    else if (t.img) { const im = create("img", "tech-img-icon"); im.src = t.img; im.alt = t.name; im.loading = "lazy"; chip.appendChild(im); }
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
      image: repo.image, playUrl: repo.playUrl,
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
      else if (t.img) { const im = create("img", "tech-img-icon"); im.src = t.img; im.alt = t.name; im.title = t.name; im.loading = "lazy"; wrap.appendChild(im); }
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
    else if (t.img) { const im = create("img", "tech-img-icon"); im.src = t.img; im.alt = t.name; im.title = t.name; im.loading = "lazy"; icons.appendChild(im); }
    else { const e = create("span", "tech-emoji"); e.textContent = t.emoji; e.title = t.name; icons.appendChild(e); }
  });

  const cta = $("#modal-cta"); cta.innerHTML = "";
  if (card.ctaHref) {
    const a = create("a"); a.href = card.ctaHref; a.target = "_blank"; a.rel = "noopener";
    a.innerHTML = `<i class="devicon-github-original"></i> ${card.ctaLabel || "View"}`;
    cta.appendChild(a);
  }
  if (card.playUrl || card.playHref) {
    const playBtn = create("a");
    playBtn.href = card.playUrl || card.playHref;
    playBtn.target = "_blank";
    playBtn.rel = "noopener";
    playBtn.className = "btn-play-game";
    playBtn.innerHTML = `▶ Play Game`;
    cta.appendChild(playBtn);
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

/* ---------- Dropdown toggle ---------- */
function toggleDropdown(currentKey) {
  const dd = $("#profile-dropdown");
  dd.classList.toggle("hidden");
}

function closeDropdown() {
  const dd = $("#profile-dropdown");
  if (dd) dd.classList.add("hidden");
}

/* ---------- Misc wiring ---------- */
function initChrome() {
  const nav = $("#nav");
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 40));
  $("#modal-close").addEventListener("click", closeModal);
  $("#modal-overlay").addEventListener("click", (e) => { if (e.target.id === "modal-overlay") closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeModal(); closeDropdown(); } });

  // Home button -> profile gate
  $("#logo-home").addEventListener("click", () => { closeDropdown(); showGate(); });

  // Dropdown profile switch items
  document.querySelectorAll(".profile-dropdown-item").forEach((item) => {
    item.addEventListener("click", () => {
      const key = item.dataset.switch;
      closeDropdown();
      if (key !== CURRENT) selectProfile(key);
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    const dd = $("#profile-dropdown");
    const switcher = $("#nav-switcher");
    if (dd && !dd.classList.contains("hidden") &&
      !dd.contains(e.target) && e.target !== switcher && !switcher.contains(e.target)) {
      closeDropdown();
    }
  });
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
