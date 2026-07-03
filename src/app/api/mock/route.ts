import { NextResponse } from "next/server";
import {
  barStock,
  guests,
  housekeepingTasks,
  maintenanceTickets,
  reservations,
  revenueRecords,
  rooms
} from "@/lib/mock-data";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json({
    rooms,
    guests,
    reservations,
    housekeepingTasks,
    maintenanceTickets,
    revenueRecords,
    barStock
  });
}
