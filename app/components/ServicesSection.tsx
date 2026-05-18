import { BadgeCheck } from "lucide-react";
import { services } from "../data/portfolio";

export function ServicesSection() {
  return (
    <section className="section-shell services-section" id="services">
      <div className="section-heading">
        <p className="eyebrow">What I do</p>
        <h2>Sharp execution from idea to interface.</h2>
      </div>
      <div className="service-list">
        {services.map((service) => (
          <div className="service-pill" key={service}>
            <BadgeCheck size={20} aria-hidden="true" />
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}
