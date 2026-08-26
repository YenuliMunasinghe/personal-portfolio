export const personalInfo = {
  name: "Yenuli Munasinghe",
  title: "IT & Management Undergraduate",
  tagline: "Software Engineering, Data Science & Business Strategy",
  location: "Kegalle, Sri Lanka",
  bio: "I am a 3rd-year Information Technology & Management undergraduate at the University of Moratuwa with a strong interest in Software Engineering, Data Science, and the Business side. Driven by a multidisciplinary mindset, I build scalable full-stack and mobile solutions, leverage data-driven insights, and understand core business operations. Passionate about clean architecture, system design, and practical innovation, I am currently seeking an opportunity to apply my academic foundation, gain hands-on industry experience, and contribute to high-impact real-world projects.",
  availability: "Open to internships and software engineering opportunities",
  email: "yenulimunasinghe04@gmail.com",
  github: "https://github.com/YenuliMunasinghe",
  linkedin: "https://www.linkedin.com/in/yenuli-munasinghe-6b6327354/",
  resumeUrl: "#",
  profileImg: "/profile.jpg",
};

export const skillsData = [
  {
    category: "Programming Languages",
    skills: ["JavaScript (ES6+)", "Python", "Java", "C", "HTML5", "CSS3", "SQL"]
  },
  {
    category: "Frontend & Mobile Development",
    skills: ["React Native", "Expo", "React.js", "Vanilla JavaScript"]
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express.js", "Flask", "RESTful APIs", "WebSockets (Socket.IO)"]
  },
  {
    category: "Databases & Cloud",
    skills: ["MongoDB", "SQLite", "Firebase (Authentication, Hosting)", "ThingSpeak"]
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
