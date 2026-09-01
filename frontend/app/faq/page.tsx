const faqs = [
  {
    q: "How long does the yoghurt keep?",
    a: "Ten days refrigerated from the day it's delivered. There's a set date stamped on every lid — that's when it left the churn, not an expiry guess.",
  },
  {
    q: "Do you deliver outside Nairobi?",
    a: "Same-day cold-chain delivery covers Nairobi and its immediate surrounds for now. Outside that, we can arrange courier delivery — get in touch and we'll confirm timing.",
  },
  {
    q: "Is it always this thick?",
    a: "Our plain and Greek-style jars are strained, which is what gives them the thicker set. Fruit-layered flavours are looser by design, so the compote stays distinct from the base.",
  },
  {
    q: "Can I order in bulk for an event?",
    a: "Yes — message us at least 48 hours ahead for orders over 20 jars so we can culture enough in time.",
  },
  {
    q: "How do you pay?",
    a: "Card and cash on delivery for now. Online checkout is on the way — until then, orders are confirmed and paid for on drop-off.",
  },
];

export default function FaqPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <span className="font-mono text-xs uppercase tracking-wider text-berry">
        Good to know
      </span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-plum">
        FAQ
      </h1>

      <div className="mt-10 divide-y divide-plum/10 border-y border-plum/10">
        {faqs.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between font-display text-lg font-semibold text-plum">
              {item.q}
              <span className="ml-4 text-honey transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/75">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
