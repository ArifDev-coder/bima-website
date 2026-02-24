import { Egg, Check, ShoppingCart } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produk Telur Segar | Bima Eggs",
  description: "Cek katalog telur ayam ras, omega 3, telur kampung, dan telur asin berkualitas tinggi dari Bima Eggs.",
};

const products = [
  {
    id: 1,
    name: "Telur Ayam Ras Grade A",
    description: "Telur pilihan dengan cangkang kuat dan kuning telur berwarna oranye cerah. Sempurna untuk kue dan masakan sehari-hari.",
    price: "Rp 26.500 / kg",
    features: ["Cangkang Bersih", "Kuning Telur Pekat", "Segar < 3 Hari"],
    badge: "Terlaris",
    color: "bg-orange-100",
  },
  {
    id: 2,
    name: "Telur Omega 3",
    description: "Diperkaya dengan Omega 3 alami dari pakan khusus biji rami. Pilihan sehat untuk perkembangan otak anak.",
    price: "Rp 32.000 / pack (10 butir)",
    features: ["Tinggi Omega 3", "Rendah Kolesterol", "Bebas Antibiotik"],
    badge: "Premium",
    color: "bg-amber-100",
  },
  {
    id: 3,
    name: "Telur Ayam Kampung Asli",
    description: "Dari ayam kampung yang dipelihara secara free-range. Rasa lebih gurih dan tekstur putih telur lebih kenyal.",
    price: "Rp 3.500 / butir",
    features: ["Free Range", "Rasa Gurih Alami", "Tinggi Protein"],
    badge: null,
    color: "bg-yellow-50",
  },
  {
    id: 4,
    name: "Telur Asin Masir",
    description: "Telur bebek pilihan yang diasinkan dengan garam laut murni dan abu gosok. Kuningnya berminyak dan masir.",
    price: "Rp 4.000 / butir",
    features: ["Masir & Berminyak", "Tidak Terlalu Asin", "Tahan Lama"],
    badge: "Favorit",
    color: "bg-blue-50",
  },
];

export default function Produk() {
  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      <div className="bg-brand-secondary text-white py-16 text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-2">Katalog Produk</h1>
        <p className="text-brand-accent">Pilihan telur terbaik untuk kebutuhan nutrisi Anda.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group flex flex-col">
            <div className={`h-48 ${product.color} flex items-center justify-center relative overflow-hidden`}>
              {product.badge && (
                <span className="absolute top-4 right-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm z-10">
                  {product.badge}
                </span>
              )}
              <Egg className="w-24 h-24 text-brand-secondary/20 group-hover:scale-110 transition-transform duration-500" />
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-brand-secondary mb-2">{product.name}</h3>
              <p className="text-stone-500 text-sm mb-4 line-clamp-3 flex-1">{product.description}</p>
              
              <ul className="space-y-2 mb-6">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-stone-600">
                    <Check size={14} className="text-brand-primary" />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center justify-between pt-4 border-t border-stone-100">
                <span className="text-lg font-bold text-brand-primary">{product.price}</span>
                <button className="bg-brand-secondary hover:bg-brand-primary text-white p-2 rounded-lg transition-colors">
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
