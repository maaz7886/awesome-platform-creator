/**
 * Editable content collections for maazpatel.com.
 * Add or update evidence here — components read from this file only.
 */

export const IDENTITY = {
  name: "Maaz Patel",
  title: "Founder & CEO, AIValytics",
  descriptor: "AI Platform Architect · AI-Native Transformation Strategist · Speaker",
  base: "Bengaluru, India",
  email: "maazaivalytics@gmail.com",
  linkedin: "https://www.linkedin.com/in/maazpatel",
  company: "https://aivalytics.com",
  site: "https://awesome-platform-creator.lovable.app",
  statement: "Building AI-ready people, institutions and organizations for the AI-native economy.",
};

export type Stat = { value: string; label: string };

export const STATS: Stat[] = [
  { value: "25,000+", label: "Students engaged" },
  { value: "20+", label: "Startups worked with" },
  { value: "Nationwide", label: "Sessions & programs across India" },
  { value: "Multiple", label: "Institutions & innovation ecosystems" },
  { value: "AI systems", label: "Agents · Automation · MVPs · Platforms" },
];

export const PROOF_LINE =
  "25,000+ Students Engaged · 20+ Startups · Programs Across India · Founder, AIValytics";

/** Only list engagements that can be substantiated. */
export const INSTITUTIONS: string[] = [
  "IIT Hyderabad",
  "IIT Bombay",
  "IIT Delhi",
  "Engineering institutions",
  "MBA institutions",
  "Universities & schools",
  "Startup ecosystems",
];

export const PRINCIPLES = [
  "Build before you preach.",
  "A system is more valuable than a slide deck.",
  "AI adoption is an operating-model problem — not a software subscription.",
  "Domain understanding combined with AI leverage beats either alone.",
  "Human judgment matters more, not less, as machines get more capable.",
  "Orchestrating intelligence is becoming a foundational professional skill.",
];

export const SHAPE = [
  {
    letter: "S",
    title: "SOP driven",
    body: "Repeatable workflows come before automation. You cannot automate what was never defined.",
  },
  {
    letter: "H",
    title: "Human in the loop",
    body: "AI expands leverage; human judgment stays accountable for ethics and high-stakes calls.",
  },
  {
    letter: "A",
    title: "Assumed arbitrage",
    body: "Any advantage that comes only from access to a tool eventually disappears.",
  },
  {
    letter: "P",
    title: "Product ≠ moat",
    body: "Building gets easier. Distribution, data, customer insight, trust and execution decide outcomes.",
  },
  {
    letter: "E",
    title: "Staying employable",
    body: "The strongest professionals orchestrate AI instead of competing with it task-for-task.",
  },
];

export const PHASES = [
  { n: "01", title: "Vision & strategy", body: "Where are we going and why?", agents: "Research agents, market synthesis, scenario modelling." },
  { n: "02", title: "Build & create", body: "Product, research, engineering and creation.", agents: "Coding agents, prototyping, design systems, documentation." },
  { n: "03", title: "Operate & deliver", body: "Projects, workflows, operations and execution.", agents: "AI-native project management, SOP automation, QA loops." },
  { n: "04", title: "Sell & distribute", body: "Marketing, sales, GTM and customer acquisition.", agents: "Content engines, outbound agents, CRM enrichment." },
  { n: "05", title: "Support & scale", body: "Customer success, analytics, finance and expansion.", agents: "Support copilots, reporting agents, anomaly detection." },
];

export const TRADITIONAL_STACK = [
  "Human team",
  "Departments",
  "Managers",
  "Processes",
  "Software",
  "Execution",
];

export const AI_NATIVE_STACK = [
  "Expert human core",
  "AI agents",
  "Automated workflows",
  "Shared context / knowledge",
  "Human oversight",
  "Rapid execution",
];

