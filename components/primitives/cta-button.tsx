'use client';

import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import Magnetic from './magnetic';

type Variant = 'primary' | 'ghost' | 'outline';

type Props = {
  children: ReactNode;
  href?: string;
  external?: boolean;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
  download?: boolean;
} & ComponentPropsWithoutRef<'button'>;

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]';

const variants: Record<Variant, string> = {
  primary:
    'bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-[var(--color-accent-soft)]',
  ghost:
    'border border-[var(--color-border)] bg-[var(--color-surface)]/60 text-[var(--color-fg)] hover:bg-[var(--color-surface-2)]',
  outline:
    'border border-[var(--color-border-strong)] bg-transparent text-[var(--color-fg)] hover:border-[var(--color-fg)]',
};

const CtaButton = forwardRef<HTMLButtonElement, Props>(function CtaButton(
  { children, href, external, variant = 'primary', icon, className, download, ...rest },
  ref
) {
  const content = (
    <>
      <span>{children}</span>
      <span className="flex h-5 w-5 items-center justify-center overflow-hidden">
        <span className="transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4">
          {icon ?? <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />}
        </span>
        <span className="absolute -translate-x-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
          {icon ?? <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />}
        </span>
      </span>
    </>
  );

  if (href) {
    if (external || download) {
      return (
        <Magnetic strength={0.2}>
          <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            download={download}
            data-cursor="link"
            className={cn(base, variants[variant], className)}
          >
            {content}
          </a>
        </Magnetic>
      );
    }
    return (
      <Magnetic strength={0.2}>
        <Link href={href} data-cursor="link" className={cn(base, variants[variant], className)}>
          {content}
        </Link>
      </Magnetic>
    );
  }

  return (
    <Magnetic strength={0.2}>
      <button ref={ref} data-cursor="link" className={cn(base, variants[variant], className)} {...rest}>
        {content}
      </button>
    </Magnetic>
  );
});

export default CtaButton;
