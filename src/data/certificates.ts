export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: 'AI-ML' | 'CLOUD' | 'PROGRAMMING' | 'INTERNSHIPS';
  date: string;
  description: string;
  image?: string;
  credentialUrl?: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization?: string;
  category: 'Academic' | 'Technical' | 'Hackathon' | 'Project' | 'Internship' | 'Competition';
  year: string;
  description: string;
  link?: string;
}

export interface CertificateStats {
  certificates: string;
  internships: string;
  technologies: string;
  projects: string;
}

export const certificateStats: CertificateStats = {
  certificates: "03+",
  internships: "03",
  technologies: "15+",
  projects: "10+",
};

export const filterCategories = [
  'ALL',
  'AI-ML',
  'CLOUD',
  'PROGRAMMING',
  'INTERNSHIPS',
  'ACHIEVEMENTS',
] as const;

export type FilterCategory = typeof filterCategories[number];

export const certificatesData: Certificate[] = [
  {
    id: "cert-01",
    title: "AI/ML Internship Certificate",
    issuer: "NoviTech",
    category: "AI-ML",
    date: "2024",
    description: "Practical internship program credential covering machine learning algorithms, artificial intelligence concepts, and hands-on data analysis implementations.",
    skills: ["Python", "Machine Learning", "Data Analysis", "AI Workflows"],
    credentialUrl: "", // Editable: Add verification or credential link here
  },
  {
    id: "cert-02",
    title: "AI / Machine Learning Foundations",
    issuer: "Online Certification",
    category: "AI-ML",
    date: "2024",
    description: "Foundational certification covering predictive modeling, classification, regression, model evaluation, and machine learning fundamentals.",
    skills: ["Python", "Scikit-learn", "PyTorch", "Model Evaluation"],
    credentialUrl: "", // Editable: Add verification or credential link here
  },
  {
    id: "cert-03",
    title: "AWS Cloud Certificate",
    issuer: "Amazon Web Services (AWS)",
    category: "CLOUD",
    date: "2024",
    description: "Cloud computing fundamentals including cloud architecture, storage, security, compute services, and deployment principles.",
    skills: ["AWS", "Cloud Architecture", "Cloud Computing"],
    credentialUrl: "", // Editable: Add verification or credential link here
  },
  {
    id: "cert-04",
    title: "Python Programming Certificate",
    issuer: "Programming Learning Platform",
    category: "PROGRAMMING",
    date: "2023",
    description: "Comprehensive certification covering Python syntax, data structures, object-oriented programming, and algorithmic problem solving.",
    skills: ["Python", "OOP", "Data Structures", "Algorithms"],
    credentialUrl: "", // Editable: Add verification or credential link here
  },
  {
    id: "cert-05",
    title: "AI/ML & Data Analysis Internship",
    issuer: "NoviTech",
    category: "INTERNSHIPS",
    date: "3 Months (2024)",
    description: "Hands-on internship working on real-world data preprocessing, exploratory data analysis, and machine learning model development pipelines.",
    skills: ["Python", "Data Preprocessing", "Exploratory Analysis", "ML Workflows"],
    credentialUrl: "",
  },
  {
    id: "cert-06",
    title: "Machine Learning Internship",
    issuer: "CodeAlpha",
    category: "INTERNSHIPS",
    date: "3 Months (2024)",
    description: "Applied machine learning internship implementing algorithms across real-world datasets, evaluating model performance, and data cleaning.",
    skills: ["Python", "Machine Learning", "Model Evaluation"],
    credentialUrl: "",
  },
  {
    id: "cert-07",
    title: "Machine Learning Internship",
    issuer: "Infosys Springboard",
    category: "INTERNSHIPS",
    date: "2 Months (2024)",
    description: "Structured internship program developing practical understanding of the machine learning lifecycle, preprocessing, and model evaluation.",
    skills: ["Machine Learning", "Data Pipelines", "Model Training"],
    credentialUrl: "",
  },
];

export const achievementsData: Achievement[] = [
  {
    id: "achieve-01",
    title: "Academic Standing — 8.2 CGPA",
    organization: "S.A. Engineering College",
    category: "Academic",
    year: "2024",
    description: "Maintained strong academic performance with an 8.2 CGPA in Computer Science and Engineering curriculum.",
  },
  {
    id: "achieve-02",
    title: "Deployed 10+ Technical Projects",
    organization: "Independent Development",
    category: "Project",
    year: "2024",
    description: "Architected and deployed practical projects across AI/ML models, Generative AI & RAG, full-stack web platforms, and data analytics dashboards.",
  },
  {
    id: "achieve-03",
    title: "Completion of 3 Structured Internships",
    organization: "NoviTech • CodeAlpha • Infosys Springboard",
    category: "Internship",
    year: "2024",
    description: "Successfully concluded 3 technical internships in Machine Learning, practical data pipelines, and intelligent systems development.",
  },
  {
    id: "achieve-04",
    title: "Technical Stack Across 15+ Modern Tools",
    organization: "Continuous Engineering",
    category: "Technical",
    year: "2023 – 2024",
    description: "Hands-on development experience across Python, Next.js, React, Node.js, PyTorch, Scikit-learn, SQL, Supabase, and Power BI.",
  },
];
