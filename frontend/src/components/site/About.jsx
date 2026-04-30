import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const INTERIOR = "https://customer-assets.emergentagent.com/job_6467ead7-ac44-480f-8c74-75fabde5c22a/artifacts/c5ssbffy_IMG_9533.jpeg";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  const reveal = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section
      id="about"
      ref={ref}
      data-testid="about-section"
      className="relative bg-[#FDFBF7] py-24 md:py-40"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5 md:sticky md:top-32 self-start">
          <motion.p
            {...reveal}
            className="text-[10px] uppercase tracking-[0.4em] text-[#3E5748] mb-6"
          >
            ◦ 01 — Our Story
          </motion.p>
          <motion.h2
            {...reveal}
            transition={{ duration: 1, delay: 0.05 }}
            className="font-display font-light text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] text-[#1A3627]"
          >
            Good tea. <br />
            <span className="italic font-extralight text-[#3E5748]">good time.</span>
            <br />
            <span className="font-black">all the time.</span>
          </motion.h2>
        </div>

        <div className="md:col-span-7 space-y-12">
          <motion.div {...reveal} className="relative overflow-hidden rounded-2xl">
            <motion.img
              src={INTERIOR}
              alt="Inside Haus of Boba"
              style={{ y: imgY }}
              className="w-full h-[60vh] object-cover scale-110"
            />
            <div className="absolute bottom-4 left-4 bg-[#FDFBF7]/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.25em] text-[#1A3627]">
              ✦ The Haus, Sachse, TX
            </div>
          </motion.div>

          <motion.p
            {...reveal}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-lg md:text-xl leading-relaxed text-[#1A3627] max-w-2xl"
          >
            We're a neighborhood boba bar where every drink is built fresh —
            real fruit, hand-shaken teas, slow-cooked tapioca, and house
            brown sugar. From the
            {" "}
            <span className="text-[#D97736] font-semibold">Monster Tiger Brown Sugar</span>
            {" "}
            to a velvety
            {" "}
            <span className="text-[#7B9A60] font-semibold">Ube Matcha Latte</span>,
            our menu is small, intentional, and always seasonal.
          </motion.p>

          <motion.div
            {...reveal}
            transition={{ duration: 1, delay: 0.15 }}
            className="grid grid-cols-3 gap-4 md:gap-8 pt-6 border-t border-[#1A3627]/15"
          >
            {[
              { k: "Est.", v: "Sachse" },
              { k: "Rating", v: "4.4 ★" },
              { k: "Reviews", v: "317+" },
            ].map((s) => (
              <div key={s.k} data-testid={`about-stat-${s.k.toLowerCase()}`}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#3E5748] mb-2">
                  {s.k}
                </p>
                <p className="font-display text-3xl md:text-5xl font-light tracking-tight text-[#1A3627]">
                  {s.v}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
