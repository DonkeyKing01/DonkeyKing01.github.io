// ── Types ──────────────────────────────────────────────────────────
export type Profile = {
  name: string;
  displayName: string; // "Reed"
  tagline: string;
  bio: string;
  email: string;
  location: string;
  photo: { src: string; alt: string };
  heroBg: string;
  cvHref: string;
  links: Array<{ label: string; href: string; icon?: string }>;
  researchInterests: string[];

  professionalExperience: Array<{
    role: string;
    company: string;
    companyUrl?: string;
    location: string;
    period: string;
    image?: string;
    bullets: string[];
  }>;

  hackathonExperience: Array<{
    role: string;
    event: string;
    eventUrl?: string;
    award?: string;
    location: string;
    image?: string;
    bullets: string[];
    links: Array<{ label: string; href: string }>;
  }>;

  workingPapers: Array<{
    title: string;
    authors: string;
    abstract?: string;
    links: Array<{ label: string; href: string }>;
  }>;

  skillsAndProjects: Array<{
    title: string;
    description: string;
    tags: string[];
    links: Array<{ label: string; href: string }>;
  }>;

  courseCategories: Array<{
    category: string;
    courses: Array<{ name: string; note?: string }>;
  }>;

  education: Array<{
    school: string;
    degree: string;
    period: string;
  }>;

  leadership: Array<{
    org: string;
    role: string;
    description: string;
    image?: string;
  }>;

  footerNote: string;
};

// ── Data ───────────────────────────────────────────────────────────
export const profile: Profile = {
  name: "Yuecheng He",
  displayName: "Reed",
  tagline:
    "Economics & Artificial Intelligence | Fudan University Undergraduate (2024 - 2028)",
  bio: "I am an economics student interested in macroeconomics, information systems, and the innovation frontier in recent years — LLMs, agentic science, and related topics. My current work studies how policy interventions can trigger stock-market crises using a global games framework. As an interdisciplinary researcher, I am open to collaborations across FinAI, information systems, and HCI.",
  email: "yche24@m.fudan.edu.cn",
  location: "Shanghai, China",
  photo: { src: "/photo.jpg", alt: "Portrait photo of Reed (Yuecheng He)" },
  heroBg: "/Fudan.jpg",
  cvHref: "/cv.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/Reed2006" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yuecheng-he-77b260390/"
    }
  ],
  researchInterests: [
    "Information systems",
    "FinAI",
    "Macrofinance",
    "Mechanism design",
    "HCI"
  ],

  // ── Professional Experience ──────────────────────────────────────
  professionalExperience: [
    {
      role: "Macroeconomics Analyst Intern",
      company: "CITIC",
      companyUrl: "https://www.citic.com/en/",
      location: "Shanghai, China",
      period: "Jun 2025 - Sep 2025",
      bullets: [
        "Using macroeconomics framework to measure the cost of raising a child.",
        "Applying Machine Learning methods and SARIMA model for forecasting China's Offshore RMB Interest Rate Spread.",
        "Utilizing advanced AI (Gemini, Claude) for autonomous Analysis Framework building based on N8N workflow."
      ]
    },
    {
      role: "Undergraduate Research Apprentice",
      company: "Fudan University",
      location: "Shanghai, China",
      period: "2024 - Present",
      image: "/Academic.jpg",
      bullets: [
        "Currently working on quantitative finance — automating data cleaning, data collection, and strategy design.",
        "Completed research on Reforms in SOEs of China, contributing to policy suggestions."
      ]
    }
  ],

  // ── Hackathon ────────────────────────────────────────────────────
  hackathonExperience: [
    {
      role: "Product Manager & UI Designer",
      event: "ModelScope AI Hackathon Tour",
      eventUrl: "https://modelscope.cn/active/ai-hackathon-tour",
      award: "Most Popular Award",
      location: "Nanjing / Shanghai, China",
      image: "/hackathon.jpg",
      bullets: [
        "Designed taste-driven UI utilizing custom skills and hub resources.",
        "Created a product centered on the \"memory\" of one's travel experience.",
        "Built the full product lifecycle: keeping memory via multi-agent system, searching memory by RAG, and sharing memory through community."
      ],
      links: [
        { label: "Demo", href: "https://reed2006.github.io/yuanlu-web-demo/" },
        {
          label: "Introduction",
          href: "https://mp.weixin.qq.com/s/cRq-ADioB4lxpiVcxzi1MQ"
        }
      ]
    }
  ],

  // ── Working Papers ───────────────────────────────────────────────
  workingPapers: [
    {
      title:
        "Narratives in Crisis and Optimal Manipulation Level for Public Media",
      authors: "Yuecheng He, Punuo Zhang",
      links: [{ label: "PDF", href: "/narratives_in_crisis.pdf" }]
    }
  ],

  // ── Skills & Projects ────────────────────────────────────────────
  skillsAndProjects: [
    {
      title: "NLP & LLMs",
      description:
        "LLMs (including local LLM workflows), BERT-style models, and NLP methods applied to economic research.",
      tags: ["NLP", "LLMs", "BERT", "Agentic AI"],
      links: [{ label: "Working paper", href: "/narratives_in_crisis.pdf" }]
    },
    {
      title: "Data Engineering",
      description:
        "Data cleaning, collection, and feature engineering for research datasets.",
      tags: ["Python", "Pandas", "SQL", "Feature engineering"],
      links: [{ label: "Working paper", href: "/narratives_in_crisis.pdf" }]
    },
    {
      title: "UI / Product Design",
      description:
        "Taste-driven UI design with focus on layout, typography, and component systems.",
      tags: ["UI", "Design", "Frontend", "Figma"],
      links: [
        {
          label: "Notes site",
          href: "https://reed2006.github.io/Awesome_Notes_Site/"
        }
      ]
    },
    {
      title: "Machine Learning",
      description:
        "ML/DL methods for causal inference, asset pricing, mechanism design, and multi-agent frameworks.",
      tags: ["ML", "Deep learning", "Causal inference", "Multi-agent"],
      links: [
        {
          label: "Project repo",
          href: "https://github.com/Reed2006/-Re-imaging-the-price-trend"
        }
      ]
    }
  ],

  // ── Courses (categorized) ────────────────────────────────────────
  courseCategories: [
    {
      category: "Mathematics & Statistics",
      courses: [
        { name: "Calculus", note: "A" },
        { name: "Linear Algebra", note: "A" },
        { name: "Probability and Mathematical Statistics", note: "A" },
        { name: "Convex Optimization", note: "A" }
      ]
    },
    {
      category: "Computer Science",
      courses: [
        { name: "Data Structures", note: "A" },
        { name: "Introduction to Computer Systems (CS15213)", note: "A" }
      ]
    },
    {
      category: "Economics & Finance",
      courses: [
        { name: "Microeconomics", note: "A" },
        { name: "Macroeconomics", note: "A" },
        { name: "Game Theory (H)", note: "A+" },
        { name: "Corporate Finance (H)", note: "A+" }
      ]
    }
  ],

  // ── Education ────────────────────────────────────────────────────
  education: [
    {
      school: "School of Economics, Fudan University",
      degree: "Undergraduate",
      period: "2024 - 2028"
    }
  ],

  // ── Leadership ───────────────────────────────────────────────────
  leadership: [
    {
      org: "Fudan Students' Union",
      role: "Organizer — AI Training & Social Responsibility Campaign",
      description:
        "Conducted courses to help freshmen adapt to campus life and encouraged knowledge sharing in AI, Agent systems, and interdisciplinary topics across Fudan.",
      image: "/Leadership.jpg"
    }
  ],

  footerNote: "Updated March 2026"
};
