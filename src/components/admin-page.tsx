import { AdminShell } from "./admin-shell";

interface AdminPageProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function AdminPage({ title, description, children }: AdminPageProps) {
  return (
    <AdminShell>
      <header className="admin-header">
        <div>
          <span className="eyebrow">Interni system</span>
          <h1>{title}</h1>
          <p className="muted">{description}</p>
        </div>
      </header>
      {children}
    </AdminShell>
  );
}
