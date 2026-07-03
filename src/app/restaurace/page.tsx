import { PublicPage } from "@/components/public-page";

export default function RestaurantPage() {
  return (
    <PublicPage
      eyebrow="Restaurace a bar"
      title="Ranni kava, vecerni bar a jidlo s vyhledem na reku"
      description="Sekce pripravená pro menu, oteviraci dobu, barovy sklad a pozdejsi napojeni na Dotykacku."
    >
      <section className="page-section">
        <div className="card-grid">
          {["Snídane pro hosty", "Bar na horni palube", "Firemni catering"].map((item) => (
            <article className="feature-card" key={item}>
              <h3>{item}</h3>
              <p className="muted">Ukazkovy obsah pro prvni verzi prezentace a budoucí provozni data.</p>
            </article>
          ))}
        </div>
      </section>
    </PublicPage>
  );
}
