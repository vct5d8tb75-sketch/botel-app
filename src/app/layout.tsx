import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Botel",
  description: "Moderni webova aplikace pro prezentaci a rizeni The Botel."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
