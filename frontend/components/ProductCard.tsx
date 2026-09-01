"use client";

import Image from "next/image";
import { Product } from "@/lib/products";
import { useCart } from "@/components/CartProvider";
import { useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-plum/10 bg-white/60 transition-shadow hover:shadow-xl hover:shadow-plum/5">
      <div className="relative aspect-square overflow-hidden bg-sage-light">
        <Image
          src={product.image}
          alt={`${product.name} yoghurt`}
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-plum/85 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-cream">
          {product.culture}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-semibold text-plum">
            {product.name}
          </h3>
          <span className="whitespace-nowrap font-mono text-sm text-berry">
            KSh {product.price}
          </span>
        </div>
        <p className="font-body text-sm leading-relaxed text-charcoal/80">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="font-mono text-xs text-charcoal/50">
            {product.size}
          </span>
          <button
            onClick={handleAdd}
            className="rounded-full bg-plum px-4 py-2 font-body text-xs font-semibold text-cream transition-colors hover:bg-berry"
          >
            {added ? "Added ✓" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
