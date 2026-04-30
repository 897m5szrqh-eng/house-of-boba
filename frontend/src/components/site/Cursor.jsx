import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [hidden, setHidden] = useState(true);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 1000, damping: 50, mass: 0.2 });
  const sy = useSpring(y, { stiffness: 1000, damping: 50, mass: 0.2 });
  
  useEffect(() => {
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
    };
    const onLeave = () => setHidden(true);
    const onOver = (e) => {
      const t = e.target;
      if (t.closest("a, button, [data-cursor='hover']")) setHover(true);
      else setHover(false);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseover", onOver);
    };
  }, [x, y]);

  return (
    <motion.div
      data-testid="custom-cursor"
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block"
      style={{ x: sx, y: sy, opacity: hidden ? 0 : 1 }}
    >
      <motion.div
        animate={{
          width: hover ? 56 : 14,
          height: hover ? 56 : 14,
          backgroundColor: hover ? "rgba(217,119,54,0.95)" : "#1A3627",
          mixBlendMode: hover ? "normal" : "difference",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="rounded-full -translate-x-1/2 -translate-y-1/2"
      />
    </motion.div>
  );
}
