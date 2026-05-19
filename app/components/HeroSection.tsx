import Link from "next/link";
import { ArrowRight, MapPin, Sparkles, Terminal } from "lucide-react";
import { profile } from "../data/portfolio";

export function HeroSection() {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <p className="stamp">
          <Sparkles size={18} aria-hidden="true" />
          Available for selected work
        </p>
        <h1>I build loud, useful web products.</h1>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions" aria-label="Primary actions">
          <Link href="/work" className="button button-primary">
            View selected work
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
          <Link href="/services" className="button button-secondary">
            See services
          </Link>
        </div>
      </div>

      <aside className="hero-card" aria-label="Profile summary">
        <div className="avatar-block" aria-hidden="true">
          <span>{profile.name}</span>
        </div>
        <div>
          <p className="eyebrow">{profile.role}</p>
          <h2>{profile.name} builds with React, Next.js, and product craft.</h2>
        </div>
        <p className="location">
          <MapPin size={18} aria-hidden="true" />
          {profile.location}
        </p>
        <dl className="hero-proof-list">
          <div>
            <dt>Focus</dt>
            <dd>Dashboards, workflows, and role-based tools</dd>
          </div>
          <div>
            <dt>Mode</dt>
            <dd>Product thinking through shipped implementation</dd>
          </div>
        </dl>
        <div className="mini-terminal">
          <Terminal size={18} aria-hidden="true" />
          <code>npm run build-and-ship</code>
        </div>
      </aside>
    </section>
  );
}
