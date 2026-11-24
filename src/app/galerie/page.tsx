import { PublicPage } from "@/components/public-page";
import { siteGallery } from "@/lib/site-gallery";
import { SiteGallery } from "./site-gallery";

export default function GalleryPage() {
  return (
    <PublicPage eyebrow="Fotogalerie" title="Fotogalerie The Botel" description="Prohlédněte si pokoje, snídaňový salónek, bary, terasu i atmosféru života na vodě. Fotografie si můžete vybrat podle kategorií.">
      <section className="page-section"><SiteGallery groups={siteGallery} /></section>
    </PublicPage>
  );
}
