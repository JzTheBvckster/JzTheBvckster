import Link from "next/link";
import { ArrowRight, Code2, Gauge, PlugZap, Sparkles } from "lucide-react";
import { serviceDetails } from "../data/portfolio";

const servicePreview = [
  {
    icon: Code2,
    title: "Shape the UI",
    copy: "Interfaces, components, and responsive states that make the product feel intentional."
  },
  {
    icon: PlugZap,
    title: "Wire the flow",
    copy: "Auth, APIs, data surfaces, and the in-between states users actually notice."
  },
  {
    icon: Gauge,
    title: "Tune the ship",
    copy: "Performance, cleanup, and polish so the app stays pleasant after launch day."
  }
];

export function ServicesSummary() {
  const featuredServices = serviceDetails.slice(0, 4);
  const remainingServiceCount = serviceDetails.length - featuredServices.length;

  return (
    <section
      className="section-shell services-section services-summary"
      id="services"
      aria-labelledby="services-summary-heading"
    >
      <div className="services-summary-copy">
        <p className="eyebrow">
          <Sparkles size={18} aria-hidden="true" />
          Service console
        </p>
        <h2 id="services-summary-heading">Useful product work, neatly packaged.</h2>
        <p className="section-kicker">
          Pick the lane that matches the mess: interface craft, app plumbing,
          or the final polish pass that makes everything feel faster and calmer.
        </p>
        <div className="summary-action-row">
          <Link href="/services" className="button button-primary services-summary-cta">
            View services
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
          <p className="services-summary-note">
            {featuredServices.length} core offers here. {remainingServiceCount} more on the full menu.
          </p>
        </div>
      </div>
      <div className="services-summary-board" aria-label="Featured service lanes">
        {servicePreview.map((service) => {
          const Icon = service.icon;

          return (
            <article className="service-preview-lane" key={service.title}>
              <Icon size={22} aria-hidden="true" />
              <div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
