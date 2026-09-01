import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FollowUs from "@/components/FollowUs";

export const metadata: Metadata = {
  title: "Cream & Culture Yoghurt -Order and delivery done countrywide",
  description:
    "Yoghurt made daily making it fresh. available in different flabvors. Order and delivery done countrywide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,100..900,0..100,0..1&family=Work+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FollowUs />
        </CartProvider>
      </body>
    </html>
  );
}
