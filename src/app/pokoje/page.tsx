import { PublicPage } from "@/components/public-page";
import { RoomCard } from "@/components/room-card";
import { rooms } from "@/lib/mock-data";

export default function RoomsPage() {
  return (
    <PublicPage
      eyebrow="Pokoje a kajuty"
      title="Komfortni kajuty pro kratke pobyty i vikendy na vode"
      description="Prehled ukazkovych typu ubytovani s jasnou cenou, kapacitou a vybavenim."
    >
      <section className="page-section">
        <div className="card-grid">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>
    </PublicPage>
  );
}
