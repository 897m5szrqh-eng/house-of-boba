export default function Marquee() {
  const items = [
    "Freshly Brewed",
    "Boba Tea",
    "Specialty Coffee",
    "Taiyaki",
    "Bubble Waffles",
    "Smoothies",
  ];
  const row = [...items, ...items, ...items];
  return (
    <section
      data-testid="marquee-section"
      className="relative overflow-hidden border-y border-[#1A3627]/10 bg-[#FDFBF7] py-6 md:py-10"
    >
      <div className="marquee-track flex gap-12 md:gap-20 whitespace-nowrap">
        {row.map((it, i) => (
          <span
            key={i}
            className="font-display stroke-text uppercase tracking-tight font-black text-[12vw] leading-none"
          >
            {it} <span className="text-[#D97736] not-italic">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
