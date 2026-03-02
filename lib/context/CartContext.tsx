"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { StaticImageData } from "next/image";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  picture: string | StaticImageData;
}

interface BaseProduct {
  id: number;
  name: string;
  price: string | number;
  picture: string | StaticImageData;
  [key: string]: unknown;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: BaseProduct) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        try {
          setCart(JSON.parse(savedCart));
        } catch (e) {
          console.error("Failed to parse cart from localStorage", e);
        }
      }
      setIsInitialized(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Save cart to localStorage on change, but only after initialization
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isInitialized]);

  const addToCart = (product: BaseProduct) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Parse price from string like "Rp 26.500 / kg"
      const priceValue = typeof product.price === "string" 
        ? parseInt(product.price.replace(/[^0-9]/g, "")) 
        : product.price;
        
      return [...prevCart, { ...product, price: priceValue, quantity: 1 } as CartItem];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
