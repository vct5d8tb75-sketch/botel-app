import { PublicPage } from "@/components/public-page";

const venues = [
  {
    name: "The River",
    text: "Hlavni restaurace pro snidane hostu a denni provoz u vody.",
  },
  {
    name: "The Deck",
    text: "Hlavni bar The Botel pro vecerni provoz, drinky a setkani.",
  },
  {
    name: "The AFT",
    text: "Bar na zadni palube pro klidne posezeni, eventy a privatni servis.",
  },
];

export default function RestaurantPage() {
  return (
    <PublicPage
      eyebrow="Restaurace a bar"
      title="The River, The Deck a The AFT"
      description="Jidelni a barova cast The Botel: snidane v The River, hlavni bar The Deck a zadni paluba The AFT."
    >
      <section className="page-section">
        <div className="card-grid">
          {venues.map((venue) => (
            <article className="feature-card" key={venue.name}>
              <h3>{venue.name}</h3>
              <p className="muted">{venue.text}</p>
            </article>
          ))}
        </div>
      </section>
    </PublicPage>
  );
}
