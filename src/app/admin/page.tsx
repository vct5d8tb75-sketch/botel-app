import { AdminPage } from "@/components/admin-page";
import { StatusPill } from "@/components/status-pill";
import { housekeepingTasks, maintenanceTickets, reservations, revenueRecords, rooms } from "@/lib/mock-data";

export default function AdminHomePage() {
  const occupied = rooms.filter((room) => room.status === "occupied").length;
  const revenue = revenueRecords.reduce((sum, item) => sum + item.amountCzk, 0);
  const openMaintenance = maintenanceTickets.filter((ticket) => !ticket.resolved).length;

  return (
    <AdminPage title="Provozni prehled" description="Denní manažerský pohled na obsazenost, ukoly a trzby.">
      <section className="metric-grid">
        <article className="metric-card">
          <h3>Obsazenost</h3>
          <div className="metric-value">{Math.round((occupied / rooms.length) * 100)} %</div>
          <p className="muted">{occupied} z {rooms.length} kajut obsazeno</p>
        </article>
        <article className="metric-card">
          <h3>Rezervace</h3>
          <div className="metric-value">{reservations.length}</div>
          <p className="muted">Aktivni rezervace v mock datech</p>
        </article>
        <article className="metric-card">
          <h3>Trzby</h3>
          <div className="metric-value">{revenue.toLocaleString("cs-CZ")} Kc</div>
          <p className="muted">Souhrn ubytovani, baru a eventu</p>
        </article>
        <article className="metric-card">
          <h3>Udrzba</h3>
          <div className="metric-value">{openMaintenance}</div>
          <p className="muted">Otevrene servisni ukoly</p>
        </article>
      </section>

      <section className="admin-grid">
        <article className="admin-card">
          <h3>Dnesni rezervace</h3>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Kajuta</th>
                <th>Termin</th>
                <th>Stav</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation.id}>
                  <td>{reservation.id}</td>
                  <td>{reservation.roomId}</td>
                  <td>{reservation.arrival} - {reservation.departure}</td>
                  <td><StatusPill label={reservation.status} tone="success" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
        <article className="admin-card">
          <h3>Housekeeping</h3>
          {housekeepingTasks.map((task) => (
            <p className="muted" key={task.id}>
              <strong>{task.roomId}</strong>: {task.status} · {task.assignedTo}
            </p>
          ))}
        </article>
      </section>
    </AdminPage>
  );
}
