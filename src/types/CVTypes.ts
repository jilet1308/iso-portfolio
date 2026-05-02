export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  project: string;
  period: string;
  description: string;
  tech: string[];
}

export interface Project {
  name: string;
  subtitle: string;
  url: string;
  description: string;
  tech: string[];
}

export interface ContactLink {
  icon: string;
  text: string;
  href: string | null;
}

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["Java 17/21", "JavaScript ES14", "TypeScript", "C11"],
  },
  {
    category: "Frameworks",
    items: ["Spring Boot 3+", "React 18", "Raylib"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL 17", "Oracle XE 21c"],
  },
  {
    category: "Infrastructure",
    items: [
      "Git",
      "Maven",
      "Docker",
      "Redis",
      "Kafka",
      "AWS (RDS, EC2, S3)",
      "ELK Stack",
      "Grafana",
      "GNU Make",
    ],
  },
  {
    category: "Architecture",
    items: ["Microservices", "Design Patterns", "Agile", "UNIX Environment"],
  },
  {
    category: "Testing",
    items: ["Mockito", "JUnit 4 & 5", "ArchUnit"],
  },
  {
    category: "Interests",
    items: ["Web Development", "OS & Systems Programming"],
  },
];

export const experiences: Experience[] = [
  {
    role: "Associate Software Engineer",
    company: "Amadeus",
    project: "Loyalty Management",
    period: "June 2025 – Present",
    description:
      "Developing new features on customer requests, query optimizations, report automation and occasional bug fixes inside the Loyalty Management project. Agile, corporate and international environment — working with massive datasets courtesy of 8 million customer accounts.",
    tech: ["Java", "Oracle", "Kafka"],
  },
  {
    role: "Software Engineer",
    company: "Kron",
    project: "AIOC Platform · Alarm Manager · Data Stream Processing · Dataflow",
    period: "Dec 2022 – June 2025",
    description:
      "First professional role in a strong start-up culture. Shipped products on tight deadlines across a wide range of technologies: backend microservices platform, UI development, a full alarm manager built from scratch, custom Wireshark dissectors, an SSH adapter, Dockerfiles, and DevOps database migrations.",
    tech: [
      "Java 21",
      "React",
      "TypeScript",
      "Kafka",
      "Redis",
      "Docker",
      "PostgreSQL",
      "Oracle",
    ],
  },
  {
    role: "Intern",
    company: "SabancıDX",
    project: "Cloud Migration",
    period: "June 2022 – Aug 2022",
    description:
      "Part of the cloud migration consultancy team. Researched pricing across cloud providers, wrote detailed reports and provided risk assessments for platform selection decisions.",
    tech: ["Azure", "AWS", "Google Cloud Platform"],
  },
];

export const projects: Project[] = [
  {
    name: "nman",
    subtitle: "Modern Man Page Generator",
    url: "https://github.com/jilet1308/nman",
    description:
      "A man page-like CLI documentation generator for any language, function, method or object. Caches previously generated docs and serves them instantly — saving tokens and wait time. Renders output as colorful Markdown via Glow.",
    tech: ["CLI", "AI", "Documentation"],
  },
  {
    name: "brickz",
    subtitle: "Microservice Ready Backend Platform",
    url: "https://github.com/jilet1308/brickz",
    description:
      "A full security backend providing JWT authentication, email module, Redis wrapper, and extensible error handling. Planned: OAuth2, SMS module, push notifications, SQL export reporting, and an alarm manager.",
    tech: ["Java", "Spring Boot", "JWT", "Redis", "WIP"],
  },
];

export const contactLinks: ContactLink[] = [
  {
    icon: "fa-solid fa-location-dot",
    text: "Üsküdar, Istanbul",
    href: null,
  },
  {
    icon: "fa-solid fa-envelope",
    text: "İsmail.d.cokluk@gmail.com",
    href: "mailto:İsmail.d.cokluk@gmail.com",
  },
  {
    icon: "fa-solid fa-phone",
    text: "+90 545 407 46 33",
    href: "tel:+905454074633",
  },
  {
    icon: "fa-brands fa-linkedin",
    text: "ismailcokluk",
    href: "https://www.linkedin.com/in/ismailcokluk",
  },
  {
    icon: "fa-brands fa-github",
    text: "jilet1308",
    href: "https://github.com/jilet1308",
  },
];
