import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wasgamuwa Taxi & Tours | Sri Lanka Travel",
  description:
    "Professional taxi and tour services across Sri Lanka. Airport transfers, wildlife safari transport, and custom tours with licensed, experienced drivers. Call Dileep Prasad: +94 76 343 3434.",
  keywords:
    "Sri Lanka taxi, Wasgamuwa tours, airport transfer Sri Lanka, safari tours, Dileep Prasad taxi",

  openGraph: {
    title: "Wasgamuwa Taxi & Tours",
    description: "Your trusted travel partner in Sri Lanka",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}