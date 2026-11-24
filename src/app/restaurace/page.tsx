import { PublicPage } from "@/components/public-page";
import { EconomyGallery } from "../pokoje/ekonomy/room-gallery";

const riverPhotos = [
  [554, "Hlavní restaurace The River s kulatými okny"],
  [555, "Stůl s květinami u kulatého okna"],
  [557, "Snídaňový bufet s ovocem a studeným občerstvením"],
  [560, "Květinová dekorace na stole v restauraci"],
  [556, "Posezení v restauraci a kávový bar"],
  [904, "Sladké pečivo na snídaňovém bufetu"],
  [563, "Teplá nabídka snídaňového bufetu"],
  [580, "Čajový koutek s konvičkami"],
  [575, "Detail sladkého pečiva a svíčky"],
] as const;

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
      <section id="the-river" className="page-section" aria-label="Fotogalerie The River">
        <div className="section-head">
          <div>
            <span className="eyebrow">Hlavní restaurace</span>
            <h2>The River</h2>
          </div>
          <p>Prohlédněte si restauraci a snídaňový bufet. Kliknutím fotografii zvětšíte.</p>
        </div>
        <EconomyGallery photos={riverPhotos} category="The River" assetDirectory="/restaurants/the-river" thumbnails={false} />
      </section>
    </PublicPage>
  );
}
