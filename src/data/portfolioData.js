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
  formspreeId: "", // Optional: paste your Formspree Form ID here or in .env as VITE_FORMSPREE_FORM_ID
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
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Supabase", "SQLite", "Firebase (Authentication, Hosting)", "ThingSpeak"]
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
    projectType: "Team Project",
    shortDescription: "A comprehensive rescue ecosystem with React Native mobile app, web admin dashboard, and REST API connecting reporters, volunteers, and shelters for live map-based stray reporting and rescue operations.",
    fullDescription: "StrayCare is an end-to-end community rescue and dispatch platform that creates a connected rescue-case lifecycle—from initial stray animal reporting and interactive map discovery to rescue acceptance, structured status management, adoption handoff, and real-time reporter notifications. I was primarily responsible for the design and implementation of the Stray Reporting, Map-Based Rescue Operation, Rescuer Case Management, Adoption Handoff, and Notification modules across both mobile frontend and backend APIs.",
    myContributionSummary: "Spearheaded the design and implementation of 5 core modules: multi-step mobile reporting with anonymous submission, interactive map-based rescue discovery with status markers, rescuer case management with lifecycle progression, automated adoption handoff with form prefilling, and an end-to-end in-app/push notification system.",
    tags: ["React Native", "Expo", "React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "React Native Maps", "Expo Push API"],
    contributions: [
      {
        title: "Multi-Step Stray Animal Reporting Workflow",
        detail: "Engineered mobile reporting workflow with animal details, location selection via React Native Maps, image upload, review, submission feedback, and anonymous reporting support."
      },
      {
        title: "Map-Based Rescue Operation & Case Acceptance",
        detail: "Built interactive map with status-based markers, case detail modal with timeline history, and Accept Case functionality with permission checks preventing self-acceptance or unauthorized role access."
      },
      {
        title: "Rescuer-Side Case Management & Status Progression",
        detail: "Implemented active rescue case cards in rescuer profile, return navigation flow, structured status updates (Under Rescue → Treated → Ready for Adoption), assigned-rescuer locking, and Mark as Failed action."
      },
      {
        title: "Adoption Handoff & Automated Prefilling",
        detail: "Connected rescue workflow to adoption onboarding, passing case IDs from Treated to Ready for Adoption to automatically prefill existing animal report details and eliminate duplicate data entry."
      },
      {
        title: "In-App Notification Centre & Expo Push System",
        detail: "Integrated in-app notification center, Expo push token registration with duplicate protection, backend push delivery, and automated triggers for case acceptance, status updates, completion, and adoption readiness."
      },
      {
        title: "Backend APIs, Authorization & Test Validation",
        detail: "Developed REST APIs for reporting, case retrieval, and timeline tracking with role-based authorization. Added automated test coverage for adoption prefilling and rescue outcome workflows."
      }
    ],
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80",
    liveUrl: "",
    githubUrl: "https://github.com/TeamTechForge",
    featured: true
  },
  {
    id: "myblog",
    title: "MyBlog — Security-Hardened PHP & MySQL Blogging Platform",
    category: "Full Stack Web",
    projectType: "Individual Project",
    shortDescription: "A full-stack, security-hardened blogging platform built with PHP (PDO), MySQL, HTML5/CSS3 glassmorphism UI, and Vanilla JS. Features CSRF protection, HMAC SHA-256 remember-me cookies, asynchronous AJAX liking, and markdown rendering.",
    fullDescription: "MyBlog is an individual, zero-dependency, security-first blogging platform engineered to demonstrate robust defensive architecture against the OWASP Top 10 vulnerabilities. Implemented using object-oriented PHP with PDO and MySQL, the application enforces cryptographic anti-CSRF tokens across all mutating actions, prevents session hijacking and fixation via strict session regeneration, and deploys tamper-proof HMAC SHA-256 cookie signatures. The front-end features a sleek dark glassmorphic design, asynchronous AJAX liking without page refreshes, and client-side safe Markdown parsing.",
    myContributionSummary: "Architected and developed the entire application end-to-end as an individual project: security architecture, database schema, session hardening, asynchronous liking engine, and glassmorphic UI.",
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
    image: "/myblog.png",
    liveUrl: "",
    githubUrl: "https://github.com/YenuliMunasinghe/myblog",
    featured: true
  },
  {
    id: "finflow",
    title: "FinFlow — Society Accounting & Financial Management System",
    category: "Full Stack & FinTech",
    projectType: "Individual Project",
    shortDescription: "A full-stack financial management prototype for university societies and clubs, supporting event budgeting, income and expense tracking, role-based transaction approval, audit-log foundations, and financial dashboard visualizations.",
    fullDescription: "FinFlow is a full-stack financial management prototype designed for university societies and clubs. It provides foundations for event budgeting, income and expense tracking, transaction review, role-based approval, financial reporting, and audit history. The project uses Next.js 16, React, TypeScript, NestJS, Prisma, and Supabase PostgreSQL, with JWT-based authentication and President-restricted transaction approvals. Some advanced capabilities—including automated budget-variance enforcement, complete audit integration, receipt storage, and formal accounting-ledger support—remain under development.",
    myContributionSummary: "Designed and developed a full-stack prototype using a NestJS REST API, Prisma ORM, Supabase PostgreSQL, JWT authentication, and a Next.js 16 frontend. The system models users, events, categorized budgets, transactions, financial reports, and audit records, with President-restricted transaction approval and responsive financial dashboard interfaces.",
    tags: ["Next.js 16", "React 19", "TypeScript", "NestJS", "Node.js", "Prisma ORM", "PostgreSQL", "Supabase", "Tailwind CSS 4", "Recharts", "JWT", "Bcrypt"],
    contributions: [
      {
        title: "Event Budgeting",
        detail: "Modeled society events, budget categories, and individual budget items with monetary values stored using fixed decimal precision."
      },
      {
        title: "Budget Monitoring",
        detail: "Designed transaction-to-event and budget-item relationships to support planned-versus-actual spending analysis. The current prototype includes UI indicators and data fields for over-budget transactions, with automated variance enforcement planned for further development."
      },
      {
        title: "Role-Based Approval",
        detail: "Implemented JWT authentication and NestJS role guards, including a President-restricted endpoint for approving, rejecting, or requesting revisions to transactions."
      },
      {
        title: "Reporting and Audit Foundations",
        detail: "Built financial summary, reporting, chart, and audit-log interfaces, with backend models and services for approved-transaction reporting and activity records. Further integration is planned to connect every workflow action to persistent reports and audit entries."
      }
    ],
    image: "/finflow.jpg",
    liveUrl: "",
    githubUrl: "https://github.com/YenuliMunasinghe/FinFlow",
    featured: true
  },
  {
    id: "server-room-monitor",
    title: "Smart Server Room Monitoring & Automation System",
    category: "IoT & Full Stack",
    projectType: "Team Project",
    shortDescription: "An automated server room monitoring system tracking temperature, humidity, and AC status in real-time via ESP32, ThingSpeak cloud telemetry, and a Firebase-hosted web dashboard.",
    fullDescription: "The Server Room Monitoring System addresses the critical need for efficient and automated monitoring of server room conditions. This system is designed to track temperature, humidity, and server status in real-time, providing alerts and updates via a web interface and SMS notifications. Additionally, it automates air conditioning schedules to optimize energy usage and ensure system reliability. By leveraging a microcontroller-based design with cost-effective components, our solution enhances server room management and reduces manual intervention.",
    myContributionSummary: "Directly programmed the dual LDR sensors (GPIO36/GPIO39) and SGP30 air quality sensor (I²C) on the ESP32, transmitted telemetry to ThingSpeak, built and hosted the front-end dashboard on Firebase Hosting, and implemented Firebase Authentication.",
    tags: ["ESP32", "C++", "SGP30 (I²C)", "LDR (ADC)", "ThingSpeak API", "Firebase Hosting", "Firebase Auth", "HTML/JS"],
    contributions: [
      {
        title: "Programming LDR Sensors (AC Status Monitoring)",
        detail: "Programmed two LDR sensors connected to ESP32 ADC pins (GPIO36/ADC0, GPIO39/ADC1) to detect AC indicator bulb brightness, reading continuous analog values and transmitting AC operational state to ThingSpeak via Write API."
      },
      {
        title: "Programming SGP30 Air Quality Sensor",
        detail: "Interfaced SGP30 sensor with ESP32 via I²C (SDA to GPIO21, SCL to GPIO22, 3.3V) in Indoor Air Quality (IAQ) mode, validating sensor availability, sampling eCO₂ and TVOC, and streaming telemetry to ThingSpeak."
      },
      {
        title: "Hosting Front-End Dashboard using Firebase",
        detail: "Developed a web-based dashboard fetching real-time telemetry from ThingSpeak fields and deployed it using the Firebase CLI to Firebase Hosting, enabling remote centralized environmental observation."
      },
      {
        title: "Login Authentication using Firebase Auth",
        detail: "Implemented user authentication with email/password sign-in and session management via Firebase Auth APIs, securing access to the web dashboard and protecting sensitive server room environmental data."
      }
    ],
    image: "/server-room-monitor.jpg",
    liveUrl: "",
    githubUrl: null,
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
    title: "AWS Cloud Practitioner Essentials",
    provider: "AWS Training & Certification",
    date: "Completed: September 25, 2026",
    image: "/certificates/aws-cloud-practitioner-essentials.png"
  },
  {
    title: "SQL Window Functions for Analytics",
    provider: "Coursera",
    date: "Issued: May 27, 2026",
    image: "/certificates/sql-window-functions-for-analytics.png"
  },
  {
    title: "What is Data Science?",
    provider: "IBM via Coursera",
    date: "Issued: May 24, 2026",
    image: "/certificates/what-is-data-science.png"
  }
];


