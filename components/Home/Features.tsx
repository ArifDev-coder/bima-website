import { Truck, ShieldCheck, Heart, Leaf } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-12 h-12 text-brand-primary mb-4" />,
    title: "Pengiriman Cepat",
    description: "Pesanan telur Anda dikirim langsung dari peternakan dalam waktu 24 jam untuk menjamin kesegaran maksimal.",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-brand-primary mb-4" />,
    title: "Jaminan Kualitas",
    description: "Setiap butir telur melewati proses seleksi ketat. Tidak ada telur retak atau busuk yang sampai ke tangan Anda.",
  },
  {
    icon: <Leaf className="w-12 h-12 text-brand-primary mb-4" />,
    title: "100% Alami",
    description: "Ayam kami diberi pakan alami tanpa suntikan hormon, menghasilkan telur yang sehat dan bergizi tinggi.",
  },
  {
    icon: <Heart className="w-12 h-12 text-brand-primary mb-4" />,
    title: "Pelayanan Ramah",
    description: "Tim kami siap melayani kebutuhan Anda dengan senyum dan solusi terbaik setiap hari.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-wider uppercase text-sm">Mengapa Memilih Kami?</span>
          <h2 className="text-4xl font-extrabold text-brand-secondary mt-2">Kualitas Terbaik Untuk Keluarga Anda</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-2xl bg-brand-bg hover:shadow-xl transition-all duration-300 border border-brand-accent group">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-secondary mb-3">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
