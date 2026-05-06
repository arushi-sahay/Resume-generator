import { ResumeData } from "@/lib/resume-schema";

export const sampleData: Record<string, ResumeData> = {
  "ai-ml": {
    fullName: "Alex Chen",
    email: "alex.chen@example.com",
    phone: "(555) 123-4567",
    linkedin: "https://linkedin.com/in/alexchen",
    portfolio: "https://github.com/alexchen",
    education: [
      {
        id: "edu-1",
        institution: "University of Technology",
        degree: "B.S. Computer Science, Specialization in AI",
        startDate: "Sep 2020",
        endDate: "May 2024",
        gpa: "3.8/4.0"
      }
    ],
    skills: [
      { id: "sk-1", name: "Python" },
      { id: "sk-2", name: "PyTorch" },
      { id: "sk-3", name: "Scikit-Learn" },
      { id: "sk-4", name: "SQL" },
      { id: "sk-5", name: "Machine Learning" }
    ],
    projects: [
      {
        id: "proj-1",
        title: "Predictive Analytics Dashboard",
        description: "Built a web dashboard to visualize predictions from a random forest model. Processed and cleaned a dataset of 100K records to improve model training time by 20%.",
        technologies: "Python, Scikit-Learn, Streamlit",
        link: "https://github.com/alexchen/dashboard"
      }
    ],
    experience: [
      {
        id: "exp-1",
        company: "DataMinds Tech",
        position: "Data Science Intern",
        startDate: "Jun 2023",
        endDate: "Aug 2023",
        description: "Developed a machine learning model to predict customer churn with 85% accuracy. Collaborated with cross-functional teams to integrate AI solutions into the main application."
      }
    ],
    certifications: [
      {
        id: "cert-1",
        name: "Deep Learning Specialization",
        issuer: "Coursera",
        date: "Dec 2023"
      }
    ],
    achievements: [
      {
        id: "ach-1",
        description: "1st Place in University Hackathon 2023 (AI Track)"
      }
    ]
  },
  "software-engineering": {
    fullName: "Jordan Taylor",
    email: "jordan.t@example.com",
    phone: "(555) 987-6543",
    linkedin: "https://linkedin.com/in/jordantaylor",
    portfolio: "https://jordantaylor.dev",
    education: [
      {
        id: "edu-1",
        institution: "State University",
        degree: "B.S. Software Engineering",
        startDate: "Sep 2019",
        endDate: "May 2023",
        gpa: "3.9/4.0"
      }
    ],
    skills: [
      { id: "sk-1", name: "JavaScript" },
      { id: "sk-2", name: "TypeScript" },
      { id: "sk-3", name: "React" },
      { id: "sk-4", name: "Node.js" },
      { id: "sk-5", name: "PostgreSQL" }
    ],
    projects: [
      {
        id: "proj-1",
        title: "Task Management API",
        description: "RESTful API for managing tasks and projects with role-based access control. Wrote unit and integration tests achieving 90% code coverage.",
        technologies: "TypeScript, Express, PostgreSQL",
        link: "https://github.com/jordantaylor/task-api"
      }
    ],
    experience: [
      {
        id: "exp-1",
        company: "TechNova Solutions",
        position: "Frontend Developer Intern",
        startDate: "May 2022",
        endDate: "Aug 2022",
        description: "Developed and maintained responsive user interfaces using React and Tailwind CSS. Optimized database queries to reduce load times by 15%."
      }
    ],
    certifications: [
      {
        id: "cert-1",
        name: "AWS Certified Developer - Associate",
        issuer: "Amazon Web Services",
        date: "Jan 2024"
      }
    ],
    achievements: [
      {
        id: "ach-1",
        description: "Dean's List 2020-2023"
      }
    ]
  },
  "marketing": {
    fullName: "Casey Morgan",
    email: "casey.m@example.com",
    phone: "(555) 234-5678",
    linkedin: "https://linkedin.com/in/caseymorgan",
    portfolio: "",
    education: [
      {
        id: "edu-1",
        institution: "Global Business School",
        degree: "B.A. Marketing",
        startDate: "Sep 2020",
        endDate: "May 2024",
        gpa: "3.7/4.0"
      }
    ],
    skills: [
      { id: "sk-1", name: "SEO/SEM" },
      { id: "sk-2", name: "Content Strategy" },
      { id: "sk-3", name: "Google Analytics" },
      { id: "sk-4", name: "Email Marketing" }
    ],
    projects: [
      {
        id: "proj-1",
        title: "Social Media Growth Campaign",
        description: "Designed and executed a 30-day content calendar for a local business.",
        technologies: "Canva, Buffer",
        link: ""
      }
    ],
    experience: [
      {
        id: "exp-1",
        company: "Creative Spark Agency",
        position: "Marketing Intern",
        startDate: "Jun 2023",
        endDate: "Aug 2023",
        description: "Managed social media campaigns resulting in a 25% increase in follower engagement. Created SEO-optimized content that increased organic blog traffic by 15%."
      }
    ],
    certifications: [
      {
        id: "cert-1",
        name: "Google Analytics Certification",
        issuer: "Google",
        date: "Nov 2023"
      }
    ],
    achievements: [
      {
        id: "ach-1",
        description: "Outstanding Marketing Student Award 2024"
      }
    ]
  },
  "law-internship": {
    fullName: "Jamie Lee",
    email: "jamie.lee@example.com",
    phone: "(555) 345-6789",
    linkedin: "https://linkedin.com/in/jamielee",
    portfolio: "",
    education: [
      {
        id: "edu-1",
        institution: "State Law School",
        degree: "Juris Doctor (J.D.)",
        startDate: "Aug 2022",
        endDate: "May 2025",
        gpa: "3.6/4.0"
      }
    ],
    skills: [
      { id: "sk-1", name: "Legal Research" },
      { id: "sk-2", name: "Contract Drafting" },
      { id: "sk-3", name: "Case Analysis" },
      { id: "sk-4", name: "Westlaw" }
    ],
    projects: [
      {
        id: "proj-1",
        title: "Mock Trial Competition",
        description: "Compiled research and drafted opening statements. Analyzed contracts to identify potential liabilities.",
        technologies: "Westlaw, Legal Writing",
        link: ""
      }
    ],
    experience: [
      {
        id: "exp-1",
        company: "Smith & Associates Law Firm",
        position: "Legal Summer Intern",
        startDate: "May 2023",
        endDate: "Aug 2023",
        description: "Conducted comprehensive legal research using Westlaw to support pending litigation. Drafted and reviewed legal memoranda and briefs for senior partners."
      }
    ],
    certifications: [],
    achievements: [
      {
        id: "ach-1",
        description: "Moot Court Finalist 2023"
      }
    ]
  },
  "ui-ux": {
    fullName: "Riley Quinn",
    email: "riley.q@example.com",
    phone: "(555) 456-7890",
    linkedin: "https://linkedin.com/in/rileyquinn",
    portfolio: "https://rileyquinn.design",
    education: [
      {
        id: "edu-1",
        institution: "Design Institute",
        degree: "B.F.A. Interaction Design",
        startDate: "Sep 2019",
        endDate: "May 2023",
        gpa: "3.9/4.0"
      }
    ],
    skills: [
      { id: "sk-1", name: "Figma" },
      { id: "sk-2", name: "Wireframing" },
      { id: "sk-3", name: "User Research" },
      { id: "sk-4", name: "Prototyping" }
    ],
    projects: [
      {
        id: "proj-1",
        title: "Mobile App Redesign",
        description: "Redesigned the onboarding flow of a fitness app to improve user retention.",
        technologies: "Figma, User Testing",
        link: "https://rileyquinn.design/fitness-app"
      }
    ],
    experience: [
      {
        id: "exp-1",
        company: "Pixel Perfect Studio",
        position: "Product Design Intern",
        startDate: "Jun 2022",
        endDate: "Aug 2022",
        description: "Designed intuitive user interfaces for web and mobile applications using Figma. Conducted user research and usability testing to validate design decisions."
      }
    ],
    certifications: [
      {
        id: "cert-1",
        name: "Google UX Design Professional Certificate",
        issuer: "Coursera",
        date: "Oct 2022"
      }
    ],
    achievements: [
      {
        id: "ach-1",
        description: "Best UI Design - Hackathon 2022"
      }
    ]
  }
};
