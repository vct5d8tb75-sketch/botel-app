import { AdminPage } from "@/components/admin-page";
import { StatusPill } from "@/components/status-pill";
import { barStock } from "@/lib/mock-data";

export default function AdminRestaurantPage() {
  return (
    <AdminPage title="Restaurace a bar" description="Sklad, minibar, barove polozky a budouci Dotykacka import.">
      <article className="admin-card">
        <table className="table">
          <thead>
            <tr>
              <th>Polozka</th>
              <th>Kategorie</th>
              <th>Sklad</th>
              <th>Dodavatel</th>
              <th>Stav</th>
            </tr>
          </thead>
          <tbody>
            {barStock.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.currentQty} {item.unit}</td>
                <td>{item.supplier}</td>
                <td>
                  <StatusPill
                    label={item.currentQty <= item.reorderBelow ? "objednat" : "skladem"}
                    tone={item.currentQty <= item.reorderBelow ? "warning" : "success"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </AdminPage>
  );
}
