import { profile } from '@/lib/data';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
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
              Full-stack engineer based in {profile.location}. Available for new roles and selected
              contract work.
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

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-[var(--color-border)] pt-6 md:flex-row md:items-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
            © {year} {profile.name}. Built with Next 15, Motion & React Three Fiber.
          </p>
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
            <span className="relative grid h-2 w-2 place-items-center">
              <span className="absolute inset-0 rounded-full bg-[var(--color-signal-live)] animate-pulse-dot" />
              <span className="h-2 w-2 rounded-full bg-[var(--color-signal-live)]" />
            </span>
            <span>Local time {new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Colombo', hour: '2-digit', minute: '2-digit' }).format(new Date())} · {profile.timezone}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
