import { PublicPage } from "@/components/public-page";
import { marinaGallery } from "@/lib/gallery-assets";
import { publicAsset } from "@/lib/site-assets";

export default function GalleryPage() {
  return (
    <PublicPage
      eyebrow="Fotogalerie"
      title="Atmosfera boutique hotelu, vody a Prahy"
      description="Galerie je pripravena pro realne fotografie kajut, restaurace, baru, terasy a eventu."
    >
      <section className="page-section">
        <div className="gallery-grid">
          {marinaGallery.map((item) => (
            <article className="gallery-card" key={item.src}>
              <img src={publicAsset(item.src as `/${string}`)} alt={item.title} />
              <div className="gallery-caption">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PublicPage>
  );
}