// Technical articles, dev logs, and engineering thoughts published on Medium
export const articlesData = [
  {
    id: "finflow-dev-series",
    title: "Building FinFlow: Daily Development Series",
    category: "DevLog Series",
    description: "A nine-part development series documenting FinFlow’s architecture, implementation decisions, challenges, cloud migration, and authentication work.",
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
        title: "Designing the Database and Security Foundation",
        link: "https://medium.com/@yenulimunasinghe04/day-2-designing-the-database-and-security-foundation-0d0581df8553",
      },
      {
        day: "Day 03",
        title: "Connecting Events, Budgets and Transactions",
        link: "https://medium.com/@yenulimunasinghe04/day-3-connecting-events-budgets-and-transactions-39331f7b5be5",
      },
      {
        day: "Day 04",
        title: "Working on Approvals and Audit Logging",
        link: "https://medium.com/@yenulimunasinghe04/day-4-working-on-approvals-and-audit-logging-19a3cc04238c",
      },
      {
        day: "Day 05",
        title: "Turning Financial Data into Useful Information",
        link: "https://medium.com/@yenulimunasinghe04/day-5-turning-financial-data-into-useful-information-d7a41deccfec",
      },
      {
        day: "Day 06",
        title: "Taking FinFlow Beyond Localhost",
        link: "https://medium.com/@yenulimunasinghe04/day-6-taking-finflow-beyond-localhost-095320adb4dc",
      },
      {
        day: "Day 07",
        title: "Moving FinFlow to the Cloud",
        link: "https://medium.com/@yenulimunasinghe04/day-7-moving-finflow-to-the-cloud-d52bd5cb1a67",
      },
      {
        day: "Day 08",
        title: "Hardening Authentication and Route Protection",
        link: "https://medium.com/@yenulimunasinghe04/day-8-hardening-authentication-and-route-protection-0fec2704a51b",
      },
      {
        day: "Day 09",
        title: "Bringing FinFlow Together",
        link: "https://medium.com/@yenulimunasinghe04/day-9-bringing-finflow-together-1ebc6b448374",
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

