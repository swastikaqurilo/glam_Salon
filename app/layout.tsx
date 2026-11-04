import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Glam Salon | Beauty, Tailored to You",
  description:
    "Expert care. Personalised experiences. Discover hair, skin, beauty, nails, and wellness services at The Glam Salon.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}