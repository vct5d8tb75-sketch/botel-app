import Link from "next/link";
import type { CSSProperties } from "react";
import { CalendarCheck, HeartHandshake } from "lucide-react";
import { PublicHeader } from "@/components/public-header";
import { RoomCard } from "@/components/room-card";
import { crewMembers } from "@/lib/crew-assets";
import { formatPhotoNumber } from "@/lib/photo-index";
import { rooms } from "@/lib/mock-data";
import { publicAsset } from "@/lib/site-assets";

const departmentLogos = [
  { name: "River", label: "Snidane & restaurace", href: "/restaurace", hasWaves: true },
  { name: "AFT", label: "Bar na zadni palube", href: "/restaurace", hasWaves: true },
  { name: "Salon", label: "Hlavni spolecenska mistnost", href: "/eventy" },
  { name: "Sun Deck", label: "Slunecni terasa", href: "/terasa" },
  { name: "Horizon", label: "Up deck bar", href: "/terasa" },
  { name: "Deck", label: "Hlavni bar", href: "/restaurace" },
];

export default function HomePage() {
  const heroImage = "/homepage-hero-river.jpg?v=2";
  const storyImage = "/homepage-deck-event.jpg";
  const crewImage = crewMembers[0].src as `/${string}`;
  const heroStyle = {
    "--hero-image": `url("${publicAsset(heroImage)}")`,
  } as CSSProperties;

  return (
    <main className="site-shell">
      <PublicHeader />
      <section className="hero" style={heroStyle}>
        <span className="photo-number" aria-hidden="true">{formatPhotoNumber(heroImage)}</span>
        <div className="hero-inner">
          <div className="hero-logo-panel">
            <img className="hero-logo" src={publicAsset("/botel-logo-negative.png")} alt="The Botel" />
          </div>
          <span className="eyebrow">Boutique hotel na vode</span>
          <p>
            Premium pobyt na rece, horni paluba pro vecery nad mestem a provozni system pripraveny pro
            obsazenost, rezervace, restauraci, bar i reporting majiteli.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/kontakt">
              <CalendarCheck size={18} aria-hidden="true" />
              Rezervace
            </Link>
          </div>
        </div>
      </section>

      <section className="section photo-section">
        <div className="section-inner photo-story">
          <div className="photo-copy">
            <span className="eyebrow">Na vode v Praze</span>
            <h2>The Botel na rytmu reky</h2>
            <p>
              Realny pohled na kotviste, terasu a lod tvori zaklad vizualu pro prezentacni web,
              fotogalerii i budouci kampane.
            </p>
          </div>
          <div className="photo-frame">
            <img
              className="wide-photo"
              src={publicAsset(storyImage)}
              alt="Event na The Botel"
            />
            <span className="photo-number" aria-hidden="true">{formatPhotoNumber(storyImage)}</span>
          </div>
        </div>
      </section>

      <section className="section crew-section">
        <div className="section-inner crew-story">
          <div className="crew-portrait-wrap">
            <img
              className="crew-portrait"
              src={publicAsset(crewImage)}
              alt={crewMembers[0].name}
            />
            <span className="photo-number" aria-hidden="true">{formatPhotoNumber(crewImage)}</span>
          </div>
          <div className="crew-copy">
            <span className="eyebrow">Posadka The Botel</span>
            <h2>Osobni hostitel na palube</h2>
            <p>
              The Botel ma pusobit osobne, kultivovane a provozne spolehlive. Fotky posadky budou
              drzet jednotny vizual pro recepci, eventy, restauraci i interni system.
            </p>
            <div className="crew-card">
              <strong>{crewMembers[0].name}</strong>
              <span>{crewMembers[0].role}</span>
              <p>{crewMembers[0].note}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <span className="eyebrow">Kajuty a suite</span>
              <h2>Ubytovani s vyhledem na vodu</h2>
            </div>
            <p>
              Prvni verze pocita s prezentaci pokoju, napojenim na rezervace a stejnymi daty pro interni
              provozni pohled.
            </p>
          </div>
          <div className="card-grid">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="section-inner">
          <div className="event-cta">
            <div>
              <span className="eyebrow">Nadacni fond The Botel</span>
              <h2>Ubytovani pro pacienty Protonoveho centra</h2>
              <p>
                Pripravujeme podporene ubytovani pro pacienty a jejich doprovod behem lecby v Praze.
                Stranka slouzi jako zaklad pro poptavky, pravidla podpory a budouci formular.
              </p>
            </div>
            <div className="cta-actions">
              <Link className="button" href="/nadacni-fond">
                <HeartHandshake size={18} aria-hidden="true" />
                Otevrit fond
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section brand-section">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <span className="eyebrow">Zony The Botel</span>
              <h2>Prostory a bary The Botel</h2>
            </div>
            <p>
              Jasne pojmenovani pro snidane, bary, spolecenskou mistnost, slunecni terasu a horni palubu.
            </p>
          </div>
          <div className="department-logo-grid">
            {departmentLogos.map((item) => (
              <Link className="department-logo-card" href={item.href} key={item.name}>
                <span className="department-logo" aria-label={`The ${item.name} ${item.label}`}>
                  <span className="the">The</span>
                  <span className="name">{item.name}</span>
                  <span className="sub">{item.label}</span>
                  {item.hasWaves ? <span className="wave-mark" aria-hidden="true" /> : null}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
