import Link from "next/link";
import { PublicPage } from "@/components/public-page";
import { EconomyGallery } from "../ekonomy/room-gallery";

const photos = [
  [1, "Balkon s posezením a výhledem na řeku"],
  [2, "Dvoulůžko s dřevěným lamelovým čelem"],
  [3, "Zelené křeslo u okna s výhledem na řeku"],
  [4, "Kulaté zrcadlo s odrazem pohovky a pracovní kout"],
  [5, "Umyvadlo a osvětlené zrcadlo se zeleným obkladem"],
  [6, "Vana u oken s výhledem na řeku"],
  [7, "Umyvadlo a osvětlené zrcadlo s červeným obkladem"],
  [8, "Křeslo v obývací části pokoje"],
  [9, "Dveře na balkon a detail ložnice"],
  [10, "Balkonové posezení nad klidnou hladinou řeky"],
  [11, "Pohled do ložnice a pracovního koutu"],
  [12, "Dvoulůžko s šedým přehozem a dřevěným čelem"],
  [13, "Pracovní kout s křeslem a šatní skříní"],
  [14, "Pracovní stůl se zrcadlem, konvicí a lednicí"],
  [15, "Detail konvice a šálků na čaj"],
  [16, "Šatní skříň s ramínky"],
] as const;

export default function DeluxePage() {
  return (
    <PublicPage eyebrow="Pokoje · DELUXE" title="DELUXE" description="Prohlédněte si fotografie pokojů, interiérů a koupelen této kategorie.">
      <section className="page-section">
        <Link className="button" href="/pokoje/">← Všechny kategorie pokojů</Link>
        <p style={{ margin: "24px 0" }}>16 fotografií · Kliknutím fotografii zvětšíte. Podrobnosti o ubytování brzy doplníme.</p>
        <EconomyGallery photos={photos} category="DELUXE" directory="deluxe" thumbnails={false} />
      </section>
    </PublicPage>
  );
}

