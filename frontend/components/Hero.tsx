import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";

const heroSlides = [
  {
    src: "/images/strawberryyoghurt1.jpeg",
    alt: "Cream and Culture Strawberry Yoghurt — sweet, creamy, and bursting with strawberry goodness",
  },
  {
    src: "/images/lemonyoghurt.jpeg",
    alt: "Cream and Culture Plain Yoghurt — naturally creamy, smooth, and deliciously simple",
  },
  {
    src: "/images/vanillayogurt.jpeg",
    alt: "Cream and Culture Vanilla Yoghurt — silky smooth, delicately sweet, and full of vanilla goodness",
  },
  {
    src: "/images/blackcurrentyoghurt.jpeg",
    alt: "Cream and Culture Blackcurrent Flavor Yoghurt — a delightful combination of natural flavors",
  }
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-20 pt-14 md:grid-cols-2 md:gap-12 md:pb-28 md:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-sage-light px-4 py-1.5 font-mono text-xs text-sage">
            Culturally rooted choice.
          </span>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-plum sm:text-4xl md:text-6xl md:leading-[1.05]">
            Scoop, Swirl and
            <br />
            Savor the Creamy goodness of
            <br />
            Yoghurt.
          </h1>

          <p className="mt-6 max-w-sm font-body text-base italic text-charcoal/70 md:text-lg">
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

        <div className="relative mx-auto h-[320px] w-full sm:h-[400px] md:h-[600px] md:mx-0">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[3rem] bg-honey/40 md:-left-8 md:-top-8" aria-hidden />
          <HeroSlideshow slides={heroSlides} />

          <div className="absolute -left-2 top-6 animate-float rounded-xl border border-plum/10 bg-white/90 px-3 py-2 shadow-lg backdrop-blur sm:-left-4 sm:top-8 sm:rounded-2xl sm:px-4 sm:py-3">
            <p className="font-mono text-[9px] uppercase tracking-wide text-charcoal/50 sm:text-[10px]">
              Set time
            </p>
            <p className="font-display text-sm font-semibold text-plum sm:text-lg">
              3 days
            </p>
          </div>

          <div className="absolute -bottom-2 right-0 animate-float rounded-xl border border-plum/10 bg-white/90 px-3 py-2 shadow-lg backdrop-blur [animation-delay:1.2s] sm:-bottom-3 sm:-right-2 sm:rounded-2xl sm:px-4 sm:py-3">
            <p className="font-mono text-[9px] uppercase tracking-wide text-charcoal/50 sm:text-[10px]">
              Live cultures
            </p>
            <p className="font-display text-sm font-semibold text-berry sm:text-lg">
              4 strains
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
