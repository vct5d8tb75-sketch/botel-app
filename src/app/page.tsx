import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, CalendarCheck, HeartHandshake, Sparkles } from "lucide-react";
import { PublicHeader } from "@/components/public-header";
import { RoomCategoryCards } from "@/components/room-category-cards";
import { formatPhotoNumber } from "@/lib/photo-index";
import { publicAsset } from "@/lib/site-assets";

const highlights = [
  { title: "Kajuty s výhledem", text: "Klidné pokoje přímo na vodě, pár minut od centra Prahy.", href: "/pokoje/#galerie-pokoju" },
  { title: "Restaurace & bary", text: "Snídaně i drink na palubě s výhledem na řeku.", href: "/restaurace" },
  { title: "Terasa nad řekou", text: "Místo pro letní večery, setkání a malé soukromé eventy.", href: "/terasa" },
];

const departmentLogos = [
  { name: "Snídaňový salónek", label: "Snídaně pro hosty", href: "/restaurace", hasWaves: true },
  { name: "AFT", label: "Bar na zadní palubě", href: "/restaurace", hasWaves: true },
  { name: "Salon", label: "Hlavní společenská místnost", href: "/eventy" },
  { name: "Sun Deck", label: "Sluneční terasa", href: "/terasa" },
  { name: "Horizon", label: "Up deck bar", href: "/terasa" },
  { name: "Deck", label: "Hlavní bar", href: "/restaurace" },
];

