// Single source of truth for all site copy. Components read from `content` below —
// no section component should hardcode text, links, or project data directly.

export interface SkillItem {
  name: string;
  icon: string; // react-icons component name (see src/components/Icon.tsx lookup)
  category: 'Languages' | 'Frameworks & Web' | 'AI/ML' | 'Libraries' | 'Databases' | 'Tools';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string; // public/images path
  year: string;
  liveUrl?: string;
  repoUrl?: string;
  adminUrl?: string;
  featured?: boolean;
}

export interface CareerEntry {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  certificateUrl?: string;
}

export interface EducationEntry {
  institution: string;
  location: string;
  degree: string;
  period: string;
  score: string;
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
  url?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  period: string;
  url?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface SiteContent {
  identity: {
    name: string;
    title: string;
    tagline: string;
    location: string;
    phone: string;
    resumeUrl: string;
  };
  about: {
    heading: string;
    bio: string[];
    profileImage?: string;
  };
  services: { title: string; description: string; icon: string }[];
  skills: SkillItem[];
  projects: Project[];
  career: CareerEntry[];
  education: EducationEntry[];
  achievements: Achievement[];
  certifications: Certification[];
  social: SocialLink[];
  contact: {
    email: string;
    heading: string;
    subheading: string;
  };
}

export const content: SiteContent = {
  identity: {
    name: 'Harshitha Palaram',
    title: 'AI/ML Engineer & Full-Stack Developer',
    tagline:
      'Building intelligent systems — from satellite-imagery deep learning to GenAI-powered apps.',
    location: 'Chennai, India',
    phone: '+91 83104 19482',
    resumeUrl: '/resume.pdf', // TODO: drop the real resume PDF into public/resume.pdf
  },

  about: {
    heading: 'About Me',
    bio: [
      "I'm a B.Tech student in Artificial Intelligence and Data Science at Shiv Nadar University, Chennai (2023–2027), building end-to-end machine learning and full-stack systems — from deep learning pipelines for satellite imagery to GenAI-powered web apps.",
      'As a Machine Learning Intern at Cognifyz IT Solutions, I engineered ML pipelines for restaurant rating prediction, recommendation systems, and location analytics, optimizing regression models to 95.35% R² using Random Forest, XGBoost, and CatBoost.',
      "My project work spans computer vision (Top 5 finalist, GLOFeagles'26 glacial lake flood detection; Top 7 global rank, NTIRE 2026 CVPR rip current challenge among 900+ submissions), GenAI/RAG systems, explainable AI, and full-stack web development.",
    ],
  },

  services: [
    {
      title: 'Machine Learning & Computer Vision',
      description:
        'Deep learning pipelines for classification, segmentation, and detection using EfficientNet, U-Net++, and YOLOv8.',
      icon: 'FaBrain',
    },
    {
      title: 'GenAI & RAG Systems',
      description:
        'Retrieval-augmented generation apps with LangChain, Hugging Face, and vector-based semantic search.',
      icon: 'FaRobot',
    },
    {
      title: 'Full-Stack Web Development',
      description:
        'End-to-end web platforms with React, Node.js, Express, and MongoDB — authentication, APIs, and deployment.',
      icon: 'FaCode',
    },
    {
      title: 'Data Analysis & Explainable AI',
      description:
        'Predictive modeling, Monte Carlo simulation, and interpretability with SHAP and DBSCAN clustering.',
      icon: 'FaChartLine',
    },
  ],

  skills: [
    { name: 'Python', icon: 'SiPython', category: 'Languages' },
    { name: 'Java', icon: 'SiOpenjdk', category: 'Languages' },
    { name: 'C', icon: 'SiC', category: 'Languages' },
    { name: 'JavaScript (ES6+)', icon: 'SiJavascript', category: 'Languages' },
    { name: 'SQL', icon: 'SiMysql', category: 'Languages' },
    { name: 'HTML/CSS', icon: 'SiHtml5', category: 'Languages' },

    { name: 'React.js', icon: 'SiReact', category: 'Frameworks & Web' },
    { name: 'Node.js', icon: 'SiNodedotjs', category: 'Frameworks & Web' },
    { name: 'Express.js', icon: 'SiExpress', category: 'Frameworks & Web' },
    { name: 'FastAPI', icon: 'SiFastapi', category: 'Frameworks & Web' },
    { name: 'REST APIs', icon: 'SiSwagger', category: 'Frameworks & Web' },
    { name: 'JWT', icon: 'SiJsonwebtokens', category: 'Frameworks & Web' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss', category: 'Frameworks & Web' },

    { name: 'PyTorch', icon: 'SiPytorch', category: 'AI/ML' },
    { name: 'TensorFlow', icon: 'SiTensorflow', category: 'AI/ML' },
    { name: 'Scikit-learn', icon: 'SiScikitlearn', category: 'AI/ML' },
    { name: 'OpenCV', icon: 'SiOpencv', category: 'AI/ML' },
    { name: 'YOLOv8', icon: 'FaEye', category: 'AI/ML' },
    { name: 'Hugging Face Transformers', icon: 'SiHuggingface', category: 'AI/ML' },
    { name: 'Sentence Transformers', icon: 'FaProjectDiagram', category: 'AI/ML' },
    { name: 'RAG', icon: 'FaSearch', category: 'AI/ML' },
    { name: 'Semantic Segmentation', icon: 'FaLayerGroup', category: 'AI/ML' },

    { name: 'NumPy', icon: 'SiNumpy', category: 'Libraries' },
    { name: 'Pandas', icon: 'SiPandas', category: 'Libraries' },
    { name: 'Matplotlib', icon: 'SiPlotly', category: 'Libraries' },
    { name: 'NLTK', icon: 'FaLanguage', category: 'Libraries' },

    { name: 'MongoDB', icon: 'SiMongodb', category: 'Databases' },
    { name: 'MySQL', icon: 'SiMysql', category: 'Databases' },

    { name: 'Git', icon: 'SiGit', category: 'Tools' },
    { name: 'GitHub', icon: 'SiGithub', category: 'Tools' },
    { name: 'Docker', icon: 'SiDocker', category: 'Tools' },
    { name: 'Linux', icon: 'SiLinux', category: 'Tools' },
    { name: 'Jupyter Notebook', icon: 'SiJupyter', category: 'Tools' },
    { name: 'VS Code', icon: 'SiVisualstudiocode', category: 'Tools' },
    { name: 'Vercel', icon: 'SiVercel', category: 'Tools' },
    { name: 'Render', icon: 'SiRender', category: 'Tools' },
    { name: 'Streamlit', icon: 'SiStreamlit', category: 'Tools' },
  ],

  projects: [
    {
      id: 'glofeagles-2026',
      title: "Glacial Lake Outburst Flood Detection (GLOFeagles'26)",
      description:
        'A dual-task deep learning pipeline using EfficientNet-B4 for 6-class classification and U-Net++ for semantic segmentation of glacial lakes from satellite imagery — achieving 0.6260 Mean IoU, 0.6920 Dice/F1, and 0.7656 Precision on 2,220 image-mask pairs using hybrid Focal + Tversky Loss, mixed precision training (AMP), and Albumentations. Top 5 finalist at NCVPRIPG 2026, presented at LNMIIT, Jaipur.',
      tech: ['U-Net++', 'EfficientNet-B4', 'PyTorch', 'Albumentations'],
      image: '/images/project-glofeagles.png',
      year: '2026',
      repoUrl: 'https://github.com/sathwik324/GlacioX_GLOF_Challenge',
      featured: true,
    },
    {
      id: 'ntire-rip-current-2026',
      title: 'NTIRE 2026 Rip Current Detection & Segmentation Challenge',
      description:
        'A YOLOv8-based computer vision pipeline for rip current detection using segmentation, contour extraction, morphological operations, and post-processing for accurate localization, with multi-scale inference and test-time augmentation (TTA) — Top 7 global ranking among 900+ submissions at the NTIRE CVPR 2026 Workshop Challenge.',
      tech: ['PyTorch', 'YOLOv8', 'OpenCV'],
      image: '/images/project-rip-current.png',
      year: '2026',
      repoUrl: 'https://github.com/H4rshitha/Rip-Current-Detection',
      featured: true,
    },
    {
      id: 'finascend',
      title: 'FinAscend: AI-Powered Financial Decision System',
      description:
        'An AI-powered financial analytics platform integrating OCR and API pipelines to process invoices and financial statements for small businesses, with Monte Carlo simulations, probabilistic risk forecasting, and Explainable AI techniques to predict liquidity, runway, and bankruptcy risk. Hackathon finalist at SNUC Hacks’26.',
      tech: ['Monte Carlo Simulation', 'Explainable AI', 'OCR'],
      image: '/images/project-finascend.png',
      year: '2026',
      repoUrl: 'https://github.com/Pradeepaa001/fin-ascent',
      featured: true,
    },
    {
      id: 'learn-lynx',
      title: 'Learn-Lynx: GenAI-Powered Study Partner',
      description:
        'A Retrieval-Augmented Generation (RAG) study assistant using LangChain, Sentence Transformers, and Hugging Face for semantic search, summarization, and question answering, delivered as an interactive Streamlit app with personalized learning plans and real-time AI-assisted study support.',
      tech: ['LangChain', 'Hugging Face', 'RAG', 'Streamlit'],
      image: '/images/project-learn-lynx.png',
      year: '2025',
      repoUrl: 'https://github.com/H4rshitha/Learn-Lynx-GenAI-Study-Assistant',
      featured: true,
    },
    {
      id: 'food-delivery',
      title: 'Food Delivery Web Application',
      description:
        'A full-stack food ordering platform using React.js, Node.js, Express.js, and MongoDB featuring authentication, cart management, and order processing, with JWT authentication, role-based access control, and RESTful APIs deployed on Vercel and Render.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      image: '/images/project-food-delivery.png',
      year: '2025',
      repoUrl: 'https://github.com/H4rshitha/food-del',
      liveUrl: 'https://food-del-murex-six.vercel.app/',
      adminUrl: 'https://food-del-admin-hazel.vercel.app/',
      featured: true,
    },
  ],

  career: [
    {
      role: 'Machine Learning Intern',
      organization: 'Cognifyz IT Solutions Pvt. Ltd.',
      location: 'Remote',
      period: 'Apr 2026 – May 2026',
      description: [
        'Engineered and evaluated end-to-end machine learning pipelines for restaurant rating prediction, recommendation systems, cuisine classification, and location analytics using Python, Pandas, NumPy, Scikit-learn, TF-IDF, and cosine similarity.',
        'Optimized regression models using Random Forest, XGBoost, and CatBoost, achieving 95.35% R² with 0.33 RMSE; leveraged DBSCAN clustering and SHAP explainability to extract actionable insights and improve model interpretability.',
      ],
      certificateUrl: 'https://drive.google.com/file/d/19Jnc3It1br9hTEznDRrb0r6Wg85VJ9hN/view?usp=sharing',
    },
  ],

  education: [
    {
      institution: 'Shiv Nadar University',
      location: 'Chennai',
      degree: 'B.Tech in Artificial Intelligence and Data Science',
      period: 'Aug 2023 – May 2027',
      score: 'CGPA: 7.713',
    },
    {
      institution: 'FIITJEE Junior College',
      location: 'Hyderabad',
      degree: 'Intermediate (Class XII)',
      period: 'May 2021 – May 2023',
      score: '95.4%',
    },
    {
      institution: 'Royale Concorde International School',
      location: 'Bengaluru',
      degree: 'Class X (CBSE)',
      period: 'Till May 2021',
      score: '96.6%',
    },
  ],

  achievements: [
    {
      title: "Top 5 Finalist — GLOFeagles Challenge (NCVPRIPG 2026)",
      description:
        'Selected among the Top 5 teams and invited to present the solution at the NCVPRIPG 2026 finale in LNMIIT, Jaipur.',
      year: '2026',
    },
    {
      title: 'Top 7 Global Rank — NTIRE 2026 Rip Current Detection & Segmentation Challenge (CVPR)',
      description: 'Secured 7th place among 900+ global submissions in an international computer vision challenge.',
      year: '2026',
      url: 'https://www.codabench.org/competitions/12730/#/results-tab',
    },
    {
      title: "Finalist — SNUC Hacks'26 FinTech Hackathon",
      description: 'Presented FinAscend, an AI-powered financial decision support system, and advanced to the hackathon finals.',
      year: '2026',
    },
  ],

  certifications: [
    {
      name: 'Affective Computing',
      issuer: 'NPTEL',
      period: 'Jan 2026 – Apr 2026',
      url: 'https://drive.google.com/file/d/1LjE9Xx123oKRWybuoTQr_dT-rHtWnOhV/view?usp=sharing',
    },
    {
      name: 'Programming in Java',
      issuer: 'NPTEL',
      period: 'Jul 2025 – Oct 2025',
      url: 'https://drive.google.com/file/d/161d07655xKWlj3nm2EuattVu9Zrj87Jy/view?usp=sharing',
    },
    {
      name: 'Machine Learning Specialization',
      issuer: 'DeepLearning.AI',
      period: 'Feb 2025 – Apr 2025',
      url: 'https://drive.google.com/file/d/11KM7Q-gcr6RudOmmaNWrqm8yhFeaZSfE/view?usp=sharing',
    },
  ],

  social: [
    { label: 'GitHub', url: 'https://github.com/H4rshitha', icon: 'FaGithub' },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/harshitha-palaram-aa42a4348/',
      icon: 'FaLinkedin',
    },
    { label: 'Email', url: 'mailto:harshithapalaram09@gmail.com', icon: 'FaEnvelope' },
  ],

  contact: {
    email: 'harshithapalaram09@gmail.com',
    heading: "Let's Build Something Together",
    subheading:
      "Have a project in mind or just want to connect? I'm always open to discussing AI/ML research, full-stack projects, or new opportunities.",
  },
};
