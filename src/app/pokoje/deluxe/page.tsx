import Link from "next/link";
import { PublicPage } from "@/components/public-page";
import { EconomyGallery } from "../ekonomy/room-gallery";

const photos = [
  [929, "Dvoulůžko s dřevěným čelem a šedým přehozem"],
  [783, "Pohled na postel a okno"],
  [781, "Posezení na balkoně nad řekou"],
  [928, "Ložnice a průchod do pokoje"],
  [925, "Dveře na balkon"],
  [784, "Křeslo u okna s výhledem na vodu"],
  [786, "Zrcadlo s pohledem na obývací část"],
  [785, "Posezení v odrazu kulatého zrcadla"],
  [924, "Křeslo v obývací části"],
  [930, "Pracovní kout a šatní skříň"],
  [933, "Pracovní kout se zrcadlem a lednicí"],
  [934, "Konvice a šálky pro přípravu čaje"],
  [935, "Úložné prostory s ramínky"],
  [923, "Vana s hydromasážními tryskami"],
  [789, "Vana se zeleným obkladem"],
  [792, "Vana u oken s výhledem na řeku"],
  [790, "Umyvadlo a osvětlené zrcadlo se zeleným obkladem"],
  [922, "Umyvadlo a osvětlené zrcadlo s červeným obkladem"],
  [920, "Detail vany a posezení u okna"],
] as const;

export default function DeluxePage() {
  return (
    <PublicPage eyebrow="Pokoje · DELUXE" title="DELUXE" description="Prohlédněte si fotografie pokojů, interiérů a koupelen této kategorie.">
      <section className="page-section">
        <Link className="button" href="/pokoje/">← Všechny kategorie pokojů</Link>
        <p style={{ margin: "24px 0" }}>19 fotografií · Kliknutím fotografii zvětšíte. Podrobnosti o ubytování brzy doplníme.</p>
        <EconomyGallery photos={photos} category="DELUXE" directory="deluxe" thumbnails={false} />
      </section>
    </PublicPage>
  );
}

