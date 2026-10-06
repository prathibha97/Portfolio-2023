'use client';

import { now } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useRef } from 'react';

/**
 * The one inverted block on the site. It exists because the production work
 * is the strongest evidence here and the side projects can't carry it — and
 * because a page that never changes value reads as flat no matter how clean
 * the typography is.
 */
export default function Now() {
  const containerRef = useRef<HTMLElement>(null);
  useSectionInView('Now', 0.25, containerRef);

  return (
    <section id="now" ref={containerRef} className="on-ink scroll-mt-14">
      <div className="container-page py-20 md:py-28">
        <div className="grid grid-cols-12 gap-x-6">
          <h2 className="t-meta col-span-12 mb-8 md:col-span-2 md:mb-0 md:self-start md:sticky md:top-20">Now</h2>

          <div className="col-span-12 md:col-span-10">
            <p className="display text-[clamp(1.75rem,3.2vw,4.5rem)] leading-[1.06] max-w-[26ch]">
              {now.headline}
            </p>

            {/* The numbers do the work the old "6+ years" stat row was faking. */}
            <dl className="mt-14 grid grid-cols-1 gap-x-6 gap-y-8 border-t border-white/15 pt-10 sm:grid-cols-3">
              {now.figures.map((f) => (
                <div key={f.label}>
                  <dt className="display text-[clamp(2.75rem,5.5vw,4.5rem)] leading-none tabular">
                    {f.value}
                  </dt>
                  <dd className="mt-3 max-w-[22ch] text-[0.9375rem] leading-[1.5] text-[#9ba0a8]">
                    {f.label}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {now.detail.map((d) => (
                <div key={d.label} className="border-t border-white/15 pt-4">
                  <h3 className="t-meta mb-2">{d.label}</h3>
                  <p className="text-[0.9375rem] leading-[1.55] text-[#c6cad0]">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
