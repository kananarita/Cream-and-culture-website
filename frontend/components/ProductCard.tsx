"use client";

import Image from "next/image";
import { Product } from "@/lib/products";
import { useCart } from "@/components/CartProvider";
import { useState } from "react";

export default function ProductCard({
  product,
  size = "compact",
}: {
  product: Product;
  size?: "compact" | "large";
}) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleAdd = () => {
    addToCart(product, selectedSize);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  const large = size === "large";

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl bg-white/60 shadow-sm transition-shadow hover:shadow-xl hover:shadow-plum/5">
      <div className="relative aspect-square overflow-hidden bg-sage-light">
        <Image
          src={product.image}
          alt={`${product.name} yoghurt`}
          fill
          sizes={large ? "(min-width: 768px) 33vw, 90vw" : "(min-width: 768px) 25vw, 50vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 rounded-full bg-plum/85 uppercase tracking-wide text-cream ${
            large ? "px-3 py-1.5 font-mono text-xs" : "px-3 py-1 font-mono text-[10px]"
          }`}
        >
          {product.culture}
        </span>
      </div>
      <div className={`flex flex-1 flex-col gap-1.5 ${large ? "p-6" : "p-4"}`}>
        <div className="flex items-start justify-between gap-2">
          <h3 className={`font-display font-semibold text-plum ${large ? "text-2xl" : "text-sm"}`}>
            {product.name}
          </h3>
          <span className={`whitespace-nowrap font-mono text-berry ${large ? "text-lg" : "text-xs"}`}>
            KSh {selectedSize.price}
          </span>
        </div>

        {product.sizes.length > 1 && (
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map((s) => (
              <button
                key={s.size}
                onClick={() => setSelectedSize(s)}
                className={`rounded-full border transition-colors ${
                  large ? "px-3 py-1 text-xs" : "px-2.5 py-0.5 text-[10px]"
                } font-mono ${
                  selectedSize.size === s.size
                    ? "border-plum bg-plum text-cream"
                    : "border-plum/20 text-plum hover:border-plum/50"
                }`}
              >
                {s.size}
              </button>
            ))}
          </div>
        )}

        <div className={`mt-auto flex items-center justify-between ${large ? "pt-5" : "pt-3"}`}>
          <span className={`font-mono text-charcoal/50 ${large ? "text-xs" : "text-[10px]"}`}>
            {selectedSize.size}
          </span>
          <button
            onClick={handleAdd}
            className={`rounded-full bg-plum font-body font-semibold text-cream transition-colors hover:bg-berry ${
              large ? "px-5 py-2.5 text-sm" : "px-3.5 py-1.5 text-[11px]"
            }`}
          >
            {added ? "Added ✓" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
