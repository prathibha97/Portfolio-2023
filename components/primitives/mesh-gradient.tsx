'use client';

import { motion } from 'motion/react';

/**
 * Austere hero backdrop: pure dark base, one fixed amber glow,
 * subtle vertical grid, drifting hairline scan, and grain.
 * Replaces the previous drifting-blob mesh — reads as "senior engineer
 * technical document" rather than "designer moodboard".
 */
export default function MeshGradient() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-[var(--color-bg)]" />

      {/* ONE fixed amber glow, top-right, very low opacity */}
      <div
        className="absolute -top-32 -right-24 h-[44rem] w-[44rem] opacity-90"
        style={{
          background:
            'radial-gradient(closest-side, rgba(245,177,61,0.18) 0%, rgba(245,177,61,0) 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Counterweight cool tone, bottom-left, even subtler */}
      <div
        className="absolute -bottom-32 -left-24 h-[38rem] w-[38rem]"
        style={{
          background:
            'radial-gradient(closest-side, rgba(80,110,180,0.10) 0%, rgba(80,110,180,0) 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Vertical grid — fine, low contrast, masked toward edges */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '88px 100%',
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 18%, black 78%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, black 18%, black 78%, transparent 100%)',
        }}
      />

      {/* Single horizontal hairline scan line, drifts down slowly */}
      <motion.div
        className="absolute left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(245,177,61,0.35) 50%, transparent 100%)',
        }}
        animate={{ top: ['12%', '88%', '12%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      />

      {/* Bottom fade to bg for seamless section blend */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[var(--color-bg)]" />

      {/* Heavier grain */}
      <div className="absolute inset-0 grain opacity-90" />
    </div>
  );
}
