"use client";

import Link from "next/link";
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

  return (
    <header className="sticky top-0 z-40 border-b border-plum/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/logo.jpeg"
            alt="Cream & Culture"
            width={140}
            height={95}
            priority
            className="h-8 w-auto sm:h-11"
          />
        </Link>

        <nav className="flex flex-1 items-center gap-4 overflow-x-auto sm:gap-8 md:justify-center">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group flex shrink-0 items-center gap-1.5 whitespace-nowrap font-body text-[13px] font-medium text-charcoal transition-colors hover:text-berry sm:text-[15px]"
              >
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full bg-honey transition-opacity ${
                    active ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                  }`}
                  aria-hidden
                />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/cart"
          className="relative flex shrink-0 items-center gap-1.5 rounded-full border border-plum/15 px-2.5 py-1.5 font-mono text-[11px] text-plum transition-colors hover:border-berry hover:text-berry sm:gap-2 sm:px-4 sm:py-2 sm:text-xs"
        >
          <span className="hidden sm:inline">Cart</span>
          <span className="grid h-5 w-5 place-items-center rounded-full bg-plum font-mono text-[11px] text-cream">
            {count}
          </span>
        </Link>
      </div>
    </header>
  );
}
