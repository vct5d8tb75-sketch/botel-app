"use client";

import { useRef, useState } from "react";
import { publicAsset } from "@/lib/site-assets";
import styles from "./room-gallery.module.css";

const photos = [
  [748, "Pokoj s postelí a červenými křesly"],
  [753, "Dvoulůžko s připravenými ručníky"],
  [758, "Pokoj se dvěma oddělenými postelemi"],
  [760, "Posezení v pokoji se zelenými stěnami"],
  [768, "Postel a posezení u okna"],
  [772, "Dvoulůžko vedle okna"],
  [916, "Dvoulůžkový pokoj s kulatým oknem"],
  [756, "Postel a pracovní stolek"],
  [752, "Detail okna s výhledem na vodu"],
  [750, "Pracovní stolek a úložné prostory"],
  [749, "Šatní skříň v pokoji"],
  [771, "Postel u okna s květinami"],
  [755, "Šatní skříň se zrcadlem"],
  [776, "Sprcha a umyvadlo"],
  [775, "Vstup do koupelny se sprchou"],
  [751, "Posezení a pracovní stolek"],
  [759, "Okno nad postelí"],
  [918, "Úložné prostory a příprava kávy a čaje"],
  [774, "Pracovní kout se zrcadlem"],
  [913, "Kulaté okno s výhledem na řeku"],
  [757, "Postel u okna"],
  [766, "Postel a vstup do koupelny"],
  [762, "Posezení a pracovní kout u okna"],
  [763, "Dvoulůžko v pokoji se zelenými stěnami"],
  [770, "Dvě křesla a stolek"],
] as const;

const filename = (number: number) => `img_${String(number).padStart(4, "0")}.webp`;

export function EconomyGallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const [opened, setOpened] = useState(false);
  const move = (direction: number) => setIndex((current) => (current + direction + photos.length) % photos.length);

  return (
    <>
      <div className={styles.grid}>
        {photos.map(([number, alt], position) => (
          <button className={styles.thumbnail} key={number} type="button" aria-label={`Zvětšit fotografii ${position + 1}: ${alt}`} onClick={() => {
            setIndex(position);
            setOpened(true);
            dialog.current?.showModal();
          }}>
            <img src={publicAsset(`/rooms/ekonomy/thumbs/${filename(number)}`)} alt={alt} loading="lazy" width={640} height={427} />
          </button>
        ))}
      </div>
      <dialog ref={dialog} className={styles.dialog} aria-label="Fotogalerie pokojů EKONOMY" onClose={() => setOpened(false)} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }} onKeyDown={(event) => {
        if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
        if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
      }}>
        <div className={styles.viewer}>
          <div className={styles.toolbar}>
            <span aria-live="polite">EKONOMY · {index + 1} / {photos.length}</span>
            <button type="button" onClick={() => dialog.current?.close()} autoFocus aria-label="Zavřít galerii">Zavřít ×</button>
          </div>
          {opened && <img className={styles.fullImage} src={publicAsset(`/rooms/ekonomy/${filename(photos[index][0])}`)} alt={photos[index][1]} />}
          <div className={styles.toolbar}>
            <button type="button" onClick={() => move(-1)} aria-label="Předchozí fotografie">← Předchozí</button>
            <button type="button" onClick={() => move(1)} aria-label="Další fotografie">Další →</button>
          </div>
        </div>
      </dialog>
    </>
  );
}

