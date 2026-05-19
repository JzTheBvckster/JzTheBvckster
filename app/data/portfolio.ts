export type ProjectScreenshot = {
  src: string;
  title: string;
  caption: string;
};

export type Project = {
  title: string;
  repoUrl: string;
  liveUrl: string;
  screenshots: ProjectScreenshot[];
  language: string;
  summary: string;
  highlights: string[];
  stack: string[];
  status: string;
  demoNote?: string;
  accent: "blue" | "yellow";
};

export type TimelineItem = {
  period: string;
  title: string;
  detail: string;
};

export type ServiceDetail = {
  title: string;
  description: string;
};

export const profile = {
  name: "Jonzelle Otieno",
  handle: "JzTheBvckster",
  role: "Full-stack developer",
  location: "Nairobi, Kenya",
  intro:
    "I am a Nairobi-based full-stack developer building sharp, reliable web products with React, Next.js, and thoughtful product engineering.",
  email: "jonzelleotieno31@gmail.com",
  github: "https://github.com/JzTheBvckster",
  linkedin: "https://www.linkedin.com/in/jonzelle-otieno-056a50385",
  whatsapp: "+254701541379"
};

export const stats = [
  { value: "02+", label: "Years building" },
  { value: "03", label: "Featured apps" },
  { value: "99%", label: "Care for details" }
];

export const projects: Project[] = [
  {
    title: "KaziFlow",
    repoUrl: "https://github.com/JzTheBvckster/kaziflow",
    liveUrl: "https://kaziflow-eta.vercel.app",
    screenshots: [
      {
        src: "/projects/kaziflow-dashboard-human.png",
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

export const serviceDetails: ServiceDetail[] = [
  {
    title: "Front-end systems",
    description:
      "Reusable components, page patterns, and interaction rules that keep the interface tidy even when the product starts growing extra limbs."
  },
  {
    title: "Next.js apps",
    description:
      "Production-ready Next.js builds with routing, data loading, metadata, deployment polish, and the sturdy little decisions that keep the app from wobbling in public."
  },
  {
    title: "Design implementation",
    description:
      "Pixel-aware translation from mockup to browser: spacing, responsive states, accessibility, and the visual rhythm that makes a screen feel intentional instead of improvised."
  },
  {
    title: "API integration",
    description:
      "Clean connections to auth, databases, internal endpoints, and third-party tools, with loading, empty, and error states that stay calm when the network gets dramatic."
  },
  {
    title: "Performance tuning",
    description:
      "Practical speed work across images, bundles, rendering, and interaction feedback, turning heavy pages into interfaces that move with a satisfying snap."
  },
  {
    title: "Technical cleanup",
    description:
      "Refactors, bug hunts, dependency updates, and codebase housekeeping that make tomorrow's feature work feel less like archaeology and more like building."
  }
];

export const services: string[] = serviceDetails.map((service) => service.title);

export const timeline: TimelineItem[] = [
  {
    period: "Now",
    title: "Independent product engineer",
    detail:
      "Building polished full-stack web apps with Next.js, React, TypeScript, Supabase, Prisma, Firebase, and serverless workflows for teams that need clarity around work, roles, and progress."
  },
  {
    period: "Before",
    title: "Operations-focused builder",
    detail:
      "Shaped dashboards for workspaces, projects, tasks, approvals, role-specific views, and the everyday systems teams use to coordinate work without losing context."
  },
  {
    period: "Always",
    title: "Detail-minded maker",
    detail:
      "Careful about interface clarity, maintainable architecture, accessible interaction, and the small details that keep software understandable after it ships."
  }
];

export function getFeaturedServices(limit = 3) {
  return services.slice(0, limit);
}

export function getRemainingServiceCount(featuredCount = 3) {
  return Math.max(services.length - featuredCount, 0);
}
