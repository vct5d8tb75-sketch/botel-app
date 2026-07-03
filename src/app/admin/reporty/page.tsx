import { AdminPage } from "@/components/admin-page";

export default function ReportsPage() {
  return (
    <AdminPage title="Reporty pro majitele" description="Zaklad reportingu pro obsazenost, ADR, trzby a provozni naklady.">
      <div className="card-grid">
        {["Obsazenost a ADR", "Trzby podle stredisek", "Naklady a marze"].map((report) => (
          <article className="admin-card" key={report}>
            <h3>{report}</h3>
            <p className="muted">Placeholder pro grafy, exporty a pravidelne reporty.</p>
          </article>
        ))}
      </div>
    </AdminPage>
  );
}
