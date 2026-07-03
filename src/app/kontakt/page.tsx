import { Mail, MapPin, Phone } from "lucide-react";
import { PublicPage } from "@/components/public-page";

export default function ContactPage() {
  return (
    <PublicPage
      eyebrow="Kontakt a rezervace"
      title="Rezervace pobytu, stolu nebo eventu"
      description="Prvni verze pocita s kontaktnim rozcestnikem. Pozdeji se doplni rezervacni engine a formular."
    >
      <section className="page-section">
        <div className="card-grid">
          <article className="feature-card">
            <Phone size={24} aria-hidden="true" />
            <h3>Telefon</h3>
            <p className="muted">+420 000 000 000</p>
          </article>
          <article className="feature-card">
            <Mail size={24} aria-hidden="true" />
            <h3>E-mail</h3>
            <p className="muted">rezervace@botel-app.cz</p>
          </article>
          <article className="feature-card">
            <MapPin size={24} aria-hidden="true" />
            <h3>Adresa</h3>
            <p className="muted">Praha, nabrezi Vltavy</p>
          </article>
        </div>
      </section>
    </PublicPage>
  );
}
