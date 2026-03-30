"use client";
import { NoWa2 } from "@/data/NoWa";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nama: "",
    subjek: "",
    pesan: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmiting, setIsSubmit] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmit(true);

    try {
      const text = `https://wa.me/62${NoWa2}?text=┌───────────────┐%0A%20%20%20%20%20*PESAN%20BARU*%0A└───────────────┘%0A%0A*Nama%3A*%20${formData.nama}%0A*Subjek%3A*%20${formData.subjek}%0A%0A*Isi%20Pesan%3A*%0A_____________________%0A%0A${
        formData.pesan
      }%0A${Date.now()}%0A_____________________`;

      window.open(text);
    } catch {
      setError("Gagal mengirim pesanan. Periksa koneksi internet Anda.");
    } finally {
      setIsSubmit(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
      <h2 className="text-2xl font-bold text-brand-secondary mb-6">
        Kirim Pesan
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-stone-700 mb-2"
          >
            Nama Lengkap
          </label>
          <input
            required
            value={formData.nama}
            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
            type="text"
            id="name"
            className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
            placeholder="Masukkan nama Anda"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-stone-700 mb-2"
          >
            Subjek
          </label>
          <select
            required
            value={formData.subjek}
            onChange={(e) =>
              setFormData({ ...formData, subjek: e.target.value })
            }
            id="subject"
            className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all bg-white"
          >
            <option value="">Pilih Subjek</option>
            <option value="order">Pemesanan</option>
            <option value="partnership">Kerjasama</option>
            <option value="complaint">Keluhan</option>
            <option value="other">Lainnya</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-stone-700 mb-2"
          >
            Pesan
          </label>
          <textarea
            required
            value={formData.pesan}
            onChange={(e) =>
              setFormData({ ...formData, pesan: e.target.value })
            }
            id="message"
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all resize-none"
            placeholder="Tulis pesan Anda di sini..."
          ></textarea>
        </div>
        {error ?? <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full bg-brand-primary hover:bg-amber-600 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-brand-primary/20"
        >
          {isSubmiting ? "Mengirim Pesan..." : "Kirim Pesan"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;


