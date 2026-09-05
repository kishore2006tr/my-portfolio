export interface SkillItem {
  name: string;
  level: "ADVANCED" | "INTERMEDIATE" | "FAMILIAR";
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export const skillsCategories: SkillCategory[] = [
  {
    title: "AI / ML",
    skills: [
      { name: "Python", level: "ADVANCED" },
      { name: "Scikit-Learn", level: "ADVANCED" },
      { name: "TensorFlow", level: "INTERMEDIATE" },
      { name: "PyTorch", level: "ADVANCED" },
      { name: "Pandas & NumPy", level: "ADVANCED" },
      { name: "OpenCV", level: "INTERMEDIATE" },
      { name: "NLP & Transformers", level: "ADVANCED" },
      { name: "YOLOv8 & Vision", level: "ADVANCED" }
    ]
  },
  {
    title: "FULL-STACK",
    skills: [
      { name: "JavaScript (ES6+)", level: "ADVANCED" },
      { name: "TypeScript", level: "ADVANCED" },
      { name: "React / Next.js", level: "ADVANCED" },
      { name: "HTML5 / CSS3 / Tailwind", level: "ADVANCED" },
      { name: "Node.js / Express", level: "ADVANCED" },
      { name: "FastAPI / Python", level: "ADVANCED" },
      { name: "REST APIs & WebSockets", level: "ADVANCED" },
      { name: "gRPC & Microservices", level: "INTERMEDIATE" }
    ]
  },
  {
    title: "DATABASE & VECTOR STORES",
    skills: [
      { name: "PostgreSQL / pgvector", level: "ADVANCED" },
      { name: "MySQL", level: "ADVANCED" },
      { name: "MongoDB", level: "INTERMEDIATE" },
      { name: "Redis", level: "ADVANCED" },
      { name: "Pinecone / Qdrant", level: "INTERMEDIATE" },
      { name: "ClickHouse / Timescale", level: "INTERMEDIATE" }
    ]
  },
  {
    title: "DATA ANALYTICS & VISUALIZATION",
    skills: [
      { name: "Power BI", level: "ADVANCED" },
      { name: "Tableau", level: "INTERMEDIATE" },
      { name: "Advanced Excel", level: "ADVANCED" },
      { name: "Matplotlib & Seaborn", level: "ADVANCED" },
      { name: "Plotly & D3.js", level: "INTERMEDIATE" },
      { name: "SQL Analytics", level: "ADVANCED" }
    ]
  },
  {
    title: "CLOUD & DEVOPS",
    skills: [
      { name: "AWS", level: "INTERMEDIATE" },
      { name: "EC2", level: "INTERMEDIATE" },
      { name: "S3", level: "INTERMEDIATE" },
      { name: "IAM", level: "INTERMEDIATE" },
      { name: "Lambda", level: "INTERMEDIATE" },
      { name: "Cloud Deployment", level: "INTERMEDIATE" },
      { name: "Serverless Architecture", level: "INTERMEDIATE" },
      { name: "CI/CD Fundamentals", level: "INTERMEDIATE" }
    ]
  },
  {
    title: "DEV TOOLS",
    skills: [
      { name: "Git & GitHub", level: "ADVANCED" },
      { name: "Docker", level: "INTERMEDIATE" },
      { name: "Linux / Bash", level: "ADVANCED" },
      { name: "Postman", level: "ADVANCED" }
    ]
  }
];
