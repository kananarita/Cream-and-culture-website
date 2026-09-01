import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";

const heroSlides = [
  {
    src: "/images/strawberryyoghurt.jpeg",
    alt: "Cream and Culture Strawberry Yoghurt — sweet, creamy, and bursting with strawberry goodness",
  },
  {
    src: "/images/lemonyoghurt.png",
    alt: "Cream and Culture Plain Yoghurt — naturally creamy, smooth, and deliciously simple",
  },
  {
    src: "/images/vanillayoghurt.png",
    alt: "Cream and Culture Vanilla Yoghurt — silky smooth, delicately sweet, and full of vanilla goodness",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-20 pt-14 md:grid-cols-2 md:gap-12 md:pb-28 md:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-sage-light px-4 py-1.5 font-mono text-xs text-sage">
            Cultured fresh, every morning
          </span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-plum md:text-6xl">
            Scoop, Swirl and
            <br />
            Savor the Creamy goodness of
            <br />
            Yoghurt.
          </h1>

          <p className="mt-6 max-w-sm font-body text-lg italic text-charcoal/70">
            Happiness in every scoop.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link
              href="/menu"
              className="flex items-center gap-3 rounded-full bg-plum py-2 pl-2 pr-5 font-body text-sm font-semibold text-cream transition-colors hover:bg-berry"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-honey text-plum">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 3v13m0 0-4-4m4 4 4-4" stroke="#2B1B2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 21h14" stroke="#2B1B2E" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              Order the menu
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-3 font-body text-sm font-semibold text-plum transition-colors hover:text-berry"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-plum/20">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M7 17 17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Our story
            </Link>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full md:mx-0">
          <div className="absolute -left-6 -top-6 h-full w-full rounded-[3rem] bg-honey/40 md:-left-8 md:-top-8" aria-hidden />
          <HeroSlideshow slides={heroSlides} />

          <div className="absolute -left-4 top-8 animate-float rounded-2xl border border-plum/10 bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
            <p className="font-mono text-[10px] uppercase tracking-wide text-charcoal/50">
              Set time
            </p>
            <p className="font-display text-lg font-semibold text-plum">
              3 days
            </p>
          </div>

          <div className="absolute -bottom-3 -right-2 animate-float rounded-2xl border border-plum/10 bg-white/90 px-4 py-3 shadow-lg backdrop-blur [animation-delay:1.2s]">
            <p className="font-mono text-[10px] uppercase tracking-wide text-charcoal/50">
              Live cultures
            </p>
            <p className="font-display text-lg font-semibold text-berry">
              4 strains
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
