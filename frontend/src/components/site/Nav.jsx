import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, MapPin } from "lucide-react";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#location" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
      data-testid="site-nav"
      className={`fixed top-0 inset-x-0 z-[9000] transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#FDFBF7]/75 border-b border-[#1A3627]/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-[72px] md:h-[84px] flex items-center justify-between">
        <a href="#top" data-testid="nav-logo" className="flex items-center gap-3">
          <img
            src={`${process.env.PUBLIC_URL}/haus-logo.jpeg`}
            alt="Haus of Boba logo"
            className="h-9 w-9 md:h-10 md:w-10 rounded-full object-cover ring-1 ring-[#1A3627]/15"
          />
          <span className="font-display text-sm md:text-base tracking-[0.25em] font-semibold uppercase text-[#1A3627]">
            Haus of Boba
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="text-sm tracking-wide text-[#1A3627] hover:text-[#D97736] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://www.google.com/maps?q=4325+Miles+Rd+Suite+108+Sachse+TX"
            target="_blank"
            rel="noreferrer"
            data-testid="nav-directions"
            className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#1A3627] hover:text-[#D97736] transition-colors"
          >
            <MapPin className="w-3.5 h-3.5" /> Sachse, TX
          </a>
          <a
            href="https://pos.chowbus.com/online-ordering/store/Koala-Tea/14544?referrer=google_food_ordering&service_type=delivery"
            target="_blank"
            rel="noreferrer"
            data-testid="nav-order-button"
            data-cursor="hover"
            className="group relative inline-flex items-center gap-2 rounded-full bg-[#1A3627] text-[#FDFBF7] pl-5 pr-2 py-1.5 text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#D97736] transition-colors"
          >
            Order
            <span className="grid place-items-center h-7 w-7 rounded-full bg-[#FDFBF7] text-[#1A3627] group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </a>
          <button
            data-testid="nav-mobile-toggle"
            className="md:hidden p-2 text-[#1A3627]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#FDFBF7] border-t border-[#1A3627]/10 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
              className="font-display text-2xl tracking-tight text-[#1A3627]"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}
