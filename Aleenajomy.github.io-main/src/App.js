import React, { useEffect, useRef, useState } from "react";
import { animate, stagger, createTimeline, splitText } from "animejs";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Braces,
  Briefcase,
  CheckCircle2,
  Code2,
  Database,
  Download,
  FileCode2,
  Folder,
  GitBranch,
  Github,
  Globe,
  GraduationCap,
  KeyRound,
  LayoutGrid,
  Layers,
  Linkedin,
  Link2,
  Lock,
  Mail,
  MapPin,
  Monitor,
  Moon,
  Palette,
  Send,
  Server,
  Shield,
  ShieldCheck,
  Sun,
  Terminal,
  User,
  Wrench,
} from "lucide-react";
import "./App.css";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const techTags = [
  "React",
  "TypeScript",
  "Django",
  "Python",
  "PostgreSQL",
  "JWT",
  "Celery",
  "Redis",
  "LaTeX",
];

const skillGroups = [
  {
    category: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
  },
  {
    category: "Backend",
    items: [
      "Django",
      "Django REST Framework",
      "Node.js",
      "Express.js",
      "REST API Design",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Optimization", "Indexing"],
  },
  {
    category: "Auth & Security",
    items: ["JWT Authentication", "RBAC", "Session Management"],
  },
  {
    category: "Async",
    items: [
      "Celery (Basic)",
      "Redis (Basic)",
    ],
  },
  {
    category: "DevOps",
    items: [
      "Docker (Learning)",
      "CI/CD Concepts",
      "Git",
      "GitHub",
      "Linux",
    ],
  },
  {
    category: "Tools",
    items: [
      "Postman",
      "LaTeX",
      "GitHub Copilot",
      "ChatGPT",
      "Amazon Q",
    ],
  },
  {
    category: "Concepts",
    items: [
      "Agile",
      "SDLC",
      "MVC Architecture",
      "Microservices (Basic)",
    ],
  },
];

const skillItemIcons = {
  "React.js": Monitor,
  Python: Terminal,
  Django: Server,
  "Django REST Framework": Layers,
  "Node.js": Server,
  "Express.js": Link2,
  "REST API Design": Link2,
  Java: Code2,
  C: Terminal,
  JavaScript: Braces,
  TypeScript: Braces,
  HTML5: FileCode2,
  CSS3: Palette,
  Bootstrap: LayoutGrid,
  "Tailwind CSS": Palette,
  "Responsive Web Design": Monitor,
  PostgreSQL: Database,
  MySQL: Database,
  MongoDB: Database,
  "SQL Optimization": Database,
  Indexing: Database,
  ChatGPT: Bot,
  "Amazon Q": Bot,
  "GitHub Copilot": Bot,
  "JWT Authentication": KeyRound,
  RBAC: Lock,
  "Session Management": Lock,
  Git: GitBranch,
  GitHub: Github,
  Postman: Send,
  Linux: Terminal,
  LaTeX: FileCode2,
  Celery: Server,
  "Celery (Basic)": Server,
  Redis: Database,
  "Redis (Basic)": Database,
  Docker: Layers,
  "Docker (Learning)": Layers,
  "CI/CD Concepts": GitBranch,
  Agile: CheckCircle2,
  SDLC: Layers,
  "MVC Architecture": LayoutGrid,
  "Microservices (Basic)": Layers,
};

const skillCategoryIcons = {
  "Programming Languages": Braces,
  Frontend: Monitor,
  Backend: Code2,
  Databases: Database,
  "Auth & Security": Shield,
  Async: Server,
  DevOps: GitBranch,
  Tools: Wrench,
  Concepts: Layers,
};

const services = [
  {
    title: "Backend API Development",
    description:
      "Building secure backend systems using Django and DRF with clean REST architecture and maintainable service layers.",
    icon: Server,
  },
  {
    title: "Full-Stack Web Development",
    description:
      "Delivering end-to-end applications using React, Node.js, Express, and database-driven backend integration.",
    icon: Monitor,
  },
  {
    title: "Cybersecurity-Focused Engineering",
    description:
      "Applying secure coding standards, vulnerability assessments, and OWASP-aligned implementation patterns.",
    icon: ShieldCheck,
  },
  {
    title: "Authentication & Authorization",
    description:
      "Implementing JWT authentication and role-based access control for secure multi-user application flows.",
    icon: KeyRound,
  },
  {
    title: "Database Design",
    description:
      "Designing and optimizing data models using MySQL, PostgreSQL, and MongoDB for reliability and performance.",
    icon: Database,
  },
  {
    title: "API Integration & Testing",
    description:
      "Connecting third-party services, writing integration workflows, and validating endpoints using Postman and automated test flows.",
    icon: Link2,
  },
];

const experience = [
  {
    role: "Python Developer Trainee",
    summary:
      "Built REST APIs, implemented authentication workflows, and optimized query performance for backend-heavy applications.",
  },
  {
    role: "Cybersecurity Intern",
    summary:
      "Performed vulnerability testing and validation reviews using OWASP-aligned tools and secure coding checkpoints.",
  },
  {
    role: "Electronics Quality Control Experience",
    summary:
      "Developed discipline, consistency, and precision through process-driven quality checks and defect analysis.",
  },
];

const projects = [
  {
    name: "ResumeMaker - AI ATS Resume Optimizer",
    problem:
      "Job seekers often spend too much time rewriting resumes for each job application and still struggle to meet ATS keyword expectations.",
    solution:
      "Designed an AI-powered application that produces job-specific, ATS-optimized resumes from user profiles and job descriptions, reducing manual editing time by about 70%. Built a LaTeX-driven PDF generation pipeline that achieved 100% parse accuracy across 5 tested ATS tools, architected 8 REST APIs for profile storage, JWT authentication, and asynchronous document generation, and developed an ATS keyword analysis module that improved average resume-job match scores by 40 percentage points during internal evaluation.",
    technologies: [
      "React",
      "TypeScript",
      "Django",
      "PostgreSQL",
      "LaTeX",
      "JWT Authentication",
      "REST APIs",
      "Celery",
      "Redis",
    ],
    learned:
      "Learned how to combine AI-assisted resume optimization, asynchronous document generation, and ATS-friendly PDF output into a workflow that is both user-friendly and technically reliable.",
    github: "https://github.com/Aleenajomy/ResumeMaker",
  },
  {
    name: "Job Portal Platform",
    problem:
      "Recruiters, applicants, and admins needed one platform with clear role separation and reliable job workflow handling.",
    solution:
      "Built a multi-role full-stack platform with 15+ APIs, JWT-based role access, and an integrated React interface for streamlined operations.",
    technologies: [
      "Django",
      "Django REST Framework",
      "React",
      "PostgreSQL",
      "JWT",
      "Role-Based Access",
    ],
    learned:
      "Learned to model clean permission boundaries and maintain consistency between backend policies and frontend user flows.",
    github: "https://github.com/Aleenajomy/Job-portal",
  },
  {
    name: "Stylo - Virtual Wardrobe App",
    problem:
      "Users needed a structured way to manage wardrobe data and receive useful recommendations from their item history.",
    solution:
      "Developed a full-stack API-driven application with profile and item endpoints plus AI-assisted suggestion workflows.",
    technologies: [
      "Python",
      "Django",
      "REST APIs",
      "React",
      "AI Integration",
    ],
    learned:
      "Learned to design extensible APIs that can support intelligent features without overcomplicating the core system.",
    github: "https://github.com/Aleenajomy/Stylo",
  },
  {
    name: "Gassets Facility System",
    problem:
      "Campus service requests were manually tracked, creating delays and inconsistent validation steps.",
    solution:
      "Created a workflow-based service platform with validation-driven state transitions that reduced repetitive manual handling.",
    technologies: ["Django", "REST APIs", "Validation Workflows", "Automation"],
    learned:
      "Learned how workflow automation improves reliability only when validation rules are explicit and well-tested.",
    github: null,
  },
];

const educationJourney = [
  {
    stage: "Diploma",
    details:
      "Built a technical foundation in problem solving, systems thinking, and practical implementation.",
  },
  {
    stage: "B.Tech",
    details:
      "Expanded into software engineering with focus on web technologies, backend development, and data-driven applications.",
  },
  {
    stage: "Internships",
    details:
      "Applied concepts through internship work in cybersecurity and development-focused environments.",
  },
  {
    stage: "Developer Role Journey",
    details:
      "Transitioning into backend-focused full-stack engineering roles with production-minded security and scalability practices.",
  },
];

const contacts = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aleena-jomy",
    value: "linkedin.com/in/aleena-jomy",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/Aleenajomy",
    value: "github.com/Aleenajomy",
    icon: Github,
  },
  {
    label: "Email",
    href: "mailto:aleenajomy4@gmail.com",
    value: "aleenajomy4@gmail.com",
    icon: Mail,
  },
];

