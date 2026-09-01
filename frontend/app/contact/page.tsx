export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <span className="font-mono text-xs uppercase tracking-wider text-berry">
        Get in touch
      </span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-plum">
        Contact
      </h1>
      <p className="mt-3 max-w-lg font-body text-charcoal/75">
        Questions about an order, bulk requests, or just want to tell us
        about a batch — reach us here.
      </p>

      <form className="mt-10 grid gap-5" action="#" method="post">
        <div className="grid gap-1.5">
          <label htmlFor="name" className="font-mono text-xs text-charcoal/60">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="rounded-xl border border-plum/15 bg-white/70 px-4 py-3 font-body text-sm text-plum outline-none focus:border-berry"
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="email" className="font-mono text-xs text-charcoal/60">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-xl border border-plum/15 bg-white/70 px-4 py-3 font-body text-sm text-plum outline-none focus:border-berry"
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="message" className="font-mono text-xs text-charcoal/60">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="rounded-xl border border-plum/15 bg-white/70 px-4 py-3 font-body text-sm text-plum outline-none focus:border-berry"
          />
        </div>
        <button
          type="submit"
          className="justify-self-start rounded-full bg-plum px-6 py-3 font-body text-sm font-semibold text-cream hover:bg-berry"
        >
          Send message
        </button>
      </form>

      <div className="mt-14 grid gap-6 border-t border-plum/10 pt-10 sm:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-charcoal/50">
            Visit
          </p>
          <p className="mt-2 font-body text-sm text-charcoal/80">
            Kiambu Road, Nairobi
            <br />
            Tue–Sun, 8am–6pm
          </p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-charcoal/50">
            Reach us
          </p>
          <p className="mt-2 font-body text-sm text-charcoal/80">
            hello@creamandcultureyoghurt.co.ke
            <br />
            +254 700 000 000
          </p>
        </div>
      </div>
    </section>
  );
}
