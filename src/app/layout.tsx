import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syed Maaz | Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}