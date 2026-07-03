import type { CSSProperties } from "react";
import type { Room } from "@/lib/models";
import { formatPhotoNumber } from "@/lib/photo-index";
import { publicAsset } from "@/lib/site-assets";

export function RoomCard({ room }: { room: Room }) {
  const photoNumber = formatPhotoNumber(room.image);

  return (
    <article className="room-card">
      <div
        className="room-image"
        role="img"
        aria-label={room.category}
        style={{ "--room-image": `url("${publicAsset(room.image as `/${string}`)}")` } as CSSProperties}
      >
        {photoNumber ? <span className="photo-number" aria-hidden="true">{photoNumber}</span> : null}
      </div>
      <div className="room-body">
        <h3>{room.name}</h3>
        <p className="room-meta">
          {room.category} · {room.deck} · {room.sizeM2} m2 · az {room.capacity} hoste
        </p>
        <strong>Od {room.priceFromCzk.toLocaleString("cs-CZ")} Kc / noc</strong>
        <div className="tag-row">
          {room.features.slice(0, 3).map((feature) => (
            <span className="tag" key={feature}>
              {feature}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
