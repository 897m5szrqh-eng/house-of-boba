import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          data-testid="page-loader"
          initial={{ y: 0 }}
          exit={{ y: "-101%" }}
          transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
          className="fixed inset-0 z-[10000] bg-[#1A3627] text-[#FDFBF7] flex items-center justify-center grain"
        >
          <div className="relative flex flex-col items-center gap-8 px-6 text-center">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="loader-bar h-[2px] w-[180px] bg-[#FDFBF7]/80"
            />
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="font-display text-3xl md:text-5xl tracking-tighter font-light"
            >
              haus<span className="font-black"> of </span>boba
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.4 }}
              className="text-[10px] md:text-xs uppercase tracking-[0.4em]"
            >
              Good Tea · Good Time · All The Time
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
