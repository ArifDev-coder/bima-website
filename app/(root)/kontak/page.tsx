import ContactForm from "@/components/Kontak/ContactForm";
import { NoWa1, NoWa2 } from "@/data/NoWa";
import { PhoneNumberFormat } from "@/lib/tools/PhoneNumberFormat";
import { Phone, MapPin, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Juragan Telur | Layanan Pelanggan",
  description:
    "Ada pertanyaan atau ingin memesan telur? Hubungi tim Juragan Telur melalui WhatsApp.",
};

export default function Kontak() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <div className="bg-brand-secondary text-white py-16 text-center mb-12" data-aos="fade-down">
        <h1 className="text-4xl font-extrabold mb-2">Hubungi Kami</h1>
        <p className="text-brand-accent">Kami siap membantu kebutuhan Anda.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8" data-aos="fade-right">
          <div className="bg-brand-bg p-8 rounded-2xl border border-brand-accent">
            <h2 className="text-2xl font-bold text-brand-secondary mb-6">
              Informasi Kontak
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-primary mt-1" />
                <div>
                  <h3 className="font-bold text-stone-800">Alamat Kami</h3>
                  <p className="text-stone-600 text-sm">
                  Kavlingan Utara, Sumberingin, Rt04 Rw07, Sumbersuko, Gempol, Pasuruan
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-brand-primary mt-1" />
                <div>
                  <h3 className="font-bold text-stone-800">
                    Telepon / WhatsApp
                  </h3>
                  <p className="text-stone-600 text-sm">+62 {PhoneNumberFormat(NoWa1, "-")}</p>
                  <p className="text-stone-600 text-sm">+62 {PhoneNumberFormat(NoWa2, "-")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-brand-primary mt-1" />
                <div>
                  <h3 className="font-bold text-stone-800">Jam Operasional</h3>
                  <p className="text-stone-600 text-sm">
                    Senin - Sabtu: 08.00 - 17.00
                  </p>
                  <p className="text-stone-600 text-sm">Minggu: Tutup</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="h-96 w-full rounded-2xl overflow-hidden border border-brand-accent">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d459.88680437923637!2d112.6788842172597!3d-7.622723587191003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d91aa2f3a9d1%3A0x8b768f7aa7b0cd2d!2s9MGH%2BXG9%2C%20Area%20Sawah%2FKebun%2C%20Sumbersuko%2C%20Kec.%20Gempol%2C%20Pasuruan%2C%20Jawa%20Timur%2067155!5e0!3m2!1sid!2sid!4v1774112164701!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border:0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        <div data-aos="fade-left">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
