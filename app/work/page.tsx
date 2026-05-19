import type { Metadata } from "next";
import { ProjectShowcase } from "../components/ProjectShowcase";
import { projects } from "../data/portfolio";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <main>
      <section
        className="section-shell route-section"
        aria-labelledby="work-heading"
      >
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h1 id="work-heading">Play with the project lab.</h1>
        </div>

        <ProjectShowcase projects={projects} />
      </section>
    </main>
  );
}
