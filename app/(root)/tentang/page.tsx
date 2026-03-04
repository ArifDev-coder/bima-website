import { Users, Target, History } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami | Juragan Telur",
  description: "Pelajari sejarah dan komitmen Juragan Telur dalam menyediakan protein terbaik untuk keluarga sejak 2010.",
};

export default function Tentang() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Header Section */}
      <section className="bg-brand-secondary text-white py-20 text-center" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Tentang Juragan Telur</h1>
        <p className="text-brand-accent max-w-2xl mx-auto text-lg">
          Lebih dari sekadar penjual telur, kami adalah mitra nutrisi keluarga Anda.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-24">
        {/* Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 md:h-full bg-brand-bg rounded-2xl overflow-hidden" data-aos="fade-right">
             {/* Placeholder for an image */}
             <div className="absolute inset-0 flex items-center justify-center text-brand-secondary/20">
                <History size={64} />
             </div>
          </div>
          <div data-aos="fade-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-primary p-2 rounded-lg text-white">
                <History size={24} />
              </div>
              <h2 className="text-2xl font-bold text-brand-secondary">Perjalanan Kami</h2>
            </div>
            <p className="text-stone-600 leading-relaxed mb-4">
              Juragan Telur bermula dari sebuah peternakan kecil di kaki Gunung Bromo pada tahun 2010. 
              Dengan semangat untuk menyediakan sumber protein terjangkau namun berkualitas tinggi, 
              kami memulai dengan hanya 500 ekor ayam petelur.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Kini, kami telah berkembang menjadi pemasok telur terpercaya yang melayani ribuan keluarga, 
              restoran, dan hotel di wilayah Gempol, Pasuruan, dan sekitarnya. Konsistensi dan integritas adalah kunci kami.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-brand-bg p-8 rounded-2xl border border-brand-accent" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-brand-secondary p-2 rounded-lg text-white">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-secondary">Visi Kami</h3>
            </div>
            <p className="text-stone-700">
              Menjadi penyedia telur ayam segar nomor satu di Indonesia yang dikenal karena 
              kesegaran, kualitas, dan inovasi dalam peternakan berkelanjutan.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-brand-primary p-2 rounded-lg text-white">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-secondary">Misi Kami</h3>
            </div>
            <ul className="space-y-3 text-stone-600 list-disc pl-5">
              <li>Menjaga standar kebersihan dan kesehatan ternak yang ketat.</li>
              <li>Memberikan pelayanan yang ramah, cepat, dan transparan.</li>
              <li>Mengedukasi masyarakat tentang pentingnya konsumsi protein hewani.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
