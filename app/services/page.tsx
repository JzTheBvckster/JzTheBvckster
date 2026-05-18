import type { Metadata } from "next";
import { BadgeCheck } from "lucide-react";
import { services } from "../data/portfolio";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <main>
      <section
        className="section-shell services-section route-section"
        aria-labelledby="services-heading"
      >
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h1 id="services-heading">Sharp execution from idea to interface.</h1>
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
    </main>
  );
}
