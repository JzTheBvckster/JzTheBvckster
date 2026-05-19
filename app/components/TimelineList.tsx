import type { TimelineItem } from "../data/portfolio";

export function TimelineList({
  headingLevel = 3,
  items
}: Readonly<{
  headingLevel?: 2 | 3;
  items: TimelineItem[];
}>) {
  const Heading = `h${headingLevel}` as const;

  return (
    <div className="timeline" aria-label="Experience timeline">
      <div className="timeline-heading">
        <p className="eyebrow">Timeline</p>
        <h2>How the pattern formed</h2>
      </div>
      {items.map((item) => (
        <article className="timeline-item" key={item.title}>
          <span>{item.period}</span>
          <div>
            <Heading>{item.title}</Heading>
            <p>{item.detail}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
