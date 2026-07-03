import Link from "next/link";
import { Anchor, CalendarCheck } from "lucide-react";

const links = [
  { href: "/pokoje", label: "Pokoje" },
  { href: "/restaurace", label: "Restaurace" },
  { href: "/terasa", label: "Terasa" },
  { href: "/eventy", label: "Eventy" },
  { href: "/galerie", label: "Galerie" },
  { href: "/kontakt", label: "Kontakt" }
];

export function PublicHeader() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link className="brand" href="/">
          <span className="brand-mark">
            <Anchor size={20} aria-hidden="true" />
          </span>
          Botel Praha
        </Link>
        <nav className="nav-links" aria-label="Hlavni navigace">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link href="/admin">Admin</Link>
        </nav>
        <Link className="button" href="/kontakt">
          <CalendarCheck size={18} aria-hidden="true" />
          Rezervovat
        </Link>
      </div>
    </header>
  );
}
