'use client';

import { motion } from 'motion/react';

/**
 * A pure-CSS animated mesh gradient — three blurred radial blobs drifting
 * through the hero. Zero JS in the render loop (CSS keyframes), perfect
 * on every device, no canvas/WebGL risk.
 */
export default function MeshGradient() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {/* Base tone */}
      <div className="absolute inset-0 bg-[var(--color-bg)]" />

      {/* Amber blob */}
      <motion.div
        className="absolute -top-32 left-[30%] h-[42rem] w-[42rem] rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, rgba(245,177,61,0.55), rgba(245,177,61,0) 70%)',
          filter: 'blur(70px)',
        }}
        animate={{
          x: [0, 120, -60, 0],
          y: [0, 60, -40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Violet blob */}
      <motion.div
        className="absolute top-[30%] left-[60%] h-[36rem] w-[36rem] rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, rgba(138,92,245,0.40), rgba(138,92,245,0) 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, -140, 80, 0],
          y: [0, 80, -60, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Mint blob */}
      <motion.div
        className="absolute top-[55%] left-[10%] h-[34rem] w-[34rem] rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, rgba(110,231,183,0.30), rgba(110,231,183,0) 70%)',
          filter: 'blur(90px)',
        }}
        animate={{
          x: [0, 100, -80, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.08, 0.92, 1],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid lines on top, masked toward edges */}
      <div
        className="absolute inset-0 grid-lines opacity-50"
        style={{
          maskImage:
            'radial-gradient(70% 60% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(70% 60% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* Vignette / fade-to-bg at the bottom for seamless section blend */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[var(--color-bg)]" />

      {/* Subtle dark-tint overlay so the headline always stays legible */}
      <div className="absolute inset-0 bg-[var(--color-bg)]/40" />

      {/* Grain */}
      <div className="absolute inset-0 grain" />
    </div>
  );
}
