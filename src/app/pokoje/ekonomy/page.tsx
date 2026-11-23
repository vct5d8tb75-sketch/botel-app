import Link from "next/link";
import { PublicPage } from "@/components/public-page";
import { EconomyGallery } from "./room-gallery";

const photos = [
  [1, "Pokoj s postelemi a červenými křesly"],
  [2, "Otevřená šatní skříň s trezorem"],
  [3, "Pracovní kout se zrcadlem a konvicí"],
  [4, "Pracovní stolek a dřevěná šatní skříň"],
  [5, "Dvoulůžko s modrými polštáři a ručníky"],
  [6, "Jednolůžko vedle pracovního stolku"],
  [7, "Postel a posezení u okna s výhledem na řeku"],
  [8, "Dvě oddělené postele a pracovní stolek"],
  [9, "Okno s květinami nad postelí"],
  [10, "Posezení a pracovní kout v zeleném pokoji"],
  [11, "Postel a vstup do koupelny"],
  [12, "Postel a křeslo u okna s výhledem na řeku"],
  [13, "Dvě křesla a stolek vedle pracovního koutu"],
  [14, "Dvoulůžko se šedými polštáři u okna"],
  [15, "Pracovní kout se zrcadlem a šatní skříní"],
  [16, "Vstup do koupelny s umyvadlem a sprchou"],
  [17, "Umyvadlo a sprchový kout se zeleným obkladem"],
  [18, "Dvoulůžko s fialovými polštáři a kulatým oknem"],
  [19, "Šatní skříň a příprava kávy a čaje"],
] as const;

export default function EconomyPage() {
  return (
    <PublicPage eyebrow="Pokoje · EKONOMY" title="EKONOMY" description="Prohlédněte si fotografie pokojů, interiérů a koupelen této kategorie.">
      <section className="page-section">
        <Link className="button" href="/pokoje/">← Všechny kategorie pokojů</Link>
        <p style={{ margin: "24px 0" }}>19 fotografií · Kliknutím fotografii zvětšíte. Podrobnosti o ubytování brzy doplníme.</p>
        <EconomyGallery photos={photos} thumbnails={false} />
      </section>
    </PublicPage>
  );
}

