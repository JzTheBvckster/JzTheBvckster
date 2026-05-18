import { timeline } from "../data/portfolio";

export function AboutSection() {
  return (
    <section className="section-shell about-section" id="about">
      <div className="about-panel">
        <p className="eyebrow">About</p>
        <h2>I like interfaces that explain themselves.</h2>
        <p>
          My sweet spot is the space between product thinking and front-end
          execution: taking ambiguous ideas, shaping the user flow, and
          building the thing with enough care that it is easy to maintain
          after launch.
        </p>
      </div>

      <div className="timeline" aria-label="Experience timeline">
        {timeline.map((item) => (
          <article className="timeline-item" key={item.title}>
            <span>{item.period}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
