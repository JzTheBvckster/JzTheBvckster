import type { ProjectShowcaseData } from "../components/ProjectShowcase";

export const profile = {
  name: "JzTheBvckster",
  role: "Full-stack developer",
  location: "Nairobi, Kenya",
  intro:
    "I build sharp, reliable web experiences with React, Next.js, and thoughtful product engineering.",
  email: "jonzelleotieno31@gmail.com",
  github: "https://github.com/JzTheBvckster",
  linkedin: "https://www.linkedin.com/in/jonzelle-otieno-056a50385",
  whatsapp: "+254701541379"
};

export const stats = [
  { value: "04+", label: "Years building" },
  { value: "03", label: "Featured apps" },
  { value: "99%", label: "Care for details" }
];

export const projects: ProjectShowcaseData[] = [
  {
    title: "KaziFlow",
    repoUrl: "https://github.com/JzTheBvckster/kaziflow",
    liveUrl: "https://kaziflow-eta.vercel.app",
    screenshots: [
      {
        src: "/projects/kaziflow-auth-dashboard.png",
        title: "Workspace dashboard",
        caption: "Authenticated demo workspace with task summary, distribution, and member metrics."
      },
      {
        src: "/projects/kaziflow-auth-projects.png",
        title: "Project control",
        caption: "Project list, filtering, status controls, and launch readiness data."
      },
      {
        src: "/projects/kaziflow-auth-team.png",
        title: "Team management",
        caption: "Workspace members, roles, and collaboration surface for the demo organization."
      },
      {
        src: "/projects/kaziflow-auth-settings.png",
        title: "Workspace settings",
        caption: "Owner-level configuration and workspace controls."
      }
    ],
    language: "TypeScript",
    summary:
      "A neobrutalist team-operations dashboard for workspaces, members, projects, tasks, Kanban, and calendar views.",
    highlights: [
      "Authenticated workspace creation and switching",
      "Member management with owner/member roles",
      "Project and task tracking powered by server actions",
      "Kanban, calendar, settings, dashboard, and team surfaces"
    ],
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Prisma", "Tailwind CSS", "shadcn/Radix"],
    status: "Production-ready dashboard",
    demoNote: "Authenticated screenshots captured with the provided demo owner account.",
    accent: "blue"
  },
  {
    title: "Shenanigans",
    repoUrl: "https://github.com/JzTheBvckster/shenanigans",
    liveUrl: "https://shenanigans10.vercel.app",
    screenshots: [
      {
        src: "/projects/shenanigans-demo-dashboard.png",
        title: "MD dashboard",
        caption: "Managing Director operations dashboard with company-wide summary metrics."
      },
      {
        src: "/projects/shenanigans-demo-md.png",
        title: "MD console",
        caption: "Managing Director workspace with executive-level controls and oversight."
      },
      {
        src: "/projects/shenanigans-demo-projects.png",
        title: "Project governance",
        caption: "MD project governance view with approval lifecycle and status tracking."
      },
      {
        src: "/projects/shenanigans-demo-pm.png",
        title: "PM workspace",
        caption: "Project Manager workspace with team coordination and task assignment tools."
      },
      {
        src: "/projects/shenanigans-demo-tasks.png",
        title: "Task board",
        caption: "Project Manager task board with work items, priorities, and progress tracking."
      },
      {
        src: "/projects/shenanigans-demo-employee.png",
        title: "Employee view",
        caption: "Employee workspace dashboard with assigned tasks and team context."
      },
      {
        src: "/projects/shenanigans-demo-profile.png",
        title: "Profile settings",
        caption: "Employee profile and account management surface."
      }
    ],
    language: "JavaScript",
    summary:
      "A role-based enterprise management platform with MD, project-manager, and employee workspaces.",
    highlights: [
      "Firebase authentication and Firestore-backed sessions",
      "Role-specific workspaces for approvals and operations",
      "Project governance with approval lifecycle states",
      "Serverless API layer with security and rate limiting"
    ],
    stack: ["JavaScript", "Vercel", "Firebase Auth", "Firestore", "Serverless APIs", "Security middleware"],
    status: "Enterprise management system",
    demoNote: "Screenshots captured via demo mode across MD, PM, and employee roles.",
    accent: "yellow"
  }
];

export const services = [
  "Front-end systems",
  "Next.js apps",
  "Design implementation",
  "API integration",
  "Performance tuning",
  "Technical cleanup"
];

export const timeline = [
  {
    period: "Now",
    title: "Independent product engineer",
    detail:
      "Building polished interfaces, practical dashboards, and web apps that feel fast from the first click."
  },
  {
    period: "Before",
    title: "React-focused developer",
    detail:
      "Delivered reusable components, improved UX flows, and partnered with teams to ship better product surfaces."
  },
  {
    period: "Always",
    title: "Systems-minded maker",
    detail:
      "I care about clean architecture, accessible interaction, and the tiny details that keep software pleasant."
  }
];
