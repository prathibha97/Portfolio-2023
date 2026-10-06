'use client';

import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { ArrowUpRight } from 'lucide-react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Project = (typeof projectsData)[number];

const FOLLOW = { stiffness: 320, damping: 30, mass: 0.5 };

function ProjectEntry({ project, index }: { project: Project; index: number }) {
  const plateRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();

  // Touch devices have no hover and no cursor to follow, so they get the
  // plain plate rather than a chip pinned to nothing.
  const [canHover, setCanHover] = useState(false);
  useEffect(() => {
    setCanHover(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }, []);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const chipX = useSpring(rawX, FOLLOW);
  const chipY = useSpring(rawY, FOLLOW);

  const pointTo = (e: React.MouseEvent, snap = false) => {
    const rect = plateRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    rawX.set(x);
    rawY.set(y);
    // Snap on entry, otherwise the chip springs in from the plate's corner.
    if (snap) {
      chipX.jump(x);
      chipY.jump(y);
    }
  };

  const showChip = canHover && hovered;

  return (
    <article className="group">
      <a href={project.link} target="_blank" rel="noreferrer" className="block">
        {/* Mounted like a plate — the screenshots are near-white, so they need
            a tinted surround and a visible edge or they dissolve into the page. */}
        <div className="bg-[var(--color-paper-sunk)] p-4 sm:p-6 md:p-8">
          <div
            ref={plateRef}
            onMouseEnter={(e) => {
              setHovered(true);
              pointTo(e, true);
            }}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={pointTo}
            className="relative aspect-[16/10] overflow-hidden border border-[var(--color-rule-strong)] shadow-[0_1px_3px_rgba(20,22,26,0.07)]"
          >
            <Image
              src={project.imageUrl}
              alt={`${project.title} — ${project.summary}`}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              quality={90}
              priority={index === 0}
              placeholder="blur"
              className="object-cover object-top transition-[transform,filter] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] saturate-[0.9] group-hover:scale-[1.02] group-hover:saturate-100"
            />

            {/* Follows the cursor and names the destination. The only reason
                it exists is that the plate gives no other sign it is a link. */}
            {showChip && (
              // Two elements on purpose: motion owns `transform` on the outer
              // span for the follow, so the centring offset has to live on an
              // inner one or the inline transform overwrites it.
              <motion.span
                aria-hidden
                style={reduced ? undefined : { x: chipX, y: chipY }}
                className={
                  'pointer-events-none absolute z-10 ' +
                  (reduced ? 'right-3 top-3' : 'left-0 top-0')
                }
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: reduced ? 0 : 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className={
                    'inline-flex items-center gap-1.5 whitespace-nowrap bg-[var(--color-ink)] ' +
                    'px-3 py-1.5 text-[0.8125rem] text-[var(--color-paper)] ' +
                    (reduced ? '' : '-translate-x-1/2 -translate-y-1/2')
                  }
                >
                  Visit <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                </motion.span>
              </motion.span>
            )}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-12 gap-x-6 gap-y-4">
          <div className="col-span-12 md:col-span-7">
            <h3 className="display text-[clamp(1.75rem,3.2vw,2.5rem)] leading-none">
              {/* Underline responds to the whole plate, not just the word. */}
              <span className="link-rule group-hover:[background-size:100%_1px]">
                {project.title}
              </span>
            </h3>
            <p className="mt-1 text-[1.0625rem] text-[var(--color-ink-2)]">{project.summary}</p>
            <p className="t-body mt-4 text-[var(--color-ink-2)]">{project.description}</p>
          </div>

          <dl className="col-span-12 grid grid-cols-2 gap-x-6 gap-y-4 md:col-span-4 md:col-start-9 md:grid-cols-1">
            <div>
              <dt className="t-meta">Year</dt>
              <dd className="mt-1 text-[0.9375rem] tabular">{project.year}</dd>
            </div>
            <div>
              <dt className="t-meta">Built with</dt>
              <dd className="mt-1 text-[0.9375rem] text-[var(--color-ink-2)]">
                {project.stack.join(', ')}
              </dd>
            </div>
            <div className="col-span-2 md:col-span-1">
              <dt className="t-meta">Live at</dt>
              <dd className="mt-1 text-[0.9375rem] text-[var(--color-ink-2)]">
                {new URL(project.link).hostname}
              </dd>
            </div>
          </dl>
        </div>
      </a>
    </article>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  useSectionInView('Work', 0.2, containerRef);

  return (
    <section id="work" ref={containerRef} className="section scroll-mt-14">
      <div className="container-page">
        <div className="grid grid-cols-12 gap-x-6 border-t border-[var(--color-rule-strong)] pt-6">
          <h2 className="t-meta col-span-12 mb-8 md:col-span-2 md:mb-0 md:self-start md:sticky md:top-20">Work</h2>

          <div className="col-span-12 md:col-span-10">
            <p className="display t-h2 max-w-[22ch]">
              Four projects worth opening.
            </p>
            <p className="t-body mt-6 text-[var(--color-ink-2)]">
              These are the ones I designed rather than followed. The clones and course builds
              that taught me the stack are still up on{' '}
              <a
                className="link-rule [background-size:100%_1px] text-[var(--color-mark)]"
                href="https://github.com/prathibha97"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              .
            </p>

            <div className="mt-20 space-y-24 md:space-y-32">
              {projectsData.map((p, i) => (
                <ProjectEntry key={p.title} project={p} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
