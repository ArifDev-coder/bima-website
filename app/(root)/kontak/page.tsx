import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Bima Eggs | Layanan Pelanggan",
  description: "Ada pertanyaan atau ingin memesan telur? Hubungi tim Bima Eggs melalui WhatsApp, telepon, atau email.",
};

export default function Kontak() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-brand-secondary text-white py-16 text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-2">Hubungi Kami</h1>
        <p className="text-brand-accent">Kami siap membantu kebutuhan Anda.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-brand-bg p-8 rounded-2xl border border-brand-accent">
            <h2 className="text-2xl font-bold text-brand-secondary mb-6">Informasi Kontak</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-primary mt-1" />
                <div>
                  <h3 className="font-bold text-stone-800">Alamat Kami</h3>
                  <p className="text-stone-600 text-sm">Jl. Peternakan No. 88, Kecamatan Sukamaju, Bogor, Jawa Barat 16123</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-brand-primary mt-1" />
                <div>
                  <h3 className="font-bold text-stone-800">Telepon / WhatsApp</h3>
                  <p className="text-stone-600 text-sm">+62 812-3456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-brand-primary mt-1" />
                <div>
                  <h3 className="font-bold text-stone-800">Email</h3>
                  <p className="text-stone-600 text-sm">halo@bimaeggs.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-brand-primary mt-1" />
                <div>
                  <h3 className="font-bold text-stone-800">Jam Operasional</h3>
                  <p className="text-stone-600 text-sm">Senin - Sabtu: 08.00 - 17.00</p>
                  <p className="text-stone-600 text-sm">Minggu: Tutup</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-stone-200 h-64 rounded-2xl flex items-center justify-center text-stone-500">
             <span className="flex items-center gap-2"><MapPin /> Peta Lokasi (Placeholder)</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
          <h2 className="text-2xl font-bold text-brand-secondary mb-6">Kirim Pesan</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Nama Lengkap</label>
              <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="Masukkan nama Anda" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="email@contoh.com" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">Subjek</label>
              <select id="subject" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all bg-white">
                <option value="">Pilih Subjek</option>
                <option value="order">Pemesanan</option>
                <option value="partnership">Kerjasama</option>
                <option value="complaint">Keluhan</option>
                <option value="other">Lainnya</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Pesan</label>
              <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all resize-none" placeholder="Tulis pesan Anda di sini..."></textarea>
            </div>
            <button type="submit" className="w-full bg-brand-primary hover:bg-amber-600 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-brand-primary/20">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
