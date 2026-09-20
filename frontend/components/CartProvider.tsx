"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { Product, ProductSize } from "@/lib/products";

type CartLine = { product: Product; size: ProductSize; qty: number };

type CartContextValue = {
  lines: CartLine[];
  addToCart: (product: Product, size: ProductSize) => void;
  removeLine: (slug: string, sizeLabel: string) => void;
  setQty: (slug: string, sizeLabel: string, qty: number) => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  const addToCart = (product: Product, size: ProductSize) => {
    setLines((prev) => {
      const existing = prev.find(
        (l) => l.product.slug === product.slug && l.size.size === size.size
      );
      if (existing) {
        return prev.map((l) =>
          l.product.slug === product.slug && l.size.size === size.size
            ? { ...l, qty: l.qty + 1 }
            : l
        );
      }
      return [...prev, { product, size, qty: 1 }];
    });
  };

  const removeLine = (slug: string, sizeLabel: string) => {
    setLines((prev) =>
      prev.filter((l) => !(l.product.slug === slug && l.size.size === sizeLabel))
    );
  };

  const setQty = (slug: string, sizeLabel: string, qty: number) => {
    setLines((prev) =>
      prev.map((l) =>
        l.product.slug === slug && l.size.size === sizeLabel
          ? { ...l, qty: Math.max(1, qty) }
          : l
      )
    );
  };

  const count = useMemo(
    () => lines.reduce((sum, l) => sum + l.qty, 0),
    [lines]
  );
  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + l.qty * l.size.price, 0),
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