export default function Footer() {
  return (
    <>
      <footer className="border-t border-black/10 bg-white text-black">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.jpeg"
                alt="Cream and Culture"
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="mt-4 max-w-xs font-body text-sm leading-6 text-black/70">
              Creamy, delicious yoghurt made with quality ingredients.
              <span className="mt-1 block font-semibold text-pink-dark">
                Taste the goodness. Love every spoonful.
              </span>
            </p>
          </div>

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-black">
              Shop
            </p>
            <ul className="mt-4 space-y-2 font-body text-sm text-black/80">
              <li>
                <a href="/menu" className="hover:text-pink-dark">
                  Full menu
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:text-pink-dark">
                  Your cart
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-pink-dark">
                  Delivery & FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-black">
              Company
            </p>
            <ul className="mt-4 space-y-2 font-body text-sm text-black/80">
              <li>
                <a href="/about" className="hover:text-pink-dark">
                  Our story
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-pink-dark">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-black">
              Follow us
            </p>

            <ul className="mt-4 space-y-2 font-body text-sm text-black/80">
              <li>
                <a
                  href="https://www.instagram.com/cream_andculture001?igsi=NTczcnM3cXp4Ymkw"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-dark"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://www.tiktok.com/@creamculture001?_r=1&_t=ZS-99Fgw30NDAC"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-dark"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-black">
              Visit us
            </p>

            <p className="mt-4 font-body text-sm text-black/80">
              Kiambu Road, Nairobi
              <br />
              Tue–Sun, 8am–6pm
            </p>

            <p className="mt-4 font-mono text-sm text-pink-dark">
              <a
                href="mailto:creamandculture001@gmail.com"
                className="hover:underline"
              >
                creamandculture001@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-black/10 px-6 py-5 text-center font-mono text-[11px] text-black/50">
          © {new Date().getFullYear()} Cream and Culture Yoghurt.
        </div>
      </footer>
    </>
  );
}