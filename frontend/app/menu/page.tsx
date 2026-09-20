"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products, type ProductCategory } from "@/lib/products";

const filters = ["All", "Unsweetened", "Probiotic", "Mixed flavors"] as const;
const categories: ProductCategory[] = ["Classic", "Probiotic", "Kefir"];

function matches(filter: (typeof filters)[number], tags: string[]) {
  if (filter === "All") return true;
  if (filter === "Unsweetened") return tags.includes("No sugar");
  if (filter === "Probiotic") return tags.includes("Probiotic");
  if (filter === "Mixed flavors") return tags.includes("mixed fruits") || tags.includes("Layered");
  return true;
}

export default function MenuPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(
    () => products.filter((p) => matches(filter, p.tags)),
    [filter]
  );

  const grouped = useMemo(
    () =>
      categories.map((category) => ({
        category,
        items: filtered.filter((p) => p.category === category),
      })),
    [filtered]
  );

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <span className="font-mono text-xs uppercase tracking-wider text-berry">
        The full set
      </span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-plum">
        Menu
      </h1>

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
              filter === f
                ? "border-plum bg-plum text-cream"
                : "border-plum/20 text-plum hover:border-plum/50"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {grouped.map(({ category, items }) =>
        items.length > 0 ? (
          <div key={category} className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-plum">
              {category}
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-3">
              {items.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        ) : null
      )}

      {filtered.length === 0 && (
        <p className="mt-10 font-body text-sm text-charcoal/60">
          Nothing in this set matches that filter this week — check back or
          browse everything.
        </p>
      )}
    </section>
  );
}