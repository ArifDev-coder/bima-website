import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto bg-brand-primary rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl shadow-brand-primary/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-secondary/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Siap Menyajikan Telur Segar Hari Ini?</h2>
          <p className="text-brand-accent text-lg mb-10 max-w-2xl mx-auto font-medium">
            Jangan kompromi dengan kualitas. Berikan yang terbaik untuk keluarga Anda dengan telur pilihan dari Juragan Telur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/produk" 
              className="bg-brand-secondary hover:bg-stone-800 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-1"
            >
              <ShoppingCart size={20} />
              Lihat Produk
            </Link>
            <Link 
              href="/kontak" 
              className="bg-white hover:bg-brand-accent text-brand-secondary px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-1"
            >
              Hubungi Kami
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
