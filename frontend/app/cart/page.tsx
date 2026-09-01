"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function CartPage() {
  const { lines, removeLine, setQty, subtotal } = useCart();

  if (lines.length === 0) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-semibold text-plum">
          Your cart is empty
        </h1>
        <p className="mt-3 font-body text-charcoal/70">
          Nothing set aside yet. Go pick a jar.
        </p>
        <Link
          href="/menu"
          className="mt-8 inline-flex rounded-full bg-plum px-6 py-3 font-body text-sm font-semibold text-cream hover:bg-berry"
        >
          Browse the menu
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-display text-4xl font-semibold text-plum">
        Your cart
      </h1>

      <div className="mt-10 divide-y divide-plum/10 border-y border-plum/10">
        {lines.map(({ product, qty }) => (
          <div key={product.slug} className="flex items-center gap-4 py-5">
            <div className="dollop-mask relative h-16 w-16 shrink-0 overflow-hidden bg-sage-light">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="font-display text-base font-semibold text-plum">
                {product.name}
              </p>
              <p className="font-mono text-xs text-charcoal/50">
                {product.size} · KSh {product.price}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQty(product.slug, qty - 1)}
                aria-label={`Decrease quantity of ${product.name}`}
                className="grid h-8 w-8 place-items-center rounded-full border border-plum/20 text-plum hover:border-berry hover:text-berry"
              >
                −
              </button>
              <span className="w-6 text-center font-mono text-sm">{qty}</span>
              <button
                onClick={() => setQty(product.slug, qty + 1)}
                aria-label={`Increase quantity of ${product.name}`}
                className="grid h-8 w-8 place-items-center rounded-full border border-plum/20 text-plum hover:border-berry hover:text-berry"
              >
                +
              </button>
            </div>
            <p className="w-20 text-right font-mono text-sm text-plum">
              KSh {product.price * qty}
            </p>
            <button
              onClick={() => removeLine(product.slug)}
              aria-label={`Remove ${product.name} from cart`}
              className="text-charcoal/40 hover:text-berry"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <span className="font-body text-charcoal/70">Subtotal</span>
        <span className="font-display text-2xl font-semibold text-plum">
          KSh {subtotal}
        </span>
      </div>
      <p className="mt-1 font-body text-xs text-charcoal/50">
        Delivery calculated at checkout. Payment integration coming soon.
      </p>

      <button
        disabled
        title="Checkout isn't wired up yet"
        className="mt-8 w-full cursor-not-allowed rounded-full bg-plum/40 px-6 py-4 text-center font-body text-sm font-semibold text-cream md:w-auto md:px-10"
      >
        Checkout — coming soon
      </button>
    </section>
  );
}
