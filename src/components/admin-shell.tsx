import Link from "next/link";
import {
  Anchor,
  BarChart3,
  BedDouble,
  CalendarDays,
  ChefHat,
  ClipboardCheck,
  Gauge,
  Settings,
  Users,
  Wrench
} from "lucide-react";

const nav = [
  { href: "/admin", label: "Prehled", icon: Gauge },
  { href: "/admin/rezervace", label: "Rezervace", icon: CalendarDays },
  { href: "/admin/obsazenost", label: "Obsazenost", icon: BedDouble },
  { href: "/admin/housekeeping", label: "Housekeeping", icon: ClipboardCheck },
  { href: "/admin/udrzba", label: "Udrzba", icon: Wrench },
  { href: "/admin/restaurace", label: "Restaurace", icon: ChefHat },
  { href: "/admin/finance", label: "Finance", icon: BarChart3 },
  { href: "/admin/reporty", label: "Reporty", icon: Users },
  { href: "/admin/nastaveni", label: "Nastaveni", icon: Settings }
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <Link className="brand" href="/">
          <span className="brand-mark">
            <Anchor size={20} aria-hidden="true" />
          </span>
          Botel App
        </Link>
        <nav className="admin-nav" aria-label="Administrace">
          {nav.map(({ href, label, icon: Icon }) => (
            <Link href={href} key={href}>
              <Icon size={18} aria-hidden="true" />
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}
