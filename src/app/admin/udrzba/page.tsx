import { AdminPage } from "@/components/admin-page";
import { StatusPill } from "@/components/status-pill";
import { maintenanceTickets } from "@/lib/mock-data";

export default function MaintenancePage() {
  return (
    <AdminPage title="Udrzba" description="Technicke tikety pro kajuty, paluby, kuchyn a lodni provoz.">
      <div className="card-grid">
        {maintenanceTickets.map((ticket) => (
          <article className="admin-card" key={ticket.id}>
            <h3>{ticket.title}</h3>
            <p className="muted">{ticket.area} · {ticket.owner} · {ticket.reportedAt}</p>
            <StatusPill label={ticket.priority} tone={ticket.priority === "high" ? "danger" : "warning"} />
          </article>
        ))}
      </div>
    </AdminPage>
  );
}
