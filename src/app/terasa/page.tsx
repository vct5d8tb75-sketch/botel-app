import { PublicPage } from "@/components/public-page";
import { formatPhotoNumber } from "@/lib/photo-index";
import { publicAsset } from "@/lib/site-assets";

const terraceZones = [
  {
    name: "The Sun Deck",
    text: "Slunecni terasa na horni palube pro denni posezeni, soukrome rezervace, aperitiv a vyhled na reku.",
  },
  {
    name: "Sun Deck bar",
    text: "Letni bar primo na horni palube pro drinky, servis k lounge sezeni a vecerni provoz nad rekou.",
  },
  {
    name: "Horni paluba",
    text: "Prostor pro lounge sezeni, fotky, privatni akce, svatby a rezervacni poptavky.",
  },
];

const terracePhotos = [
  {
    src: "/terrace-sun-deck.jpg",
    eyebrow: "The Sun Deck",
    title: "Letni lounge sezeni nad rekou",
    text: "Terasa je pripravena pro pohodlne denni sezeni, aperitiv, kavu i vecerni program. Doplnene fotky ukazuji realny smer atmosfery s hosty.",
  },
  {
    src: "/terrace-sun-deck-bar.jpg",
    eyebrow: "Sun Deck bar",
    title: "Barovy servis primo na horni palube",
    text: "Sun Deck bar navazuje na terasu a umozni rychly servis drinku bez presunu hostu do interieru. Fotka je pripravena jako prvni vizual pro spusteni baru.",
  },
];

export default function TerracePage() {
  return (
    <PublicPage
      eyebrow="Horni paluba"
      title="The Sun Deck a Sun Deck bar"
      description="Horni paluba The Botel se slunecni terasou The Sun Deck a barem Sun Deck bar pro posezeni nad rekou."
    >
      <section className="page-section terrace-page">
        <div className="section-head">
          <div>
            <span className="eyebrow">Paluba s obsluhou</span>
            <h2>Posezeni, drinky a vyhled na hladinu</h2>
          </div>
          <p>
            The Sun Deck je hlavni venkovni terasa pro hosty. Sun Deck bar doplnuje servis pro denni
            posezeni, zapady slunce i privatni akce.
          </p>
        </div>

        <div className="terrace-photo-grid">
          {terracePhotos.map((photo) => (
            <article className="terrace-photo-card" key={photo.src}>
              <figure>
                <img src={publicAsset(photo.src as `/${string}`)} alt={photo.title} />
                <span className="photo-number" aria-hidden="true">{formatPhotoNumber(photo.src)}</span>
              </figure>
              <div>
                <span className="eyebrow">{photo.eyebrow}</span>
                <h2>{photo.title}</h2>
                <p>{photo.text}</p>
              </div>
            </article>
          ))}
        </div>

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
