# 🏗️ Architecture & Technical Documentation

This document describes the high-level architecture, design patterns, component topology, styling rules, and build pipeline for the **Yenuli Munasinghe Personal Web Portfolio**.

---

## 📐 System Overview

The portfolio is architected as a **Single Page Application (SPA)** built with **React 19** and **Vite 7**. It utilizes a modular, component-driven approach backed by a centralized data layer (`src/data/portfolioData.js`).

```text
[ User / Browser ]
        │
        ▼
   [ index.html ] ──▶ [ src/main.jsx ]
                             │
                             ▼
                        [ App.jsx ]
                             │
       ┌─────────────────────┼─────────────────────┐
       ▼                     ▼                     ▼
[ Component Tree ]   [ Data Store ]        [ Styling Layer ]
 ├─ Navbar            └─ portfolioData.js   ├─ index.css (Glassmorphism)
 ├─ Hero                                    └─ Tailwind CSS v3
 ├─ About
 ├─ Skills
 ├─ Experience
 ├─ Projects ──▶ [ ProjectModal ]
 ├─ Certifications
 ├─ Contact
 └─ Footer
```

---

## 🧩 Component Breakdown & Responsibilities

| Component | Path | Responsibility |
| :--- | :--- | :--- |
| **`App`** | [`src/App.jsx`](file:///d:/Documents/GitHub/personal%20portfolio/src/App.jsx) | Root container managing global state (`activeProject` modal state, scroll position). |
| **`Navbar`** | [`src/components/Navbar.jsx`](file:///d:/Documents/GitHub/personal%20portfolio/src/components/Navbar.jsx) | Sticky navigation header with mobile drawer menu, smooth-scroll anchor links, and brand branding. |
| **`Hero`** | [`src/components/Hero.jsx`](file:///d:/Documents/GitHub/personal%20portfolio/src/components/Hero.jsx) | Landing section presenting headline bio, key specializations, avatar photo, CTA buttons, and quick social links. |
| **`About`** | [`src/components/About.jsx`](file:///d:/Documents/GitHub/personal%20portfolio/src/components/About.jsx) | Professional biography, core values, location information, and academic background. |
| **`Skills`** | [`src/components/Skills.jsx`](file:///d:/Documents/GitHub/personal%20portfolio/src/components/Skills.jsx) | Categorized grid displaying programming languages, mobile frameworks, databases, and core domains. |
| **`Projects`** | [`src/components/Projects.jsx`](file:///d:/Documents/GitHub/personal%20portfolio/src/components/Projects.jsx) | Portfolio showcase with interactive category filtering and project preview cards. |
| **`ProjectModal`** | [`src/components/ProjectModal.jsx`](file:///d:/Documents/GitHub/personal%20portfolio/src/components/ProjectModal.jsx) | High-detail modal displaying technical achievements, architectural breakdown, and repo links when a card is selected. |
| **`Experience`** | [`src/components/Experience.jsx`](file:///d:/Documents/GitHub/personal%20portfolio/src/components/Experience.jsx) | Academic and leadership timeline highlighting degree milestones and practical experience. |
| **`Certifications`**| [`src/components/Certifications.jsx`](file:///d:/Documents/GitHub/personal%20portfolio/src/components/Certifications.jsx) | Accredited industry certificates (Coursera, IBM) with verification links. |
| **`Contact`** | [`src/components/Contact.jsx`](file:///d:/Documents/GitHub/personal%20portfolio/src/components/Contact.jsx) | Direct communication form, email button, location, and social media channels. |
| **`Footer`** | [`src/components/Footer.jsx`](file:///d:/Documents/GitHub/personal%20portfolio/src/components/Footer.jsx) | Copyright information, scroll-to-top button, and navigational summary. |

---

## 💾 Data Layer Architecture

All content is managed through a Single-Source-of-Truth schema defined in [`src/data/portfolioData.js`](file:///d:/Documents/GitHub/personal%20portfolio/src/data/portfolioData.js).

### Data Schema Overview

1. **`personalInfo`**: Object storing bio details, contact emails, GitHub/LinkedIn URLs, and availability tags.
2. **`skillsData`**: Array of categories (`Programming Languages`, `Frontend & Mobile`, `Backend & APIs`, `Databases & Cloud`, `Core Domains`).
3. **`projectsData`**: Array of project objects containing `id`, `title`, `shortDescription`, `tags`, `contributions`, `image`, `githubUrl`, and `featured`.
4. **`educationData`**: Array of degree milestones, institutions, and dates.
5. **`certificationsData`**: Array of certificates, providers, and issue dates.

---

## 🎨 Styling & Design Principles

- **Utility-First**: Styled using **Tailwind CSS v3** utility classes for rapid, responsive design.
- **Glassmorphism**: Enhanced with backdrop filters (`backdrop-blur-md`), semi-transparent dark panels (`bg-slate-900/60`), and subtle borders (`border-slate-800`).
- **Dark Aesthetic**: Color palette focused on deep navy (`#0B0F19`), slate (`#0F172A`), electric cyan (`#38BDF8`), and indigo (`#818CF8`).
- **Micro-Interactions**: Smooth hover zoom effects (`transition-transform duration-300`), glowing button shadows, and subtle fade transitions.

---

## ⚡ Build & Bundle Strategy

- **Module Bundler**: Powered by **Vite 7** for near-instant cold starts and lightning-fast HMR (Hot Module Replacement).
- **PostCSS Pipeline**: Processes Tailwind CSS and Autoprefixer for cross-browser styling compatibility.
- **Production Output**: Generates minified HTML/CSS/JS artifacts into the root `dist/` directory, optimized for static edge deployment (GitHub Pages, Cloudflare Pages, Netlify).
