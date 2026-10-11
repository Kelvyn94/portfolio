export type Project = {
  id: string;
  title: string;
  summary: string;
  problem?: string;
  role?: string;
  note?: string;
  stack: string[];
  github?: string;
  live?: string;
  image?: string; // e.g. '/screenshots/tradex.png'
  featured?: boolean;
};

export const profile = {
  name: "Kelvin Macharia",
  role: "IT graduate · Software & web developer",
  headline: "Practical web software and business tools, built with care.",
  intro:
    "I'm an IT graduate based in Kenya. I build web solutions and digital tools, with interests in business systems, financial analytics and frontend development.",
  photo: "/profile.jpg",
  photoAlt: "Portrait of Kelvin Macharia",
};

// Leave a value as '' to hide it. WhatsApp format: https://wa.me/2547XXXXXXXX
export const links = {
  github: "https://github.com/Kelvyn94",
  linkedin: "https://www.linkedin.com/in/kelvin-njoroge-48993422b/",
  email: "kmacharia584@gmail.com",
  whatsapp: "254794610102",
};

export const about = [
  "I'm an IT graduate based in Kenya who builds software and web solutions. My interests sit across business systems, financial analytics and frontend development, and I like turning a real problem into a tool people can actually use.",
  "The projects here include a browser-based CV analyzer, a Chrome extension, web apps and business websites. I'm growing towards becoming a capable software and business systems developer, and I learn by building and shipping.",
];

export const projects: Project[] = [
  {
    id: "tradex",
    title: "TradeX",
    image: "/screenshots/tradex.jpg",
    summary:
      "A trading journal and smart-money insights platform for ICT practitioners, covering order-flow tracking, SMT divergence detection and multi-asset correlation.",
    note: "The live demo opens at a sign-in page.",
    stack: [],
    live: "https://tradex-web-five.vercel.app/",
    featured: true,
  },
  {
    id: "atlas",
    title: "Atlas Intelligence OS",
    image: "/screenshots/atlas.jpg",
    summary:
      "An executive intelligence dashboard built for the Atlas holding company.",
    stack: ["Next.js"],
    live: "https://atlas-intelligence-os-web.vercel.app/dashboard",
    featured: true,
  },
  {
    id: "cv-match-analyzer",
    title: "CV Match Analyzer",
    image: "/screenshots/cv-match-analyzer.jpg",
    summary:
      "Paste a CV and a job posting to get an instant match score and a list of matched and missing skills. It runs entirely in the browser, so nothing is uploaded.",
    problem:
      "Job seekers rarely know which keywords a recruiter or applicant tracking system is scanning for.",
    role: "Designed and built.",
    stack: ["HTML", "JavaScript", "Client-side"],
    github: "https://github.com/Kelvyn94/cv-match-analyzer",
  },
  {
    id: "table-exporter",
    title: "Table Exporter Extension",
    image: "/screenshots/table-exporter.jpg",
    summary:
      "A Chrome extension (Manifest V3) that finds HTML tables on a page and exports them to CSV that opens cleanly in Excel and Google Sheets.",
    problem:
      "Copy-pasting tables from websites into spreadsheets is slow and error-prone.",
    role: "Designed and built.",
    note: "Source on GitHub; not published on the Chrome Web Store.",
    stack: ["JavaScript", "Chrome Extension", "Manifest V3"],
    github: "https://github.com/Kelvyn94/table-exporter-extension",
  },
  {
    id: "kenya-tech-blog",
    title: "Kenya Technology Blog",
    image: "/screenshots/kenya-tech-blog.jpg",
    summary:
      "An editorial-style front end for a Kenyan developer community, with news, programming, career and local-events sections.",
    role: "Designed and built.",
    stack: ["HTML", "CSS", "GitHub Pages"],
    live: "https://kelvyn94.github.io/Kenya-Technology-Blog/",
  },
  {
    id: "business-website",
    title: "GreenGrow Business Website",
    image: "/screenshots/business-website.jpg",
    summary:
      "A responsive website for an agricultural supplies and advisory business, with about, services, products and contact sections.",
    role: "Designed and built.",
    stack: ["HTML", "CSS", "GitHub Pages"],
    live: "https://kelvyn94.github.io/Business-Website/",
  },
  {
    id: "shofar-media",
    title: "Shofar Media",
    image: "/screenshots/shofar-media.jpg",
    summary:
      "Website for a digital marketing and billboard advertising agency covering services, an about page, a blog and contact details.",
    stack: ["WordPress", "Elementor"],
    live: "https://theshofarmediahub.com/",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  { title: "Backend", items: ["REST APIs", "FastAPI", "Express"] },
  { title: "Databases", items: ["PostgreSQL"] },
  {
    title: "Tools",
    items: [
      "Git & GitHub",
      "VS Code",
      "Chrome extensions (MV3)",
      "WordPress / Elementor",
    ],
  },
  { title: "Deployment", items: ["Vercel", "GitHub Pages"] },
];

export const process = [
  {
    title: "Understand the problem",
    text: "Talk through who the tool is for and what they are trying to get done.",
  },
  {
    title: "Define requirements",
    text: "Agree on what must work first and what can wait.",
  },
  {
    title: "Design",
    text: "Sketch the layout and flow with mobile screens in mind.",
  },
  {
    title: "Build and test",
    text: "Build in small steps and check on real devices.",
  },
  {
    title: "Deploy and document",
    text: "Publish it and leave clear notes so it can be maintained.",
  },
];
