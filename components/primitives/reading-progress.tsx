'use client';

import { motion, useScroll, useSpring } from 'motion/react';

export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    mass: 0.4,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: '0% 50%' }}
      className="fixed left-0 right-0 top-0 z-[120] h-[2px] bg-[var(--color-accent)] origin-left"
    />
  );
}
