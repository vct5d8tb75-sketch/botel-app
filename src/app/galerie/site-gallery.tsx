"use client";

import { useRef, useState } from "react";
import { publicAsset } from "@/lib/site-assets";
import { formatPhotoNumber } from "@/lib/photo-index";
import viewer from "../pokoje/ekonomy/room-gallery.module.css";
import styles from "./site-gallery.module.css";

type Photo = { src: `/${string}`; number: number; alt: string };
type Group = { category: string; photos: Photo[] };

export function SiteGallery({ groups }: { groups: Group[] }) {
  const [category, setCategory] = useState("Vše");
  const [index, setIndex] = useState(0);
  const [opened, setOpened] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const visibleGroups = category === "Vše" ? groups : groups.filter((group) => group.category === category);
  const photos = visibleGroups.flatMap((group) => group.photos);
  const move = (direction: number) => setIndex((current) => (current + direction + photos.length) % photos.length);

  return <>
    <div className={styles.filters} role="group" aria-label="Kategorie fotografií">
      {["Vše", ...groups.map((group) => group.category)].map((name) => <button className="button secondary" type="button" key={name} aria-pressed={category === name} onClick={() => { setCategory(name); setIndex(0); }}>{name}</button>)}
    </div>
    <p className={styles.count} aria-live="polite">{photos.length} fotografií · Kliknutím fotografii zvětšíte.</p>
    {visibleGroups.map((group) => <section key={group.category} className={styles.category} aria-label={`Fotografie: ${group.category}`}>
      <div className="section-head"><h2>{group.category === "Restaurace" ? "Restaurace · Snídaňový salónek" : group.category}</h2></div>
      <div className={viewer.grid}>
        {group.photos.map((photo) => <button className={viewer.thumbnail} type="button" key={photo.src} aria-label={`Zvětšit fotografii ${formatPhotoNumber(photo.src)}: ${photo.alt}`} onClick={() => { setIndex(photos.findIndex((item) => item.src === photo.src)); setOpened(true); dialog.current?.showModal(); }}>
          <img src={publicAsset(photo.src)} alt={photo.alt} loading="lazy" width={640} height={427} />
          <span className="photo-number">{formatPhotoNumber(photo.src)}</span>
        </button>)}
      </div>
    </section>)}
    <dialog ref={dialog} className={viewer.dialog} aria-label="Fotogalerie The Botel" onClose={() => setOpened(false)} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }} onKeyDown={(event) => {
      if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
      if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
    }}>
      <div className={viewer.viewer}>
        <div className={viewer.toolbar}><span aria-live="polite">{formatPhotoNumber(photos[index].src)} · {index + 1} / {photos.length}</span><button type="button" aria-label="Zavřít galerii" autoFocus onClick={() => dialog.current?.close()}>Zavřít ×</button></div>
        {opened && <img className={viewer.fullImage} src={publicAsset(photos[index].src)} alt={photos[index].alt} />}
        <div className={viewer.toolbar}><button type="button" aria-label="Předchozí fotografie" onClick={() => move(-1)}>← Předchozí</button><button type="button" aria-label="Další fotografie" onClick={() => move(1)}>Další →</button></div>
      </div>
    </dialog>
  </>;
}
