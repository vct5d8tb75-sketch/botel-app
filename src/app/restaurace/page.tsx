import { PublicPage } from "@/components/public-page";
import { EconomyGallery } from "../pokoje/ekonomy/room-gallery";

const riverPhotos = [
  [554, "Snídaňový salónek s kulatými okny"],
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
    name: "Snídaňový salónek",
    text: "Prostor pro snídaně hostů s výhledem na vodu.",
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
      title="Snídaňový salónek, The Deck a The AFT"
      description="Snídaně ve Snídaňovém salónku, hlavní bar The Deck a zadní paluba The AFT."
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
      <section id="the-river" className="page-section" aria-label="Fotogalerie Snídaňový salónek">
        <div className="section-head">
          <div>
            <span className="eyebrow">Snídaně na vodě</span>
            <h2>Snídaňový salónek</h2>
          </div>
          <p>Prohlédněte si restauraci a snídaňový bufet. Kliknutím fotografii zvětšíte.</p>
        </div>
        <EconomyGallery photos={riverPhotos} category="Snídaňový salónek" assetDirectory="/restaurants/the-river" thumbnails={false} />
      </section>
    </PublicPage>
  );
}
