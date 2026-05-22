'use client';

import { profile, sectionLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Briefcase,
  Code2,
  Compass,
  Download,
  FileText,
  Home,
  Mail,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import type { ComponentType } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

type CmdItem = {
  id: string;
  label: string;
  hint?: string;
  group: string;
  icon: ComponentType<{ className?: string }>;
  action: () => void;
};

export default function CommandPalette({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);

  const items: CmdItem[] = useMemo(() => {
    const NAV_ICON: Record<string, ComponentType<{ className?: string }>> = {
      About: Compass,
      Work: Briefcase,
      Stack: Code2,
      Path: FileText,
      Contact: Mail,
    };
    const navItems: CmdItem[] = sectionLinks.map((l, i) => ({
      id: `nav-${i}`,
      label: `Go to ${l.name}`,
      group: 'Navigate',
      icon: NAV_ICON[l.name] ?? Compass,
      hint: l.hash,
      action: () => {
        router.push(`/${l.hash}`);
        onClose();
      },
    }));

    const extras: CmdItem[] = [
      {
        id: 'home',
        label: 'Go to Home',
        group: 'Navigate',
        icon: Home,
        action: () => {
          router.push('/');
          onClose();
        },
      },
      {
        id: 'writing',
        label: 'Read the writing',
        group: 'Navigate',
        icon: FileText,
        action: () => {
          router.push('/writing');
          onClose();
        },
      },
      {
        id: 'resume',
        label: 'Download résumé (CV.pdf)',
        group: 'Actions',
        icon: Download,
        action: () => {
          window.open(profile.resume, '_blank');
          onClose();
        },
      },
      {
        id: 'email',
        label: `Email ${profile.email}`,
        group: 'Actions',
        icon: Mail,
        action: () => {
          window.location.href = `mailto:${profile.email}`;
          onClose();
        },
      },
      {
        id: 'github',
        label: 'GitHub profile',
        group: 'Social',
        icon: FaGithub,
        action: () => {
          window.open(profile.socials.github, '_blank');
          onClose();
        },
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        group: 'Social',
        icon: FaLinkedin,
        action: () => {
          window.open(profile.socials.linkedin, '_blank');
          onClose();
        },
      },
    ];

    return [...navItems, ...extras];
  }, [router, onClose]);

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (i) => i.label.toLowerCase().includes(q) || i.group.toLowerCase().includes(q)
    );
  }, [items, query]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, filtered.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        filtered[active]?.action();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [filtered, active, onClose]);

  const grouped = filtered.reduce<Record<string, CmdItem[]>>((acc, it) => {
    (acc[it.group] = acc[it.group] || []).push(it);
    return acc;
  }, {});

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[200] grid place-items-start pt-24 px-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: -16, scale: 0.97, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: -16, scale: 0.97, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-xl rounded-2xl glass-strong shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-[var(--color-border)] px-4">
          <Compass className="h-4 w-4 text-[var(--color-fg-subtle)]" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search anywhere"
            className="flex-1 bg-transparent py-4 text-sm placeholder:text-[var(--color-fg-subtle)] outline-none"
          />
          <kbd className="font-mono text-[10px] rounded border border-[var(--color-border)] px-1.5 py-0.5 text-[var(--color-fg-muted)]">
            ESC
          </kbd>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {filtered.length === 0 && (
            <div className="px-4 py-6 text-center text-sm text-[var(--color-fg-subtle)]">
              No matches.
            </div>
          )}
          {Object.entries(grouped).map(([group, list]) => (
            <div key={group} className="mb-1">
              <div className="px-3 py-2 label-eyebrow">{group}</div>
              {list.map((it) => {
                const idx = filtered.indexOf(it);
                const isActive = idx === active;
                return (
                  <button
                    key={it.id}
                    onMouseEnter={() => setActive(idx)}
                    onClick={it.action}
                    className={cn(
                      'w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors',
                      isActive
                        ? 'bg-[var(--color-surface-2)] text-[var(--color-fg)]'
                        : 'text-[var(--color-fg-muted)]'
                    )}
                  >
                    <it.icon className="h-4 w-4" />
                    <span className="flex-1">{it.label}</span>
                    {it.hint && (
                      <span className="font-mono text-xs text-[var(--color-fg-subtle)]">
                        {it.hint}
                      </span>
                    )}
                    <ArrowRight className={cn('h-3.5 w-3.5 transition-opacity', isActive ? 'opacity-100' : 'opacity-0')} />
                  </button>
                );
              })}
            </div>
          ))}
        </div>
        <div className="border-t border-[var(--color-border)] px-4 py-2.5 flex items-center justify-between text-[11px] text-[var(--color-fg-subtle)] font-mono">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <Link href="/" onClick={onClose} className="hover:text-[var(--color-fg)]">
            prathibha.dev
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
