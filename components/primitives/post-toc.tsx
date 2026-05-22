'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

type Heading = { id: string; text: string; level: number };

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

export default function PostToc() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [active, setActive] = useState<string>('');

  // Collect h2/h3 in the article and assign ids
  useEffect(() => {
    const article = document.querySelector('article');
    if (!article) return;

    const nodes = Array.from(article.querySelectorAll('h2, h3')) as HTMLHeadingElement[];
    const collected: Heading[] = nodes.map((n) => {
      const text = n.textContent ?? '';
      const id = n.id || slugify(text);
      if (!n.id) n.id = id;
      n.style.scrollMarginTop = '6rem';
      return { id, text, level: n.tagName === 'H2' ? 2 : 3 };
    });
    setHeadings(collected);

    if (collected.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: [0, 1] }
    );
    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  if (headings.length < 2) return null;

  return (
    <nav aria-label="On this page" className="w-full">
      <div
        className="label-eyebrow mb-4"
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        // on this page
      </div>
      <ul className="space-y-2 border-l border-[var(--color-border)] pl-3">
        {headings.map((h) => {
          const isActive = active === h.id;
          return (
            <li key={h.id} className={cn(h.level === 3 && 'pl-3')}>
              <a
                href={`#${h.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
                  setActive(h.id);
                }}
                className={cn(
                  'group relative block py-0.5 text-[12.5px] leading-snug transition-colors',
                  isActive
                    ? 'text-[var(--color-fg)]'
                    : 'text-[var(--color-fg-subtle)] hover:text-[var(--color-fg-muted)]'
                )}
              >
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute -left-[13px] top-1.5 h-3 w-px bg-[var(--color-accent)]"
                  />
                )}
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
