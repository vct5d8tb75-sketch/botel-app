import Link from "next/link";
import { PublicPage } from "@/components/public-page";
import { EconomyGallery } from "../ekonomy/room-gallery";

const photos = [
  [939, "Dvoulůžkový pokoj s modrou skříní"],
  [471, "Postel u velkých oken s výhledem na vodu"],
  [462, "Dvoulůžko a pracovní kout"],
  [468, "Celkový pohled na pokoj"],
  [938, "Interiér pokoje s koupelnovým koutem"],
  [463, "Pracovní kout se zrcadlem"],
  [905, "Koupelnový kout s vanou"],
  [906, "Detail vany"],
  [907, "Umyvadlo a kulaté okno"],
  [936, "Umyvadlo s kulatým zrcadlem"],
  [937, "Příprava kávy a čaje"],
  [910, "Úložné prostory a zrcadlo"],
  [480, "Detail umyvadla a zrcadla"],
  [466, "Sprcha a umyvadlo"],
  [483, "Čtenářský kout u okna s výhledem na řeku"],
  [474, "Pohled na koupelnový kout"],
  [478, "Umyvadlo u okna"],
  [475, "Toaleta"],
  [476, "Šatní skříň a pracovní kout"],
  [477, "Sprchový kout"],
] as const;

export default function SuperriorPage() {
  return (
    <PublicPage eyebrow="Pokoje · SUPERRIOR" title="SUPERRIOR" description="Prohlédněte si fotografie pokojů, interiérů a koupelen této kategorie.">
      <section className="page-section">
        <Link className="button" href="/pokoje/">← Všechny kategorie pokojů</Link>
        <p style={{ margin: "24px 0" }}>20 fotografií · Kliknutím fotografii zvětšíte. Podrobnosti o ubytování brzy doplníme.</p>
        <EconomyGallery photos={photos} category="SUPERRIOR" directory="superrior" thumbnails={false} />
      </section>
    </PublicPage>
  );
}

