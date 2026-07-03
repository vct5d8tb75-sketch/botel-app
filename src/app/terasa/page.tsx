import { PublicPage } from "@/components/public-page";

const terraceZones = [
  {
    name: "The Sun Deck",
    text: "Slunecni terasa na horni palube pro posezeni, vyhled a letni servis.",
  },
  {
    name: "The Horizon",
    text: "Up deck bar pro drinky, zapady slunce a vecerni provoz nad rekou.",
  },
  {
    name: "Horni paluba",
    text: "Prostor pro lounge sezeni, fotky, kapacity a rezervacni poptavky.",
  },
];

export default function TerracePage() {
  return (
    <PublicPage
      eyebrow="Horni paluba"
      title="The Sun Deck a The Horizon"
      description="Horni paluba The Botel se slunecni terasou The Sun Deck a barem The Horizon pro posezeni nad rekou."
    >
      <section className="page-section">
        <div className="card-grid">
          {terraceZones.map((zone) => (
            <article className="feature-card" key={zone.name}>
              <h3>{zone.name}</h3>
              <p className="muted">{zone.text}</p>
            </article>
          ))}
        </div>
      </section>
    </PublicPage>
  );
}
