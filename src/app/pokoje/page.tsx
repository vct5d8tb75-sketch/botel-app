import { BedDouble } from "lucide-react";
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
              <div className="room-body">
                <h2 id={category.toLowerCase()} style={{ margin: "0 0 12px", fontSize: "26px" }}>
                  {category}
                </h2>
                <p className="room-meta" style={{ margin: 0 }}>
                  Fotografie a podrobnosti o této kategorii brzy doplníme.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PublicPage>
  );
}
