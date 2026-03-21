"use client";
import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { NoWa1 } from "@/data/NoWa";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState("");

  const handleSend = () => {
    if (!userMsg.trim()) return; // Jangan kirim pesan kosong, malas bgt!
    
    const finalMsg = encodeURIComponent(userMsg);
    window.open(`https://wa.me/${NoWa1}?text=${finalMsg}`, "_blank");
    setIsOpen(false);
    setUserMsg("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* --- KOTAK CHAT (Hanya muncul kalau isOpen true) --- */}
      {isOpen && (
        <div className="mb-4 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden animate-in fade-in zoom-in duration-300 origin-bottom-right">
          {/* Header */}
          <div className="bg-[#25D366] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">B</div>
              <div>
                <p className="font-bold text-sm">Admin Toko Rizqy</p>
                <p className="text-[10px] opacity-90">Siap Melayani</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#e5ddd5] min-h-25 flex flex-col gap-2">
            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm self-start max-w-[80%] text-stone-800">
              Halo! Ada yang bisa kami bantu seputar stok telur hari ini? 🥚
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white flex items-center gap-2">
            <input
              type="text"
              placeholder="Tulis pesan..."
              className="flex-1 text-sm bg-stone-100 border-none focus:ring-1 focus:ring-[#25D366] rounded-full px-4 py-2 outline-none"
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button 
              onClick={handleSend}
              className="text-[#25D366] hover:scale-110 transition-transform"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}

      {/* --- TOMBOL UTAMA --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 flex items-center justify-center relative"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} fill="white" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] items-center justify-center font-bold text-white">1</span>
          </span>
        )}
      </button>
    </div>
  );
}