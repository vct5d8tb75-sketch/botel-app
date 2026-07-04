import Link from "next/link";
import { CalendarCheck, Heart, MapPin, Phone, Sparkles, Utensils } from "lucide-react";
import { PublicPage } from "@/components/public-page";
import { publicAsset } from "@/lib/site-assets";

const weddingHighlights = [
  {
    icon: MapPin,
    title: "Praha, ale v obklopeni prirody",
    text: "Kotvime u Libenskeho mostu: blizko centra, ale v soukromi, bez davu a s vyhledem na klidnou hladinu reky.",
  },
  {
    icon: Heart,
    title: "Obrad na The Sun Deck",
    text: "Slunecni paluba unese velky obrad, welcome drink, gratulace i prvni fotografie s Vltavou v pozadi.",
  },
  {
    icon: Utensils,
    title: "Hostina, bar i ubytovani",
    text: "Jeden provoz pro cely den: obrad, hostina, barovy vecer, apartma pro novomanzele i pokoje pro hosty.",
  },
];

const capacities = [
  { label: "The Sun Deck", value: "az 250", note: "hostu pro obrad a palubni program" },
  { label: "Hostina", value: "az 140", note: "hostu podle zvoleneho usporadani" },
  { label: "Ubytovani", value: "az 68", note: "hostu primo na lodi" },
  { label: "Luzka", value: "62", note: "v pokojich a kajutach The Botel" },
  { label: "Pokoje", value: "40", note: "vcetne zazemi pro novomanzele" },
  { label: "Parkovani", value: "az 50", note: "mist podle aktualni dohody" },
];

const weddingFlow = [
  "Priprava, dekorace a koordinace hostu eventovym tymem",
  "Obrad na slunecni palube The Sun Deck s vyhledem na reku",
  "Hostina v The River, The Salon nebo ve vnitrnich prostorach pri spatnem pocasi",
  "Vecerni bar v The Deck, The Horizon nebo The AFT",
  "Ubytovani hostu primo v pokojich a kajutach The Botel",
];

const weddingGallery = [
  { src: "/weddings/wedding-02.jpg", label: "02", title: "Prvni chvile po obradu" },
  { src: "/weddings/wedding-03.jpg", label: "03", title: "Svatebni obrad na palube" },
  { src: "/weddings/wedding-05.jpg", label: "05", title: "Svatebni dort u vody" },
  { src: "/weddings/wedding-06.jpg", label: "06", title: "Atmosfera palubni oslavy" },
];

export default function WeddingsPage() {
  return (
    <PublicPage
      eyebrow="Svatby na vode"
      title="Reknete si ano na vode"
      description="Svatba na Vltave s obradni palubou, hostinou, barem, ubytovanim a koordinaci celeho dne na jednom miste."
    >
      <section className="page-section wedding-page">
        <div className="wedding-hero-story">
          <div className="wedding-copy">
            <span className="eyebrow">Svatba na Vltave</span>
            <h2>Romantika lodi a hotelu v jednom</h2>
            <p>
              Chcete mit svatbu v Praze, ale zaroven touzite po klidu, vode a prirode? The Botel spojuje
              obrad, hostinu, bar i ubytovani do jednoho plynuleho svatebniho dne.
            </p>
            <p>
              O hladky prubeh se postara zkuseny eventovy tym. Pripravi prostor, navaznost programu,
              servis pro hosty i zalozni variantu pro pripad spatneho pocasi.
            </p>
          </div>
          <figure className="wedding-photo-frame">
            <span className="photo-number">01</span>
            <img
              className="wedding-photo"
              src={publicAsset("/weddings/wedding-01.jpg")}
              alt="Svatebni obrad na palube The Botel u Vltavy"
            />
            <figcaption>Obrad na palube s rekou jako prirozenou kulisou.</figcaption>
          </figure>
        </div>

        <div className="section-head">
          <div>
            <span className="eyebrow">Proc The Botel</span>
            <h2>Jeden den, jedna lod, vse pohromade</h2>
          </div>
          <p>
            Lod muze byt na vas svatebni den cela jen vase. Diky poloze u reky nerusite okoli a vecerni
            program muze prirozene pokracovat do pozdejsich hodin.
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

        <div className="wedding-ring-section">
          <figure className="wedding-photo-frame wedding-ring-photo">
            <span className="photo-number">04</span>
            <img
              className="wedding-photo"
              src={publicAsset("/weddings/wedding-04.jpg")}
              alt="Emotivni svatebni moment s prstynkem novomanzelu"
            />
          </figure>
          <div className="wedding-ring-copy">
            <span className="eyebrow">Ritual prstynku</span>
            <h2>Okamzik, ktery zustane na cely zivot</h2>
            <p>
              Vymena prstynku patri k nejintimnejsim chvilim celeho dne. Na palube ji doplni voda,
              svetlo, soukromi a prirozena kulisa Prahy bez zbytecneho ruchu mesta.
            </p>
            <p>
              Tenhle blok nechavame jako hlavni emotivni misto svatebni stranky. Fotku prstynku muzeme
              pozdeji vymenit za detail z vaseho vlastniho foceni.
            </p>
          </div>
        </div>

        <div className="wedding-layout">
          <article className="feature-card wedding-panel">
            <span className="eyebrow">Prubeh dne</span>
            <h2>Od pripravy po svatebni noc</h2>
            <ul className="check-list">
              {weddingFlow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="feature-card wedding-panel">
            <span className="eyebrow">Kapacity</span>
            <h2>Vybaveni pro velky den</h2>
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

        <div className="wedding-gallery-strip">
          {weddingGallery.map((item) => (
            <figure className="wedding-gallery-item" key={item.src}>
              <span className="photo-number">{item.label}</span>
              <img src={publicAsset(item.src as `/${string}`)} alt={item.title} />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>

        <div className="event-cta">
          <div>
            <span className="eyebrow">Poptavka svatby</span>
            <h2>Naplanujme vas velky den</h2>
            <p>
              Poslete termin, pocet hostu a predstavu programu. Milan vam pomuze sladit obrad, hostinu,
              bar, ubytovani i technicke zazemi.
            </p>
            <div className="wedding-contact-list">
              <a href="tel:+420602307586">+420 602 307 586</a>
              <a href="mailto:milan.gojda@thebotel.cz">milan.gojda@thebotel.cz</a>
            </div>
          </div>
          <div className="cta-actions">
            <Link className="button" href="/kontakt">
              <CalendarCheck size={18} aria-hidden="true" />
              Poptat svatbu
            </Link>
            <a className="button secondary light" href="tel:+420602307586">
              <Phone size={18} aria-hidden="true" />
              Zavolat
            </a>
            <Link className="button secondary light" href="/galerie">
              <Sparkles size={18} aria-hidden="true" />
              Projit fotky
            </Link>
          </div>
        </div>
      </section>
    </PublicPage>
  );
}
