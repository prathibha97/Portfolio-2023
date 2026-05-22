'use client';

import { profile } from '@/lib/data';
import { useEffect, useState } from 'react';

type Row = { label: string; value: string; mono?: boolean };

function useLocalTime(timezone: string) {
  const [now, setNow] = useState<string>('');
  useEffect(() => {
    const tick = () => {
      try {
        setNow(
          new Intl.DateTimeFormat('en-GB', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          }).format(new Date())
        );
      } catch {
        setNow('—');
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timezone]);
  return now;
}

export default function HeroSpecPanel() {
  const localTime = useLocalTime('Asia/Colombo');

  const rows: Row[] = [
    { label: 'role', value: 'Senior · Lead Engineer' },
    { label: 'focus', value: 'Scalable Go services' },
    { label: 'stack', value: 'Go · TypeScript · Postgres' },
    { label: 'years', value: '6+ shipping software' },
    { label: 'avail', value: 'Senior roles · 2026' },
    { label: 'loc', value: `${profile.location.split(',')[0]} (GMT+5:30)` },
    { label: 'time', value: localTime || '—:—:—', mono: true },
  ];

  return (
    <div
      className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-2)]/60 backdrop-blur-md p-5 md:p-6 overflow-hidden"
      style={{ fontFeatureSettings: "'liga' 0, 'calt' 0", fontVariantNumeric: 'tabular-nums slashed-zero' }}
    >
      {/* Header bar — mimics a terminal title row */}
      <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--color-signal-live)] animate-pulse-dot" />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-muted)]">
            // now
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
          live
        </span>
      </div>

      {/* Rows */}
      <dl className="space-y-2.5">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[5.5rem_1fr] items-baseline gap-3 font-mono text-[12px] md:text-[13px] leading-relaxed"
          >
            <dt className="text-[var(--color-fg-subtle)] uppercase tracking-[0.1em]">
              {row.label}
            </dt>
            <dd className="text-[var(--color-fg)] truncate">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* Subtle grain */}
      <div className="absolute inset-0 pointer-events-none grain opacity-60" />
    </div>
  );
}
