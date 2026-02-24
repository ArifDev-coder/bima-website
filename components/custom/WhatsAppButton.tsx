import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "6281234567890"; // Ganti dengan nomor asli
  const message = "Halo Bima Eggs, saya ingin bertanya tentang produk telur...";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center group"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
      <span className="absolute right-full mr-3 bg-white text-stone-800 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-md whitespace-nowrap pointer-events-none">
        Tanya Kami di WA
      </span>
    </a>
  );
}
