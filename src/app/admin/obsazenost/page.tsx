import { AdminPage } from "@/components/admin-page";
import { StatusPill } from "@/components/status-pill";
import { rooms } from "@/lib/mock-data";

export default function OccupancyPage() {
  return (
    <AdminPage title="Obsazenost" description="Stav kajut, palub a pripravenosti pro recepci.">
      <div className="card-grid">
        {rooms.map((room) => (
          <article className="admin-card" key={room.id}>
            <h3>{room.name}</h3>
            <p className="muted">{room.deck} · {room.category}</p>
            <StatusPill
              label={room.status}
              tone={room.status === "available" ? "success" : room.status === "maintenance" ? "danger" : "warning"}
            />
          </article>
        ))}
      </div>
    </AdminPage>
  );
}
