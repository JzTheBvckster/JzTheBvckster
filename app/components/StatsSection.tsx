import { stats } from "../data/portfolio";

export function StatsSection() {
  return (
    <section className="stats-grid section-shell" aria-label="Highlights">
      {stats.map((item) => (
        <article className="stat-card" key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </section>
  );
}
