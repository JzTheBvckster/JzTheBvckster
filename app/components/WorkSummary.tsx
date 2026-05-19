import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "../data/portfolio";
import { ProjectSummaryCard } from "./ProjectSummaryCard";

export function WorkSummary() {
  return (
    <section className="section-shell split-section" aria-labelledby="work-summary-heading">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2 id="work-summary-heading">Recent project highlights.</h2>
        <p className="section-kicker">
          A quick look at my recent web products and dashboards.
        </p>
        <div className="section-actions">
          <Link href="/work" className="button button-primary">
            Explore the project lab
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="summary-grid">
        {projects.map((project) => (
          <ProjectSummaryCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
