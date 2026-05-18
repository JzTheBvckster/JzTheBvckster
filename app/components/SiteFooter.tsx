import { Github, Linkedin, Mail, MapPin, MessageCircle, Zap } from "lucide-react";
import { profile } from "../data/portfolio";

export function SiteFooter() {
  return (
    <footer className="section-shell contact-band site-footer" aria-labelledby="footer-contact-heading">
      <div>
        <p className="eyebrow">Contact</p>
        <h2 id="footer-contact-heading">Have a product idea that needs a strong web surface?</h2>
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
        <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">
          <Github size={20} aria-hidden="true" />
          GitHub
        </a>
        <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={20} aria-hidden="true" />
          LinkedIn
        </a>
        <a className="button button-secondary" href={`mailto:${profile.email}`}>
          <Mail size={20} aria-hidden="true" />
          Email
        </a>
        <a
          className="button button-whatsapp"
          href={`https://wa.me/${profile.whatsapp.replace(/\+/g, "")}`}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={20} aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </footer>
  );
}
