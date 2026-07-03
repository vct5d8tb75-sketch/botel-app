import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, CalendarCheck, ShipWheel, Sparkles } from "lucide-react";
import { PublicHeader } from "@/components/public-header";
import { RoomCard } from "@/components/room-card";
import { crewMembers } from "@/lib/crew-assets";
import { rooms } from "@/lib/mock-data";
import { publicAsset } from "@/lib/site-assets";

const departmentLogos = [
  { name: "River", label: "Bar", href: "/restaurace", hasWaves: true },
  { name: "Deck", label: "Restaurant", href: "/restaurace" },
  { name: "Horizon", label: "Up Deck Bar", href: "/terasa" },
  { name: "Float", label: "Eventy", href: "/eventy" },
  { name: "Aft", label: "By The Botel", href: "/eventy", hasWaves: true },
];

export default function HomePage() {
  const heroStyle = {
    "--hero-image": `url("${publicAsset("/marina-gallery/11.jpg")}")`,
  } as CSSProperties;

  return (
    <main className="site-shell">
      <PublicHeader />
      <section className="hero" style={heroStyle}>
        <div className="hero-inner">
          <div className="hero-logo-panel">
            <img className="hero-logo" src={publicAsset("/botel-logo.jpg")} alt="The Botel" />
          </div>
          <span className="eyebrow">Boutique hotel na vode</span>
          <h1>The Botel</h1>
          <p>
            Premium pobyt na rece, horni paluba pro vecery nad mestem a provozni system pripraveny pro
            obsazenost, rezervace, restauraci, bar i reporting majiteli.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/kontakt">
              <CalendarCheck size={18} aria-hidden="true" />
              Rezervace
            </Link>
            <Link className="button secondary" href="/admin">
              Otevrit dashboard
              <ArrowRight size={18} aria-hidden="true" />
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
          <img
            className="wide-photo"
            src={publicAsset("/marina-gallery/09.jpg")}
            alt="Event na The Botel"
          />
        </div>
      </section>

      <section className="section crew-section">
        <div className="section-inner crew-story">
          <div className="crew-portrait-wrap">
            <img
              className="crew-portrait"
              src={publicAsset(crewMembers[0].src as `/${string}`)}
              alt={crewMembers[0].name}
            />
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

      <section className="section brand-section">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <span className="eyebrow">Zony The Botel</span>
              <h2>Logo system pro provozni casti</h2>
            </div>
            <p>
              Zaklad vizualni identity pro bar, restauraci, horni palubu, eventy a zadni cast The Botel.
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

      <section className="section dark">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <span className="eyebrow">Provoz a majitel</span>
              <h2>Jeden prehled pro The Botel</h2>
            </div>
            <p>
              Admin cast je navrzena pro rezervace, housekeeping, udrzbu, trzby, naklady, personal a
              budouci integrace na hotelove a pokladni systemy.
            </p>
          </div>
          <div className="card-grid">
            <article className="feature-card">
              <ShipWheel size={28} aria-hidden="true" />
              <h3>Recepce a obsazenost</h3>
              <p className="muted">Rychly denni pohled na prijezdy, odjezdy, stav pokoju a zdroje rezervaci.</p>
            </article>
            <article className="feature-card">
              <Sparkles size={28} aria-hidden="true" />
              <h3>Housekeeping a udrzba</h3>
              <p className="muted">Ukoly pro uklid, inspekce kajut a servisni tikety pro paluby i techniku.</p>
            </article>
            <article className="feature-card">
              <CalendarCheck size={28} aria-hidden="true" />
              <h3>Trzby a reporty</h3>
              <p className="muted">Zaklad pro provozni cisla z ubytovani, baru, restaurace a eventu.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
