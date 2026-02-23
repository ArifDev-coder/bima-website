import Image from "next/image"; // Import ini wajib!
import { ShoppingCart, ArrowRight, CheckCircle2 } from "lucide-react";
import HeroEgg from "@/public/Home/heroegg.jpg";

export default function Hero() {
  return (
    <section className="relative bg-brand-bg overflow-hidden py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Kolom Kiri: Teks & CTA */}
        <div className="z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-brand-accent text-brand-secondary px-4 py-2 rounded-full text-sm font-bold mb-6 border border-brand-primary/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-primary"></span>
            </span>
            Stok Segar Hari Ini Tersedia!
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-dark leading-tight mb-6">
            Protein <span className="text-brand-primary">Segar</span> Berkah
            Untuk Keluarga.
          </h1>

          <p className="text-lg text-stone-600 mb-8 max-w-lg mx-auto md:mx-0">
            Telur kualitas premium langsung dari kandang, disortir dengan hati
            untuk memastikan tidak ada yang retak sampai ke dapur Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="flex items-center justify-center gap-2 bg-brand-primary hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand-primary/30 transition-all hover:-translate-y-1 active:scale-95">
              <ShoppingCart size={22} />
              Pesan Sekarang
            </button>
            <button className="flex items-center justify-center gap-2 bg-white border-2 border-brand-accent text-brand-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-accent transition-all">
              Lihat Katalog
              <ArrowRight size={22} />
            </button>
          </div>
        </div>

        {/* Kolom Kanan: Gambar Telur dengan Next.js Image */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-[80%] h-[80%] bg-brand-primary/10 rounded-full blur-3xl"></div>

          <div className="relative w-full aspect-square max-w-125">
            {/* INI DIA: Komponen Image Next.js */}
            <Image
              src={HeroEgg}
              alt="Telur Segar Berkualitas"
              fill // Biar gambarnya menutupi kontainer parent
              priority // Prioritaskan loading karena ini gambar utama (LCP)
              className="object-cover rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 brightness-80"
              sizes="(max-width: 768px) 100vw, 50vw" // Responsive hint buat browser
            />

            {/* Floating Card Info */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-brand-accent z-20">
              <p className="text-brand-primary font-bold text-2xl">Rp 26.500</p>
              <p className="text-stone-400 text-xs font-medium">
                Harga Per Kilo Hari Ini
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
