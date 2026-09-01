import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import DrizzleDivider from "@/components/DrizzleDivider";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

const usps = [
  {
    title: "Live cultures",
    body: "Four active strains in every jar, still working when it reaches you.",
  },
  {
    title: "No preservatives",
    body: "Nothing added to slow it down — that's what the fridge is for.",
  },
  {
    title: "Chilled delivery",
    body: "Cold-chain from the churn to your door, same day within Nairobi.",
  },
];

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      <Hero />
      <DrizzleDivider className="text-black" />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {usps.map((item) => (
            <div key={item.title} className="rounded-3xl border border-black/10 bg-white p-6">
              <h3 className="font-display text-xl font-semibold text-black">
                {item.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-black/75">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-black">
              This week's set
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-black">
              Featured flavours
            </h2>
          </div>
          <Link
            href="/menu"
            className="hidden font-body text-sm font-semibold text-black hover:text-pink-dark md:block"
          >
            See full menu →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <Link
          href="/menu"
          className="mt-8 block text-center font-body text-sm font-semibold text-black hover:text-pink-dark md:hidden"
        >
          See full menu →
        </Link>
      </section>

<DrizzleDivider className="text-black" />

      <section className="bg-white text-black">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
           <Image
           src="/images/strawberryyoghurt.jpeg"
            alt="A collection of yoghurt bottles"
            fill
            sizes="(min-width: 768px) 480px, 90vw"
           className="object-cover"
             />
  
          </div>
          <div className="rounded-3xl bg-white p-6 text-black md:p-10">
            <span className="font-mono text-xs uppercase tracking-wider text-black">
              Why slow
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
              Most yoghurt is rushed. Ours isn't.
            </h2>
            <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-black/75">
              Commercial batches set in hours under heat lamps. We let ours
              culture for two to three days at a gentler temperature, which
              is slower, less efficient, and the only way we've found to get
              a set that holds its shape on a spoon.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-pink px-5 py-2.5 font-body text-sm font-semibold text-black hover:bg-pink-dark hover:text-white"
            >
              Read our story →
            </Link>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-t border-black py-8">
        <div className="flex animate-marquee gap-16 whitespace-nowrap font-display text-2xl text-black">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span>Set daily</span>
              <span>·</span>
              <span>Delivered chilled</span>
              <span>·</span>
              <span>Natural Yoghurt</span>
              <span>·</span>
              <span>Based in Nairobi</span>
              <span>·</span>
              <span>Delivery done countrywide</span>
              <span>.</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}