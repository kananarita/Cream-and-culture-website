import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="md:grid md:grid-cols-2">
      {/* Sticky image column */}
      <div className="relative h-[50vh] md:sticky md:top-0 md:h-screen">
        <Image
          src="/images/blackcurrentyoghurt.jpeg"
          alt="Cream and Culture yoghurt"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r" />
      </div>

      {/* Scrolling content column */}
      <div className="px-6 py-16 md:px-16 md:py-24">
        <span className="font-mono text-xs uppercase tracking-wider text-berry">
          Our story
        </span>
        <h1 className="mt-2 font-display text-4xl font-semibold leading-tight text-plum md:text-5xl">
          We started with one bad batch.
        </h1>

        <div className="mt-8 space-y-6 font-body text-lg leading-relaxed text-charcoal/85">
          <p>
            Cream and Culture started in a Kiambu Road kitchen in 2022, after
            a batch of shop-bought yoghurt split in the pan and nobody could
            explain why. Turns out most commercial yoghurt is heat-set in a
            few hours to keep up with demand — it never gets the long, slow
            culture that gives yoghurt its actual body.
          </p>
          <p>
            So we started making our own. Three days per batch, small
            quantities, nothing added to rush it. What began as jars for
            neighbours became a proper kitchen, then a small delivery run
            across Nairobi.
          </p>
        </div>

        <div className="mt-14 border-t border-plum/10 pt-10">
          <h2 className="font-display text-2xl font-semibold text-plum">
            What we do differently
          </h2>
          <ul className="mt-5 space-y-4 font-body text-base leading-relaxed text-charcoal/85">
            <li>
              <span className="font-semibold text-plum">Three-day culture.</span>{" "}
              No shortcuts, no heat-setting — just time.
            </li>
            <li>
              <span className="font-semibold text-plum">Small batches.</span>{" "}
              We make what we can taste-check properly, not what scales
              fastest.
            </li>
            <li>
              <span className="font-semibold text-plum">Nothing added.</span>{" "}
              No stabilisers, no rushed cultures, no filler.
            </li>
          </ul>
        </div>

        <div className="mt-14 space-y-6 font-body text-lg leading-relaxed text-charcoal/85">
          <p>
            We still make it the same way — we just make more of it. Every
            jar that leaves the churn has been tasted, and every flavour on
            the menu started as someone's kitchen experiment first.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-full bg-[#ec4899] px-6 py-3 font-mono text-sm uppercase tracking-wider text-white transition hover:bg-[#db2777]"
          >
            Explore our menu
          </Link>
        </div>
      </div>
    </section>
  );
}