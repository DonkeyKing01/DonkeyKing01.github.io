export type Profile = {
  name: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  photo: {
    src: string;
    alt: string;
  };
  cvHref: string;
  links: Array<{ label: string; href: string }>;
  researchInterests: string[];
  workingPapers: Array<{
    title: string;
    authors: string;
    links: Array<{ label: string; href: string }>;
  }>;
  skillsAndProjects: Array<{
    title: string;
    description: string;
    tags: string[];
    links: Array<{ label: string; href: string }>;
  }>;
  relevantClasses: Array<{
    name: string;
    detail: string;
    note?: string;
  }>;
  education: Array<{
    school: string;
    degree: string;
    period: string;
  }>;
  hobbies: string[];
  footerNote: string;
};

// Edit this file only. The page renders everything from here.
export const profile: Profile = {
  name: "Yuecheng He",
  tagline: "Economics and Artificial Intelligence | Fudan University Undergraduate (2024–2028)",
  bio:
    "I am an economics student interested in macroeconomics, information systems, and the innovation frontier in recent years (LLMs, agentic science, and related topics). My current work studies how policy interventions can trigger stock-market crises using a global games framework. As an interdisciplinary researcher, I am open to collaborations across FinAI, information systems, and HCI. You can find me on LinkedIn and GitHub, or reach out by email.",
  email: "yche24@m.fudan.edu.cn",
  location: "Shanghai, China",
  photo: {
    src: "/photo.jpg",
    alt: "Portrait photo of Yuecheng He"
  },
  cvHref: "/cv.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/Reed2006" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yuecheng-he-77b260390/" }
  ],
  researchInterests: ["Information systems", "FinAI", "Macrofinance", "Mechanism design", "HCI"],
  workingPapers: [
    {
      title: "Narratives in Crisis and Optimal Manipulation Level for Public Media",
      authors: "Yuecheng He, Punuo Zhang",
      links: [
        { label: "PDF", href: "/narratives_in_crisis.pdf" }
      ]
    }
  ],
  skillsAndProjects: [
    {
      title: "NLP",
      description:
        "Using LLMs (including local LLM workflows), BERT-style models, and related NLP methods in economic research; connected to my working paper on narratives in crisis.",
      tags: ["NLP", "LLMs", "BERT", "Research"],
      links: [{ label: "Working paper", href: "/narratives_in_crisis.pdf" }]
    },
    {
      title: "Data",
      description:
        "Basic data cleaning, collecting, and feature engineering for research datasets; connected to my working paper on narratives in crisis.",
      tags: ["Data", "Cleaning", "Collection", "Feature engineering"],
      links: [{ label: "Working paper", href: "/narratives_in_crisis.pdf" }]
    },
    {
      title: "UI design",
      description: "Taste-driven UI design and notes on layout/typography/components.",
      tags: ["UI", "Design", "Frontend"],
      links: [{ label: "Notes site", href: "https://reed2006.github.io/Awesome_Notes_Site/" }]
    },
    {
      title: "Machine learning",
      description:
        "ML/DL methods for causal inference and applications (asset pricing, mechanism design, and multi-agent frameworks).",
      tags: ["Machine learning", "Deep learning", "Causal inference"],
      links: [
        {
          label: "Project repo",
          href: "https://github.com/Reed2006/-Re-imaging-the-price-trend"
        }
      ]
    }
  ],
  relevantClasses: [
    {
      name: "Calculus",
      detail: "Fudan University",
      note: "A"
    },
    {
      name: "Linear algebra",
      detail: "Fudan University",
      note: "A"
    },
    {
      name: "Probability and Mathematical Statistics",
      detail: "Fudan University",
      note: "A"
    },
    {
      name: "Convex optimization",
      detail: "Fudan University",
      note: "A"
    },
    {
      name: "Data structure",
      detail: "Fudan University",
      note: "A"
    },
    {
      name: "Introduction to computer system (CS15213)",
      detail: "Fudan University",
      note: "A"
    },
    {
      name: "Microeconomics",
      detail: "Fudan University",
      note: "A"
    },
    {
      name: "Macroeconomics",
      detail: "Fudan University",
      note: "A"
    },
    {
      name: "Game theory (H)",
      detail: "Fudan University",
      note: "A+"
    },
    {
      name: "Corporate Finance (H)",
      detail: "Fudan University",
      note: "A+"
    }
  ],
  education: [
    {
      school: "School of Economics, Fudan University",
      degree: "Undergraduate",
      period: "2024-2028"
    }
  ],
  hobbies: ["Ping-pong", "Speech and debate", "Cantonese songs"],
  footerNote: "Updated March 2026"
};
