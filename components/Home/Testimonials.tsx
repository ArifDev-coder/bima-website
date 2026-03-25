import { KritikSaranForm } from "@/components/Home/KritikSaranForm";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ibu Rahma",
    role: "Ibu Rumah Tangga",
    quote: "Telurnya benar-benar segar! Anak-anak saya jadi suka makan telur rebus karena kuningnya bagus dan tidak amis.",
    rating: 5,
  },
  {
    name: "Pak Budi",
    role: "Pengusaha Martabak",
    quote: "Kualitas telur Juragan Telur konsisten. Ukurannya besar-besar dan jarang ada yang pecah saat pengiriman.",
    rating: 5,
  },
  {
    name: "Sinta",
    role: "Mahasiswi",
    quote: "Suka banget sama pelayanan adminnya yang ramah. Pengiriman juga cepat sampai kosan.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/bg-pattern.svg')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-wider uppercase text-sm">Testimoni</span>
          <h2 className="text-4xl font-extrabold text-brand-secondary mt-2">Kata Mereka Tentang Kami</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-accent hover:shadow-xl transition-all duration-300">
              <div className="flex gap-1 text-brand-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < item.rating ? "currentColor" : "none"} strokeWidth={i < item.rating ? 0 : 2} className={i < item.rating ? "" : "text-gray-300"} />
                ))}
              </div>
              <p className="text-stone-600 mb-6 italic">&quot;{item.quote}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center font-bold text-brand-secondary">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-brand-secondary">{item.name}</h4>
                  <p className="text-xs text-stone-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-extrabold text-brand-secondary">Bagikan Pendapat Anda</h3>
            <p className="text-stone-600 mt-2">Kami sangat menghargai ulasan Anda untuk membantu kami menjadi lebih baik.</p>
          </div>
          <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-brand-accent">
            <KritikSaranForm />
          </div>
        </div>
      </div>
    </section>
  );
}
