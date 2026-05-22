'use client';

import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
};

export default function Marquee({ children, speed = 40, reverse = false, pauseOnHover = true, className }: Props) {
  return (
    <div
      className={cn('group relative flex w-full overflow-hidden', className)}
      style={{ ['--marquee-duration' as string]: `${speed}s` }}
    >
      <div
        className={cn(
          'flex shrink-0 items-center gap-12 pr-12 will-change-transform',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
        style={{
          animation: 'marquee var(--marquee-duration) linear infinite',
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
