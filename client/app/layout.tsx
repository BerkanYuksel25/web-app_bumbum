import { type ReactNode } from "react";

import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bumbum",
  description: "Bumbum",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
