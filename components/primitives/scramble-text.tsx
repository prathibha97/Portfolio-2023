'use client';

import { useEffect, useRef, useState } from 'react';

const GLYPHS = '!<>-_\\/[]{}—=+*^?#$%';

type Props = {
  text: string;
  className?: string;
  trigger?: 'mount' | 'hover';
  duration?: number;
};

export default function ScrambleText({ text, className, trigger = 'mount', duration = 900 }: Props) {
  const [display, setDisplay] = useState(text);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef(0);

  const scramble = () => {
    const start = performance.now();
    startRef.current = start;
    const len = text.length;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      let out = '';
      for (let i = 0; i < len; i++) {
        const charRevealedAt = (i / len) * 0.7;
        if (progress >= charRevealedAt + 0.3) {
          out += text[i];
        } else if (text[i] === ' ') {
          out += ' ';
        } else {
          out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }
      setDisplay(out);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    if (trigger === 'mount') scramble();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const handleHover = () => {
    if (trigger !== 'hover') return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    scramble();
  };

  return (
    <span className={className} onMouseEnter={handleHover}>
      {display}
    </span>
  );
}
