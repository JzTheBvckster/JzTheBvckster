import Image from "next/image";
import { Github, Linkedin, Mail, MapPin, Zap } from "lucide-react";
import { profile } from "../data/portfolio";

const socialLinks = [
  {
    label: "GitHub",
    href: profile.github,
    icon: <Github size={22} aria-hidden="true" />,
    external: true
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: <Linkedin size={22} aria-hidden="true" />,
    external: true
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: <Mail size={22} aria-hidden="true" />
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${profile.whatsapp.replace(/\+/g, "")}`,
    icon: <Image src="/social/whatsapp.svg" alt="" width={24} height={24} />,
    external: true
  }
];

export function SiteFooter() {
  return (
    <footer className="section-shell contact-band site-footer" aria-labelledby="footer-contact-heading">
      <div>
        <p className="eyebrow">Contact</p>
        <h2 id="footer-contact-heading">Work with {profile.name} on a strong web surface.</h2>
        <p className="footer-contact-line">
          <MapPin size={18} aria-hidden="true" />
          {profile.location}
        </p>
      </div>
      <div className="footer-actions" aria-label="Contact and social links">
        <a className="button button-primary" href={`mailto:${profile.email}`}>
          <Zap size={20} aria-hidden="true" />
          Start a conversation
        </a>
        <div className="social-icon-row">
          {socialLinks.map((link) => (
            <a
              aria-label={link.label}
              className="social-icon-link"
              href={link.href}
              key={link.label}
              rel={link.external ? "noreferrer" : undefined}
              target={link.external ? "_blank" : undefined}
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
