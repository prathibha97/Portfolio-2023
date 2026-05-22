'use client';

import { useActiveSection } from '@/context/active-section-context';
import { profile, sectionLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import CommandPalette from './command-palette';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClicked } = useActiveSection();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 80));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] flex justify-center pointer-events-none">
        <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="pointer-events-auto mt-4 w-[min(96%,52rem)]"
        >
          <nav
            className={cn(
              'flex items-center justify-between gap-2 rounded-full px-3 py-2 transition-all duration-500',
              scrolled
                ? 'glass-strong shadow-[0_8px_40px_rgba(0,0,0,0.35)]'
                : 'glass'
            )}
          >
            {/* Wordmark */}
            <Link
              href="/"
              data-cursor="link"
              className="group flex items-center gap-2 pl-2 pr-3"
              onClick={() => {
                setActiveSection('Home');
                setTimeOfLastClicked(Date.now());
              }}
            >
              <span className="relative grid h-7 w-7 place-items-center rounded-full bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-[11px] font-bold">
                P
                <span className="absolute inset-0 rounded-full ring-1 ring-[var(--color-accent)]/40 animate-pulse-dot" />
              </span>
              <span className="hidden sm:inline font-medium text-sm tracking-tight">
                {profile.shortName}
                <span className="text-[var(--color-fg-subtle)]"> / engineer</span>
              </span>
            </Link>

            {/* Section links */}
            <ul className="hidden md:flex items-center gap-1 text-sm">
              {sectionLinks.map((link) => {
                const active = isHome && activeSection === link.name;
                return (
                  <li key={link.hash} className="relative">
                    <Link
                      href={isHome ? link.hash : `/${link.hash}`}
                      data-cursor="link"
                      className={cn(
                        'relative z-10 inline-flex rounded-full px-3 py-1.5 transition-colors duration-300',
                        active
                          ? 'text-[var(--color-fg)]'
                          : 'text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]'
                      )}
                      onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClicked(Date.now());
                      }}
                    >
                      {link.name}
                    </Link>
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute inset-0 rounded-full bg-[var(--color-surface-2)]"
                      />
                    )}
                  </li>
                );
              })}
              <li>
                <Link
                  href="/writing"
                  data-cursor="link"
                  className={cn(
                    'relative z-10 inline-flex rounded-full px-3 py-1.5 transition-colors duration-300',
                    pathname?.startsWith('/writing')
                      ? 'text-[var(--color-fg)]'
                      : 'text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]'
                  )}
                >
                  Writing
                </Link>
              </li>
            </ul>

            {/* Right side: cmd+k */}
            <button
              onClick={() => setPaletteOpen(true)}
              data-cursor="link"
              className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
              aria-label="Open command palette"
            >
              <span className="hidden sm:inline">Jump to</span>
              <kbd className="font-mono text-[10px] rounded border border-[var(--color-border-strong)] px-1.5 py-0.5">
                ⌘K
              </kbd>
            </button>
          </nav>
        </motion.div>
      </header>

      <AnimatePresence>{paletteOpen && <CommandPalette onClose={() => setPaletteOpen(false)} />}</AnimatePresence>
    </>
  );
}
