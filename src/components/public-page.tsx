import type { CSSProperties } from "react";
import { PublicHeader } from "./public-header";
import { publicAsset } from "@/lib/site-assets";

interface PublicPageProps {
  title: string;
  eyebrow: string;
  description: string;
  children: React.ReactNode;
}

export function PublicPage({ title, eyebrow, description, children }: PublicPageProps) {
  const heroStyle = {
    "--page-hero-image": `url("${publicAsset("/botel-river-wide.jpg")}")`,
  } as CSSProperties;

  return (
    <main className="site-shell">
      <PublicHeader />
      <section className="page-hero" style={heroStyle}>
        <div className="page-hero-inner">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>
      {children}
    </main>
  );
}
