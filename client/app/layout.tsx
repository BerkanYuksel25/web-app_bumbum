import { type ReactNode } from "react";

import { type Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Bumbum",
  description: "Bumbum",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} font-sans bg-secondary-main`}
    >
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
