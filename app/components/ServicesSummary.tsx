import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { services } from "../data/portfolio";

export function ServicesSummary() {
  // Only show the first 3 services as a summary
  const summaryServices = services.slice(0, 3);

  return (
    <section className="section-shell services-section" id="services" aria-labelledby="services-summary-heading">
      <div className="section-heading">
        <p className="eyebrow">What I do</p>
        <h2 id="services-summary-heading">Sharp execution from idea to interface.</h2>
        <div style={{ marginTop: "2rem" }}>
          <Link href="/services" className="button button-primary">
            View all services
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="service-list">
        {summaryServices.map((service) => (
          <div className="service-pill" key={service}>
            <BadgeCheck size={20} aria-hidden="true" />
            {service}
          </div>
        ))}
        <div className="service-pill" style={{ backgroundColor: "transparent", color: "black", borderColor: "transparent", boxShadow: "none" }}>
          <strong>+ {services.length - 3} more areas of expertise</strong>
        </div>
      </div>
    </section>
  );
}
