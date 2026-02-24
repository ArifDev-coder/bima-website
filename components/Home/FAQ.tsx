import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Apakah telur selalu segar setiap hari?",
    a: "Ya! Kami mengambil stok telur langsung dari peternakan setiap pagi dan melakukan distribusi di hari yang sama untuk memastikan kesegaran maksimal."
  },
  {
    q: "Bagaimana jika ada telur yang pecah saat pengiriman?",
    a: "Kami memberikan garansi ganti baru atau pengembalian dana jika terdapat telur yang pecah atau kualitasnya tidak sesuai saat sampai di tangan Anda."
  },
  {
    q: "Berapa minimal pembelian untuk layanan antar?",
    a: "Untuk wilayah Bogor kota, minimal pembelian adalah 1 kg. Untuk wilayah luar kota, silakan hubungi admin WhatsApp kami."
  },
  {
    q: "Apakah Bima Eggs melayani pembelian grosir?",
    a: "Tentu! Kami melayani suplai rutin untuk katering, restoran, dan toko kelontong dengan harga khusus grosir."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <HelpCircle className="w-12 h-12 text-brand-primary mx-auto mb-4" />
          <h2 className="text-4xl font-extrabold text-brand-secondary">Pertanyaan Sering Diajukan</h2>
          <p className="text-stone-500 mt-2">Segala hal yang perlu Anda ketahui tentang produk dan layanan kami.</p>
        </div>

        <div className="grid gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-brand-bg p-6 rounded-2xl border border-brand-accent">
              <h3 className="text-lg font-bold text-brand-secondary mb-2 flex items-start gap-3">
                <span className="bg-brand-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5">Q</span>
                {faq.q}
              </h3>
              <p className="text-stone-600 pl-9 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
