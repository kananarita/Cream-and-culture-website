"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const filters = ["All", "Unsweetened", "Fruit-layered", "Thick-strained"] as const;

function matches(filter: (typeof filters)[number], tags: string[]) {
  if (filter === "All") return true;
  if (filter === "Unsweetened") return tags.includes("No sugar");
  if (filter === "Fruit-layered") return tags.includes("Real fruit") || tags.includes("Layered");
  if (filter === "Thick-strained") return tags.includes("High protein");
  return true;
}

export default function MenuPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const list = useMemo(
    () => products.filter((p) => matches(filter, p.tags)),
    [filter]
  );

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <span className="font-mono text-xs uppercase tracking-wider text-berry">
        The full set
      </span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-plum">
        Menu
      </h1>
      <p className="mt-3 max-w-lg font-body text-charcoal/75">
        Six jars, all cultured on-site. Sizes and flavours rotate with what's
        in season — this week's set is below.
      </p>

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

      <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3">
        {list.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {list.length === 0 && (
        <p className="mt-10 font-body text-sm text-charcoal/60">
          Nothing in this set matches that filter this week — check back or
          browse everything.
        </p>
      )}
    </section>
  );
}
