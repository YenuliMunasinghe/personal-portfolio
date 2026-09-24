export const personalInfo = {
  name: "Yenuli Munasinghe",
  title: "IT & Management Undergraduate",
  tagline: "Software Engineering, Data Science & Business Strategy",
  location: "Kegalle, Sri Lanka",
  bio: "I am a 3rd-year Information Technology & Management undergraduate at the University of Moratuwa with a strong interest in Software Engineering, Data Science, and the Business side. Driven by a multidisciplinary mindset, I build scalable full-stack and mobile solutions, leverage data-driven insights, and understand core business operations. Passionate about clean architecture, system design, and practical innovation, I am currently seeking an opportunity to apply my academic foundation, gain hands-on industry experience, and contribute to high-impact real-world projects.",
  availability: "Open to internships and software engineering opportunities",
  email: "yenulimunasinghe04@gmail.com",
  phone: "+94 707 400 638",
  github: "https://github.com/YenuliMunasinghe",
  linkedin: "https://www.linkedin.com/in/yenuli-munasinghe-6b6327354/",
  medium: "https://medium.com/@yenulimunasinghe04",
  resumeUrl: "/Yenuli_Munasinghe_CV.pdf",
  profileImg: "/profile.jpg",
};

export const skillsData = [
  {
    category: "Programming Languages",
    skills: ["JavaScript (ES6+)", "Python", "Java", "PHP", "C", "HTML5", "CSS3", "SQL"]
  },
  {
    category: "Frontend & Mobile Development",
    skills: ["React Native", "Expo", "React.js", "Vanilla JavaScript"]
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express.js", "PHP (PDO)", "Flask", "RESTful APIs", "WebSockets (Socket.IO)"]
  },
  {
    category: "Databases & Cloud",
    skills: ["MongoDB", "MySQL", "SQLite", "Firebase (Authentication, Hosting)", "ThingSpeak"]
  },
  {
    category: "Core Domains",
    skills: ["Full-Stack Web/Mobile Development", "Geospatial Indexing", "IoT Systems Telemetry", "Data Analytics"]
  }
];

