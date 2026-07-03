import { AdminPage } from "@/components/admin-page";
import { StatusPill } from "@/components/status-pill";
import { integrationConfig } from "@/lib/integrations/config";

export default function SettingsPage() {
  const integrations = [
    { name: "Previo", config: integrationConfig.previo },
    { name: "Dotykacka", config: integrationConfig.dotykacka },
    { name: "Money S3", config: integrationConfig.moneyS3 },
    { name: "Pohoda", config: integrationConfig.pohoda }
  ];

  return (
    <AdminPage title="Nastaveni" description="Misto pro konfiguraci provozu, uzivatelu a externich systemu.">
      <div className="card-grid">
        {integrations.map((integration) => (
          <article className="admin-card" key={integration.name}>
            <h3>{integration.name}</h3>
            <p className="muted">API klice patri do .env.local. Reálná integrace zatím není implementovana.</p>
            <StatusPill label={integration.config.enabled ? "configured" : "not configured"} tone={integration.config.enabled ? "success" : "warning"} />
          </article>
        ))}
      </div>
    </AdminPage>
  );
}
