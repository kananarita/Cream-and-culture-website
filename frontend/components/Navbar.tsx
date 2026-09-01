"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/components/CartProvider";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur border-b border-plum/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <Link href="/" className="flex items-center gap-2">
    <Image src="/logo.jpeg" alt="Cream & Culture" width={140} height={95} priority className="h-11 w-auto" />
    </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-1.5 font-body text-[15px] font-medium text-charcoal transition-colors hover:text-berry"
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full bg-honey transition-opacity ${
                    active ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                  }`}
                  aria-hidden
                />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-full border border-plum/15 px-4 py-2 font-mono text-xs text-plum transition-colors hover:border-berry hover:text-berry"
          >
            Cart
            <span className="grid h-5 w-5 place-items-center rounded-full bg-plum font-mono text-[11px] text-cream">
              {count}
            </span>
          </Link>
          <button
            className="md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-plum" />
              <span className="block h-0.5 w-6 bg-plum" />
              <span className="block h-0.5 w-4 bg-plum" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-plum/10 bg-cream px-6 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 font-body text-base text-charcoal hover:text-berry"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
