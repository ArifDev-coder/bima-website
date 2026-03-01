'use client'

import { Check, ShoppingCart } from "lucide-react";
import { products } from "@/data/produk";
import Image from "next/image";
import { useCart } from "@/lib/context/CartContext";

const Products = () => {
  const { addToCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group flex flex-col"
        >
          <div
            className={`h-48 ${product.color} flex items-center justify-center relative overflow-hidden`}
          >
            {product.badge && (
              <span className="absolute top-4 right-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm z-10">
                {product.badge}
              </span>
            )}
            <Image src={product.picture} className="object-cover" alt={product.name}/>
          </div>

          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-brand-secondary mb-2">
              {product.name}
            </h3>
            <p className="text-stone-500 text-sm mb-4 line-clamp-3 flex-1">
              {product.description}
            </p>

            <ul className="space-y-2 mb-6">
              {product.features.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-xs text-stone-600"
                >
                  <Check size={14} className="text-brand-primary" />
                  {feat}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex items-center justify-between pt-4 border-t border-stone-100">
              <span className="text-lg font-bold text-brand-primary">
                {product.price}
              </span>
              <button 
                onClick={() => addToCart(product)}
                className="bg-brand-secondary hover:bg-brand-primary text-white p-2 rounded-lg transition-colors"
              >
                <ShoppingCart size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
