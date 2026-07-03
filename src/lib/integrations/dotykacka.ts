import { integrationConfig } from "./config";

export async function syncDotykackaSales() {
  if (!integrationConfig.dotykacka.enabled) {
    return {
      ok: false,
      message: "Dotykacka integration is not configured yet."
    };
  }

  // TODO: Add Dotykacka API import for POS revenue, stock movements, and bar items.
  return {
    ok: true,
    message: "Dotykacka sync placeholder executed."
  };
}
