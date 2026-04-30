import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[#1A3627] text-[#FDFBF7] pt-24 md:pt-32 pb-10 overflow-hidden grain"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pb-16 md:pb-24 border-b border-[#FDFBF7]/15">
          <div className="md:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#FDFBF7]/60 mb-6">
              ◦ Newsletter
            </p>
            <h3 className="font-display text-3xl md:text-5xl tracking-tighter font-light mb-6">
              Get drops, secret menu items, and the occasional 2-for-1 — straight
              to your inbox.
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              data-testid="newsletter-form"
              className="flex items-center gap-2 border-b border-[#FDFBF7]/40 py-3 max-w-md"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                data-testid="newsletter-input"
                className="flex-1 bg-transparent outline-none placeholder:text-[#FDFBF7]/40 text-[#FDFBF7]"
              />
              <button
                type="submit"
                data-testid="newsletter-submit"
                data-cursor="hover"
                className="text-xs uppercase tracking-[0.25em] hover:text-[#D97736] transition-colors"
              >
                Subscribe →
              </button>
            </form>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#FDFBF7]/60 mb-4">
              Visit
            </p>
            <p className="text-[#FDFBF7] mb-1">4325 Miles Rd, Suite 108</p>
            <p className="text-[#FDFBF7]/80 mb-4">Sachse, TX 75048</p>
            <a
              href="tel:+12145013231"
              data-testid="footer-phone"
              className="block text-[#FDFBF7]/80 hover:text-[#D97736] transition-colors"
            >
              (214) 501-3231
            </a>
            <a
              href="https://hausofboba.net"
              target="_blank"
              rel="noreferrer"
              data-testid="footer-website"
              className="block text-[#FDFBF7]/80 hover:text-[#D97736] transition-colors"
            >
              hausofboba.net
            </a>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#FDFBF7]/60 mb-4">
              Explore
            </p>
            <ul className="space-y-2">
              {["Menu", "About", "Gallery", "Reviews", "Visit"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    data-testid={`footer-link-${l.toLowerCase()}`}
                    className="text-[#FDFBF7]/80 hover:text-[#D97736] transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#FDFBF7]/60 mb-4">
              Follow
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/hausofboba"
                target="_blank"
                rel="noreferrer"
                data-testid="footer-instagram"
                className="inline-flex items-center gap-2 text-[#FDFBF7]/80 hover:text-[#D97736] transition-colors"
              >
                <Instagram className="w-4 h-4" /> Instagram
              </a>
              <a
                href="https://www.facebook.com/hausofboba"
                target="_blank"
                rel="noreferrer"
                data-testid="footer-facebook"
                className="inline-flex items-center gap-2 text-[#FDFBF7]/80 hover:text-[#D97736] transition-colors"
              >
                <Facebook className="w-4 h-4" /> Facebook
              </a>
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className="font-display font-black text-[#FDFBF7] tracking-tighter leading-none my-12 md:my-20 select-none"
          style={{ fontSize: "clamp(80px, 22vw, 360px)" }}
        >
          haus<span className="italic font-extralight text-[#FDFBF7]/60">of</span>boba.
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-[#FDFBF7]/60">
          <p>© {new Date().getFullYear()} Haus of Boba. Brewed with care in Sachse, TX.</p>
          <p className="uppercase tracking-[0.3em]">Good Tea · Good Time · All The Time</p>
        </div>
      </div>
    </footer>
  );
}
