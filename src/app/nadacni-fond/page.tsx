import Link from "next/link";
import { BedDouble, CalendarCheck, HeartHandshake, Hospital, Mail, ShieldCheck, Users } from "lucide-react";
import { PublicPage } from "@/components/public-page";

const supportCards = [
  {
    icon: Hospital,
    title: "Pacienti Protonoveho centra",
    text: "Podpora je urcena pacientum, kteri kvuli lecbe potrebuji zustat v Praze a hledaji klidne, dostupne a dustojne zazemi.",
  },
  {
    icon: Users,
    title: "Doprovod a rodina",
    text: "Ubytovani muze pomoci i blizkemu doprovodu, aby pacient nebyl behem narocne lecby sam.",
  },
  {
    icon: BedDouble,
    title: "Klidne ubytovani na vode",
    text: "The Botel nabizi soukromi, pokojne prostredi u reky a provozni zazemi pro kratkodobe i delsi pobyty.",
  },
];

const processSteps = [
  "Pacient nebo doprovod posle zakladni poptavku pres kontakt The Botel.",
  "Tym overi dostupnost pokoje, termin lecby a predpokladanou delku pobytu.",
  "Nadacni fond posoudi moznost prispevku nebo zvyhodneneho ubytovani.",
  "Po potvrzeni dostane pacient jasne instrukce k prijezdu, pobytu a pripadne dalsi podpore.",
];

const principles = [
  "Diskretni komunikace a respekt k soukromi pacienta",
  "Moznost kratkodobeho i opakovaneho pobytu podle dostupnosti",
  "Prednost pro pacienty v aktivni lecbe a jejich nezbytny doprovod",
  "Jasne oddeleni charitativni podpory od bezne hotelove rezervace",
];

export default function FoundationPage() {
  return (
    <PublicPage
      eyebrow="Nadacni fond The Botel"
      title="Ubytovani pro pacienty Protonoveho centra"
      description="Pripravujeme propojeni The Botel s nadacnim fondem, ktery pomuze pacientum a jejich doprovodu zvladnout pobyt v Praze behem lecby."
    >
      <section className="page-section foundation-page">
        <div className="foundation-intro">
          <div>
            <span className="eyebrow">Pomoc v citlivem obdobi</span>
            <h2>Klidne zazemi u reky, kdyz je lecba hlavni prioritou</h2>
          </div>
          <p>
            Cilem fondu je zjednodusit pobyt pacientum Protonoveho centra, kteri musi kvuli lecbe prijet do
            Prahy. The Botel muze nabidnout pokojne ubytovani, dostupnost mesta a lidsky pristup v situaci,
            kdy rodina resi hlavne zdravi, cas a logistiku.
          </p>
        </div>

        <div className="card-grid">
          {supportCards.map((item) => {
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

        <div className="foundation-layout">
          <article className="feature-card foundation-panel">
            <span className="eyebrow">Jak to bude fungovat</span>
            <h2>Jednoduchy postup pro zadost</h2>
            <ul className="check-list">
              {processSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="feature-card foundation-panel">
            <span className="eyebrow">Zasady podpory</span>
            <h2>Transparentni a dustojna pomoc</h2>
            <ul className="check-list">
              {principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="foundation-note">
          <ShieldCheck size={28} aria-hidden="true" />
          <div>
            <h3>Stranka je pripravena jako zaklad pro budouci formular a spravu zadosti.</h3>
            <p>
              Pro prvni verzi zatim neukladame citliva zdravotni data. Pozdeji lze doplnit zabezpeceny
              formular, schvalovani zadosti, evidenci prispevku a napojeni na interni admin cast.
            </p>
          </div>
        </div>

        <div className="event-cta">
          <div>
            <span className="eyebrow">Kontakt pro pacienty a doprovod</span>
            <h2>Poptat podporene ubytovani</h2>
            <p>
              Napiste termin lecby, pocet osob, predpokladanou delku pobytu a kontaktni telefon. Tym The Botel
              se ozve s dostupnosti a dalsim postupem.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="button" href="/kontakt">
              <CalendarCheck size={18} aria-hidden="true" />
              Poptat pobyt
            </Link>
            <a className="button secondary light" href="mailto:info@thebotel.cz">
              <Mail size={18} aria-hidden="true" />
              Napsat e-mail
            </a>
            <Link className="button secondary light" href="/pokoje">
              <HeartHandshake size={18} aria-hidden="true" />
              Projit pokoje
            </Link>
          </div>
        </div>
      </section>
    </PublicPage>
  );
}
