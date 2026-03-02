import Products from "@/components/Products/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produk Telur Segar | Juragan Telur",
  description: "Cek katalog telur ayam berkualitas tinggi dari Juragan Telur.",
};

export default function Produk() {
  return (
    <div className="bg-stone-50 min-h-screen pb-20 overflow-x-hidden">
      <div className="bg-brand-secondary text-white py-16 text-center mb-12" data-aos="fade-down">
        <h1 className="text-4xl font-extrabold mb-2">Katalog Produk</h1>
        <p className="text-brand-accent">Pilihan telur terbaik untuk kebutuhan nutrisi Anda.</p>
      </div>

      <div data-aos="fade-up">
        <Products />
      </div>
    </div>
  );
}