const profileHighlights = [
  {
    label: "Focus",
    value: "Backend Systems & APIs",
    icon: Code2,
  },
  {
    label: "Security",
    value: "JWT, Access Control, OWASP",
    icon: Shield,
  },
  {
    label: "Availability",
    value: "Open to Developer Roles",
    icon: BadgeCheck,
  },
];

const MOTION_EASE = [0.22, 1, 0.36, 1];

const STARS = Array.from({ length: 80 }, () => ({
  width:    Math.random() * 2.5 + 1.5,
  top:      `${Math.random() * 100}%`,
  left:     `${Math.random() * 100}%`,
  duration: `${2 + Math.random() * 4}s`,
  delay:    `-${Math.random() * 6}s`,
}));

const getRevealProps = (reduceMotion, delay = 0, distance = 16) =>
  reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: distance },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.5, delay, ease: MOTION_EASE },
      };

const getHoverLiftProps = (reduceMotion, lift = -4) =>
  reduceMotion
    ? {}
    : {
        whileHover: { y: lift },
        transition: { duration: 0.2, ease: MOTION_EASE },
      };

function SectionHeading({ eyebrow, title, subtitle, icon: Icon }) {
  const lineRef = useRef(null);

  useEffect(() => {
    if (!lineRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(lineRef.current, {
            scaleX: [0, 1],
            opacity: [0, 1],
            duration: 700,
            ease: "outExpo",
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(lineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-accent/15 text-accent">
          {Icon ? <Icon size={14} /> : <Layers size={14} />}
        </span>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
        {subtitle}
      </p>
      <div
        ref={lineRef}
        style={{ transformOrigin: "left", opacity: 0, transform: "scaleX(0)" }}
        className="mt-4 h-px w-full max-w-md bg-gradient-to-r from-primary/35 via-accent/35 to-transparent"
      />
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const reduceMotion = useReducedMotion();

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  const reveal = (delay = 0, distance = 16) => getRevealProps(reduceMotion, delay, distance);
  const hoverLift = (lift = -4) => getHoverLiftProps(reduceMotion, lift);
  const resumeDownloadUrl = `${process.env.PUBLIC_URL}/Aleena_Jomy_Resume.pdf`;
  const heroLine1Ref = useRef(null);
  const heroLine3Ref = useRef(null);

  useEffect(() => {
    if (reduceMotion || !heroLine1Ref.current || !heroLine3Ref.current) return;
    const s1 = splitText(heroLine1Ref.current, { words: { wrap: 'clip' } });
    const s3 = splitText(heroLine3Ref.current, { words: { wrap: 'clip' } });
    createTimeline({
      defaults: { ease: 'inOut(3)', duration: 650 },
    })
      .add([...s1.words, ...s3.words], {
        y: [($el) => (+$el.dataset.line % 2 ? '100%' : '-100%'), '0%'],
      }, stagger(125))
      .init();
    return () => { s1.revert(); s3.revert(); };
  }, [reduceMotion]);

  // anime.js: skill cards staggered entrance
  useEffect(() => {
    if (reduceMotion) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(".anime-skill-card", {
              opacity: [0, 1],
              translateY: [24, 0],
              delay: stagger(60),
              duration: 550,
              ease: "outExpo",
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    const section = document.querySelector("#skills");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <>
      {/* Background — outside motion.div so it's always visible, no fade-in */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-background"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(ellipse at 70% 40%, rgba(124,58,237,0.18) 0%, transparent 55%),
            radial-gradient(ellipse at 20% 80%, rgba(99,102,241,0.14) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 100%, rgba(34,211,238,0.10) 0%, transparent 50%)`,
        }} />
        {STARS.map((star, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-foreground"
            style={{
              width: star.width,
              height: star.width,
              top: star.top,
              left: star.left,
              opacity: 0.5,
              animation: `twinkle ${star.duration} ${star.delay} ease-in-out infinite`,
            }}
          />
        ))}
        <div className="absolute rounded-full blur-3xl pointer-events-none" style={{ width: 350, height: 350, top: '5%', left: '5%', background: 'rgba(124,58,237,0.15)', animation: 'orbFloat1 12s ease-in-out infinite alternate' }} />
        <div className="absolute rounded-full blur-3xl pointer-events-none" style={{ width: 400, height: 400, top: '50%', left: '65%', background: 'rgba(99,102,241,0.13)', animation: 'orbFloat2 15s ease-in-out infinite alternate' }} />
        <div className="absolute rounded-full blur-3xl pointer-events-none" style={{ width: 280, height: 280, top: '75%', left: '25%', background: 'rgba(34,211,238,0.10)', animation: 'orbFloat3 10s ease-in-out infinite alternate' }} />
      </div>

      <motion.div
        className="App relative min-h-screen bg-transparent text-foreground"
        {...(reduceMotion
          ? {}
          : {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.3, ease: MOTION_EASE },
            })}
      >

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <motion.header
        className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur"
        {...(reduceMotion
          ? {}
          : {
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.35, ease: MOTION_EASE },
            })}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            className="group inline-flex items-center gap-0.5 font-mono text-2xl font-bold tracking-tight"
            aria-label="AJ Home"
          >
            <span className="text-accent">&lt;</span>
            <span className="text-foreground transition group-hover:text-accent">AJ</span>
            <span className="text-accent">/&gt;</span>
          </a>

          <nav className="hidden items-center gap-5 md:flex">
            {navigation.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground transition hover:text-foreground"
                {...(reduceMotion
                  ? {}
                  : {
                      whileHover: { y: -1 },
                      transition: { duration: 0.15, ease: MOTION_EASE },
                    })}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium text-muted-foreground transition hover:border-accent/50 hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
        <nav className="mx-auto flex w-full max-w-6xl gap-4 overflow-x-auto px-4 pb-3 text-xs sm:px-6 md:hidden lg:px-8">
          {navigation.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap text-muted-foreground transition hover:text-foreground"
              {...(reduceMotion
                ? {}
                : {
                    whileHover: { y: -1 },
                    transition: { duration: 0.15, ease: MOTION_EASE },
                  })}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
      </motion.header>

      <main id="main-content" className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <motion.section id="home" className="scroll-mt-28 min-h-[calc(100vh-80px)] flex items-center" {...reveal(0.05)}>
          <div className="grid w-full gap-12 lg:grid-cols-2 lg:items-center">

            {/* LEFT */}
            <div>
              <h1
                className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
                style={{ lineHeight: 1.2 }}
              >
                <span ref={heroLine1Ref} className="block">Hi, I&apos;m Aleena</span>
                <motion.span
                  className="block bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(124,58,237,0.5)]"
                  {...(reduceMotion ? {} : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.65, delay: 0.4, ease: MOTION_EASE } })}
                >Backend-Focused</motion.span>
                <span ref={heroLine3Ref} className="block">Full-Stack Developer</span>
              </h1>

              <motion.p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground" {...reveal(0.13, 12)}>
                I build secure, scalable backend systems with Django, PostgreSQL and modern APIs.
              </motion.p>

              <motion.div className="mt-8 flex flex-wrap gap-3" {...reveal(0.16, 12)}>
                <motion.a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
                  {...(reduceMotion ? {} : { whileHover: { y: -2, scale: 1.02 }, transition: { duration: 0.2, ease: MOTION_EASE } })}
                >
                  View Projects <ArrowRight size={15} />
                </motion.a>
                <motion.a
                  href={resumeDownloadUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent/60"
                  {...(reduceMotion ? {} : { whileHover: { y: -2, scale: 1.02 }, transition: { duration: 0.2, ease: MOTION_EASE } })}
                >
                  Download Resume <Download size={15} />
                </motion.a>
              </motion.div>

            </div>

            {/* RIGHT */}
            <motion.div className="flex flex-col items-center gap-6" {...reveal(0.18, 20)}>
              {/* profile */}
              <motion.div
                className="relative"
                {...(reduceMotion ? {} : { animate: { y: [0, -6, 0] }, transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } })}
              >
                {/* outer glow ring */}
                <div className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl" />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent/60 via-primary/40 to-transparent blur-md" />
                <img
                  src={`${process.env.PUBLIC_URL}/profile-photo.png`}
                  alt="Aleena Jomy profile"
                  className="relative h-52 w-52 rounded-full border-4 border-accent/40 object-cover shadow-2xl sm:h-60 sm:w-60"
                  loading="eager"
                />
                <span className="absolute bottom-3 right-3 inline-flex h-5 w-5 rounded-full border-2 border-background bg-emerald-400" />
              </motion.div>

              <div className="text-center">
                <h2 className="text-xl font-bold text-foreground">Aleena Jomy</h2>
                <p className="mt-1 text-sm text-muted-foreground">Backend-Focused Full-Stack Developer</p>
              </div>

              {/* stat cards */}
              <div className="grid w-full grid-cols-3 gap-3">
                <motion.article
                  className="flex flex-col items-center rounded-xl border border-accent/20 bg-card/70 p-4 text-center backdrop-blur"
                  {...hoverLift()}
                >
                  <Server size={28} className="text-accent" />
                  <p className="mt-2 text-2xl font-bold text-foreground">15+</p>
                  <p className="mt-1 text-xs text-muted-foreground">APIs Built</p>
                </motion.article>
                <motion.article
                  className="flex flex-col items-center rounded-xl border border-accent/20 bg-card/70 p-4 text-center backdrop-blur"
                  {...hoverLift()}
                >
                  <Shield size={28} className="text-accent" />
                  <p className="mt-2 text-sm font-bold leading-tight text-foreground">JWT &amp; RBAC</p>
                  <p className="mt-1 text-xs text-muted-foreground">Security</p>
                </motion.article>
                <motion.article
                  className="flex flex-col items-center rounded-xl border border-accent/20 bg-card/70 p-4 text-center backdrop-blur"
                  {...hoverLift()}
                >
                  <Layers size={28} className="text-accent" />
                  <p className="mt-2 text-sm font-bold leading-tight text-foreground">Backend</p>
                  <p className="mt-1 text-xs text-muted-foreground">Architecture</p>
                </motion.article>
              </div>
            </motion.div>

          </div>
        </motion.section>

        <motion.section id="about" className="mt-20 scroll-mt-28" {...reveal(0.03)}>
          <SectionHeading
            icon={User}
            eyebrow="About"
            title="Building reliable systems behind products"
            subtitle="I enjoy engineering backend logic that keeps products stable and secure. My work centers on authentication, database integrity, and clean API communication between services and clients."
          />
          <motion.article className="rounded-xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-6" {...hoverLift()}>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              I am an early-career engineer who enjoys working on the systems behind applications:
              secure backend architectures, API contracts, and scalable logic. I focus on writing
              clear backend services that are maintainable, testable, and aligned with real product
              requirements.
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-1 shrink-0 text-accent" />
                <span>Experience building REST APIs and database-backed platforms for practical workflows.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-1 shrink-0 text-accent" />
                <span>Familiarity with JWT authentication, access control, and permission-oriented backend design.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-1 shrink-0 text-accent" />
                <span>Strong interest in cybersecurity-aware development and OWASP-aligned implementation choices.</span>
              </li>
            </ul>
          </motion.article>
        </motion.section>

        <motion.section id="skills" className="mt-20 scroll-mt-28" {...reveal(0.03)}>
          <SectionHeading
            icon={Terminal}
            eyebrow="Skills"
            title="Technology stack"
            subtitle="Organized by delivery area to reflect day-to-day engineering usage."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <motion.article
                key={group.category}
                className="anime-skill-card rounded-xl border border-accent/25 bg-card/95 p-5 shadow-sm shadow-primary/10"
                style={{ opacity: 0 }}
                {...hoverLift()}
              >
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                  {(() => {
                    const CategoryIcon = skillCategoryIcons[group.category] || Layers;
                    return <CategoryIcon size={15} className="text-accent" />;
                  })()}
                  {group.category}
                </h3>
                <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                  {group.items.map((item) => {
                    const SkillIcon = skillItemIcons[item] || Code2;
                    return (
                      <li
                        key={item}
                        className="flex items-center gap-2 rounded-lg border border-border/80 bg-background/60 px-2.5 py-2"
                      >
                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent">
                          <SkillIcon size={14} />
                        </span>
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="services" className="mt-20 scroll-mt-28" {...reveal(0.03)}>
          <SectionHeading
            icon={Wrench}
            eyebrow="Services"
            title="What I Can Do for You"
            subtitle="End-to-end engineering support from development and security to deployment and optimization."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  className="rounded-xl border border-accent/25 bg-card/95 p-5 shadow-sm shadow-primary/10"
                  {...hoverLift()}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{service.description}</p>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        <motion.section id="experience" className="mt-20 scroll-mt-28" {...reveal(0.03)}>
          <SectionHeading
            icon={Briefcase}
            eyebrow="Experience"
            title="Hands-on engineering timeline"
            subtitle="Focused progression through development and security-oriented roles."
          />
          <div className="relative border-l border-border pl-6">
            {experience.map((item) => (
              <motion.article key={item.role} className="relative mb-8 last:mb-0" {...hoverLift(-2)}>
                <span className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full border border-accent bg-background" />
                <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.summary}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="projects" className="mt-20 scroll-mt-28" {...reveal(0.03)}>
          <SectionHeading
            icon={Folder}
            eyebrow="Projects"
            title="Case studies"
            subtitle="Project summaries framed by problem definition, implementation approach, and engineering lessons."
          />
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                className="rounded-xl border border-border bg-card p-6"
                {...hoverLift()}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-foreground">
                    <Folder size={18} className="text-accent" />
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground transition hover:border-accent/60 hover:text-accent"
                      >
                        <Github size={13} /> GitHub
                      </a>
                    )}
                    <span className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Case Study {index + 1}
                    </span>
                  </div>
                </div>
                <div className="mt-6 grid gap-5 text-sm md:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Problem</p>
                    <p className="mt-2 leading-7 text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Solution</p>
                    <p className="mt-2 leading-7 text-muted-foreground">{project.solution}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Technologies</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-border/80 bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">What I Learned</p>
                    <p className="mt-2 leading-7 text-muted-foreground">{project.learned}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="security" className="mt-20 scroll-mt-28" {...reveal(0.03)}>
          <motion.article
            className="rounded-xl border border-accent/40 bg-gradient-to-br from-accent/10 via-card to-primary/10 p-6"
            {...hoverLift()}
          >
            <div className="flex items-start gap-3">
              <span className="rounded-md bg-accent/15 p-2 text-accent">
                <ShieldCheck size={18} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  Security Mindset
                </p>
                <p className="mt-3 text-base leading-8 text-foreground">
                  I approach development with security in mind &mdash; validating inputs, protecting
                  authentication flows, and aligning implementations with OWASP practices.
                </p>
              </div>
            </div>
          </motion.article>
        </motion.section>

        <motion.section id="education" className="mt-20 scroll-mt-28" {...reveal(0.03)}>
          <SectionHeading
            icon={GraduationCap}
            eyebrow="Education Timeline"
            title="Learning and role progression"
            subtitle="A clear path from formal education to internship exposure and backend-focused development practice."
          />
          <div className="relative border-l border-border pl-6">
            {educationJourney.map((item) => (
              <motion.article key={item.stage} className="relative mb-8 last:mb-0" {...hoverLift(-2)}>
                <span className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full border border-accent bg-background" />
                <h3 className="text-lg font-semibold text-foreground">{item.stage}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.details}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" className="mt-20 scroll-mt-28" {...reveal(0.03)}>
          <SectionHeading
            icon={Globe}
            eyebrow="Contact"
            title="Open to engineering opportunities"
            subtitle="Recruiter-friendly and direct communication channels for backend and full-stack roles."
          />
          <motion.div className="rounded-xl border border-border bg-card p-6" {...hoverLift()}>
            <p className="text-sm leading-7 text-muted-foreground">
              If your team needs someone focused on secure backend systems, clean APIs, and reliable
              implementation, I would be glad to connect.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {contacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.label === "Email" ? "_self" : "_blank"}
                    rel={contact.label === "Email" ? undefined : "noreferrer noopener"}
                    className="group rounded-lg border border-border bg-background p-4 transition hover:border-accent/60"
                    {...(reduceMotion
                      ? {}
                      : {
                          whileHover: { y: -3 },
                          transition: { duration: 0.2, ease: MOTION_EASE },
                        })}
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Icon size={16} />
                      {contact.label}
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground group-hover:text-foreground">
                      {contact.value}
                    </p>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.section>
      </main>

      <motion.footer className="border-t border-border" {...reveal(0.02, 10)}>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            <span className="font-mono text-accent">&lt;AJ/&gt;</span> Aleena Jomy - Backend-Focused
            Full-Stack Developer
          </p>
          <p>{new Date().getFullYear()} Built with React and Tailwind CSS</p>
        </div>
      </motion.footer>
    </motion.div>
    </>
  );
}

export default App;




