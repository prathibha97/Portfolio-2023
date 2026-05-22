import LiveClock from '@/components/primitives/live-clock';
import { profile } from '@/lib/data';
import pkg from '@/package.json';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

function buildInfo() {
  const sha =
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.NEXT_PUBLIC_COMMIT_SHA ||
    'local';
  const shortSha = sha.slice(0, 7);

  const deployedAt =
    process.env.VERCEL_GIT_COMMIT_AUTHOR_DATE ||
    process.env.NEXT_PUBLIC_BUILD_TIME ||
    new Date().toISOString();

  // Relative time, server-rendered (slight staleness is fine)
  let rel = '';
  try {
    const diffMs = Date.now() - new Date(deployedAt).getTime();
    const day = 24 * 60 * 60 * 1000;
    const days = Math.round(diffMs / day);
    if (days <= 0) rel = 'today';
    else if (days === 1) rel = '1d ago';
    else if (days < 30) rel = `${days}d ago`;
    else if (days < 365) rel = `${Math.round(days / 30)}mo ago`;
    else rel = `${Math.round(days / 365)}y ago`;
  } catch {
    rel = '—';
  }

  return { version: pkg.version, shortSha, rel };
}

export default function Footer() {
  const year = new Date().getFullYear();
  const { version, shortSha, rel } = buildInfo();
  return (
    <footer className="relative border-t border-[var(--color-border)] bg-[var(--color-bg-2)]">
      {/* Oversize wordmark */}
      <div className="container-page py-20">
        <div className="font-display text-[clamp(4rem,16vw,14rem)] leading-[0.85] tracking-tight text-[var(--color-fg)]">
          Let&apos;s build
          <br />
          <span className="text-[var(--color-fg-subtle)]/40">something.</span>
        </div>
      </div>

      <div className="container-page border-t border-[var(--color-border)] py-10">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3">
              <span className="relative grid h-8 w-8 place-items-center rounded-full bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-xs font-bold">
                P
                <span className="absolute inset-0 rounded-full ring-1 ring-[var(--color-accent)]/40 animate-pulse-dot" />
              </span>
              <span className="font-medium text-[var(--color-fg)]">{profile.name}</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-[var(--color-fg-muted)]">
              Senior software engineer based in {profile.location}. Currently leading engineering
              on critical projects; open to senior roles in 2026.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="label-eyebrow mb-3">Sitemap</div>
            <ul className="space-y-2 text-sm text-[var(--color-fg-muted)]">
              <li><Link className="hover:text-[var(--color-fg)] transition-colors" href="/#work">Work</Link></li>
              <li><Link className="hover:text-[var(--color-fg)] transition-colors" href="/#about">About</Link></li>
              <li><Link className="hover:text-[var(--color-fg)] transition-colors" href="/writing">Writing</Link></li>
              <li><Link className="hover:text-[var(--color-fg)] transition-colors" href="/#contact">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="label-eyebrow mb-3">Elsewhere</div>
            <ul className="space-y-2 text-sm text-[var(--color-fg-muted)]">
              <li>
                <a className="inline-flex items-center gap-2 hover:text-[var(--color-fg)] transition-colors" href={profile.socials.github} target="_blank" rel="noreferrer">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 hover:text-[var(--color-fg)] transition-colors" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 hover:text-[var(--color-fg)] transition-colors" href={`mailto:${profile.email}`}>
                  <Mail className="h-3.5 w-3.5" /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-border)] pt-6">
          {/* Build info — mono, tabular, machine-precise */}
          <div
            className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-subtle)]"
            style={{ fontVariantNumeric: 'tabular-nums slashed-zero' }}
          >
            <span className="text-[var(--color-fg-muted)]">v{version}</span>
            <span className="text-[var(--color-fg-subtle)]/40">·</span>
            <span>deployed {rel}</span>
            <span className="text-[var(--color-fg-subtle)]/40">·</span>
            <span>
              commit{' '}
              <span className="text-[var(--color-fg-muted)] normal-case tracking-normal">
                {shortSha}
              </span>
            </span>
            <span className="text-[var(--color-fg-subtle)]/40">·</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="relative grid h-1.5 w-1.5 place-items-center">
                <span className="absolute inset-0 rounded-full bg-[var(--color-signal-live)] animate-pulse-dot" />
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-signal-live)]" />
              </span>
              LK <LiveClock className="text-[var(--color-fg-muted)]" />
            </span>
          </div>

          {/* Copyright */}
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]/70">
            © {year} {profile.name} · built with Next 15 · Motion · General Sans
          </p>
        </div>
      </div>
    </footer>
  );
}
