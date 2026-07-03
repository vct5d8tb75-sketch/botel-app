import { PublicPage } from "@/components/public-page";

export default function EventsPage() {
  return (
    <PublicPage
      eyebrow="Akce a eventy"
      title="Firemni akce, oslavy a komorni svatby primo na rece"
      description="Stranka je pripravena pro eventove balicky, poptavkovy formular a kalendar dostupnosti."
    >
      <section className="page-section">
        <div className="card-grid">
          {["Firemni setkani", "Soukrome oslavy", "Launch eventy"].map((item) => (
            <article className="feature-card" key={item}>
              <h3>{item}</h3>
              <p className="muted">Ukazkova karta typu eventu s prostorem pro kapacitu, sluzby a cenu.</p>
            </article>
          ))}
        </div>
      </section>
    </PublicPage>
  );
}
