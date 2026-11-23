import Link from "next/link";
import { PublicPage } from "@/components/public-page";
import { EconomyGallery } from "../ekonomy/room-gallery";

const photos = [
  [1, "Dvoulůžko s dřevěným čelem a modrou skříní"],
  [2, "Pracovní kout se zrcadlem a konvicí"],
  [3, "Zrcadlo, pracovní stůl a šatní skříň"],
  [4, "Sprchový kout a umyvadlo se zeleným obkladem"],
  [5, "Pohled na dvoulůžko a pracovní kout"],
  [6, "Postel u velkých oken s výhledem na řeku"],
  [7, "Pohled z ložnice na umyvadlo a posezení"],
  [8, "Toaleta se zeleným obkladem"],
  [9, "Otevřená šatní skříň s ramínky a ručníky"],
  [10, "Umyvadlo a kulaté zrcadlo u okna"],
  [11, "Čtení u postele s výhledem na řeku"],
  [12, "Koupelna s vanou a červeným obkladem"],
  [13, "Umyvadlo vedle kulatého okna"],
  [14, "Dřevěná skříň s ramínky a konvicí"],
  [15, "Detail konvice a modrých šálků"],
  [16, "Interiér pokoje s umyvadlem a posezením"],
  [17, "Dvoulůžko s modrou skříní a pracovním stolem"],
] as const;

export default function SuperriorPage() {
  return (
    <PublicPage eyebrow="Pokoje · SUPERRIOR" title="SUPERRIOR" description="Prohlédněte si fotografie pokojů, interiérů a koupelen této kategorie.">
      <section className="page-section">
        <Link className="button" href="/pokoje/">← Všechny kategorie pokojů</Link>
        <p style={{ margin: "24px 0" }}>17 fotografií · Kliknutím fotografii zvětšíte. Podrobnosti o ubytování brzy doplníme.</p>
        <EconomyGallery photos={photos} category="SUPERRIOR" directory="superrior" thumbnails={false} />
      </section>
    </PublicPage>
  );
}

