import { BadgeCheck } from "lucide-react";
import type { ReactNode } from "react";

export function ServiceList({
  services,
  trailingItem
}: Readonly<{
  services: string[];
  trailingItem?: ReactNode;
}>) {
  return (
    <div className="service-list">
      {services.map((service) => (
        <div className="service-pill" key={service}>
          <BadgeCheck size={20} aria-hidden="true" />
          <span>{service}</span>
        </div>
      ))}
      {trailingItem}
    </div>
  );
}
