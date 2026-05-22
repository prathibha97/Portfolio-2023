'use client';

import { profile } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useRef } from 'react';
import CtaButton from '../primitives/cta-button';
import Magnetic from '../primitives/magnetic';
import MeshGradient from '../primitives/mesh-gradient';
import ScrambleText from '../primitives/scramble-text';
import HeroSpecPanel from './hero-spec-panel';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  useSectionInView('Home', 0.4, containerRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative isolate min-h-[100svh] w-full overflow-hidden"
    >
      <MeshGradient />

      <div className="container-page relative z-10 grid min-h-[100svh] grid-rows-[auto_1fr_auto] gap-10 pt-32 pb-12 md:pt-40">
        {/* Status pill row */}
        <div className="flex flex-wrap items-center justify-between gap-4 animate-hero-in">
          <div className="glass inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5">
            <span className="relative grid h-2 w-2 place-items-center">
              <span className="absolute inset-0 rounded-full bg-[var(--color-signal-live)] animate-pulse-dot" />
              <span className="h-2 w-2 rounded-full bg-[var(--color-signal-live)]" />
            </span>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-fg)]">
              {profile.status}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
            <span>{profile.location}</span>
            <span className="text-[var(--color-fg-subtle)]/40">/</span>
            <span>{profile.timezone}</span>
          </div>
        </div>

        {/* Statement + Spec panel */}
        <motion.div
          style={{ y: titleY, opacity: fade }}
          className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12"
        >
          {/* LEFT — statement */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <p
              className="label-eyebrow animate-hero-in"
              style={{ animationDelay: '60ms' }}
            >
              <ScrambleText text="— Engineer · Portfolio 2026" />
            </p>

            <h1 className="text-[clamp(2.75rem,9vw,8.5rem)] font-medium leading-[0.92] tracking-[-0.045em] text-[var(--color-fg)]">
              <span
                className="block animate-hero-in-up"
                style={{ animationDelay: '120ms' }}
              >
                I build software
              </span>
              <span
                className="block text-[var(--color-fg-subtle)] animate-hero-in-up"
                style={{ animationDelay: '240ms' }}
              >
                that <span className="text-[var(--color-accent)]">ships.</span>
              </span>
            </h1>

            <p
              className="max-w-[34rem] text-[var(--color-fg-muted)] text-[1.02rem] md:text-[1.1rem] leading-relaxed animate-hero-in"
              style={{ animationDelay: '420ms' }}
            >
              I&apos;m <span className="text-[var(--color-fg)]">{profile.shortName}</span> — a
              senior engineer leading critical projects at my organization, building{' '}
              <span className="text-[var(--color-fg)]">scalable, performant systems</span> in
              Go alongside the full-stack work behind them.
            </p>

            <div
              className="flex flex-wrap items-center gap-3 animate-hero-in"
              style={{ animationDelay: '540ms' }}
            >
              <CtaButton href="#contact" variant="primary">
                Start a project
              </CtaButton>
              <CtaButton href={profile.resume} variant="ghost" download icon={<Download className="h-4 w-4" />}>
                Download résumé
              </CtaButton>

              <div className="ml-1 flex items-center gap-1.5">
                <Magnetic strength={0.4}>
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    aria-label="GitHub"
                    className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border)] text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:border-[var(--color-border-strong)] transition-colors"
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>
                </Magnetic>
                <Magnetic strength={0.4}>
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    aria-label="LinkedIn"
                    className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border)] text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:border-[var(--color-border-strong)] transition-colors"
                  >
                    <FaLinkedin className="h-4 w-4" />
                  </a>
                </Magnetic>
                <Magnetic strength={0.4}>
                  <a
                    href={`mailto:${profile.email}`}
                    data-cursor="link"
                    aria-label="Email"
                    className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border)] text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:border-[var(--color-border-strong)] transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>

          {/* RIGHT — spec panel */}
          <div
            className="lg:col-span-4 animate-hero-in"
            style={{ animationDelay: '360ms' }}
          >
            <HeroSpecPanel />
          </div>
        </motion.div>

        {/* Footer rail */}
        <div
          className="flex items-end justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)] animate-hero-in"
          style={{ animationDelay: '720ms' }}
        >
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center gap-2"
          >
            <ArrowDown className="h-3 w-3" />
            <span className="hidden md:inline">Scroll</span>
          </motion.span>
          <span>v2.0 · Editorial</span>
          <span className="hidden md:block">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  );
}
