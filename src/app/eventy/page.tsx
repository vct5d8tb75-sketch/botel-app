import { PublicPage } from "@/components/public-page";

const eventSpaces = [
  {
    name: "The Samon",
    text: "Hlavni spolecenska mistnost v prvnim patre pro setkani, oslavy a firemni program.",
  },
  {
    name: "Privatni eventy",
    text: "Balicky pro firmy, oslavy, prezentace a komorni svatby primo na rece.",
  },
  {
    name: "Palubni servis",
    text: "Moznost propojeni s The River, The Deck, The AFT a hornimi palubami.",
  },
];

export default function EventsPage() {
  return (
    <PublicPage
      eyebrow="Akce a eventy"
      title="The Samon a eventy na vode"
      description="The Samon bude hlavni spolecenska mistnost The Botel pro akce, prezentace, oslavy a vecerni program."
    >
      <section className="page-section">
        <div className="card-grid">
          {eventSpaces.map((space) => (
            <article className="feature-card" key={space.name}>
              <h3>{space.name}</h3>
              <p className="muted">{space.text}</p>
            </article>
          ))}
        </div>
      </section>
    </PublicPage>
  );
}
