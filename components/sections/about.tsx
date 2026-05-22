'use client';

import { profile } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import Reveal from '../primitives/reveal';
import SectionHeading from '../primitives/section-heading';

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  useSectionInView('About', 0.3, containerRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-40, 60]);

  return (
    <section id="about" ref={containerRef} className="relative py-32 md:py-44 scroll-mt-24">
      <div className="container-page">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="A senior engineer who learned by shipping, not by certifying."
          description="My background isn't only code — two years in operations taught me how to think in systems, ship under pressure, and write so non-engineers actually understand the trade-offs."
        />

        <div className="mt-20 grid gap-12 lg:grid-cols-12">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <Reveal y={48}>
              <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                <motion.div style={{ y: imageY }} className="relative aspect-[4/5]">
                  <Image
                    src="/assets/images/prathibha.jpg"
                    alt={`${profile.name}, portrait`}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    quality={92}
                    priority
                    className="object-cover grayscale-[20%] contrast-105 brightness-95"
                  />
                </motion.div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 grain" />
                <div className="absolute left-4 bottom-4 right-4 flex items-end justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
                  <span>{profile.name}</span>
                  <span>{profile.location}</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Copy + stats */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            <Reveal delay={0.1}>
              <p className="font-display text-[clamp(1.5rem,2.5vw,2.25rem)] leading-tight text-[var(--color-fg)]">
                I started in operations, learned to code at night, and ended up leading engineering
                on enterprise-grade{' '}
                <em className="text-[var(--color-accent)] not-italic">Go services</em> that have to
                be{' '}
                <em className="text-[var(--color-accent)] not-italic">fast, reliable and built to
                last</em>.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="text-[var(--color-fg-muted)] text-[1.05rem] leading-relaxed max-w-prose">
                I&apos;m a <strong className="text-[var(--color-fg)]">senior generalist</strong> —
                comfortable in Go or TypeScript, in Docker or a database console, in a Linear
                ticket or a customer call. I ship more than I commit and refactor only when it
                earns its keep.
              </p>
            </Reveal>

            {/* Defaults */}
            <Reveal delay={0.26}>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 p-6 backdrop-blur-sm">
                <div
                  className="label-eyebrow mb-4"
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  // defaults
                </div>
                <ol className="space-y-3 text-[var(--color-fg)]">
                  {[
                    { num: '01', tech: 'Go', use: 'for services.' },
                    { num: '02', tech: 'Next.js', use: 'for products.' },
                    { num: '03', tech: 'Postgres', use: 'for state.' },
                  ].map((d) => (
                    <li
                      key={d.num}
                      className="grid grid-cols-[2.5rem_1fr] items-baseline gap-3"
                    >
                      <span
                        className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-fg-subtle)]"
                        style={{ fontVariantNumeric: 'tabular-nums' }}
                      >
                        {d.num}
                      </span>
                      <span className="text-[1.05rem]">
                        <strong className="text-[var(--color-accent)] font-medium">
                          {d.tech}
                        </strong>{' '}
                        <span className="text-[var(--color-fg-muted)]">{d.use}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <p className="text-[var(--color-fg-muted)] text-[0.95rem] leading-relaxed max-w-prose italic">
                Off the keyboard: walking the dog, falling into music rabbit-holes, losing
                evenings to problems that don&apos;t pay me anything.
              </p>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.4}>
              <div className="grid grid-cols-3 divide-x divide-[var(--color-border)] rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 backdrop-blur-sm">
                {profile.stats.map((s) => (
                  <div key={s.label} className="px-5 py-6 text-left">
                    <div className="font-display text-4xl text-[var(--color-fg)] tabular">{s.value}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.16em] font-mono text-[var(--color-fg-muted)] leading-snug">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
