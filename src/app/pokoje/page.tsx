import { PublicPage } from "@/components/public-page";
import { RoomCategoryCards } from "@/components/room-category-cards";

export default function RoomsPage() {
  return (
    <PublicPage eyebrow="Pokoje" title="Vyberte si svou kategorii pokoje" description="Ubytování na vodě ve třech kategoriích: EKONOMY, SUPERRIOR a DELUXE.">
      <section className="page-section" aria-label="Kategorie pokojů">
        <RoomCategoryCards headingLevel={2} />
      </section>
    </PublicPage>
  );
}

