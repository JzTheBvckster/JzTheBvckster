import { projects } from "../data/portfolio";
import { ProjectShowcase } from "./ProjectShowcase";

export function WorkSection() {
  return (
    <section className="section-shell split-section" id="work">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>Explore the project labs.</h2>
      </div>

      <ProjectShowcase projects={projects} />
    </section>
  );
}
