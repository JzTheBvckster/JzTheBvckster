import { services } from "../data/portfolio";
import { ServiceList } from "./ServiceList";

export function ServicesSection() {
  return (
    <section className="section-shell services-section" id="services">
      <div className="section-heading">
        <p className="eyebrow">What I do</p>
        <h2>Sharp execution from idea to interface.</h2>
      </div>
      <ServiceList services={services} />
    </section>
  );
}
