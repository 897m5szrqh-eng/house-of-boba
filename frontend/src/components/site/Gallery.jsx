import { motion } from "framer-motion";

const TILES = [
  {
    url: "https://customer-assets.emergentagent.com/job_6467ead7-ac44-480f-8c74-75fabde5c22a/artifacts/4627ez0j_IMG_9534.jpeg",
    alt: "Boba drinks lineup",
    span: "md:col-span-8 md:row-span-2 aspect-[16/10] md:aspect-auto md:h-[640px]",
    label: "Drinks",
  },
  {
    url: "https://customer-assets.emergentagent.com/job_6467ead7-ac44-480f-8c74-75fabde5c22a/artifacts/r7e8dvqx_IMG_9535.jpeg",
    alt: "Matcha and storefront",
    span: "md:col-span-4 aspect-[4/5] md:h-[310px]",
    label: "Matcha",
  },
  {
    url: "https://customer-assets.emergentagent.com/job_6467ead7-ac44-480f-8c74-75fabde5c22a/artifacts/sg12knwz_IMG_9532.jpeg",
    alt: "Cafe seating with neon",
    span: "md:col-span-4 aspect-[4/5] md:h-[310px]",
    label: "The Haus",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="relative bg-[#FDFBF7] py-24 md:py-40"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-12 md:mb-20">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#3E5748] mb-6">
              ◦ 03 — Gallery
            </p>
            <h2 className="font-display font-light text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] text-[#1A3627]">
              moments,
              <br />
              <span className="italic font-extralight">in cups.</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/hausofboba"
            target="_blank"
            rel="noreferrer"
            data-testid="gallery-ig-link"
            data-cursor="hover"
            className="hidden md:inline-block text-xs uppercase tracking-[0.2em] text-[#1A3627] hover:text-[#D97736]"
          >
            @hausofboba ↗
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
          {TILES.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              data-testid={`gallery-tile-${i}`}
              className={`group relative overflow-hidden rounded-2xl col-span-2 ${t.span}`}
            >
              <img
                src={t.url}
                alt={t.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A3627]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 bg-[#FDFBF7]/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.25em] text-[#1A3627]">
                {t.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
