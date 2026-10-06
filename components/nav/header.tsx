'use client';

import { useActiveSection } from '@/context/active-section-context';
import { navLinks, profile } from '@/lib/data';
import { cn } from '@/lib/utils';
import { AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import CommandPalette from './command-palette';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClicked } = useActiveSection();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

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
      {/* A masthead rule, not a floating pill. */}
      <header className="sticky top-0 z-[100] border-b border-[var(--color-rule)] bg-[var(--color-paper)]/90 backdrop-blur-[2px]">
        <div className="container-page flex h-14 items-center justify-between gap-6">
          <Link
            href="/"
            className="link-rule text-[0.9375rem] font-medium"
            onClick={() => {
              setActiveSection('Home');
              setTimeOfLastClicked(Date.now());
            }}
          >
            {profile.name}
          </Link>

          <nav className="flex items-center gap-5">
            <ul className="hidden items-center gap-5 text-[0.9375rem] sm:flex">
              {navLinks.map((link) => {
                const isRoute = link.hash.startsWith('/');
                const href = isRoute ? link.hash : isHome ? link.hash : `/${link.hash}`;
                const active = isRoute
                  ? pathname?.startsWith(link.hash) ?? false
                  : isHome && activeSection === link.name;

                return (
                  <li key={link.hash}>
                    <Link
                      href={href}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'link-rule transition-colors',
                        active
                          ? 'text-[var(--color-ink)] [background-size:100%_1px]'
                          : 'text-[var(--color-ink-2)] hover:text-[var(--color-ink)]'
                      )}
                      onClick={() => {
                        if (!isRoute) {
                          setActiveSection(link.name as typeof activeSection);
                          setTimeOfLastClicked(Date.now());
                        }
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <button
              onClick={() => setPaletteOpen(true)}
              className="t-meta hover:text-[var(--color-ink)] transition-colors"
              aria-label="Open the jump-to menu"
            >
              {/* ⌘K means nothing on a phone, where this is the only nav. */}
              <span className="sm:hidden">Menu</span>
              <span className="hidden sm:inline" aria-hidden>
                ⌘K
              </span>
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {paletteOpen && <CommandPalette onClose={() => setPaletteOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
