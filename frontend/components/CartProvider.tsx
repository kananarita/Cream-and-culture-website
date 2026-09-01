"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { Product } from "@/lib/products";

type CartLine = { product: Product; qty: number };

type CartContextValue = {
  lines: CartLine[];
  addToCart: (product: Product) => void;
  removeLine: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  const addToCart = (product: Product) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.product.slug === product.slug);
      if (existing) {
        return prev.map((l) =>
          l.product.slug === product.slug ? { ...l, qty: l.qty + 1 } : l
        );
      }
      return [...prev, { product, qty: 1 }];
    });
  };

  const removeLine = (slug: string) => {
    setLines((prev) => prev.filter((l) => l.product.slug !== slug));
  };

  const setQty = (slug: string, qty: number) => {
    setLines((prev) =>
      prev.map((l) =>
        l.product.slug === slug ? { ...l, qty: Math.max(1, qty) } : l
      )
    );
  };

  const count = useMemo(
    () => lines.reduce((sum, l) => sum + l.qty, 0),
    [lines]
  );
  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + l.qty * l.product.price, 0),
    [lines]
  );

  return (
    <CartContext.Provider
      value={{ lines, addToCart, removeLine, setQty, count, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
