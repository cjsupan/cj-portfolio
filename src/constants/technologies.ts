import type { Technology } from "../types/technology";

export const technologies: Technology[] = [
  // Client
  { name: "React", category: "client" },
  { name: "Next.js", category: "client" },
  { name: "TypeScript", category: "client" },
  { name: "Tailwind CSS", category: "client" },
  { name: "Flutter", category: "client" },

  // Server
  { name: "Node.js", category: "server" },
  { name: "Express", category: "server" },
  { name: "NestJS", category: "server" },
  { name: "GCP", category: "server" },

  // Data & State
  { name: "GraphQL", category: "data" },
  { name: "Prisma", category: "data" },
  { name: "TanStack Query", category: "data" },
  { name: "PostgreSQL", category: "data" },
  { name: "MySQL", category: "data" },
  { name: "MongoDB", category: "data" },
  { name: "Firebase", category: "data" },

  // Tooling
  { name: "Vercel", category: "tooling" },
  { name: "Git", category: "tooling" },
  { name: "Figma", category: "tooling" },
  { name: "Postman", category: "tooling" },
  { name: "Jest", category: "tooling" },
  { name: "JIRA", category: "tooling" },
];
