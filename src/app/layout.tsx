import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Botel App",
  description: "Moderni webova aplikace pro prezentaci a rizeni botelu."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
