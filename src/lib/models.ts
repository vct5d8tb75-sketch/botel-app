export type RoomStatus = "available" | "occupied" | "maintenance";
export type ReservationStatus = "confirmed" | "option" | "checked-in" | "checked-out";
export type HousekeepingStatus = "clean" | "dirty" | "in-progress" | "inspection";
export type MaintenancePriority = "low" | "medium" | "high";
export type RevenueSource = "rooms" | "restaurant" | "bar" | "events";

export interface Room {
  id: string;
  name: string;
  category: string;
  deck: string;
  capacity: number;
  sizeM2: number;
  priceFromCzk: number;
  status: RoomStatus;
  features: string[];
  image: string;
}

export interface Guest {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  vip: boolean;
}

export interface Reservation {
  id: string;
  roomId: string;
  guestId: string;
  arrival: string;
  departure: string;
  guests: number;
  status: ReservationStatus;
  channel: "direct" | "previo" | "booking" | "event";
  totalCzk: number;
}

export interface HousekeepingTask {
  id: string;
  roomId: string;
  assignedTo: string;
  status: HousekeepingStatus;
  dueAt: string;
  notes: string;
}

export interface MaintenanceTicket {
  id: string;
  area: string;
  title: string;
  priority: MaintenancePriority;
  reportedAt: string;
  owner: string;
  resolved: boolean;
}

export interface RevenueRecord {
  id: string;
  date: string;
  source: RevenueSource;
  amountCzk: number;
  note: string;
}

export interface BarStockItem {
  id: string;
  name: string;
  category: "wine" | "spirits" | "soft-drinks" | "coffee" | "food";
  currentQty: number;
  unit: string;
  reorderBelow: number;
  supplier: string;
}
