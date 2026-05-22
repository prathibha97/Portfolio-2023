'use client';

import { motion, useMotionValue, useSpring } from 'motion/react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type Variant = 'idle' | 'link' | 'view';

/**
 * Custom cursor — restrained.
 *
 *   - Idle: nothing rendered (the system cursor handles everything).
 *   - Link (any a / button / [data-cursor]): a small amber dot follows
 *     the cursor at low opacity. No ring, no fill.
 *   - View ([data-cursor="view"]): the dot stays small and a "view ↗"
 *     mono label appears just to the right. No giant pill replacing the
 *     pointer.
 *
 *   Suppressed on form fields and on the /writing routes.
 */
export default function CustomCursor() {
  const pathname = usePathname();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const cursorX = useSpring(x, { stiffness: 380, damping: 28, mass: 0.35 });
  const cursorY = useSpring(y, { stiffness: 380, damping: 28, mass: 0.35 });

  const [variant, setVariant] = useState<Variant>('idle');
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
        setVariant('idle');
        return;
      }
      if (target.closest('input, textarea, [contenteditable="true"], select')) {
        setVariant('idle');
        return;
      }
      const interactive = target.closest('a, button, [data-cursor]');
      if (!interactive) {
        setVariant('idle');
        return;
      }
      const ds = (interactive as HTMLElement).dataset.cursor;
      if (ds === 'view') setVariant('view');
      else if (ds === 'hidden') setVariant('idle');
      else setVariant('link');
    };

    const onOver = (e: MouseEvent) => updateFromTarget(e.target);
    const onLeave = () => {
      x.set(-200);
      setVariant('idle');
    };

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
  if (pathname?.startsWith('/writing')) return null;

  const isView = variant === 'view';
  const visible = variant !== 'idle';

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center gap-2"
      style={{ x: cursorX, y: cursorY }}
    >
      {/* Tiny accent dot — sits at the cursor */}
      <motion.span
        animate={{
          opacity: visible ? 1 : 0,
          scale: isView ? 1.4 : 1,
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 30 }}
        className="block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)]"
        style={{ boxShadow: '0 0 0 3px rgba(245, 177, 61, 0.15)' }}
      />

      {/* "view ↗" label — only on data-cursor="view" */}
      <motion.span
        initial={{ opacity: 0, x: -6 }}
        animate={{ opacity: isView ? 1 : 0, x: isView ? 0 : -6 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="-translate-y-1/2 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]"
        style={{ fontFeatureSettings: "'liga' 0" }}
      >
        view <span aria-hidden>↗</span>
      </motion.span>
    </motion.div>
  );
}
