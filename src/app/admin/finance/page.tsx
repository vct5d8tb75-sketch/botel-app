import { AdminPage } from "@/components/admin-page";
import { revenueRecords } from "@/lib/mock-data";

export default function FinancePage() {
  return (
    <AdminPage title="Finance" description="Trzby, naklady a priprava exportu do Money S3 nebo Pohody.">
      <article className="admin-card">
        <table className="table">
          <thead>
            <tr>
              <th>Datum</th>
              <th>Zdroj</th>
              <th>Castka</th>
              <th>Poznamka</th>
            </tr>
          </thead>
          <tbody>
            {revenueRecords.map((record) => (
              <tr key={record.id}>
                <td>{record.date}</td>
                <td>{record.source}</td>
                <td>{record.amountCzk.toLocaleString("cs-CZ")} Kc</td>
                <td>{record.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </AdminPage>
  );
}
