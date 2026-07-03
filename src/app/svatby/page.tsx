import Link from "next/link";
import { CalendarCheck, Heart, MapPin, Utensils, Users } from "lucide-react";
import { PublicPage } from "@/components/public-page";

const weddingHighlights = [
  {
    icon: MapPin,
    title: "Praha, ale v klidu u vody",
    text: "The Botel kotvi u reky kousek od centra, ale s pocitem soukromi, klidne hladiny a zeleneho okoli.",
  },
  {
    icon: Heart,
    title: "Obrad na The Sun Deck",
    text: "Slunecni paluba je prirozene misto pro svatebni obrad, welcome drink i prvni spolecne fotky.",
  },
  {
    icon: Utensils,
    title: "Hostina venku i uvnitr",
    text: "Svatebni menu muze navazat na The River, palubni servis, The Deck a vecerni barovy provoz.",
  },
];

const capacities = [
  { label: "The Sun Deck", value: "az 250", note: "hostu pro obrad a palubni program" },
  { label: "Hostina", value: "az 140", note: "hostu podle zvoleneho usporadani" },
  { label: "Ubytovani", value: "az 68", note: "hostu primo na lodi" },
  { label: "Parkovani", value: "az 50", note: "mist podle aktualni dohody" },
];

const weddingFlow = [
  "Obrad na slunecni palube The Sun Deck",
  "Hostina v The River nebo ve vnitrnich prostorach",
  "Vecerni bar v The Deck, The Horizon nebo The AFT",
  "Ubytovani hostu primo v kajutach The Botel",
];

export default function WeddingsPage() {
  return (
    <PublicPage
      eyebrow="Svatby na vode"
      title="Reknete si ano na palube The Botel"
      description="Romantika lodi a hotelu v jednom: obrad na slunecni palube, hostina u vody, bar, ubytovani a zkuseny eventovy servis."
    >
      <section className="page-section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Svatebni scenar</span>
            <h2>Jeden den, jedna lod, vse pohromade</h2>
          </div>
          <p>
            Na jednom miste muze byt obrad, hostina, bar, nocni program i ubytovani hostu. Pri spatnem
            pocasi lze program presunout do vnitrnich prostor.
          </p>
        </div>

        <div className="card-grid">
          {weddingHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <article className="feature-card" key={item.title}>
                <Icon size={26} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p className="muted">{item.text}</p>
              </article>
            );
          })}
        </div>

        <div className="wedding-layout">
          <article className="feature-card wedding-panel">
            <span className="eyebrow">Prubeh dne</span>
            <h2>Od obradu po svatebni noc</h2>
            <ul className="check-list">
              {weddingFlow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="feature-card wedding-panel">
            <span className="eyebrow">Kapacity</span>
            <h2>Orientacni vybaveni botelu</h2>
            <div className="capacity-grid">
              {capacities.map((item) => (
                <div className="capacity-item" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                  <p>{item.note}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="event-cta">
          <div>
            <span className="eyebrow">Poptavka svatby</span>
            <h2>Naplanovat termin a rozsah</h2>
            <p>
              Pro dalsi krok pripravime formular pro pocet hostu, termin, styl hostiny, ubytovani a barovy servis.
              Zatim vedeme poptavku pres kontakt.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="button" href="/kontakt">
              <CalendarCheck size={18} aria-hidden="true" />
              Poptat svatbu
            </Link>
            <Link className="button secondary light" href="/galerie">
              <Users size={18} aria-hidden="true" />
              Projit fotky
            </Link>
          </div>
        </div>
      </section>
    </PublicPage>
  );
}
