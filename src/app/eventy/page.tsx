import { PublicPage } from "@/components/public-page";

const eventSpaces = [
  {
    name: "The Salon",
    text: "Hlavni spolecenska mistnost v prvnim patre pro konference, oslavy, prezentace a vecerni program.",
  },
  {
    name: "The Sun Deck",
    text: "Slunecni paluba pro welcome drink, obrad, networking nebo vecerni posezeni nad rekou.",
  },
  {
    name: "The River a The Deck",
    text: "Restaurace, hlavni bar a palubni servis pro hostiny, firemni catering a privatni bar.",
  },
];

export default function EventsPage() {
  return (
    <PublicPage
      eyebrow="Akce a eventy"
      title="Eventy, oslavy a pronajmy na vode"
      description="The Botel umi propojit interier, paluby, restauraci, bar a ubytovani do jednoho mista pro firemni i soukrome akce."
    >
      <section className="page-section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Prostory pro akce</span>
            <h2>Od snidane po vecerni bar</h2>
          </div>
          <p>
            Zaklad vychazi ze svatebni a eventove nabidky puvodniho botelu: klidna lokalita u reky,
            paluby, vnitri sal, gastronomie, bar a moznost ubytovani hostu.
          </p>
        </div>
        <div className="card-grid">
          {eventSpaces.map((space) => (
            <article className="feature-card" key={space.name}>
              <h3>{space.name}</h3>
              <p className="muted">{space.text}</p>
            </article>
          ))}
        </div>
        <div className="event-cta">
          <div>
            <span className="eyebrow">Svatby</span>
            <h2>Samostatna svatebni nabidka</h2>
            <p>
              Pro svatby je pripravena oddelena stranka s obradni palubou, hostinou, kapacitami,
              ubytovanim a kontaktem pro poptavku.
            </p>
          </div>
          <a className="button" href="/svatby">Otevrit svatby</a>
        </div>
      </section>
    </PublicPage>
  );
}
