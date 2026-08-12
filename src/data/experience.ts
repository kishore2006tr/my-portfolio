export interface ExperienceItem {
  id: string;
  category: "EDUCATION" | "EXPERIENCE" | "INTERNSHIPS" | "CERTIFICATIONS" | "ACHIEVEMENTS";
  title: string;
  organization: string;
  location?: string;
  period: string;
  description: string;
  highlights?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-01",
    category: "EDUCATION",
    title: "Bachelor of Technology in Computer Science & Engineering",
    organization: "Specialization in Artificial Intelligence & Machine Learning",
    period: "2022 - 2026",
    description: "Focusing on Deep Learning, Computer Vision, Distributed Systems, Database Management Systems, and Data Structures & Algorithms.",
    highlights: [
      "Department Rank Top 5%",
      "Lead Organizer of Annual AI & Robotics Symposium",
      "Published research paper on low-latency vision inference"
    ]
  },
  {
    id: "exp-02",
    category: "INTERNSHIPS",
    title: "AI Systems & Full-Stack Development Intern",
    organization: "NexusTech Innovation Labs",
    period: "Summer 2025",
    description: "Built high-throughput RAG document ingestion pipelines and microservice APIs connecting vector databases with Llama 3 LLM models.",
    highlights: [
      "Reduced vector retrieval query latency by 35%",
      "Architected multi-tenant role-gated FastAPI service"
    ]
  },
  {
    id: "exp-03",
    category: "EXPERIENCE",
    title: "Lead Developer & Quantitative Analyst",
    organization: "Algorithmic Analytics Project Group",
    period: "2024 - Present",
    description: "Designed low-latency financial streaming pipelines and automated risk evaluation dashboards streaming 100k ticks/second.",
    highlights: [
      "Integrated Rust SIMD deserializers for nanosecond parsing",
      "Engineered WebGL order book visualization canvas"
    ]
  },
  {
    id: "exp-04",
    category: "CERTIFICATIONS",
    title: "AWS Certified Solutions Architect & Machine Learning Specialist",
    organization: "Amazon Web Services",
    period: "2025",
    description: "Validated expertise in cloud infrastructure, GPU node auto-scaling, distributed training, and microservice deployments."
  },
  {
    id: "exp-05",
    category: "ACHIEVEMENTS",
    title: "1st Place Winner — National AI & Full-Stack Hackathon",
    organization: "National Tech Summit 2025",
    period: "2025",
    description: "Awarded top place among 150+ teams for building an edge-assisted pathology diagnostic scanner with sub-50ms DICOM inference."
  }
];
