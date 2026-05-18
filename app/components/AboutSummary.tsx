import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutSummary() {
  return (
    <section className="section-shell about-section" id="about" aria-labelledby="about-summary-heading">
      <div className="about-panel" style={{ gridColumn: "1 / -1", maxWidth: "800px" }}>
        <p className="eyebrow">About</p>
        <h2 id="about-summary-heading">I like interfaces that explain themselves.</h2>
        <p style={{ fontSize: "1.125rem", marginBottom: "2rem" }}>
          My sweet spot is the space between product thinking and front-end
          execution: taking ambiguous ideas, shaping the user flow, and
          building the thing with enough care that it is easy to maintain
          after launch.
        </p>
        <Link href="/about" className="button button-primary" style={{ display: "inline-flex", width: "auto" }}>
          Read my full timeline
          <ArrowRight size={20} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
