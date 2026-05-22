'use client';

import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import Reveal from '../primitives/reveal';
import SectionHeading from '../primitives/section-heading';

type Project = (typeof projectsData)[number];

function ProjectCard({ project, span }: { project: Project; span: 'hero' | 'wide' | 'tall' | 'square' }) {
  const layouts: Record<typeof span, string> = {
    hero: 'md:col-span-8 md:row-span-2 aspect-[16/11] md:aspect-auto',
    wide: 'md:col-span-4 md:row-span-1 aspect-[4/3]',
    tall: 'md:col-span-4 md:row-span-2 aspect-[3/4] md:aspect-auto',
    square: 'md:col-span-4 md:row-span-1 aspect-square',
  };

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      data-cursor="view"
      whileHover="hover"
      className={cn(
        'group relative isolate overflow-hidden rounded-3xl surface-card transition-all duration-500',
        'hover:border-[var(--color-border-strong)] hover:-translate-y-1',
        layouts[span]
      )}
    >
      {/* Image */}
      <motion.div
        variants={{
          hover: { scale: 1.06 },
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top opacity-90 transition-opacity duration-500"
          placeholder="blur"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/60 to-transparent" />

      {/* Hover glow */}
      <motion.div
        variants={{ hover: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 100%, rgba(245,177,61,0.18) 0%, rgba(0,0,0,0) 70%)',
        }}
      />

      {/* Top-right arrow */}
      <motion.div
        variants={{ hover: { x: 4, y: -4, opacity: 1 } }}
        initial={{ opacity: 0.7 }}
        transition={{ duration: 0.3 }}
        className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-[var(--color-bg)]/80 backdrop-blur border border-[var(--color-border)]"
      >
        <ArrowUpRight className="h-4 w-4 text-[var(--color-fg)]" strokeWidth={1.8} />
      </motion.div>

      {/* Top-left meta */}
      <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-[var(--color-bg)]/70 backdrop-blur px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-muted)]">
        <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
        {project.year} · {project.category}
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-7">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-[var(--color-fg)] leading-[1.05]">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-[var(--color-fg-muted)]">{project.subtitle}</p>
          </div>
        </div>

        <p className="mt-3 max-w-md text-sm text-[var(--color-fg-muted)] line-clamp-2">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 5).map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/70 backdrop-blur px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-fg-muted)]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  useSectionInView('Work', 0.2, containerRef);

  // Bento layout — first 3 featured, then alternating sizes
  const featured = projectsData.filter((p) => p.featured);
  const rest = projectsData.filter((p) => !p.featured);

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
            title="Twelve products. Most of them shipped. The honest highlights."
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

        {/* Featured bento — first big + 2 stacked */}
        <div className="mt-16 grid gap-4 md:grid-cols-12 md:auto-rows-[18rem]">
          <ProjectCard project={featured[0]} span="hero" />
          <ProjectCard project={featured[1]} span="wide" />
          <ProjectCard project={featured[2]} span="wide" />
        </div>

        {/* Rest — alternating widths */}
        <div className="mt-4 grid gap-4 md:grid-cols-12 md:auto-rows-[18rem]">
          {rest.map((p, i) => (
            <ProjectCard key={p.title} project={p} span={i % 3 === 0 ? 'tall' : i % 3 === 1 ? 'square' : 'square'} />
          ))}
        </div>
      </div>
    </section>
  );
}
