import { AdminPage } from "@/components/admin-page";
import { StatusPill } from "@/components/status-pill";
import { housekeepingTasks } from "@/lib/mock-data";

export default function HousekeepingPage() {
  return (
    <AdminPage title="Housekeeping" description="Ukoly uklidu, inspekci a pripravy pokoju.">
      <article className="admin-card">
        <table className="table">
          <thead>
            <tr>
              <th>Kajuta</th>
              <th>Prirazeno</th>
              <th>Termin</th>
              <th>Poznamka</th>
              <th>Stav</th>
            </tr>
          </thead>
          <tbody>
            {housekeepingTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.roomId}</td>
                <td>{task.assignedTo}</td>
                <td>{task.dueAt}</td>
                <td>{task.notes}</td>
                <td><StatusPill label={task.status} tone={task.status === "clean" ? "success" : "warning"} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </AdminPage>
  );
}
