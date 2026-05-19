import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  Layers3,
  Mail,
  Rocket,
  Workflow
} from "lucide-react";
import { profile, serviceDetails } from "../data/portfolio";

export const metadata: Metadata = {
  title: "Services",
};

const serviceGroups = [
  {
    title: "Shape the product",
    note: "Turn a fuzzy workflow into screens, states, and decisions a team can actually use.",
    services: ["Design implementation", "Front-end systems"]
  },
  {
    title: "Build the app",
    note: "Ship the routes, data flows, auth touchpoints, and interface behavior that make it real.",
    services: ["Next.js apps", "API integration"]
  },
  {
    title: "Make it sturdier",
    note: "Improve speed, maintainability, and the unglamorous details that keep product work moving.",
    services: ["Performance tuning", "Technical cleanup"]
  }
];

const serviceFlow = [
  {
    icon: ClipboardCheck,
    title: "Map the work",
    detail: "Clarify users, roles, screens, risky assumptions, and what needs to ship first."
  },
  {
    icon: Layers3,
    title: "Build the system",
    detail: "Create reusable interface pieces, connect the data, and keep the product easy to extend."
  },
  {
    icon: Rocket,
    title: "Polish the launch",
    detail: "Tighten responsive states, errors, empty screens, performance, and deployment confidence."
  }
];

export default function ServicesPage() {
  return (
    <main>
      <section
        className="section-shell services-section route-section"
        aria-labelledby="services-heading"
      >
        <div className="services-hero">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h1 id="services-heading">Sharp execution from idea to interface.</h1>
          </div>
          <div className="services-intro-card">
            <p>
              I help turn operational mess into web products people can read,
              trust, and keep using: dashboards, role-based workspaces, project
              systems, authenticated flows, and the connective tissue around
              them.
            </p>
            <div className="services-actions" aria-label="Services actions">
              <Link href={`mailto:${profile.email}`} className="button button-primary">
                Start a project
                <Mail size={20} aria-hidden="true" />
              </Link>
              <Link href="/work" className="button button-secondary">
                See proof
                <ArrowRight size={20} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="service-group-grid" aria-label="Service groups">
          {serviceGroups.map((group) => (
            <article className="service-group-card" key={group.title}>
              <Workflow size={22} aria-hidden="true" />
              <h2>{group.title}</h2>
              <p>{group.note}</p>
              <ul>
                {group.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="service-list service-detail-list">
          {serviceDetails.map((service) => (
            <article className="service-card" key={service.title}>
              <BadgeCheck size={20} aria-hidden="true" />
              <div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="service-flow" aria-label="How services usually flow">
          {serviceFlow.map((step) => {
            const Icon = step.icon;

            return (
              <article className="service-flow-step" key={step.title}>
                <Icon size={22} aria-hidden="true" />
                <div>
                  <h2>{step.title}</h2>
                  <p>{step.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
