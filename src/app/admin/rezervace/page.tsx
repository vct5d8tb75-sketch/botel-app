import { AdminPage } from "@/components/admin-page";
import { StatusPill } from "@/components/status-pill";
import { guests, reservations } from "@/lib/mock-data";

export default function ReservationsPage() {
  return (
    <AdminPage title="Rezervace" description="Prehled rezervaci z primeho prodeje, Previa a externich kanalu.">
      <article className="admin-card">
        <table className="table">
          <thead>
            <tr>
              <th>Host</th>
              <th>Kajuta</th>
              <th>Termin</th>
              <th>Kanal</th>
              <th>Hodnota</th>
              <th>Stav</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => {
              const guest = guests.find((item) => item.id === reservation.guestId);
              return (
                <tr key={reservation.id}>
                  <td>{guest?.fullName}</td>
                  <td>{reservation.roomId}</td>
                  <td>{reservation.arrival} - {reservation.departure}</td>
                  <td>{reservation.channel}</td>
                  <td>{reservation.totalCzk.toLocaleString("cs-CZ")} Kc</td>
                  <td><StatusPill label={reservation.status} tone={reservation.status === "option" ? "warning" : "success"} /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
    </AdminPage>
  );
}
