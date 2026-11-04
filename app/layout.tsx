import "./globals.css";

export const metadata = {
  title: "The Glam Salon | Beauty, Tailored to You",
  description:
    "Expert care. Personalised experiences. Discover hair, skin, beauty, nails, and wellness services at The Glam Salon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
