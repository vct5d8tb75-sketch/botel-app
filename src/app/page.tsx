import Link from "next/link";
import { ArrowRight, CalendarCheck, ShipWheel, Sparkles } from "lucide-react";
import { PublicHeader } from "@/components/public-header";
import { RoomCard } from "@/components/room-card";
import { rooms } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <main className="site-shell">
      <PublicHeader />
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Boutique botel na vode v Praze</span>
          <h1>Botel Praha</h1>
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
          <div className="section-head">
            <div>
              <span className="eyebrow">Provoz a majitel</span>
              <h2>Jeden prehled pro cely botel</h2>
            </div>
            <p>
              Admin cast je navrzena pro rezervace, housekeeping, udrzbu, trby, naklady, personal a
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
