"use client";

import React, { useEffect, useState } from "react";
import { useCart } from "@/lib/context/CartContext";
import { X, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import { NoWa1 } from "@/data/NoWa";
import { cn } from "@/lib/utils";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  const handleCheckout = () => {
    const message = `Halo Juragan Telur, saya ingin memesan:

${cart
      .map(
        (item) =>
          `- ${item.name} (${item.quantity} kg) - Rp ${(
            item.price * item.quantity
          ).toLocaleString("id-ID")}`
      )
      .join("\n")}\n\n*Total: Rp ${totalPrice.toLocaleString("id-ID")}*\n\nMohon diproses ya, terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/62${NoWa1}?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-100 transition-opacity duration-300 h-screen w-screen",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-screen w-full max-w-md bg-white z-101 shadow-2xl transition-transform duration-300 ease-in-out transform flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6 border-b flex items-center justify-between bg-brand-secondary text-white">
          <div className="flex items-center gap-2">
            <ShoppingCart size={24} />
            <h2 className="text-xl font-bold">Keranjang Belanja</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-stone-400 gap-4">
              <ShoppingCart size={64} strokeWidth={1} />
              <p className="text-lg">Keranjang masih kosong</p>
              <button
                onClick={onClose}
                className="text-brand-primary font-bold hover:underline"
              >
                Mulai Belanja
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-center pb-6 border-b border-stone-100 last:border-0"
                >
                  <div className="relative h-20 w-20 rounded-xl overflow-hidden bg-stone-100 shrink-0">
                    <Image
                      src={item.picture}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-stone-900">{item.name}</h3>
                    <p className="text-brand-primary font-bold text-sm">
                      Rp {item.price.toLocaleString("id-ID")} / kg
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-stone-50 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-stone-50 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-600 p-1"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-stone-900">
                      Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t bg-stone-50 space-y-4">
            <div className="flex justify-between items-center text-lg">
              <span className="text-stone-600">Total</span>
              <span className="font-black text-brand-primary text-2xl">
                Rp {totalPrice.toLocaleString("id-ID")}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-green-200"
            >
              Checkout via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}
