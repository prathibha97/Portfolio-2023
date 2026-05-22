'use client';

import { stackData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { useRef } from 'react';
import {
  SiApachekafka,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGin,
  SiGit,
  SiGithubactions,
  SiGo,
  SiGraphql,
  SiJavascript,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiRedux,
  SiStorybook,
  SiTailwindcss,
  SiThreedotjs,
  SiTrpc,
  SiTypescript,
  SiVercel,
  SiVitest,
  SiVuedotjs,
} from 'react-icons/si';
import Marquee from '../primitives/marquee';
import Reveal from '../primitives/reveal';
import SectionHeading from '../primitives/section-heading';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Go: SiGo,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  SQL: SiPostgresql,
  Gin: SiGin,
  Kubernetes: SiKubernetes,
  Kafka: SiApachekafka,
  'React 19': SiReact,
  'Next.js 15': SiNextdotjs,
  'Tailwind v4': SiTailwindcss,
  Motion: SiReact,
  'Three.js': SiThreedotjs,
  Redux: SiRedux,
  'Vue.js': SiVuedotjs,
  'Node.js': SiNodedotjs,
  'Nest.js': SiNestjs,
  Express: SiExpress,
  tRPC: SiTrpc,
  GraphQL: SiGraphql,
  WebSockets: SiNodedotjs,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Redis: SiRedis,
  Prisma: SiPrisma,
  Drizzle: SiPrisma,
  Mongoose: SiMongodb,
  Docker: SiDocker,
  Vercel: SiVercel,
  'GitHub Actions': SiGithubactions,
  Nginx: SiNginx,
  Linux: SiLinux,
  Git: SiGit,
  Vitest: SiVitest,
  Storybook: SiStorybook,
  Figma: SiFigma,
};

function Chip({ skill, dim = false }: { skill: string; dim?: boolean }) {
  const Icon = ICON_MAP[skill];
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center gap-2.5 rounded-full border px-4 py-2 text-sm transition-colors',
        dim
          ? 'border-[var(--color-border)] bg-transparent text-[var(--color-fg-muted)]'
          : 'border-[var(--color-border)] bg-[var(--color-surface)]/70 text-[var(--color-fg)]'
      )}
    >
      {Icon ? <Icon className="h-4 w-4 text-[var(--color-accent)]" /> : null}
      {skill}
    </span>
  );
}

export default function Stack() {
  const containerRef = useRef<HTMLElement>(null);
  useSectionInView('Stack', 0.3, containerRef);

  const allSkills = Object.values(stackData).flat();

  return (
    <section
      id="stack"
      ref={containerRef}
      className="relative py-32 md:py-44 scroll-mt-24"
    >
      <div className="container-page">
        <SectionHeading
          index="03"
          eyebrow="Stack"
          title="The opinions, then the inventory."
          description="Stack opinions before the chip cloud — the choices I default to, what I avoid, and what I only reach for when it earns it."
        />

        {/* Opinionated block */}
        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          <Reveal>
            <div className="surface-card rounded-2xl p-6 md:p-7 h-full">
              <div
                className="label-eyebrow mb-5 text-[var(--color-accent)]"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                // defaults
              </div>
              <ul className="space-y-4">
                {[
                  { tech: 'Go', use: 'for services.', why: 'Low-latency, easy to deploy, ops-friendly.' },
                  { tech: 'Next.js', use: 'for products.', why: 'Familiar to teams, ships fast, good DX.' },
                  { tech: 'Postgres', use: 'for state.', why: 'Covers 90% of shapes; JSONB for the rest.' },
                ].map((d) => (
                  <li key={d.tech} className="border-b border-[var(--color-border)] pb-4 last:border-b-0 last:pb-0">
                    <p className="text-[var(--color-fg)] text-[1.05rem]">
                      <strong className="text-[var(--color-accent)] font-medium">{d.tech}</strong>{' '}
                      <span className="text-[var(--color-fg-muted)]">{d.use}</span>
                    </p>
                    <p
                      className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-subtle)]"
                      style={{ letterSpacing: '0.08em' }}
                    >
                      → {d.why}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="surface-card rounded-2xl p-6 md:p-7 h-full">
              <div
                className="label-eyebrow mb-5"
                style={{ color: '#ff7a7a', fontVariantNumeric: 'tabular-nums' }}
              >
                // avoided (for now)
              </div>
              <ul className="space-y-4">
                {[
                  { tech: 'Mongo', use: 'for new builds.', why: 'Schemas pay rent.' },
                  { tech: 'Microservices', use: 'on day one.', why: 'Monoliths until they hurt.' },
                  { tech: 'Custom auth', use: 'in a hurry.', why: "Use the thing that's been audited." },
                ].map((d) => (
                  <li key={d.tech} className="border-b border-[var(--color-border)] pb-4 last:border-b-0 last:pb-0">
                    <p className="text-[var(--color-fg)] text-[1.05rem]">
                      <strong className="font-medium" style={{ color: '#ff9999' }}>
                        {d.tech}
                      </strong>{' '}
                      <span className="text-[var(--color-fg-muted)]">{d.use}</span>
                    </p>
                    <p
                      className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-subtle)]"
                      style={{ letterSpacing: '0.08em' }}
                    >
                      → {d.why}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="surface-card rounded-2xl p-6 md:p-7 h-full">
              <div
                className="label-eyebrow mb-5 text-[var(--color-signal-live)]"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                // reached for
              </div>
              <ul className="space-y-4">
                {[
                  { tech: 'Kafka', use: 'when I need a log.', why: 'Not for "just events."' },
                  { tech: 'gRPC', use: 'between services.', why: 'Typed contracts beat REST.' },
                  { tech: 'Redis', use: 'when latency hurts.', why: 'Cache, queue, rate-limit.' },
                ].map((d) => (
                  <li key={d.tech} className="border-b border-[var(--color-border)] pb-4 last:border-b-0 last:pb-0">
                    <p className="text-[var(--color-fg)] text-[1.05rem]">
                      <strong className="font-medium" style={{ color: 'var(--color-signal-live)' }}>
                        {d.tech}
                      </strong>{' '}
                      <span className="text-[var(--color-fg-muted)]">{d.use}</span>
                    </p>
                    <p
                      className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-subtle)]"
                      style={{ letterSpacing: '0.08em' }}
                    >
                      → {d.why}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* The inventory, secondary */}
        <Reveal delay={0.1} className="mt-24">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px flex-1 bg-[var(--color-border)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-fg-subtle)]">
              // full inventory
            </span>
            <span className="h-px flex-1 bg-[var(--color-border)]" />
          </div>
        </Reveal>

        {/* Categorized grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(stackData).map(([category, items], idx) => (
            <Reveal key={category} delay={0.05 * idx}>
              <div className="group">
                <div className="flex items-center gap-3 pb-4 border-b border-[var(--color-border)]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-fg-subtle)]">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display text-2xl text-[var(--color-fg)]">{category}</h3>
                  <span className="ml-auto font-mono text-xs text-[var(--color-fg-subtle)]">
                    {items.length.toString().padStart(2, '0')}
                  </span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <li key={s}>
                      <Chip skill={s} />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Edge-to-edge marquee */}
      <div className="mt-24 border-y border-[var(--color-border)] py-6 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <Marquee speed={45}>
          {allSkills.map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="inline-flex items-center gap-3 px-6 font-display text-3xl md:text-5xl text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              {s}
              <span className="text-[var(--color-fg-subtle)]/30">·</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
