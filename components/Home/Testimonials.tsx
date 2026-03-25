import KritikSaranForm from "@/components/Home/KritikSaranForm";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ibu Rahma",
    role: "Ibu Rumah Tangga",
    quote: "Telurnya benar-benar segar! Anak-anak saya jadi suka makan telur rebus karena kuningnya bagus dan tidak amis.",
    rating: 5,
  },
  {
    name: "Bapak Agung",
    role: "Pemilik Warung Makan",
    quote: "Pelanggan saya selalu puas dengan kualitas telur dari sini. Konsisten, bersih, dan ukurannya pas.",
    rating: 5,
  },
  {
    name: "Mbak Sari",
    role: "Pecinta Kue",
    quote: "Kue buatan saya jadi lebih mengembang dan warnanya cantik. Beda banget kualitasnya sama telur biasa.",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">Apa Kata Mereka?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <p className="text-right font-semibold">- {testimonial.name}</p>
              <p className="text-right text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
        <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6">Bagikan Pendapat Anda</h3>
            <KritikSaranForm />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