export type CaseStudy = {
  slug: string;
  index: string;
  category: string;
  title: string;
  organization: string;
  problem: string;
  role: string;
  delivered: string;
  built: string;
  outcome: string;
  testimonial?: { quote: string; name: string; role: string };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "ai-entrepreneurship-program",
    index: "01",
    category: "Education",
    title: "AI & entrepreneurship program",
    organization: "Engineering institution · innovation cell",
    problem:
      "Students understood AI tools in isolation but could not connect them to a venture, a workflow or a customer.",
    role: "Program architect and lead facilitator.",
    delivered:
      "A multi-session program covering AI foundations, agentic workflows, business model design and validation.",
    built: "Working prototypes, validated problem statements and pitch-ready venture concepts.",
    outcome: "Editable — add measured outcomes as they are confirmed.",
  },
  {
    slug: "ai-native-founder-workshop",
    index: "02",
    category: "Startups",
    title: "AI-native company / founder workshop",
    organization: "Incubator & early-stage founder cohort",
    problem:
      "Founders were hiring for functions that agents and automation could already cover, slowing burn-to-output ratio.",
    role: "Workshop lead and operating-model advisor.",
    delivered:
      "Traditional vs AI-native operating model teardown, agent mapping across the five company phases, and a build plan.",
    built: "Per-company agent maps and automation backlogs.",
    outcome: "Editable — add measured outcomes as they are confirmed.",
  },
  {
    slug: "faculty-ai-enablement",
    index: "03",
    category: "Institutions",
    title: "Faculty AI enablement",
    organization: "University faculty & academic leadership",
    problem: "Faculty adoption was uneven, with policy uncertainty around teaching and assessment.",
    role: "Enablement designer and facilitator.",
    delivered: "Hands-on sessions on teaching, assessment design, research workflows and automation.",
    built: "Faculty-owned AI workflows and internal champions.",
    outcome: "Editable — add measured outcomes as they are confirmed.",
  },
  {
    slug: "student-ai-builder-program",
    index: "04",
    category: "Workshops",
    title: "Student AI builder program",
    organization: "Multi-campus student cohorts",
    problem: "Students consumed AI content but shipped nothing.",
    role: "Bootcamp lead.",
    delivered: "Build-first bootcamp: agents, automations, applications and deployment.",
    built: "Each participant ships an agent, automation or working application.",
    outcome: "Editable — add measured outcomes as they are confirmed.",
  },
  {
    slug: "startup-mvp-ai-system",
    index: "05",
    category: "AI systems",
    title: "Startup MVP / AI system",
    organization: "Early-stage startup teams",
    problem: "Teams needed a working product surface before they could test demand.",
    role: "AI platform architect.",
    delivered: "MVP scoping, AI system architecture, agent orchestration and shipped prototype.",
    built: "Deployed MVPs with AI-assisted core workflows.",
    outcome: "Editable — add measured outcomes as they are confirmed.",
  },
  {
    slug: "ai-knowledge-partnership",
    index: "06",
    category: "Institutions",
    title: "AI knowledge partner / campus transformation",
    organization: "Institution-wide engagement",
    problem: "One-off workshops created awareness but no durable capability.",
    role: "Knowledge partner and adoption advisor.",
    delivered:
      "Recurring faculty and student programs, use-case discovery, pilots and an adoption roadmap.",
    built: "A campus-level AI capability structure across leadership, faculty and students.",
    outcome: "Editable — add measured outcomes as they are confirmed.",
  },
];

export type Pathway = {
  n: string;
  title: string;
  body: string;
  points: string[];
  cta: string;
  inquiry: string;
};

