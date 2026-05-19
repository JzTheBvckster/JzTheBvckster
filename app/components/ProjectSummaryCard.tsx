import { Sparkles } from "lucide-react";
import type { Project } from "../data/portfolio";

const projectCardColors: Record<Project["accent"], { backgroundColor: string; color: string }> = {
  blue: { backgroundColor: "#118AB2", color: "white" },
  yellow: { backgroundColor: "#FFD166", color: "black" }
};

export function ProjectSummaryCard({ project }: Readonly<{ project: Project }>) {
  const colors = projectCardColors[project.accent];

  return (
    <article
      style={{
        border: "4px solid black",
        padding: "1.5rem",
        boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
        backgroundColor: colors.backgroundColor,
        color: colors.color
      }}
    >
      <p
        className="project-status"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "0.875rem",
          fontWeight: 700,
          marginBottom: "1rem",
          textTransform: "uppercase"
        }}
      >
        <Sparkles size={16} aria-hidden="true" />
        {project.status}
      </p>
      <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "0.5rem" }}>
        {project.title}
      </h3>
      <p style={{ fontSize: "1rem", lineHeight: 1.5 }}>{project.summary}</p>
    </article>
  );
}
