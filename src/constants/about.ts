import type { About } from "../types/about";

export const workExperience: About[] = [
  {
    title: "Software Engineer",
    company: "KreditHero Inc.",
    date: "July 2025 - Nov 2025",
    type: "Full Time",
    overview:
      "KreditHero is a fintech marketplace connecting businesses with multiple lending institutions. I contributed across the SME lending marketplace, an AI-assisted lender platform, and a SaaS product that transformed the company's internal AI document processing into a configurable workflow platform.",
    projects: [
      {
        name: "SME Lending Marketplace",
        description: [
          "Redesigned the onboarding experience by introducing early loan qualification, account-first registration, and Save as Draft functionality to support multi-session loan applications.",
          "Migrated authentication from Ory Kratos to Firebase Authentication, implementing email verification with Google reCAPTCHA v3 and automatic v2 fallback for suspicious sessions.",
        ],
      },
      {
        name: "AI-assisted Lender Dashboard",
        description: [
          "Built AI-assisted lender dashboards surfacing document fraud analysis, page-level evidence, document classification, and severity scoring to support lender compliance reviews.",
        ],
      },
      {
        name: "Floowd",
        description: [
          "Developed a configurable AI processor platform enabling organizations to build reusable extraction, validation, and classification processors through prompt-driven configuration.",
          "Engineered a no-code workflow orchestration builder using React Flow for visually composing AI document-processing pipelines.",
          "Built execution monitoring tools displaying node-level status, results, and failure diagnostics.",
          "Built FastAPI endpoints and MongoDB integrations supporting processor management, pipeline execution, and results retrieval.",
        ],
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "FastAPI",
      "Zustand",
      "MongoDB",
      "React Flow",
      "Google Cloud Platform (GCP)",
      "AI API Integration",
    ],
  },
  {
    title: "Front-End Developer",
    company: "Serino Systems Inc.",
    date: "April 2024 - July 2025",
    type: "Full Time",
    overview:
      "Serino Systems is a software development company delivering enterprise web and mobile applications for educational institutions, restaurants, and retail businesses through white-label and client-specific solutions.",
    projects: [
      {
        name: "Student Admissions Platform",
        description: [
          "Developed Save as Draft functionality with resume codes, allowing applicants to continue unfinished enrollment applications across multiple sessions.",
          "Re-engineered multi-step form state management to maintain data consistency when upstream information changed.",
        ],
      },
      {
        name: "Admissions Administration Portal",
        description: [
          "Improved admissions reviewer workflows by enhancing filtering, application review actions, notifications, revision history, and applicant communication.",
        ],
      },
      {
        name: "White-label E-commerce Platform",
        description: [
          "Built reusable Storybook component packages for navigation, search, checkout, and carousel functionality.",
          "Published internal component libraries through Verdaccio for reuse across multiple white-label client deployments.",
        ],
      },
      {
        name: "Multi-tenant School Management System",
        description: [
          "Modernized certificate generation by replacing hardcoded templates with backend-managed HTML templates supporting dynamic data injection.",
        ],
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Storybook",
      "Verdaccio",
      "React JSON Schema Form (RJSF)",
    ],
  },
  {
    title: "Front-End Developer",
    company: "Vashcorp Inc.",
    date: "Nov 2023 - Mar 2024",
    type: "Full Time",
    overview:
      "Vashcorp developed financial technology solutions including Buy Now, Pay Later, salary loans, personal loans, business financing, and merchant management platforms.",
    projects: [
      {
        name: "4Gives",
        description: [
          "Owned frontend development of the platform from project inception using Next.js App Router.",
          "Built borrower dashboards featuring credit summaries, loan calculators, profile management, and transaction history.",
          "Built multi-step KYC onboarding workflows including document upload, biometric face verification, and identity validation feedback.",
          "Integrated PayMongo APIs supporting bank account and e-wallet linking across multiple payment providers.",
          "Built merchant interfaces for product management, borrower application review, and installment tracking.",
          "Provided workflow and UX recommendations for an online sportsbook platform.",
        ],
      },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "PayMongo",
    ],
  },
  {
    title: "Front-End Developer",
    company: "Volenday Group",
    date: "Nov 2021 - Nov 2024",
    type: "Full Time",
    overview:
      "Volenday Group is a software outsourcing company serving international clients across compliance, logistics, media, and e-commerce industries, primarily for organizations based in Denmark.",
    projects: [
      {
        name: "Governance, Risk & Compliance Platform",
        description: [
          "Owned frontend development of a GRC platform, implementing listing, mapping, linking, export functionality, and compliance management workflows.",
        ],
      },
      {
        name: "Internal Ticketing System",
        description: [
          "Enhanced an internal Kanban ticketing platform by improving drag-and-drop functionality, routing, and modal workflows.",
        ],
      },
      {
        name: "Vehicle Tracking System",
        description: [
          "Improved logistics management systems through advanced table filtering, sorting, searching, and fixed-column implementations.",
        ],
      },
      {
        name: "Flutter Product Catalog & E-commerce",
        description: [
          "Maintained multiple Flutter applications including product catalogs, e-commerce platforms, and digital kiosk solutions.",
        ],
      },
      {
        name: "ASIA CEO Awards",
        description: [
          "Migrated multiple enterprise applications from React.js to Next.js while leveraging SSR, SSG, and ISR to improve maintainability and performance.",
        ],
      },
    ],
    technologies: ["React", "Next.js", "Flutter", "Redux", "TypeScript"],
  },
  {
    title: "Software Engineer",
    company: "Raksquad Tech Corp.",
    date: "July 2021 - Sept 2021",
    type: "Full Time",
    overview:
      "Raksquad developed internal business systems supporting merchant operations and voucher management.",
    projects: [
      {
        name: "Voucher Management System",
        description: [
          "Resolved production issues and enhanced responsive layouts across merchant-facing modules.",
          "Improved table functionality and voucher management interfaces.",
          "Normalized the MySQL database by separating address entities into relational tables and updating application queries to improve maintainability and data integrity.",
        ],
      },
    ],
    technologies: [
      "PHP",
      "CodeIgniter",
      "MySQL",
      "JavaScript",
      "jQuery",
      "Bootstrap",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Village88",
    date: "Mar 2021 - June 2021",
    type: "Internship",
    overview:
      "Village88 is a software engineering bootcamp that trains developers through an immersive, project-based curriculum covering front-end fundamentals through Node.js, PHP, and relational databases, backed by internal tools like Coding Dojo's learning platform, the Data Compass developer assessment, and the Focus Tracker productivity tracker.",
    projects: [
      {
        name: "Sprite-based Mini Games",
        description: [
          "Built browser-based mini-games including a Pac-Man clone, a 1942-style arcade shooter, and a Street Fighter-inspired fighting game using sprite sheet animation.",
          "Implemented game logic, collision detection, and character movement using vanilla JavaScript and jQuery.",
          "Practiced core web fundamentals (HTML, CSS, JS, jQuery) through hands-on, project-based learning delivered every other week.",
        ],
      },
      {
        name: "Live Poll",
        description: [
          "Built a real-time polling application allowing users to vote and see results update live.",
          "Implemented real-time communication between client and server using Socket.io.",
          "Built the backend with Node.js and Express to handle vote broadcasting and poll state management.",
        ],
      },
      {
        name: "E-commerce Platform",
        description: [
          "Built a full-stack e-commerce application covering product listings, cart functionality, and checkout flow.",
          "Developed the front-end using HTML, CSS, and JavaScript, with a PHP/CodeIgniter backend.",
          "Used MySQL for data persistence across products, carts, and orders.",
        ],
      },
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Node.js",
      "Express",
      "Socket.io",
      "PHP",
      "CodeIgniter",
      "MySQL",
    ],
  },
];
