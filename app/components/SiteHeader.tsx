"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "../data/portfolio";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header app-header">
      <Link className="brand-mark" href="/" aria-label={`${profile.name} home`}>
        JZ
      </Link>
      <nav className="primary-nav" aria-label="Primary navigation">
        {navItems.map((item) => {
          const isCurrent = pathname === item.href;

          return (
            <Link
              aria-current={isCurrent ? "page" : undefined}
              className={isCurrent ? "is-current" : undefined}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