export const PATHWAYS: Pathway[] = [
  {
    n: "01",
    title: "Speaking & keynotes",
    body: "Keynotes and masterclasses on AI-native companies, agents, entrepreneurship and the future of work.",
    points: ["AI-native companies", "AI agents & the future of work", "AI-native leadership", "Entrepreneurship in an agentic economy"],
    cta: "Invite Maaz to speak",
    inquiry: "speaking",
  },
  {
    n: "02",
    title: "Institutional AI transformation",
    body: "For universities, colleges, schools, academic leadership, faculty and innovation cells.",
    points: ["AI-ready campus", "AI knowledge partnership", "Faculty enablement", "Adoption roadmap & advisory"],
    cta: "Explore institutional programs",
    inquiry: "institutional",
  },
  {
    n: "03",
    title: "AI systems & automation",
    body: "For companies, founders, teams and institutions that need working systems, not pilots.",
    points: ["Agents & multi-agent orchestration", "Workflow automation", "Internal tools & dashboards", "Decision-support systems"],
    cta: "Discuss an AI system",
    inquiry: "ai-system",
  },
  {
    n: "04",
    title: "Founder & startup execution",
    body: "With aspiring founders, early-stage startups, incubators and innovation programs.",
    points: ["MVP development", "AI-native business models", "GTM & automation", "Validation with agent-enabled teams"],
    cta: "Explore founder programs",
    inquiry: "founder",
  },
  {
    n: "05",
    title: "AI education & workforce programs",
    body: "Programs for students, professionals, developers, project managers and business teams.",
    points: ["AI foundations", "Agents & automation", "AI-native project management", "Startup execution & AI leadership"],
    cta: "Explore programs",
    inquiry: "programs",
  },
];

export type Program = {
  title: string;
  duration: string;
  audience: string;
  format: string;
  outcome: string;
  deliverables: string[];
  inquiry: string;
};

export const PROGRAMS: Program[] = [
  {
    title: "AI leadership masterclass",
    duration: "60–180 minutes",
    audience: "Institutional leaders, founders, business leaders",
    format: "Keynote or leadership briefing",
    outcome: "A shared, realistic view of what AI changes in the operating model.",
    deliverables: ["Leadership briefing", "Decision framework", "Adoption priorities"],
    inquiry: "speaking",
  },
  {
    title: "Faculty AI enablement",
    duration: "1–2 days, or a longer customized engagement",
    audience: "Faculty and academic leadership",
    format: "Hands-on workshop series",
    outcome: "Faculty who use AI in teaching, assessment, research and administration.",
    deliverables: ["Workflow templates", "Assessment guidance", "Internal champions"],
    inquiry: "faculty",
  },
  {
    title: "Student AI builder bootcamp",
    duration: "2–5 days",
    audience: "Engineering, MBA and undergraduate cohorts",
    format: "Build-first bootcamp",
    outcome: "Every participant ships something that runs.",
    deliverables: ["AI agent", "Automation", "Application or prototype", "Demo day"],
    inquiry: "bootcamp",
  },
  {
    title: "AI-ready campus",
    duration: "One or more semesters",
    audience: "Whole institution",
    format: "Transformation initiative",
    outcome: "Capability across leadership, faculty and students — not awareness alone.",
    deliverables: ["Readiness diagnostic", "Leadership alignment", "Use-case discovery", "Pilots & roadmap"],
    inquiry: "institutional",
  },
  {
    title: "AI knowledge partnership",
    duration: "Ongoing",
    audience: "Institutions partnering with AIValytics",
    format: "Long-term collaboration",
    outcome: "A continuous capability engine instead of episodic events.",
    deliverables: ["Recurring workshops", "Faculty & student programs", "Projects & innovation", "Advisory"],
    inquiry: "partnership",
  },
];

export type Build = {
  name: string;
  what: string;
  problem: string;
  tech: string;
  who: string;
  result: string;
};

