"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Egg } from "lucide-react"; // Tambah icon Egg biar lucu
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Sesuaikan menu dengan jualan telur
const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Produk", href: "/produk" },
  { name: "Tentang", href: "/tentang" },
  { name: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Close on Click Outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        isMobileMenuOpen &&
        !menuRef.current?.contains(target) &&
        !toggleRef.current?.contains(target)
      ) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isMobileMenuOpen]);

  return (
    <nav className="w-full sticky top-0 z-50 bg-amber-500/95 backdrop-blur-md border-b border-amber-600/20 shadow-sm select-none">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-white p-1.5 rounded-lg shadow-sm group-hover:rotate-12 transition-transform">
            <Egg className="w-6 h-6 text-amber-600" />
          </div>
          <span className="font-black text-xl tracking-tight text-stone-900">
            BIMA <span className="text-white">EGGS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-bold transition-all",
                  active
                    ? "bg-stone-900 text-white shadow-md"
                    : "text-stone-800 hover:bg-stone-900/10",
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          ref={toggleRef}
          onClick={toggleMenu}
          className="md:hidden p-2 text-stone-900 hover:bg-black/5 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={cn(
          "absolute top-full left-0 w-full bg-amber-500 border-b border-amber-600 shadow-xl md:hidden transition-all duration-300 origin-top",
          isMobileMenuOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none",
        )}
      >
        <div className="p-4 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className={cn(
                "w-full p-4 rounded-xl text-lg font-bold transition-colors",
                pathname === item.href
                  ? "bg-stone-900 text-white"
                  : "text-stone-900 hover:bg-white/20",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
