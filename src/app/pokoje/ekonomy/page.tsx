import Link from "next/link";
import { PublicPage } from "@/components/public-page";
import { EconomyGallery } from "./room-gallery";

export default function EconomyPage() {
  return (
    <PublicPage eyebrow="Pokoje · EKONOMY" title="EKONOMY" description="Prohlédněte si fotografie pokojů, interiérů a koupelen této kategorie.">
      <section className="page-section">
        <Link className="button" href="/pokoje/">← Všechny kategorie pokojů</Link>
        <p style={{ margin: "24px 0" }}>25 fotografií · Kliknutím fotografii zvětšíte. Podrobnosti o ubytování brzy doplníme.</p>
        <EconomyGallery />
      </section>
    </PublicPage>
  );
}

