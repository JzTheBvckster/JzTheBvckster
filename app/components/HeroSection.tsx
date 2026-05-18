import { Github, Linkedin, Mail, MapPin, Sparkles, Terminal, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";

function ExternalLink({
  href,
  children,
  variant = "primary",
}: Readonly<{
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}>) {
  return (
    <a
      className={`button button-${variant}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <ArrowUpRight size={20} aria-hidden="true" />
    </a>
  );
}

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

        <div className="hero-actions" aria-label="Contact and social links">
          <a
            className="button button-primary"
            href={`mailto:${profile.email}`}
          >
            <Mail size={20} aria-hidden="true" />
            Email me
          </a>
          <ExternalLink href={profile.github} variant="secondary">
            <Github size={20} aria-hidden="true" />
            GitHub
          </ExternalLink>
          <ExternalLink href={profile.linkedin} variant="secondary">
            <Linkedin size={20} aria-hidden="true" />
            LinkedIn
          </ExternalLink>
        </div>
      </div>

      <aside className="hero-card" aria-label="Profile summary">
        <div className="avatar-block" aria-hidden="true">
          <span>JZ</span>
        </div>
        <div>
          <p className="eyebrow">{profile.role}</p>
          <h2>React, Next.js, product craft.</h2>
        </div>
        <p className="location">
          <MapPin size={18} aria-hidden="true" />
          {profile.location}
        </p>
        <div className="mini-terminal">
          <Terminal size={18} aria-hidden="true" />
          <code>npm run build-and-ship</code>
        </div>
      </aside>
    </section>
  );
}
