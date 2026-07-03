import { integrationConfig } from "./config";

export async function syncPrevioReservations() {
  if (!integrationConfig.previo.enabled) {
    return {
      ok: false,
      message: "Previo integration is not configured yet."
    };
  }

  // TODO: Add authenticated Previo API calls when credentials and endpoint contract are available.
  return {
    ok: true,
    message: "Previo sync placeholder executed."
  };
}
