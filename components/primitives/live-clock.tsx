'use client';

import { useEffect, useState } from 'react';

type Props = {
  timezone?: string;
  seconds?: boolean;
  className?: string;
};

export default function LiveClock({
  timezone = 'Asia/Colombo',
  seconds = true,
  className,
}: Props) {
  const [now, setNow] = useState<string>('');

  useEffect(() => {
    const tick = () => {
      try {
        setNow(
          new Intl.DateTimeFormat('en-GB', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: seconds ? '2-digit' : undefined,
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
  }, [timezone, seconds]);

  return (
    <span
      className={className}
      style={{ fontVariantNumeric: 'tabular-nums slashed-zero' }}
      suppressHydrationWarning
    >
      {now || '—:—:—'}
    </span>
  );
}
