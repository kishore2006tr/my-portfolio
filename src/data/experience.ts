export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  department?: string;
  scoreLabel: string;
  scoreValue: string;
}

export interface InternshipItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  domain: string;
  points: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "edu-01",
    institution: "S.A. Engineering College",
    degree: "Bachelor of Engineering / Technology",
    department: "Computer Science & Engineering",
    scoreLabel: "CGPA",
    scoreValue: "8.2",
  },
  {
    id: "edu-02",
    institution: "Jaya Jaya Sankara International School",
    degree: "Higher Secondary Education (12th Grade)",
    scoreLabel: "Percentage",
    scoreValue: "81.33%",
  },
];

export const internshipData: InternshipItem[] = [
  {
    id: "intern-01",
    company: "NOVI TECH",
    role: "AI/ML & Data Analysis Intern",
    duration: "3 Months",
    domain: "AI/ML & DATA ANALYSIS",
    points: [
      "Worked on Machine Learning and Artificial Intelligence concepts.",
      "Gained practical experience in Data Analysis.",
      "Worked with data preprocessing, analysis, and machine learning workflows.",
      "Developed hands-on understanding of AI/ML applications and model development.",
    ],
  },
  {
    id: "intern-02",
    company: "Infosys Springboard",
    role: "Machine Learning Intern",
    duration: "2 Months",
    domain: "MACHINE LEARNING",
    points: [
      "Worked on Machine Learning concepts and practical applications.",
      "Developed knowledge of data preprocessing, model building, and evaluation.",
      "Applied machine learning techniques to solve practical problems.",
      "Strengthened understanding of the machine learning development lifecycle.",
    ],
  },
  {
    id: "intern-03",
    company: "CodeAlpha",
    role: "Machine Learning Intern",
    duration: "3 Months",
    domain: "MACHINE LEARNING",
    points: [
      "Worked on practical Machine Learning projects.",
      "Applied machine learning algorithms to real-world datasets.",
      "Performed data preprocessing, analysis, and model development.",
      "Gained hands-on experience in implementing and evaluating ML models.",
    ],
  },
];