export const BUILDS: Build[] = [
  {
    name: "Multi-agent research system",
    what: "An orchestrated set of agents that research, synthesize and draft with source tracking.",
    problem: "Teams lose days to manual research that is never reusable.",
    tech: "LLM orchestration · RAG · vector store · scheduled runs",
    who: "Founders, strategy and research teams",
    result: "Repeatable research output with a reviewable human checkpoint.",
  },
  {
    name: "Workflow automation layer",
    what: "Event-driven automations connecting the tools a team already uses.",
    problem: "Coordination work quietly consumes the highest-paid hours.",
    tech: "n8n / Make · APIs · webhooks · queues",
    who: "Operations and delivery teams",
    result: "Manual handoffs replaced by monitored automated paths.",
  },
  {
    name: "AI assessment & placement tooling",
    what: "Systems that evaluate, score and route candidate or student capability.",
    problem: "Assessment at scale is slow and inconsistent.",
    tech: "Structured LLM evaluation · rubrics · dashboards",
    who: "Institutions and placement teams",
    result: "Faster feedback loops with human review retained.",
  },
  {
    name: "Startup MVPs",
    what: "Deployed product surfaces built to test demand quickly.",
    problem: "Founders need something real before they can learn anything.",
    tech: "Modern web stack · APIs · AI-assisted build",
    who: "Early-stage founders",
    result: "MVPs shipped in weeks, then validated with real users.",
  },
];

export const STACK = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "Perplexity",
  "n8n",
  "Make",
  "Cursor",
  "Codex",
  "Vercel",
  "APIs",
  "Vector databases",
  "RAG systems",
];

export type Testimonial = {
  tier: 1 | 2 | 3;
  quote: string;
  name: string;
  role: string;
};

/** Replace with verified, attributed testimonials. Tier 1 = decision makers. */
export const TESTIMONIALS: Testimonial[] = [];

export const SPEAKING_TOPICS = [
  {
    featured: true,
    title: "The rise of AI-native companies",
    subtitle: "How small teams and AI agents will build the next generation of businesses",
    format: "Keynote · 3-hour masterclass · Leadership workshop",
  },
  { featured: false, title: "Building the $5 billion company with 50 people", subtitle: "Leverage, agents and the new unit economics of a team.", format: "Keynote" },
  { featured: false, title: "AI agents and the future of work", subtitle: "What changes in roles, teams and career paths.", format: "Keynote · Workshop" },
  { featured: false, title: "From traditional to AI-native organizations", subtitle: "An operating-model transition, not a tool rollout.", format: "Leadership briefing" },
  { featured: false, title: "Becoming employable in an agentic economy", subtitle: "Skills that compound when machines get better.", format: "Campus keynote" },
  { featured: false, title: "AI-native entrepreneurship", subtitle: "Starting up with agents from day one.", format: "Masterclass" },
  { featured: false, title: "AI-native project management", subtitle: "Delivery when part of the team is software.", format: "Workshop" },
  { featured: false, title: "Building AI-ready institutions", subtitle: "Leadership, faculty, students and infrastructure.", format: "Leadership workshop" },
];

export const NOTES = [
  { category: "AI-native companies", title: "The company is being rewritten", excerpt: "Headcount stops being the proxy for capacity once agents carry the operating layer." },
  { category: "Agents & automation", title: "Why most agent pilots stall", excerpt: "Not a model problem. A missing SOP problem." },
  { category: "AI & education", title: "Awareness is not capability", excerpt: "One workshop starts a conversation. Systems change behaviour." },
  { category: "Future of work", title: "Orchestration is the new literacy", excerpt: "The professionals who compound are the ones directing intelligence." },
];

export const INQUIRY_OPTIONS = [
  { value: "speaking", label: "Speaking / Keynote" },
  { value: "masterclass", label: "AI-Native Companies Masterclass" },
  { value: "institutional", label: "Institutional Program" },
  { value: "faculty", label: "Faculty Development" },
  { value: "bootcamp", label: "Student Bootcamp" },
  { value: "partnership", label: "AI Knowledge Partnership" },
  { value: "ai-system", label: "AI System / Automation" },
  { value: "founder", label: "Founder / Startup Program" },
  { value: "programs", label: "Corporate Program" },
  { value: "other", label: "Other" },
];

export const NAV = [
  { label: "Work", to: "/work" },
  { label: "Speaking", to: "/speaking" },
  { label: "Institutions", to: "/institutions" },
  { label: "AI Systems", to: "/ai-systems" },
  { label: "AI-Native Companies", to: "/ai-native-companies" },
  { label: "Insights", to: "/insights" },
  { label: "About", to: "/about" },
] as const;