export const projectsData = [
  {
    id: "straycare",
    title: "StrayCare — Stray Animal Reporting & Live Tracking Platform",
    category: "Full Stack & Mobile",
    shortDescription: "A monorepo platform comprising an Expo/React Native mobile app, React web admin dashboard, and Node.js REST API designed to streamline stray animal reporting, real-time map tracking, and emergency rescue workflows.",
    tags: ["React Native", "Expo", "React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Google Maps API", "Expo Push API"],
    contributions: [
      {
        title: "Reporting & Map Visualization",
        detail: "Engineered end-to-end stray animal reporting flows and interactive live map visualization."
      },
      {
        title: "Geospatial Query Optimization",
        detail: "Optimized map query speeds and payload delivery utilizing MongoDB 2DSphere geospatial indexing and field projections."
      },
      {
        title: "Atomic State Machine",
        detail: "Built a sequential rescue state machine backed by atomic database concurrency control to prevent race conditions during case assignments."
      },
      {
        title: "Real-time Dispatch & Alerts",
        detail: "Integrated Socket.IO WebSockets for bi-directional live dispatch updates and Expo Push API for real-time mobile notifications."
      }
    ],
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80",
    liveUrl: "",
    githubUrl: "https://github.com/YenuliMunasinghe",
    featured: true
  },
  {
    id: "myblog",
    title: "MyBlog — Security-Hardened PHP & MySQL Blogging Platform",
    category: "Full Stack Web",
    shortDescription: "A full-stack, security-hardened blogging platform built with PHP (PDO), MySQL, HTML5/CSS3 glassmorphism UI, and Vanilla JS. Features CSRF protection, HMAC SHA-256 remember-me cookies, asynchronous AJAX liking, markdown rendering, and dynamic reading time badges.",
    tags: ["PHP", "MySQL", "PDO", "JavaScript", "AJAX", "CSS Glassmorphism", "Markdown", "CSRF Defense", "HMAC Cookies"],
    contributions: [
      {
        title: "Authentication & Session Hardening",
        detail: "Implemented session fixation defense, password Bcrypt hashing, and tamper-proof HMAC SHA-256 signatures for Remember Me cookies."
      },
      {
        title: "Multi-Layer Security Controls",
        detail: "Enforced mandatory anti-CSRF token verification, PDO prepared statements, binary MIME type upload verification, and script execution lockdown via .htaccess."
      },
      {
        title: "Asynchronous Liking & Dynamic Engine",
        detail: "Engineered non-blocking AJAX post liking with immediate state updates, custom lightweight XSS-safe Markdown parsing, and dynamic word-count reading time calculation."
      },
      {
        title: "Glassmorphic UI & Card Animations",
        detail: "Designed a responsive dark-themed user interface featuring sticky glassmorphic navigation, image hover zoom effects, and glowing neon card accents."
      }
    ],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1000&q=80",
    liveUrl: "",
    githubUrl: "https://github.com/YenuliMunasinghe/myblog",
    featured: true
  },
  {
    id: "server-room-monitor",
    title: "Smart Server Room Monitoring & Automation System",
    category: "IoT & Full Stack",
    shortDescription: "An end-to-end IoT monitoring and alerting system engineered to track server environment metrics, automate thermal regulation, and trigger fail-safe emergency notifications.",
    tags: ["ESP32", "C++", "React.js", "Node.js", "Firebase", "ThingSpeak API", "SIM800L GSM", "DHT22", "SGP30"],
    contributions: [
      {
        title: "Embedded Telemetry Firmware",
        detail: "Programmed ESP32 embedded firmware to gather real-time air quality (SGP30), temperature/humidity (DHT22), and light intensity telemetry."
      },
      {
        title: "Autonomous Fail-Safe Logic",
        detail: "Configured autonomous AC trigger logic and emergency GSM SMS alerts via the SIM800L module for fail-safe operations."
      },
      {
        title: "Real-time Dashboard",
        detail: "Built and deployed a secure React and Node.js monitoring dashboard on Firebase Hosting with live global telemetry feeds."
      }
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
    liveUrl: "",
    githubUrl: "https://github.com/YenuliMunasinghe",
    featured: true
  }
];

export const educationData = [
  {
    degree: "Bachelor of Science (Hons) in Information Technology and Management",
    institution: "University of Moratuwa, Sri Lanka",
    period: "2024 – Present",
    details: "Third Year"
  },
  {
    degree: "Diploma in Information Technology",
    institution: "University of Colombo, Sri Lanka",
    period: "2022 – 2023",
    details: "Completed with focus on fundamental programming and systems"
  },
  {
    degree: "Primary and Secondary Education (G.C.E. A/L & O/L)",
    institution: "KG/St. Joseph's B.M.V., Kegalle, Sri Lanka",
    period: "2009 – 2022",
    details: "Focus on science and mathematics"
  }
];

export const certificationsData = [
  {
    title: "SQL Window Functions for Analytics",
    provider: "Coursera",
    date: "Issued: May 2026",
    link: "https://www.coursera.org/"
  },
  {
    title: "What is Data Science?",
    provider: "IBM via Coursera",
    date: "Issued: May 2026",
    link: "https://www.coursera.org/"
  }
];


// Technical articles, dev logs, and engineering thoughts published on Medium
export const articlesData = [
  {
    id: "finflow-dev-series",
    title: "Building FinFlow: Daily Development Series",
    category: "DevLog Series",
    description: "An ongoing daily series chronicling the system architecture, full-stack milestones, and real-time engineering decisions while developing the FinFlow platform.",
    readTime: "Multi-part Series",
    tags: ["FinFlow", "Daily DevLog", "System Design", "Full-Stack"],
    link: "https://medium.com/@yenulimunasinghe04",
    featured: true,
    episodes: [
      {
        day: "Day 01",
        title: "Project Scoping, Architecture & Core Tech Stack",
        link: "https://medium.com/@yenulimunasinghe04/development-journey-of-finflow-building-a-financial-management-system-for-university-societies-2e2f0b4a6a1b",
      },
      {
        day: "Day 02",
        title: "Database Design & Backend Service Integration",
        link: "https://medium.com/@yenulimunasinghe04/day-2-designing-the-database-and-security-foundation-0d0581df8553",
      },
      {
        day: "Day 03",
        title: "Frontend UI, State Workflows & Sprint Reflections",
        link: "https://medium.com/@yenulimunasinghe04/day-3-connecting-events-budgets-and-transactions-39331f7b5be5",
      }
    ]
  }
];

// Competitions and Hackathons
export const competitionsData = [
  {
    id: "J'puraXtreme 2.0",
    title: "J'puraXtreme 2025",
    organizer: "Organized by IEEE Computer Society Student Branch Chapter.",
    period: "Oct 2025",
    description: "Participated in the annual competitive programming challenge organized by the IEEE Computer Society Student Branch Chapter of the University of Sri Jayewardenepura.",
    tags: ["Hackathon", "Team Pitch"]
  },
  {
    id: "Code Rush",
    title: "Code Rush",
    organizer: "Organized by INTECS of Faculty of Information Technology, University of Moratuwa",
    period: "2024",
    description: "Participated in a fast-paced coding marathon and ideathon organized by INTECS, focusing on algorithmic problem solving and rapid software conceptualization.",
    tags: ["Team Work", "Hackerthon"]

  }
];

// Volunteering and Leadership initiatives
// (Placeholder content — update with your original volunteering roles and organizations)
export const volunteeringData = [
  {
    id: "Volunteer-FINC 2025",
    role: "Organized by IEEE Student Branch",
    organization: "FINC 2025 - Delegates Committee Member",
    period: "2025- July",
    description: "Contributed as a volunteer for Future Innovators Challenge 2025, organized by the IEEE Student Branch in collaboration with the IEEE Industrial Electronics Society Student Branch Chapter of the University of Moratuwa.",
    tags: ["Event Management", "Volunteering"]
  },

  {
    id: "Volunteer-Road to Legacy 2.0",
    role: "Organized by IEEE Student Branch",
    organization: "Road to Legacy 2.0 - Delegates Committee Member",
    period: "2025",
    description: "Contributed as a volunteer for the event RTL 2.0 which is a collobarative event for tech students with industry experts .",
    tags: ["Delegates Management", "Volunteering"]
  },

  {
    id: "Member-Moraspirit",
    role: "Moraspirit",
    organization: "Member of Web and Technology Pillar",
    period: "2025 – 2026",
    description: "Contributed to the UI/UX design of the Moraspirit website.",
    tags: ["Web & Technology", "volunteering"]
  }
];

