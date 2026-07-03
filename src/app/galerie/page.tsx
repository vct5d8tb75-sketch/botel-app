import { PublicPage } from "@/components/public-page";
import { interiorGallery, marinaGallery } from "@/lib/gallery-assets";
import { formatPhotoNumber } from "@/lib/photo-index";
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
              <span className="photo-number" aria-hidden="true">{formatPhotoNumber(item.src)}</span>
              <div className="gallery-caption">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
        <div className="section-head gallery-section-head">
          <div>
            <span className="eyebrow">Interier The Botel</span>
            <h2>Restaurace, bar a lounge</h2>
          </div>
          <p>Aktualni sada fotek interieru botelu pro budouci vyber, upravy a vymeny.</p>
        </div>
        <div className="gallery-grid interior-gallery-grid">
          {interiorGallery.map((item) => (
            <article className="gallery-card" key={item.src}>
              <img src={publicAsset(item.src as `/${string}`)} alt={item.title} />
              <span className="photo-number" aria-hidden="true">{formatPhotoNumber(item.src)}</span>
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
