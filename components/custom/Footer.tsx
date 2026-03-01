import Link from "next/link";
import { Egg, Phone, MapPin, Mail } from "lucide-react";
import { products } from "@/data/produk";

export default function Footer() {
  return (
    <footer className="bg-brand-secondary text-brand-accent pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-brand-primary p-1.5 rounded-lg">
              <Egg className="w-6 h-6 text-brand-secondary" />
            </div>
            <span className="font-black text-xl tracking-tight text-white">
              BIMA <span className="text-brand-primary">EGGS</span>
            </span>
          </div>
          <p className="text-brand-accent/80 text-sm leading-relaxed">
            Menyediakan telur segar berkualitas tinggi langsung dari peternakan
            ke meja makan Anda sejak 2010.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Menu</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/produk"
                className="hover:text-white transition-colors"
              >
                Produk Kami
              </Link>
            </li>
            <li>
              <Link
                href="/tentang"
                className="hover:text-white transition-colors"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href="/kontak"
                className="hover:text-white transition-colors"
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Produk</h3>
          <ul className="space-y-3 text-sm">
            {products.slice(0, 4).map((prod) => (
              <li key={prod.id}>
                <Link href="/produk">{prod.name}</Link>
              </li>
            ))}
            {/* <li><Link href="/produk" className="hover:text-white transition-colors">Telur Ayam Ras</Link></li>
            <li><Link href="/produk" className="hover:text-white transition-colors">Telur Omega 3</Link></li>
            <li><Link href="/produk" className="hover:text-white transition-colors">Telur Kampung</Link></li>
            <li><Link href="/produk" className="hover:text-white transition-colors">Telur Asin</Link></li> */}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Kontak</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 text-brand-primary" />
              <span>
                Jl. Peternakan No. 88, Kecamatan Sukamaju, Bogor, Jawa Barat
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-primary" />
              <span>+62 lupa</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-primary" />
              <span>+62 lupa</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-brand-accent/20 text-center text-xs text-brand-accent/60">
        <p>&copy; {new Date().getFullYear()} Bima Eggs. All rights reserved.</p>
      </div>
    </footer>
  );
}
