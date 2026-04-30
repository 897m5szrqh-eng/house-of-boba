import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

const VIDEO_MP4 = "/boba-hero.mp4";
const VIDEO_WEBM = "/boba-hero.webm";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Video stays sticky and shrinks/translates as user scrolls
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 0.55]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const videoRotate = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const tagX = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-[200vh] bg-[#FDFBF7]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background massive type */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none"
        >
          <div className="max-w-[1400px] w-full px-6 md:px-12">
            <p
              data-testid="hero-eyebrow"
              className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#3E5748] mb-6 md:mb-10"
            >
              ◦ Sachse, Texas — Est. Boba
            </p>
            <h1
              data-testid="hero-title"
              className="font-display font-light text-[#1A3627] leading-[0.85] tracking-tighter"
              style={{ fontSize: "clamp(64px, 14vw, 240px)" }}
            >
              <span className="block">haus</span>
              <span className="block italic font-extralight pl-[8vw] md:pl-[14vw] text-[#3E5748]">
                of
              </span>
              <span className="block font-black text-right">boba.</span>
            </h1>
          </div>
        </motion.div>

        {/* The 3D Boba video — sticky centerpiece */}
        <motion.div
          style={{ scale: videoScale, y: videoY, rotate: videoRotate }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-[78vw] md:w-[42vw] aspect-[9/16] max-h-[85vh]">
            <div className="absolute inset-0 -m-6 md:-m-10 rounded-[40px] bg-[#1A3627]/5 blur-2xl" />
            <video
              data-testid="hero-3d-video"
              autoPlay
              loop
              muted
              playsInline
              className="relative w-full h-full object-cover rounded-[28px] md:rounded-[40px] shadow-[0_40px_120px_-30px_rgba(26,54,39,0.45)] bg-[#1A3627]"
            >
              <source src={VIDEO_WEBM} type="video/webm" />
              <source src={VIDEO_MP4} type="video/mp4" />
            </video>
            {/* Floating tag */}
            <motion.div
              style={{ x: tagX }}
              className="absolute -left-4 md:-left-12 bottom-10 md:bottom-16 bg-[#FDFBF7] border border-[#1A3627]/15 rounded-full pl-3 pr-4 py-2 flex items-center gap-2 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#D97736] animate-pulse" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#1A3627]">
                Now Brewing
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom info row */}
        <motion.div
          style={{ opacity: titleOpacity }}
          className="absolute bottom-8 md:bottom-12 inset-x-0 px-6 md:px-12"
        >
          <div className="max-w-[1400px] mx-auto flex items-end justify-between gap-6">
            <div className="hidden md:block max-w-[280px]">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#3E5748] mb-2">
                ✦ Signature
              </p>
              <p className="text-sm text-[#1A3627] leading-relaxed">
                Monster Tiger Brown Sugar, Ube Matcha Latte & a rotating cast
                of fresh seasonal teas.
              </p>
            </div>
            <a
              href="#about"
              data-testid="hero-scroll-cue"
              data-cursor="hover"
              className="flex items-center gap-3 text-[#1A3627]"
            >
              <span className="text-[10px] uppercase tracking-[0.4em]">
                Scroll
              </span>
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
                className="inline-flex"
              >
                <ArrowDown className="w-4 h-4" />
              </motion.span>
            </a>
            <div className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#3E5748]">
              <span className="h-px w-10 bg-[#1A3627]/30" />
              4.4 ★ · 317 Reviews
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
