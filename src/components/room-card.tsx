import type { Room } from "@/lib/models";

export function RoomCard({ room }: { room: Room }) {
  return (
    <article className="room-card">
      <div className="room-image" role="img" aria-label={room.category} />
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
