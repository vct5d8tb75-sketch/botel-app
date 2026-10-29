import { BedDouble } from "lucide-react";
import Link from "next/link";
import { publicAsset } from "@/lib/site-assets";
import { PublicPage } from "@/components/public-page";

const categories = ["EKONOMY", "SUPERRIOR", "DELUXE"] as const;

export default function RoomsPage() {
  return (
    <PublicPage
      eyebrow="Pokoje"
      title="Vyberte si svou kategorii pokoje"
      description="Ubytování na vodě ve třech kategoriích: EKONOMY, SUPERRIOR a DELUXE."
    >
      <section className="page-section" aria-label="Kategorie pokojů">
        <div className="card-grid">
          {categories.map((category) => (
            <article className="room-card" key={category} aria-labelledby={category.toLowerCase()}>
              {category === "EKONOMY" ? (
                <Link href="/pokoje/ekonomy/" aria-label="Prohlédnout fotografie pokojů EKONOMY">
                  <img src={publicAsset("/rooms/ekonomy/thumbs/img_0748.webp")} alt="Pokoj EKONOMY s postelí a posezením u okna" width={640} height={427} style={{ display: "block", width: "100%", height: "210px", objectFit: "cover", borderRadius: "8px 8px 0 0" }} />
                </Link>
              ) : (
              <div
                className="room-image"
                style={{
                  display: "grid",
                  placeItems: "center",
                  background: "linear-gradient(135deg, #edf2f3, #e4e9e8)",
                  color: "#234453",
                }}
              >
                <div style={{ textAlign: "center", padding: "24px" }}>
                  <BedDouble size={44} strokeWidth={1.25} aria-hidden="true" />
                  <p style={{ margin: "12px 0 0", fontSize: "14px" }}>Fotografie připravujeme</p>
                </div>
              </div>
              )}
              <div className="room-body">
                <h2 id={category.toLowerCase()} style={{ margin: "0 0 12px", fontSize: "26px" }}>
                  {category}
                </h2>
                <p className="room-meta" style={{ margin: 0 }}>
                  {category === "EKONOMY" ? "Prohlédněte si pokoje, jejich interiéry a koupelny. Další informace brzy doplníme." : "Fotografie a podrobnosti o této kategorii brzy doplníme."}
                </p>
                {category === "EKONOMY" && <Link className="button" href="/pokoje/ekonomy/" style={{ marginTop: "20px" }}>Galerie</Link>}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PublicPage>
  );
}

