import type { CSSProperties } from "react";
import { PublicHeader } from "./public-header";
import { formatPhotoNumber } from "@/lib/photo-index";
import { publicAsset } from "@/lib/site-assets";

interface PublicPageProps {
  title: string;
  eyebrow: string;
  description: string;
  children: React.ReactNode;
}

export function PublicPage({ title, eyebrow, description, children }: PublicPageProps) {
  const heroImage = "/marina-gallery/12.jpg";
  const photoNumber = formatPhotoNumber(heroImage);
  const heroStyle = {
    "--page-hero-image": `url("${publicAsset(heroImage)}")`,
  } as CSSProperties;

  return (
    <main className="site-shell">
      <PublicHeader />
      <section className="page-hero" style={heroStyle}>
        {photoNumber ? <span className="photo-number" aria-hidden="true">{photoNumber}</span> : null}
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
