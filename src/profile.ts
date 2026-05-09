export type Profile = {
  name: string;
  displayName: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  photo: { src: string; alt: string };
  heroBg: string;
  cvHref: string;
  links: Array<{ label: string; href: string; icon?: string }>;
  researchInterests: string[];
  publications: Array<{
    title: string;
    authors: string;
    abstract?: string;
    image?: string;
    links: Array<{ label: string; href: string }>;
  }>;
  academicExperience: Array<{
    role: string;
    company: string;
    location: string;
    period: string;
    image?: string;
    bullets: string[];
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
    major?: string;
    minor?: string;
  }>;
  socialActivity: Array<{
    org: string;
    role: string;
    description: string;
    image?: string;
  }>;
  footerNote: string;
};

export const profile: Profile = {
  name: "Qingyang Jin",
  displayName: "Qingyang",
  tagline:
    "Industrial Design (major) & Computer Science (minor) | Shanghai Jiao Tong University Undergraduate (2024 - 2028)",
  bio: "I am an industrial design student interested in the paradigm shift in human-computer interaction in the AI era, including agent-native software and smart hardware. I am passionate about exploring cutting-edge AI tools and enjoy trying them out, providing feedback, and making open-source contributions in my workflow. I am very happy to collaborate with researchers and developers from across disciplines.",
  email: "qingyang.jin@outlook.com",
  location: "Shanghai, China",
  photo: { src: "/photo.png", alt: "Portrait photo of Qingyang Jin" },
  heroBg: "/boat.jpg",
  cvHref: "/cv%20.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/DonkeyKing01" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/qingyang-jin-9397783a8/"
    }
  ],
  researchInterests: [
    "HCI",
    "Engineering Design",
    "Multi-Agent Systems",
    "UI/UX Design"
  ],
  publications: [
    {
      title:
        "Mapping consumer voice into engineering insight  a structured language model-driven design support framework for electric vehicles",
      authors: "Qingyang Jin, Luyao Wang, Wenyu Yuan & Danni Chang",
      abstract:
        "This paper proposes a structured language model-driven design support framework for translating consumer voice into engineering insight in electric vehicle design. By using language models to interpret user-generated feedback, the study maps consumer needs and perceptions onto design-relevant attributes, supporting a more systematic connection between market demand and engineering decision-making. The framework demonstrates how AI-assisted analysis can help designers identify actionable product improvement opportunities in the electric vehicle context.",
      image: "/Academic.png",
      links: [
        {
          label: "PDF",
          href: "/Mapping consumer voice into engineering insight  a structured language model-driven design support framework for electric vehicles.pdf"
        },
        {
          label: "Publication",
          href: "https://www.tandfonline.com/doi/full/10.1080/09544828.2026.2639933"
        }
      ]
    }
  ],
  academicExperience: [
    {
      role: "PRP Research Project Member",
      company: "Shanghai Jiao Tong University",
      location: "Shanghai, China",
      period: "Feb 2025 - Mar 2026",
      image: "/Academic.png",
      bullets: [
        "Exploration of generative AI-driven engineering design based on principles of tool usability, efficiency improvement, and conversational interaction.",
        "Developed an end-to-end research prototype, encompassing data processing, user and product modeling, and interactive applications.",
        "Co-authored research papers and successfully published in academic journals"
      ]
    },
    {
      role: "Undergraduate Research Assistant",
      company: "Shanghai Jiao Tong University",
      location: "Shanghai, China",
      period: "Jun 2025 - Nov 2025",
      bullets: [
        "Mechanical structure design and optimization of dynamic spinal orthotics from line contact to surface contact.",
        "Data collection via MMG and IMU wearable devices.",
        "Participated in scoliosis calibration and data analysis."
      ]
    },
    {
      role: "Undergraduate Project Assistant",
      company: "Shanghai Jiao Tong University & COMAC Flight Test Center",
      location: "Shanghai, China",
      period: "Jul 2025 - Dec 2025",
      bullets: [
        "CAD model refinement and engineering integration.",
        "Improved standard documentation for design review proposals."
      ]
    }
  ],
  skillsAndProjects: [
    {
      title: "User Study",
      description:
        "Conducting design research and user studies with LLMs, NLP and Agent workflows.",
      tags: ["User Study", "LLMs", "NLP", "Workflow"],
      links: [
        {
          label: "Publication",
          href: "https://www.tandfonline.com/doi/full/10.1080/09544828.2026.2639933"
        },
        {
          label: "Project repo",
          href: "https://github.com/DonkeyKing01/nev-product-search-kit"
        }
      ]
    },
    {
      title: "Agents & AI Tools",
      description:
        "The software and hardware product design of the AI ​​agent native takes into account both business needs and user experience.",
      tags: ["Agents", "AI Native", "Innovation Product", "Skills"],
      links: [{ label: "Project repo", href: "https://github.com/DonkeyKing01/BriefyPet" }]
    },
    {
      title: "Frontend Design",
      description: "Exploring front-end design skills that emphasize aesthetic taste, interactive experience, and information hierarchy.",
      tags: ["UI", "Design", "Frontend", "Figma", "Information hierarchy"],
      links: [
        {
          label: "Web demo",
          href: "https://donkeyking01.github.io/mushroom-app/"
        },
        {
          label: "Skill repo",
          href: "https://github.com/DonkeyKing01/tasteful-ui-skill"
        }
      ]
    },
    {
      title: "CAD & Mechanical Design",
      description: "A complete design chain from sketch concept and CAD model to manufacturing process.",
      tags: ["Ergonomics", "Mechanics", "Simulation", "CAD", "Manufacturing"],
      links: [{ label: "Model showcase", href: "/model.png" }]
    }
  ],
  courseCategories: [
    {
      category: "Mathematics & Computer Science",
      courses: [
        { name: "Calculus", note: "A+" },
        { name: "Linear Algebra", note: "A+" },
        { name: "Probability and Mathematical Statistics", note: "A" },
        { name: "Discrete Mathematics", note: "Studying" },
        { name: "Computer Network", note: "Studying" }
      ]
    },
    {
      category: "Design & HCI",
      courses: [
        { name: "Product Design", note: "A+" },
        { name: "Product Information Architecture", note: "A+" },
        { name: "Creative Modeling and Design", note: "A+" }
      ]
    }
  ],
  education: [
    {
      school: "School of Design, Shanghai Jiao Tong University",
      major: "Industrial Design",
      minor: "Computer Science",
      degree: "Undergraduate",
      period: "2024 - 2028"
    }
  ],
  socialActivity: [
    {
      org: "Shu Ping Alumni Association",
      role: "Volunteer - photography & IT maintenance",
      description:
        "Responsible for taking photos during the summer camp activities and maintaining the shuping query system with Kangning Yuan.",
      image: "/Shuping.jpg"
    }
  ],
  footerNote: "Updated May 2026"
};
