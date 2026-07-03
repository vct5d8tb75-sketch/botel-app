import type {
  BarStockItem,
  Guest,
  HousekeepingTask,
  MaintenanceTicket,
  Reservation,
  RevenueRecord,
  Room
} from "./models";

export const rooms: Room[] = [
  {
    id: "room-101",
    name: "Kajuta Vltava",
    category: "Deluxe River Cabin",
    deck: "Hlavni paluba",
    capacity: 2,
    sizeM2: 22,
    priceFromCzk: 3900,
    status: "available",
    features: ["Vyhled na reku", "King bed", "Pracovni kout", "Premium kosmetika"],
    image: "/marina-gallery/02.jpg"
  },
  {
    id: "room-204",
    name: "Suite Horizon",
    category: "Signature Suite",
    deck: "Horni paluba",
    capacity: 3,
    sizeM2: 34,
    priceFromCzk: 6200,
    status: "occupied",
    features: ["Soukromy balkon", "Oddelena obyvaci cast", "Minibar", "Vyhled na Prahu"],
    image: "/marina-gallery/01.jpg"
  },
  {
    id: "room-112",
    name: "Kajuta Anchor",
    category: "Classic Cabin",
    deck: "Dolni paluba",
    capacity: 2,
    sizeM2: 18,
    priceFromCzk: 2900,
    status: "maintenance",
    features: ["Queen bed", "Ticha zona", "Rychla Wi-Fi", "Kompaktni koupelna"],
    image: "/marina-gallery/03.jpg"
  }
];

export const guests: Guest[] = [
  {
    id: "guest-1",
    fullName: "Eva Novakova",
    email: "eva.novakova@example.com",
    phone: "+420 777 111 222",
    country: "CZ",
    vip: true
  },
  {
    id: "guest-2",
    fullName: "Martin Keller",
    email: "martin.keller@example.com",
    phone: "+49 171 222 333",
    country: "DE",
    vip: false
  }
];

export const reservations: Reservation[] = [
  {
    id: "res-1001",
    roomId: "room-204",
    guestId: "guest-1",
    arrival: "2026-07-04",
    departure: "2026-07-07",
    guests: 2,
    status: "confirmed",
    channel: "direct",
    totalCzk: 18600
  },
  {
    id: "res-1002",
    roomId: "room-101",
    guestId: "guest-2",
    arrival: "2026-07-08",
    departure: "2026-07-10",
    guests: 2,
    status: "option",
    channel: "previo",
    totalCzk: 7800
  }
];

export const housekeepingTasks: HousekeepingTask[] = [
  {
    id: "hk-1",
    roomId: "room-101",
    assignedTo: "Lucie",
    status: "inspection",
    dueAt: "2026-07-03T13:00:00+02:00",
    notes: "Doplnit minibar a zkontrolovat koupelnu."
  },
  {
    id: "hk-2",
    roomId: "room-204",
    assignedTo: "Petr",
    status: "clean",
    dueAt: "2026-07-03T15:00:00+02:00",
    notes: "VIP priprava pred prijezdem."
  }
];

export const maintenanceTickets: MaintenanceTicket[] = [
  {
    id: "mnt-1",
    area: "Terasa",
    title: "Kontrola osvetleni horni paluby",
    priority: "medium",
    reportedAt: "2026-07-03",
    owner: "Technik",
    resolved: false
  },
  {
    id: "mnt-2",
    area: "Kajuta Anchor",
    title: "Vymena sifonu v koupelne",
    priority: "high",
    reportedAt: "2026-07-02",
    owner: "Externi servis",
    resolved: false
  }
];

export const revenueRecords: RevenueRecord[] = [
  { id: "rev-1", date: "2026-07-01", source: "rooms", amountCzk: 84200, note: "Ubytovani" },
  { id: "rev-2", date: "2026-07-01", source: "restaurant", amountCzk: 31800, note: "Restaurace" },
  { id: "rev-3", date: "2026-07-01", source: "bar", amountCzk: 14600, note: "Bar" },
  { id: "rev-4", date: "2026-07-02", source: "events", amountCzk: 52000, note: "Firemni event" }
];

export const barStock: BarStockItem[] = [
  {
    id: "stock-1",
    name: "Prosecco premium",
    category: "wine",
    currentQty: 18,
    unit: "lahvi",
    reorderBelow: 12,
    supplier: "Wine Partner"
  },
  {
    id: "stock-2",
    name: "Espresso smes",
    category: "coffee",
    currentQty: 5,
    unit: "kg",
    reorderBelow: 4,
    supplier: "Prague Coffee"
  },
  {
    id: "stock-3",
    name: "Tonic",
    category: "soft-drinks",
    currentQty: 42,
    unit: "ks",
    reorderBelow: 30,
    supplier: "Bar Supply"
  }
];
