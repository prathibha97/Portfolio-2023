'use client';

import { cn } from '@/lib/utils';
import Reveal from './reveal';

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: Props) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      <Reveal className="flex items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-fg-subtle)]">
          {index}
        </span>
        <span className="h-px w-10 bg-[var(--color-border-strong)]" />
        <span className="label-eyebrow text-[var(--color-accent)]">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-fluid-h2 max-w-3xl leading-[1.02] text-[var(--color-fg)]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="max-w-xl text-[var(--color-fg-muted)] text-fluid-body">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
