import catalog from "../../public/photo-catalog.json";
import { interiorGallery, marinaGallery } from "./gallery-assets";

const legacyPhotos = [...marinaGallery, ...interiorGallery];
const categoryNames = ["Ekonomy", "Superior", "Deluxe", "Další pokoje", "Restaurace", "Bary a interiéry", "Terasa", "Svatby", "Eventy", "Botel a Praha", "Posádka"];

function categoryFor(src: string) {
  if (src.startsWith("/rooms/ekonomy/")) return "Ekonomy";
  if (src.startsWith("/rooms/superrior/")) return "Superior";
  if (src.startsWith("/rooms/deluxe/")) return "Deluxe";
  if (src.startsWith("/restaurants/")) return "Restaurace";
  if (src.startsWith("/weddings/")) return "Svatby";
  if (src.startsWith("/crew/")) return "Posádka";
  if (src.startsWith("/terrace-") || src === "/homepage-vltava-perspective.webp") return "Terasa";
  const legacy = legacyPhotos.find((photo) => photo.src === src);
  if (legacy?.category === "Pokoje") return "Další pokoje";
  if (legacy?.category === "Restaurace") return "Restaurace";
  if (legacy?.category === "Terasa") return "Terasa";
  if (legacy?.category === "Eventy") return "Eventy";
  if (legacy) return "Bary a interiéry";
  return "Botel a Praha";
}

export const siteGallery = categoryNames.map((category) => ({
  category,
  photos: catalog.photos.filter((photo) => categoryFor(photo.asset) === category).map((photo) => ({
    src: photo.asset as `/${string}`,
    number: photo.number,
    alt: "description" in photo ? String(photo.description) : legacyPhotos.find((item) => item.src === photo.asset)?.title ?? (category === "Posádka" ? "Kapitán The Botel" : "The Botel na Vltavě v Praze"),
  })),
})).filter((group) => group.photos.length > 0);
