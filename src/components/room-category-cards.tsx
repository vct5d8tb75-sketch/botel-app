import Link from "next/link";
import { publicAsset } from "@/lib/site-assets";

const categories = [
  { name: "EKONOMY", gallery: "/pokoje/ekonomy/", image: "/rooms/ekonomy/thumbs/img_0762.webp" },
  { name: "SUPERRIOR", gallery: "/pokoje/superrior/", image: "/rooms/superrior/img_0471.webp" },
  { name: "DELUXE", gallery: "/pokoje/deluxe/", image: "/rooms/deluxe/img_0929.webp" },
] as const;

export function RoomCategoryCards({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <div className="card-grid">
      {categories.map((category) => (
        <article className="room-card" key={category.name} aria-labelledby={category.name.toLowerCase()}>
          <Link href={category.gallery} aria-label={"Prohlédnout fotografie pokojů " + category.name}>
            <img src={publicAsset(category.image)} alt={"Pokoj " + category.name} width={640} height={427} loading="lazy" style={{ display: "block", width: "100%", height: "210px", objectFit: "cover", borderRadius: "8px 8px 0 0" }} />
          </Link>
          <div className="room-body">
            <Heading id={category.name.toLowerCase()} style={{ margin: "0 0 12px", fontSize: "26px" }}>{category.name}</Heading>
            <p className="room-meta" style={{ margin: 0 }}>Prohlédněte si pokoje, jejich interiéry a koupelny. Další informace brzy doplníme.</p>
            <Link className="button" href={category.gallery} style={{ marginTop: "20px" }}>Galerie</Link>
          </div>
        </article>
      ))}
    </div>
  );
}

