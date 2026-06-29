import type { Projects } from "../types/project";

export const projects: Projects[] = [
  {
    title: "Sala",
    description:
      "A modern furniture store offering timeless Scandinavian and Japandi-inspired pieces designed to create warm, functional, and welcoming living spaces.",
    link: "https://sala-eta.vercel.app/",
    tech: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "GraphQL",
      "Prisma",
      "PostgreSQL",
    ],
    id: "sala",
  },
  {
    title: "Floowd",
    description:
      "A SaaS platform that automates financial document processing by extracting, validating, and structuring data from unstructured files, then powering end-to-end workflows for underwriting, risk checks, and decisioning in lending operations.",
    link: "https://www.floowed.com/",
    tech: [
      "Next.js",
      "React-flow",
      "TypeScript",
      "Tailwind CSS",
      "AI Workflow Automation",
    ],
    id: "ai-document-workflow-automation",
  },
  {
    title: "Lender Marketplace Dashboard",
    description:
      "A lender-facing dashboard that allows financial institutions to view, filter, and manage matched SME financing opportunities, including deal evaluation, application tracking, and pipeline management.",
    link: "https://dashboard.kredithero.com/login",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN",
      "AI API Integration",
    ],
    id: "lender-deal-portal",
  },
  {
    title: "SME Deal Marketplace",
    description:
      "a fintech platform that connects businesses with multiple lenders through a single application, using AI-driven assessment and document processing to streamline loan matching, comparison, and approval.",
    link: "https://kredithero.com/",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
      "ShadCN",
    ],
    id: "sme-deal-marketplace",
  },
  {
    title: "La Salle Green Hills Admission Website",
    description:
      "A comprehensive admission website for La Salle Green Hills, allowing students to apply online, upload documents, and track their application status.",
    link: "",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MUI"],
    id: "admission-system",
  },
  {
    title: "La Salle Green Hills Admin Portal",
    description:
      "An admin portal for La Salle Green Hills, enabling administrators to manage student applications, view statistics, and approve or reject applications.",
    link: "",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MUI"],
    id: "admission-portal",
  },
  {
    title: "Security Compliance & GRC Platform",
    description:
      "A GRC platform for ISO 27001 compliance, mapping security controls to frameworks, managing audit evidence, and generating SOA and supplier reports.",
    link: "",
    tech: ["React", "Next.js", "TypeScript", "Ant Design", "Redux"],
    id: "security-grc-platform",
  },
  {
    title: "Project Pulse",
    description:
      "An internal project management platform for tracking project lifecycles, logging progress updates, and managing stakeholder subscriptions. Features role-based access control, archive workflows, and automated weekly email digests to keep subscribers informed.",
    link: "",
    tech: [
      "React",
      "Next.js",
      "Redux",
      "React Query",
      "Mantine UI",
      "Ant Design",
    ],
    id: "project-pulse",
  },
  {
    title: "Product Catalog – B2B Field Sales App",
    description:
      "A product catalog app for field sales reps to browse product details, view alternatives, bookmark products, and flag focus items per customer.",
    link: "",
    tech: ["Flutter", "Dart", "Provider"],
    id: "abena-product-catalog",
  },
  {
    title: "ASIA CEO AWARDS",
    description:
      "A website for the ASIA CEO AWARDS, showcasing the nominees, winners, and event details. It includes a nomination form and a voting system.",
    link: "https://www.asia-ceo-awards.org/",
    tech: ["Next.js"],
    id: "asia-ceo-awards",
  },
  {
    title: "Voucher Management System",
    description:
      "A voucher management system for managing vouchers, allowing users to create, view, and update, It includes features for tracking voucher usage and generating reports.",
    link: "",
    tech: ["PHP", "CodeIgniter", "MySQL", "Bootstrap"],
    id: "voucher-management-system",
  },
  {
    title: "4Gives",
    description:
      "A web application that offers users salary and personal loan, and buy now pay later services. It provides users with a convenient way to manage their finances and make purchases.",
    link: "https://4gives.com/",
    tech: ["Next.js", "Zustand", "Tailwind CSS", "Axios"],
    id: "online-food-ordering-system",
  },
];
