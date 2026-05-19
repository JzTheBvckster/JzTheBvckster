import { profile, timeline } from "../data/portfolio";
import { TimelineList } from "./TimelineList";

export function AboutSection() {
  return (
    <section className="section-shell about-section" id="about">
      <div className="about-panel">
        <p className="eyebrow">About</p>
        <h2>{profile.name} builds web products that make complex work feel clear.</h2>
        <p>
          I am a Nairobi-based full-stack developer focused on the space between
          product thinking and dependable implementation: shaping operational
          workflows, building the interface, and connecting it to application
          logic that can hold up in real use.
        </p>
        <p>
          Recent work includes authenticated dashboards, role-based workspaces,
          project governance, task boards, team management, and settings
          surfaces for products where permissions, hierarchy, and daily momentum
          all need to be obvious.
        </p>
      </div>

      <TimelineList items={timeline} />
    </section>
  );
}
