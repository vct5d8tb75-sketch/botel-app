import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import { publicAsset } from "@/lib/site-assets";

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
          <img className="brand-logo" src={publicAsset("/botel-logo-negative.png")} alt="The Botel" />
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
