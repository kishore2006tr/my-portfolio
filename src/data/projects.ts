export interface Project {
  name: string;
  slug: string;
  domain: string;
  secondaryDomains: string[];
  description: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image?: string;
  featured: boolean;
  number: string;
  
  // Compatibility fields
  title?: string;
  category?: string;
  github?: string;
  demo?: string;
  metrics?: {
    accuracy?: string;
    responseTime?: string;
    users?: string;
    datasetSize?: string;
  };
  tagline?: string;
  year?: string;
  role?: string;
  teamSize?: string;
  problemHeading?: string;
  problemDescription?: string;
  allCategories?: string[];
  architecture?: { name: string; type: string; desc: string }[];
  sampleInputs?: string[];
  sampleOutputs?: string[];
}

export const filterCategories = [
  'ALL',
  'AI / ML',
  'DATA ANALYTICS',
  'FULL STACK',
] as const;

export type FilterCategory = typeof filterCategories[number];

export const projectsData: Project[] = [
  {
    name: "AI Data Analyst",
    slug: "ai-data-analyst",
    number: "01",
    domain: "AI / Data Analytics",
    secondaryDomains: ["AI / ML", "Data Analytics", "Full Stack"],
    featured: true,
    description: "Autonomous conversational data analysis platform that performs automated profiling, non-destructive data cleaning, statistical evaluation, and interactive reporting on tabular datasets.",
    technologies: [
      "FastAPI",
      "Python",
      "LangChain",
      "LangGraph",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Plotly",
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "ReportLab",
      "SQLite",
    ],
    features: [
      "Automated dataset ingestion and profiling with delimiter & encoding auto-detection (CSV, XLSX, XLS)",
      "Data quality health scoring (0–100) with outlier detection and non-destructive cleaning",
      "Conversational AI agent powered by LangGraph with 10 dynamic exploratory data tools",
      "Automated statistical distributions, correlation matrices, and Plotly visualization specs",
      "One-click downloadable executive PDF analysis reports generated via ReportLab",
    ],
    githubUrl: "",
    liveUrl: "",
  },
  {
    name: "AI Market Analysis",
    slug: "ai-market-analysis",
    number: "02",
    domain: "Data Analytics / AI",
    secondaryDomains: ["Data Analytics", "AI / ML"],
    featured: true,
    description: "AI-driven job market and hiring intelligence platform that analyzes employment trends, salary distributions, and technical skill demands with personalized career recommendations.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Supabase",
      "PostgreSQL",
      "Google Gemini AI",
      "Recharts",
      "Nodemailer",
      "Zod",
      "React Hook Form",
    ],
    features: [
      "Interactive market analytics dashboard tracking hiring trends, locations, and salary benchmarks",
      "AI-powered resume analyzer with skill gap evaluation powered by Google Gemini",
      "AI career assistant providing contextual career advice and matching job openings",
      "Comprehensive company hiring directories, saved job tracking, and email alerts via Nodemailer",
      "Secure user authentication and data persistence with Supabase Row Level Security",
    ],
    githubUrl: "",
    liveUrl: "",
  },
  {
    name: "AI Resume Analyzer",
    slug: "ai-resume-analyzer",
    number: "03",
    domain: "AI / Machine Learning",
    secondaryDomains: ["AI / ML", "Full Stack"],
    featured: false,
    description: "Intelligent resume evaluation tool that parses resumes against target job requirements, computes match scores, extracts technical skills, and provides structured improvement suggestions.",
    technologies: [
      "React 19",
      "Vite",
      "Tailwind CSS 4",
      "Framer Motion",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Google Gemini AI",
      "Groq SDK",
      "Anthropic Claude",
      "PDF-Parse",
      "Mammoth",
    ],
    features: [
      "Drag-and-drop resume upload supporting PDF and DOCX document extraction",
      "AI-powered resume evaluation scoring with circular progress visualization",
      "Automated technical skill extraction and role alignment benchmarking",
      "Actionable AI-generated suggestions for resume optimization and formatting",
      "JWT-based user authentication and persistent candidate analysis history",
    ],
    githubUrl: "",
    liveUrl: "",
  },
  {
    name: "Chat App",
    slug: "chat-app",
    number: "04",
    domain: "Full Stack Development",
    secondaryDomains: ["Full Stack"],
    featured: false,
    description: "Modern real-time communication platform supporting instant direct messaging, group collaboration rooms, real-time notifications, and online presence tracking.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Supabase Realtime",
      "Supabase Auth",
      "PostgreSQL",
      "Framer Motion",
      "Lucide React",
      "Zod",
    ],
    features: [
      "Sub-second real-time messaging powered by Supabase Realtime websocket channels",
      "Direct 1-on-1 private messaging and multi-user group chat rooms",
      "Secure user authentication with email verification and session middleware",
      "Friend management system with live presence detection and notifications",
      "Message history persistence, saved messages, and customized profile settings",
    ],
    githubUrl: "",
    liveUrl: "",
  },
  {
    name: "E-Commerce",
    slug: "e-commerce",
    number: "05",
    domain: "Full Stack Development",
    secondaryDomains: ["Full Stack"],
    featured: true,
    description: "Production-grade e-commerce application featuring atomic order processing, strict database-level Row Level Security, dynamic product catalogs, and administrative sales telemetry.",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Supabase",
      "PostgreSQL",
      "React Hook Form",
      "Zod",
      "Lucide React",
    ],
    features: [
      "Dynamic product catalog with faceted search, categories, brands, and variant management",
      "Client-side cart and wishlist state management powered by Zustand with persistent sync",
      "ACID-compliant atomic order placement procedure (place_order_atomic) preventing inventory conflicts",
      "Server-side coupon validation system supporting discount thresholds and usage caps",
      "18 PostgreSQL relational tables protected by strict Row Level Security (RLS) policies",
    ],
    githubUrl: "",
    liveUrl: "",
  },
  {
    name: "TaskFlow",
    slug: "taskflow",
    number: "06",
    domain: "Full Stack Development",
    secondaryDomains: ["Full Stack"],
    featured: false,
    description: "Interactive project and task management dashboard designed for high-velocity teams, featuring drag-and-drop Kanban boards, team workspaces, and productivity analytics.",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "@hello-pangea/dnd",
      "Supabase",
      "PostgreSQL",
      "Recharts",
      "Framer Motion",
      "React Hook Form",
      "Zod",
    ],
    features: [
      "Interactive drag-and-drop Kanban board for intuitive task state transitions",
      "Comprehensive task management with priority tags, deadlines, and assignment tracking",
      "Team workspaces with role-based member management and collaboration",
      "Productivity analytics dashboard visualizing task completion velocity with Recharts",
      "Global Command Search modal and notification alerts for approaching deadlines",
    ],
    githubUrl: "",
    liveUrl: "",
  },
];