export default function HomePage() {
  const heroImage = "/homepage-hero-river.jpg?v=2";
  const storyImage = "/homepage-vltava-perspective.webp";
  const crewImage = "/restaurants/the-river/img_0560.webp";
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
          <span className="eyebrow">Boutique hotel na Vltavě · Praha</span>
          <h1>Zažijte noc<br />na klidné vodě.</h1>
          <p>
            Unikátní botel na Vltavě, kde se hotelový komfort potkává s atmosférou lodi.
            Rezervujte si noc, nebo si jen v letní sezóně přijďte posedět na letní terasu SUNDECK a načerpejte síly výjimečným klidem a pohledem na vodu i okolí
          </p>
          <div className="hero-actions">
            <Link className="button" href="/kontakt">
              <CalendarCheck size={18} aria-hidden="true" />
              Rezervovat pobyt
            </Link>
            <Link className="button secondary" href="/pokoje">
              Prohlédnout pokoje <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-meta" aria-label="Hlavní výhody">
            <span><Sparkles size={15} aria-hidden="true" /> Výhled na Vltavu</span>{" "}
            <span>Centrum Prahy</span>{" "}
            <span>Atmosféra lodi</span>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="section-inner">
          <div className="section-head intro-heading">
            <span className="eyebrow">The Botel · Praha</span>
            <div className="intro-lead">
              <h2>Hotel, který stojí za to zažít</h2>{" "}
              <p>
                Nejen přespat. Ráno se probudit nad řekou, dát si snídani na palubě a večer sledovat,
                jak se Praha odráží ve Vltavě.
              </p>
            </div>
          </div>
          <div className="highlight-grid">
            {highlights.map((item) => (
              <article className="highlight-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link className="highlight-link" href={item.href} aria-label={item.title === "Kajuty s výhledem" ? "Galerie pokojů" : item.title === "Restaurace & bary" ? "Restaurace & bary" : "Terasa"}>
                  Objevte více <ArrowRight size={16} aria-hidden="true" /> <span className="eyebrow">{item.title === "Kajuty s výhledem" ? "Galerie pokojů" : item.title === "Restaurace & bary" ? "Restaurace & bary" : "Terasa"}</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section photo-section">
        <div className="section-inner photo-story">
          <div className="photo-copy">
            <span className="eyebrow">Na vodě v Praze</span>
            <h2>Praha z jiné perspektivy</h2>
            <p>
              The Botel je místo, kde se město zpomalí. Přes den jste v centru dění, večer máte vlastní
              palubu, řeku a světla Prahy přímo před sebou.
            </p>
            <Link className="text-link" href="/galerie">Prohlédnout galerii <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="photo-frame">
            <img className="wide-photo" src={publicAsset(storyImage)} alt="Výhled z terasy The Botel na Vltavu a Prahu" />
            <span className="photo-number" aria-hidden="true">{formatPhotoNumber(storyImage)}</span>
          </div>
        </div>
      </section>

      <section className="section crew-section">
        <div className="section-inner crew-story">
          <div className="crew-portrait-wrap">
            <img className="crew-portrait" src={publicAsset(crewImage)} alt="Květiny na připraveném stole ve snídaňovém salónku The Botel" />
            <span className="photo-number" aria-hidden="true">{formatPhotoNumber(crewImage)}</span>
          </div>
          <div className="crew-copy">
            <span className="eyebrow">Posádka The Botel</span>
            <h2>Jedna posádka.<br />Péče v každém detailu.</h2>
            <p>
              Za příjemným pobytem stojí celá naše posádka. Od prvního přivítání až po poslední
              den se společně staráme o to, abyste se u nás cítili dobře.
            </p>
            <div className="crew-team-grid">
              <div className="crew-team-role"><h3>Úklid</h3><p>Čistý pokoj a pečlivě připravené detaily pro váš odpočinek.</p></div>
              <div className="crew-team-role"><h3>Údržba</h3><p>Vše v pořádku, aby váš pobyt na vodě plynul bez starostí.</p></div>
              <div className="crew-team-role"><h3>Kuchyně</h3><p>Snídaně připravená s péčí pro příjemný začátek dne.</p></div>
              <div className="crew-team-role"><h3>Recepce</h3><p>Vřelé přivítání a pomoc, kdykoli ji během pobytu potřebujete.</p></div>
            </div>
            <p className="crew-team-message">Každý máme svou roli. O vás pečujeme společně.</p>
          </div>
        </div>
      </section>

      <section className="section rooms-section">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <span className="eyebrow">Kajuty & suite</span>
              <h2>Vyberte si svou kajutu</h2>
            </div>
            <Link className="text-link" href="/pokoje">Všechny pokoje <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <RoomCategoryCards />
        </div>
      </section>

      <section className="section dark">
        <div className="section-inner">
          <div className="event-cta">
            <div>
              <span className="eyebrow">The Botel Events</span>
              <h2>Večer, který má vlastní palubu</h2>
              <p>
                Firemní setkání, oslava, svatba nebo komorní večírek. Vltava, Praha a celý botel jen pro vás.
              </p>
            </div>
            <div className="cta-actions">
              <Link className="button" href="/eventy">Prohlédnout eventy <ArrowRight size={17} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section brand-section">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <span className="eyebrow">Objevte palubu</span>
              <h2>Jedna loď. Spousta míst.</h2>
            </div>
            <p>Od ranní kávy po pozdní drink. Každá část The Botel má vlastní atmosféru.</p>
          </div>
          <div className="department-logo-grid">
            {departmentLogos.map((item) => (
              <Link className="department-logo-card" href={item.href} key={item.name}>
                <span className="department-logo" aria-label={`${item.name === "Snídaňový salónek" ? "" : "The "}${item.name} ${item.label}`}>
                  {item.name !== "Snídaňový salónek" && <span className="the">The</span>}
                  <span className="name">{item.name}</span>
                  <span className="sub">{item.label}</span>
                  {item.hasWaves ? <span className="wave-mark" aria-hidden="true" /> : null}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section foundation-section">
        <div className="section-inner">
          <div className="foundation-cta">
            <div>
              <span className="eyebrow">Nadace The Botel</span>
              <h2>Pomáháme, když je potřeba</h2>
              <p>Podporujeme ubytování pacientů Protonového centra a jejich doprovodu během léčby v Praze.</p>
            </div>
            <Link className="button" href="/nadacni-fond"><HeartHandshake size={18} aria-hidden="true" /> O nadaci</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

