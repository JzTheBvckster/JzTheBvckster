import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { TimelineList } from "../components/TimelineList";
import { profile, projects, services, timeline } from "../data/portfolio";

export const metadata: Metadata = {
  title: "About"
};

const aboutFocus = [
  {
    title: "Product surfaces that make work visible",
    detail:
      "KaziFlow and Shenanigans both point to a clear pattern in Jonzelle's work: dashboards, project views, task systems, role-specific workspaces, and settings screens built around real team operations."
  },
  {
    title: "Full-stack thinking without the noise",
    detail:
      "The portfolio combines Next.js, React, TypeScript, Supabase, Prisma, Firebase, Firestore, and serverless APIs to connect polished interfaces with dependable application behavior."
  },
  {
    title: "Care for the details people feel",
    detail:
      "I pay attention to flow, hierarchy, permissions, feedback, and the quiet usability choices that make a product easier to understand after the first click."
  }
];

const workingPrinciples = [
  "Make the next action obvious.",
  "Treat roles and permissions as part of the UX.",
  "Design empty, loading, and error states before they become emergencies.",
  "Keep the codebase friendly for the next feature."
];

export default function AboutPage() {
  const projectNames = projects.map((project) => project.title).join(" and ");
  const coreServices = services.slice(0, 4).join(", ");

  return (
    <main>
      <section className="section-shell about-section route-section" aria-labelledby="about-heading">
        <div className="about-hero">
          <div className="about-panel">
            <p className="eyebrow">About</p>
            <h1 id="about-heading">{profile.name} builds web products that make complex work feel clear.</h1>
            <p>
              I am a full-stack developer based in Nairobi, focused on practical
              web apps, sharp interfaces, and product systems that help teams see
              what is happening without fighting the software.
            </p>
            <p>
              The work is usually closest to operations: projects, tasks,
              approvals, people, and the role-specific views teams need to move
              confidently.
            </p>
            <div className="about-actions" aria-label="About actions">
              <Link href="/work" className="button button-primary">
                View work
                <ArrowRight size={20} aria-hidden="true" />
              </Link>
              <Link href={`mailto:${profile.email}`} className="button button-secondary">
                Talk project
                <Mail size={20} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <aside className="about-snapshot" aria-label="Quick profile">
            <span>Based in</span>
            <strong>{profile.location}</strong>
            <span>Usually building</span>
            <strong>{coreServices}</strong>
            <span>Recent product ground</span>
            <strong>{projectNames}</strong>
          </aside>
        </div>

        <div className="about-story-card">
          <h2>Where the work sits</h2>
          <p>
            The portfolio is grounded in products like {projectNames}:
            authenticated dashboards, workspace tools, project governance, task
            tracking, team management, and role-based experiences for operators,
            managers, and individual contributors.
          </p>
          <p>
            My strongest lane is {coreServices.toLowerCase()}: taking a messy
            workflow, giving it structure, and shipping an interface that feels
            fast, readable, and maintainable.
          </p>
        </div>

        <div className="about-proof-grid" aria-label="About focus areas">
          {aboutFocus.map((item) => (
            <article className="about-proof-card" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="about-principles" aria-label="Working principles">
          <h2>What I keep checking</h2>
          <ul>
            {workingPrinciples.map((principle) => (
              <li key={principle}>
                <CheckCircle2 size={20} aria-hidden="true" />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>

        <TimelineList items={timeline} />
      </section>
    </main>
  );
}
