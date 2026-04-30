import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  {
    id: "signatures",
    label: "Signatures",
    note: "House specials. Order them once, fall in love forever.",
    items: [
      { name: "Monster Tiger Brown Sugar", desc: "Hand-striped brown sugar, fresh milk, chewy boba", price: "6.75" },
      { name: "Ube Matcha Latte", desc: "Filipino purple yam, ceremonial-grade matcha, oat milk", price: "6.95" },
      { name: "Hokkaido Honey Cloud", desc: "Honey-roasted oolong, salted milk foam", price: "6.50" },
      { name: "Strawberry Cream Cheese Tea", desc: "Fresh strawberry, jasmine green, cream cheese mousse", price: "6.50" },
    ],
  },
  {
    id: "milk-tea",
    label: "Milk Tea",
    note: "Black, oolong, jasmine — shaken with whole or non-dairy milk.",
    items: [
      { name: "Classic Milk Tea", desc: "Black tea, milk, brown sugar boba", price: "5.25" },
      { name: "Thai Milk Tea", desc: "Spiced black tea, condensed milk", price: "5.50" },
      { name: "Taro Milk Tea", desc: "Real taro purée, oat milk option", price: "5.75" },
      { name: "Jasmine Green Milk Tea", desc: "Stone-ground jasmine, soft milk", price: "5.50" },
    ],
  },
  {
    id: "fruit-tea",
    label: "Fruit Tea",
    note: "Caffeine-light, fruit-forward, all natural.",
    items: [
      { name: "Passion Fruit Green Tea", desc: "Fresh passion fruit pulp", price: "5.50" },
      { name: "Mango Pineapple", desc: "Tropical blend on jasmine green", price: "5.75" },
      { name: "Lychee Rose", desc: "Lychee, rose syrup, oolong", price: "5.95" },
      { name: "Strawberry Lemonade", desc: "Real berries, hand-pressed lemon", price: "5.50" },
    ],
  },
  {
    id: "smoothies",
    label: "Smoothies",
    note: "Blended with real fruit. Vegan friendly.",
    items: [
      { name: "Mango Smoothie", desc: "Alphonso mango, coconut milk", price: "6.25" },
      { name: "Avocado Smoothie", desc: "Hass avocado, condensed milk option", price: "6.50" },
      { name: "Strawberry Banana", desc: "Classic, with house granola dusting", price: "6.25" },
    ],
  },
  {
    id: "coffee",
    label: "Coffee",
    note: "Single-origin espresso. Vegan lattes available.",
    items: [
      { name: "Brown Sugar Oat Latte", desc: "Brown sugar syrup, oat milk", price: "5.75" },
      { name: "Ube Latte", desc: "Espresso, ube, steamed milk", price: "5.95" },
      { name: "Vietnamese Iced Coffee", desc: "Robusta + condensed milk", price: "5.25" },
      { name: "Matcha Latte", desc: "Ceremonial matcha, choice of milk", price: "5.50" },
    ],
  },
  {
    id: "snacks",
    label: "Snacks",
    note: "Hot, sweet, and made to order.",
    items: [
      { name: "Custard Taiyaki", desc: "Fish-shaped waffle, vanilla custard", price: "4.50" },
      { name: "Red Bean Taiyaki", desc: "Sweet azuki bean filling", price: "4.50" },
      { name: "Bubble Waffle (Plain)", desc: "Hong Kong style, crisp & airy", price: "5.25" },
      { name: "Bubble Waffle Sundae", desc: "Ice cream, fruit, drizzle", price: "7.95" },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState("signatures");
  const cat = CATEGORIES.find((c) => c.id === active);

  return (
    <section
      id="menu"
      data-testid="menu-section"
      className="relative bg-[#F4F1EA] py-24 md:py-40 grain"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#3E5748] mb-6">
              ◦ 02 — The Menu
            </p>
            <h2 className="font-display font-light text-5xl md:text-7xl lg:text-[8vw] tracking-tighter leading-[0.9] text-[#1A3627]">
              every cup,
              <br />
              <span className="italic font-extralight text-[#3E5748]">made</span>{" "}
              <span className="font-black">fresh.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base md:text-lg leading-relaxed text-[#3E5748]">
            Six categories. One promise — real ingredients, no shortcuts. Sub
            oat, almond, soy, or coconut milk on anything.
          </p>
        </div>

        {/* Category tabs */}
        <div
          className="flex gap-2 md:gap-3 overflow-x-auto hide-scrollbar mb-12 md:mb-16 pb-2"
          data-testid="menu-tabs"
        >
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              data-testid={`menu-tab-${c.id}`}
              data-cursor="hover"
              onClick={() => setActive(c.id)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-all ${
                active === c.id
                  ? "bg-[#1A3627] text-[#FDFBF7] border-[#1A3627]"
                  : "bg-transparent text-[#1A3627] border-[#1A3627]/25 hover:border-[#1A3627]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10"
            data-testid={`menu-grid-${cat.id}`}
          >
            <div className="md:col-span-4">
              <p className="font-display text-xl md:text-2xl text-[#1A3627] mb-3">
                {cat.label}
              </p>
              <p className="text-sm md:text-base text-[#3E5748] leading-relaxed">
                {cat.note}
              </p>
              <div className="mt-6 h-px w-16 bg-[#1A3627]/40" />
            </div>
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {cat.items.map((it, i) => (
                <motion.div
                  key={it.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  data-testid={`menu-item-${cat.id}-${i}`}
                  className="group relative bg-[#FDFBF7] border border-[#1A3627]/15 rounded-2xl p-5 md:p-6 hover:border-[#1A3627] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-display text-lg md:text-xl tracking-tight text-[#1A3627]">
                      {it.name}
                    </h3>
                    <span className="font-display text-base md:text-lg text-[#1A3627] tabular-nums">
                      ${it.price}
                    </span>
                  </div>
                  <p className="text-sm text-[#3E5748] leading-relaxed">
                    {it.desc}
                  </p>
                  <span className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#D97736] text-xs">
                    ✦
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
