import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/context/CartContext";
import { AOSProvider } from "@/components/providers/AOSProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Juragan Telur",
  description: "Dapatkan telur ayam segar langsung dari peternakan. Juragan Telur menjamin kualitas dan kesegaran terbaik untuk nutrisi keluarga Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} antialiased`}>
        <AOSProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </AOSProvider>
      </body>
    </html>
  );
}
