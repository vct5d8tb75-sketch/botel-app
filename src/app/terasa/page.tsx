import { PublicPage } from "@/components/public-page";

export default function TerracePage() {
  return (
    <PublicPage
      eyebrow="Horni paluba"
      title="Terasa pro zapady slunce, drinky a privatni eventy"
      description="Horni paluba je hlavni zazitek The Botel a prirozene misto pro bar, brunch i vecerni pronajmy."
    >
      <section className="page-section">
        <div className="card-grid">
          {["Sunset lounge", "Private dining", "Letni bar"].map((item) => (
            <article className="feature-card" key={item}>
              <h3>{item}</h3>
              <p className="muted">Prostor pro fotky, kapacity, ceniky a rezervacni poptavky.</p>
            </article>
          ))}
        </div>
      </section>
    </PublicPage>
  );
}
