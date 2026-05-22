'use client';

import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Reveal from '../primitives/reveal';
import SectionHeading from '../primitives/section-heading';

type Project = (typeof projectsData)[number];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={index * 0.04} y={20}>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        data-cursor="view"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          'group relative block border-b border-[var(--color-border)] py-7 md:py-9 transition-colors',
          'hover:border-[var(--color-accent)]/50'
        )}
      >
        {/* Hover overlay fill */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="pointer-events-none absolute inset-x-[-1rem] inset-y-0 -z-10 bg-gradient-to-r from-[var(--color-accent)]/[0.04] via-transparent to-transparent"
        />

        <div className="grid grid-cols-12 items-baseline gap-x-4 md:gap-x-6">
          {/* Index */}
          <div
            className="col-span-2 md:col-span-1 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-fg-subtle)] pt-1"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* Title + subtitle */}
          <div className="col-span-10 md:col-span-6">
            <h3
              className={cn(
                'font-display text-3xl md:text-[2.6rem] leading-[1.02] transition-colors',
                hovered ? 'text-[var(--color-accent)]' : 'text-[var(--color-fg)]'
              )}
            >
              <motion.span
                animate={{ x: hovered ? 6 : 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-baseline gap-3"
              >
                {project.title}
                <motion.span
                  animate={{
                    opacity: hovered ? 1 : 0,
                    x: hovered ? 0 : -8,
                  }}
                  transition={{ duration: 0.3 }}
                  className="inline-block"
                >
                  <ArrowUpRight className="h-5 w-5 md:h-7 md:w-7 text-[var(--color-accent)]" strokeWidth={1.6} />
                </motion.span>
              </motion.span>
            </h3>
            <p className="mt-1.5 text-[var(--color-fg-muted)] text-sm md:text-[15px] leading-relaxed">
              {project.subtitle}
            </p>

            {/* Tags */}
            <ul className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10.5px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
              {project.tags.slice(0, 5).map((tag, i) => (
                <li key={tag} className="inline-flex items-center gap-2">
                  {i > 0 && <span className="text-[var(--color-fg-subtle)]/40">·</span>}
                  <span>{tag}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Year */}
          <div
            className="hidden md:block md:col-span-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-fg-subtle)] pt-1 text-right"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {project.year}
          </div>

          {/* Inset preview */}
          <div className="hidden md:flex md:col-span-3 justify-end">
            <motion.div
              animate={{
                width: hovered ? 160 : 96,
                height: hovered ? 100 : 60,
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]"
            >
              <Image
                src={project.imageUrl}
                alt=""
                fill
                sizes="160px"
                className="object-cover object-top"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-[var(--color-bg)]/20" />
            </motion.div>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  useSectionInView('Work', 0.2, containerRef);

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative py-32 md:py-44 scroll-mt-24"
    >
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="02"
            eyebrow="Selected work"
            title="Eleven products. Most of them shipped. The honest highlights."
          />
          <Reveal delay={0.2}>
            <a
              href="https://github.com/prathibha97"
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="group inline-flex items-center gap-2 text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
            >
              <span>See everything on GitHub</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        {/* Editorial contents list */}
        <div className="mt-16 border-t border-[var(--color-border)]">
          {projectsData.map((p, i) => (
            <ProjectRow key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
