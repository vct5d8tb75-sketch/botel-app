import { PublicHeader } from "./public-header";

interface PublicPageProps {
  title: string;
  eyebrow: string;
  description: string;
  children: React.ReactNode;
}

export function PublicPage({ title, eyebrow, description, children }: PublicPageProps) {
  return (
    <main className="site-shell">
      <PublicHeader />
      <section className="page-hero">
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
