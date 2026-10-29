import { BedDouble } from "lucide-react";
import Link from "next/link";
import { publicAsset } from "@/lib/site-assets";
import { PublicPage } from "@/components/public-page";

const categories = [
  { name: "EKONOMY", gallery: "/pokoje/ekonomy/", image: "/rooms/ekonomy/thumbs/img_0762.webp" },
  { name: "SUPERRIOR", gallery: "/pokoje/superrior/", image: "/rooms/superrior/img_0471.webp" },
  { name: "DELUXE", gallery: "/pokoje/deluxe/", image: "/rooms/deluxe/img_0929.webp" },
] as const;

export default function RoomsPage() {
  return (
    <PublicPage eyebrow="Pokoje" title="Vyberte si svou kategorii pokoje" description="Ubytování na vodě ve třech kategoriích: EKONOMY, SUPERRIOR a DELUXE.">
      <section className="page-section" aria-label="Kategorie pokojů">
        <div className="card-grid">
          {categories.map((category) => (
            <article className="room-card" key={category.name} aria-labelledby={category.name.toLowerCase()}>
              {category.gallery && category.image ? (
                <Link href={category.gallery} aria-label={"Prohlédnout fotografie pokojů " + category.name}>
                  <img src={publicAsset(category.image)} alt={"Pokoj " + category.name} width={640} height={427} style={{ display: "block", width: "100%", height: "210px", objectFit: "cover", borderRadius: "8px 8px 0 0" }} />
                </Link>
              ) : (
                <div className="room-image" style={{ display: "grid", placeItems: "center", background: "linear-gradient(135deg, #edf2f3, #e4e9e8)", color: "#234453" }}>
                  <div style={{ textAlign: "center", padding: "24px" }}>
                    <BedDouble size={44} strokeWidth={1.25} aria-hidden="true" />
                    <p style={{ margin: "12px 0 0", fontSize: "14px" }}>Fotografie připravujeme</p>
                  </div>
                </div>
              )}
              <div className="room-body">
                <h2 id={category.name.toLowerCase()} style={{ margin: "0 0 12px", fontSize: "26px" }}>{category.name}</h2>
                <p className="room-meta" style={{ margin: 0 }}>
                  {category.gallery ? "Prohlédněte si pokoje, jejich interiéry a koupelny. Další informace brzy doplníme." : "Fotografie a podrobnosti o této kategorii brzy doplníme."}
                </p>
                {category.gallery && <Link className="button" href={category.gallery} style={{ marginTop: "20px" }}>Galerie</Link>}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PublicPage>
  );
}


