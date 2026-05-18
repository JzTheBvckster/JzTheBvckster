import "./globals.css";
import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Product-minded developer",
    template: "%s | Portfolio"
  },
  description:
    "A neobrutalist portfolio for a developer building fast, accessible, human-centered web products.",
  openGraph: {
    title: "Portfolio | Product-minded developer",
    description:
      "A neobrutalist portfolio for a developer building fast, accessible, human-centered web products.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${spaceGrotesk.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
