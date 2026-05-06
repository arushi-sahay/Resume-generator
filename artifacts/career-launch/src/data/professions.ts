import { Cpu, Code, Megaphone, Scale, PenTool } from "lucide-react";

export type Profession = {
  id: string;
  name: string;
  icon: any;
  skills: string[];
  bullets: string[];
  actionVerbs: string[];
  projects: { title: string; description: string; technologies: string }[];
};

export const professions: Record<string, Profession> = {
  "ai-ml": {
    id: "ai-ml",
    name: "AI/ML Student",
    icon: Cpu,
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn", "SQL", "Pandas", "NumPy", "Data Visualization", "Machine Learning", "Deep Learning", "Computer Vision", "NLP"],
    bullets: [
      "Developed a machine learning model to predict X with Y% accuracy using Z.",
      "Processed and cleaned a dataset of X records to improve model training time by Y%.",
      "Implemented a neural network architecture for image classification tasks.",
      "Evaluated model performance using precision, recall, and F1-score metrics.",
      "Collaborated with cross-functional teams to integrate AI solutions into the main application."
    ],
    actionVerbs: ["Developed", "Trained", "Optimized", "Analyzed", "Implemented", "Evaluated", "Designed", "Processed", "Deployed", "Researched"],
    projects: [
      {
        title: "Predictive Analytics Dashboard",
        description: "Built a web dashboard to visualize predictions from a random forest model.",
        technologies: "Python, Scikit-Learn, Streamlit, Pandas"
      },
      {
        title: "Image Classification Tool",
        description: "Created a deep learning application to classify objects in real-time.",
        technologies: "PyTorch, OpenCV, Flask"
      }
    ]
  },
  "software-engineering": {
    id: "software-engineering",
    name: "Software Engineering",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "HTML/CSS", "Git", "REST APIs", "SQL", "MongoDB", "Docker", "AWS", "Java"],
    bullets: [
      "Developed and maintained responsive user interfaces using React and Tailwind CSS.",
      "Designed RESTful APIs using Node.js and Express to serve frontend clients.",
      "Optimized database queries to reduce load times by X%.",
      "Participated in agile ceremonies including sprint planning and daily standups.",
      "Wrote unit and integration tests achieving X% code coverage."
    ],
    actionVerbs: ["Developed", "Built", "Engineered", "Architected", "Refactored", "Optimized", "Integrated", "Tested", "Deployed", "Collaborated"],
    projects: [
      {
        title: "E-Commerce Web App",
        description: "Full-stack e-commerce application with user authentication and payment processing.",
        technologies: "React, Node.js, MongoDB, Stripe"
      },
      {
        title: "Task Management API",
        description: "RESTful API for managing tasks and projects with role-based access control.",
        technologies: "TypeScript, Express, PostgreSQL"
      }
    ]
  },
  "marketing": {
    id: "marketing",
    name: "Marketing",
    icon: Megaphone,
    skills: ["SEO/SEM", "Content Strategy", "Social Media Marketing", "Google Analytics", "Email Marketing", "Copywriting", "Market Research", "Brand Management", "A/B Testing", "HubSpot"],
    bullets: [
      "Managed social media campaigns resulting in a X% increase in follower engagement.",
      "Conducted market research to identify target demographics and optimize ad spend.",
      "Created SEO-optimized content that increased organic blog traffic by X%.",
      "Analyzed campaign performance metrics using Google Analytics to inform strategy.",
      "Coordinated with the design team to produce high-quality promotional materials."
    ],
    actionVerbs: ["Managed", "Launched", "Analyzed", "Optimized", "Coordinated", "Created", "Executed", "Monitored", "Researched", "Promoted"],
    projects: [
      {
        title: "Social Media Growth Campaign",
        description: "Designed and executed a 30-day content calendar for Instagram and Twitter.",
        technologies: "Canva, Buffer, Google Analytics"
      },
      {
        title: "Newsletter Revamp",
        description: "Redesigned weekly newsletter format and improved open rates.",
        technologies: "Mailchimp, HTML/CSS, Copywriting"
      }
    ]
  },
  "law-internship": {
    id: "law-internship",
    name: "Law Internship",
    icon: Scale,
    skills: ["Legal Research", "Contract Drafting", "Case Analysis", "LexisNexis", "Westlaw", "Client Communication", "Document Review", "Litigation Support", "Memo Writing"],
    bullets: [
      "Conducted comprehensive legal research using Westlaw to support pending litigation.",
      "Drafted and reviewed legal memoranda and briefs for senior partners.",
      "Assisted in the preparation of discovery materials and exhibit binders.",
      "Communicated with clients to gather necessary case information and provide updates.",
      "Analyzed contracts to identify potential liabilities and compliance issues."
    ],
    actionVerbs: ["Researched", "Drafted", "Analyzed", "Reviewed", "Assisted", "Communicated", "Prepared", "Negotiated", "Summarized", "Investigated"],
    projects: [
      {
        title: "Mock Trial Preparation",
        description: "Compiled research and drafted opening statements for a university mock trial competition.",
        technologies: "Westlaw, Legal Writing"
      },
      {
        title: "Contract Analysis Report",
        description: "Reviewed 50+ vendor agreements to summarize key terms and termination clauses.",
        technologies: "Document Review, LexisNexis"
      }
    ]
  },
  "ui-ux": {
    id: "ui-ux",
    name: "UI/UX Designer",
    icon: PenTool,
    skills: ["Figma", "Wireframing", "Prototyping", "User Research", "Usability Testing", "Interaction Design", "Adobe Creative Suite", "HTML/CSS", "Information Architecture", "Design Systems"],
    bullets: [
      "Designed intuitive user interfaces for web and mobile applications using Figma.",
      "Conducted user research and usability testing to validate design decisions.",
      "Created wireframes, user flows, and high-fidelity prototypes for client presentations.",
      "Collaborated with developers to ensure accurate implementation of designs.",
      "Developed and maintained a comprehensive design system to ensure brand consistency."
    ],
    actionVerbs: ["Designed", "Prototyped", "Researched", "Collaborated", "Created", "Iterated", "Conducted", "Wireframed", "Presented", "Standardized"],
    projects: [
      {
        title: "Mobile App Redesign",
        description: "Redesigned the onboarding flow of a fitness app to improve user retention.",
        technologies: "Figma, User Testing, Prototyping"
      },
      {
        title: "E-Commerce Design System",
        description: "Created a scalable design system for a retail brand.",
        technologies: "Figma, Component Libraries"
      }
    ]
  }
};

export const professionList = Object.values(professions);
