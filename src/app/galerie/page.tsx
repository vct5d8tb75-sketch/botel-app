import { PublicPage } from "@/components/public-page";

export default function GalleryPage() {
  return (
    <PublicPage
      eyebrow="Fotogalerie"
      title="Atmosfera boutique hotelu, vody a Prahy"
      description="Galerie je pripravena pro realne fotografie kajut, restaurace, baru, terasy a eventu."
    >
      <section className="page-section">
        <div className="card-grid">
          {["Kajuty", "Restaurace", "Horni paluba", "Eventy", "Vyhledy", "Detail interieru"].map((item) => (
            <article className="feature-card" key={item}>
              <h3>{item}</h3>
              <p className="muted">Misto pro napojeni na realne fotografie nebo CMS.</p>
            </article>
          ))}
        </div>
      </section>
    </PublicPage>
  );
}
