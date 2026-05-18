import type { Metadata } from "next";
import { timeline } from "../data/portfolio";

export const metadata: Metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <main>
      <section className="section-shell about-section route-section" aria-labelledby="about-heading">
        <div className="about-panel">
          <p className="eyebrow">About</p>
          <h1 id="about-heading">I like interfaces that explain themselves.</h1>
          <p>
            My sweet spot is the space between product thinking and front-end execution:
            taking ambiguous ideas, shaping the user flow, and building the thing with
            enough care that it is easy to maintain after launch.
          </p>
        </div>

        <div className="timeline" aria-label="Experience timeline">
          {timeline.map((item) => (
            <article className="timeline-item" key={item.title}>
              <span>{item.period}</span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
