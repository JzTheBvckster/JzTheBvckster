import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { projects } from "../data/portfolio";

export function WorkSummary() {
  return (
    <section className="section-shell split-section" aria-labelledby="work-summary-heading">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2 id="work-summary-heading">Recent project highlights.</h2>
        <p style={{ marginTop: "1rem", maxWidth: "600px" }}>
          A quick look at my recent web products and dashboards.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <Link href="/work" className="button button-primary">
            Explore the project lab
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="summary-grid" style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {projects.map((project) => (
          <article 
            key={project.title} 
            style={{ 
              border: "4px solid black", 
              padding: "1.5rem", 
              boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
              backgroundColor: project.accent === "yellow" ? "#FFD166" : project.accent === "blue" ? "#118AB2" : "#FFF4E0",
              color: project.accent === "blue" ? "white" : "black"
            }}
          >
            <p className="project-status" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", fontWeight: 700, marginBottom: "1rem", textTransform: "uppercase" }}>
              <Sparkles size={16} aria-hidden="true" />
              {project.status}
            </p>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "0.5rem" }}>{project.title}</h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.5 }}>{project.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
