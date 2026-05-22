'use client';

import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const cursorX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.4 });
  const cursorY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.4 });

  const [variant, setVariant] = useState<'default' | 'link' | 'view' | 'hidden'>('default');
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const supportsHover = window.matchMedia('(hover: hover)').matches;
    if (!supportsHover) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const updateFromTarget = (target: EventTarget | null) => {
      if (!(target instanceof Element)) {
        setVariant('default');
        return;
      }
      const interactive = target.closest('a, button, [data-cursor]');
      if (!interactive) {
        setVariant('default');
        return;
      }
      const ds = (interactive as HTMLElement).dataset.cursor;
      if (ds === 'view') setVariant('view');
      else if (ds === 'hidden') setVariant('hidden');
      else setVariant('link');
    };

    const onOver = (e: MouseEvent) => updateFromTarget(e.target);
    const onLeave = () => x.set(-200);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    document.documentElement.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [x, y]);

  if (!enabled) return null;

  const isView = variant === 'view';
  const isLink = variant === 'link';
  const isHidden = variant === 'hidden';

  return (
    <>
      {/* Outer ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          animate={{
            width: isView ? 96 : isLink ? 44 : 28,
            height: isView ? 96 : isLink ? 44 : 28,
            opacity: isHidden ? 0 : 1,
            backgroundColor: isView ? 'rgb(245, 177, 61)' : 'rgba(255,255,255,0)',
            borderColor: 'rgba(255,255,255,0.85)',
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border flex items-center justify-center"
        >
          {isView && (
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-bg)]">
              View
            </span>
          )}
        </motion.div>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
        style={{ x, y }}
      >
        <motion.div
          animate={{
            width: isView || isLink ? 0 : 5,
            height: isView || isLink ? 0 : 5,
            opacity: isHidden ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        />
      </motion.div>
    </>
  );
}
