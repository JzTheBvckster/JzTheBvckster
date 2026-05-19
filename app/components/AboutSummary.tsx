import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profile } from "../data/portfolio";

export function AboutSummary() {
  return (
    <section className="section-shell about-section" id="about" aria-labelledby="about-summary-heading">
      <div className="about-panel about-summary-panel home-about-panel">
        <p className="eyebrow">About</p>
        <h2 id="about-summary-heading">{profile.name} builds web products that make complex work feel clear.</h2>
        <p className="about-summary-copy">
          I work across product thinking, interface craft, and full-stack
          implementation, with recent projects centered on dashboards,
          authenticated workflows, project systems, permissions, and role-based
          tools for teams.
        </p>
        <div className="about-meta-grid" aria-label="Profile details">
          <div>
            <span>Role</span>
            <strong>{profile.role}</strong>
          </div>
          <div>
            <span>Base</span>
            <strong>{profile.location}</strong>
          </div>
          <div>
            <span>Handle</span>
            <strong>{profile.handle}</strong>
          </div>
        </div>
        <Link href="/about" className="button button-primary about-summary-link">
          Read the full story
          <ArrowRight size={20} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
