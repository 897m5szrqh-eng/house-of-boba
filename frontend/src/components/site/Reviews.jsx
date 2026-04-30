import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    quote:
      "Best boba in the DFW area, hands down. The Monster Tiger is unreal — I drive 30 minutes just for it.",
    name: "Priya R.",
    where: "Plano, TX",
    stars: 5,
  },
  {
    quote:
      "Cozy spot, friendly staff, and the Ube Matcha is something I think about constantly. Vegan options too.",
    name: "Marcus T.",
    where: "Sachse, TX",
    stars: 5,
  },
  {
    quote:
      "Their taiyaki is crispy on the outside and the custard fills it perfectly. A whole vibe.",
    name: "Jen L.",
    where: "Wylie, TX",
    stars: 4,
  },
  {
    quote:
      "Such a beautiful little shop. Everything tastes fresh — you can tell they care.",
    name: "Sarah M.",
    where: "Garland, TX",
    stars: 5,
  },
];

export default function Reviews() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % REVIEWS.length);
  const prev = () => setI((p) => (p - 1 + REVIEWS.length) % REVIEWS.length);
  const r = REVIEWS[i];

  return (
    <section
      id="reviews"
      data-testid="reviews-section"
      className="relative bg-[#1A3627] text-[#FDFBF7] py-24 md:py-40 overflow-hidden grain"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#FDFBF7]/60 mb-6">
              ◦ 04 — In Their Words
            </p>
            <div className="flex items-baseline gap-3 mb-3">
              <span className="font-display text-7xl md:text-9xl font-light leading-none">
                4.4
              </span>
              <span className="text-[#D97736] text-2xl">★</span>
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#FDFBF7]/70">
              317 Google Reviews
            </p>
            <div className="mt-10 flex gap-3">
              <button
                data-testid="reviews-prev"
                onClick={prev}
                aria-label="Previous review"
                className="h-12 w-12 rounded-full border border-[#FDFBF7]/30 hover:bg-[#FDFBF7] hover:text-[#1A3627] transition-colors flex items-center justify-center"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                data-testid="reviews-next"
                onClick={next}
                aria-label="Next review"
                className="h-12 w-12 rounded-full border border-[#FDFBF7]/30 hover:bg-[#FDFBF7] hover:text-[#1A3627] transition-colors flex items-center justify-center"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="md:col-span-8 relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                data-testid={`review-card-${i}`}
              >
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: r.stars }).map((_, k) => (
                    <Star key={k} className="w-4 h-4 fill-[#D97736] text-[#D97736]" />
                  ))}
                </div>
                <p className="font-display font-extralight text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-12">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <p className="text-sm uppercase tracking-[0.25em] text-[#FDFBF7]/70">
                  — {r.name}, {r.where}
                </p>
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
