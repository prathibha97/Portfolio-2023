'use client';

import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'motion/react';
import { GraduationCap, Briefcase } from 'lucide-react';
import { useRef } from 'react';
import Reveal from '../primitives/reveal';
import SectionHeading from '../primitives/section-heading';

type Item = (typeof experiencesData)[number];

function TimelineNode({
  item,
  index,
  isCurrent,
}: {
  item: Item;
  index: number;
  isCurrent: boolean;
}) {
  const Icon = item.type === 'education' ? GraduationCap : Briefcase;

  return (
    <li className="relative grid grid-cols-[auto_1fr] gap-x-6 md:grid-cols-[10rem_auto_1fr] md:gap-x-10 pb-16 last:pb-0">
      {/* Date column (desktop) */}
      <div className="hidden md:flex flex-col items-end pt-1">
        <span
          className={cn(
            'font-mono text-[11px] uppercase tracking-[0.18em]',
            isCurrent ? 'text-[var(--color-accent)]' : 'text-[var(--color-fg-subtle)]'
          )}
          style={{ fontVariantNumeric: 'tabular-nums slashed-zero' }}
        >
          {item.date}
        </span>
        <span className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-subtle)]/60">
          {item.location}
        </span>
      </div>

      {/* Node / icon */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.05 * index, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            'relative z-10 grid h-12 w-12 place-items-center rounded-full border',
            isCurrent
              ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-[var(--color-bg)] shadow-[0_0_0_4px_rgba(245,177,61,0.15)]'
              : item.type === 'education'
              ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-[var(--color-bg)]'
              : 'bg-[var(--color-surface)] border-[var(--color-border-strong)] text-[var(--color-fg-muted)]'
          )}
        >
          <Icon className="h-5 w-5" strokeWidth={1.6} />
          {isCurrent && (
            <span
              aria-hidden
              className="absolute -inset-1 rounded-full ring-1 ring-[var(--color-accent)]/40 animate-pulse-dot"
            />
          )}
        </motion.div>
      </div>

      {/* Content */}
      <Reveal delay={0.05 * index} y={32} className="min-w-0">
        <div
          className={cn(
            'relative rounded-2xl p-6 backdrop-blur-sm transition-colors',
            isCurrent
              ? 'border border-[var(--color-accent)]/35 bg-gradient-to-br from-[var(--color-accent)]/[0.08] via-[var(--color-surface)]/60 to-[var(--color-surface)]/40 hover:border-[var(--color-accent)]/60 md:p-7'
              : 'border border-[var(--color-border)] bg-[var(--color-surface)]/40 hover:border-[var(--color-border-strong)]'
          )}
        >
          {isCurrent && (
            <>
              {/* Accent left rail */}
              <span
                aria-hidden
                className="absolute left-0 top-4 bottom-4 w-[2px] rounded-r bg-[var(--color-accent)]"
              />
              {/* "Current" pill */}
              <span
                className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                <span className="relative grid h-1.5 w-1.5 place-items-center">
                  <span className="absolute inset-0 rounded-full bg-[var(--color-accent)] animate-pulse-dot" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                </span>
                Current
              </span>
            </>
          )}
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 pr-24">
            <h3
              className={cn(
                'font-display text-[var(--color-fg)]',
                isCurrent ? 'text-[1.75rem] md:text-3xl' : 'text-2xl'
              )}
            >
              {item.title}
            </h3>
            <span className="text-sm text-[var(--color-accent)]">{item.company}</span>
          </div>
          <div
            className="md:hidden mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]"
            style={{ fontVariantNumeric: 'tabular-nums slashed-zero' }}
          >
            {item.date} · {item.location}
          </div>
          <p
            className={cn(
              'mt-3 text-[var(--color-fg-muted)] leading-relaxed',
              isCurrent ? 'text-[1rem] md:text-[1.05rem]' : 'text-[0.96rem]'
            )}
          >
            {item.description}
          </p>
        </div>
      </Reveal>
    </li>
  );
}

export default function Path() {
  const containerRef = useRef<HTMLElement>(null);
  useSectionInView('Path', 0.2, containerRef);

  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ['start 0.4', 'end 0.6'],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="path"
      ref={containerRef}
      className="relative py-32 md:py-44 scroll-mt-24"
    >
      <div className="container-page">
        <SectionHeading
          index="04"
          eyebrow="Path"
          title="A non-linear route into engineering, told plainly."
          description="I came in through operations, switched into code on purpose, and finished my CS degree while shipping production work."
        />

        <div ref={lineRef} className="mt-20 relative">
          {/* Vertical rule */}
          <div className="absolute left-6 md:left-[11.5rem] top-2 bottom-2 w-px bg-[var(--color-border)]" aria-hidden />
          <motion.div
            style={{ height: fillHeight }}
            className="absolute left-6 md:left-[11.5rem] top-2 w-px bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-accent)]/0"
            aria-hidden
          />

          <ol className="relative">
            {experiencesData.map((item, i) => (
              <TimelineNode
                key={`${item.title}-${i}`}
                item={item}
                index={i}
                isCurrent={i === 0 && /present/i.test(item.date)}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
