import { integrationConfig } from "./config";

export async function exportAccountingDraft(provider: "moneyS3" | "pohoda") {
  const config = integrationConfig[provider];

  if (!config.enabled) {
    return {
      ok: false,
      message: `${provider} integration is not configured yet.`
    };
  }

  // TODO: Add invoice, cost, and revenue export after accounting workflow is selected.
  return {
    ok: true,
    message: `${provider} export placeholder executed.`
  };
}
