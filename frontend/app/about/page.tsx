import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <span className="font-mono text-xs uppercase tracking-wider text-berry">
        Our story
      </span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-plum md:text-5xl">
        We started with one bad batch.
      </h1>

      <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-3xl">
        <Image
                  src="/images/strawberryyoghurt.jpeg"
                   alt="A collection of yoghurt bottles"
                   fill
                   sizes="(min-width: 768px) 480px, 90vw"
                  className="object-cover"
                    />
      </div>

      <div className="mt-10 space-y-6 font-body text-lg leading-relaxed text-charcoal/85">
        <p>
          Cream and Culture started in a Kiambu Road kitchen in 2022, after a batch of
          shop-bought yoghurt split in the pan and nobody could explain why.
          Turns out most commercial yoghurt is heat-set in a few hours to
          keep up with demand — it never gets the long, slow culture that
          gives yoghurt its actual body.
        </p>
        <p>
          So we started making our own. Three days per batch, small
          quantities, nothing added to rush it. What began as jars for
          neighbours became a proper kitchen, then a small delivery run
          across Nairobi.
        </p>
        <p>
          We still make it the same way — we just make more of it. Every jar
          that leaves the churn has been tasted, and every flavour on the
          menu started as someone's kitchen experiment first.
        </p>
      </div>
    </section>
  );
}
