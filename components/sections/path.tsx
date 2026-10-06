'use client';

import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { useRef } from 'react';

export default function Path() {
  const containerRef = useRef<HTMLElement>(null);
  useSectionInView('Path', 0.2, containerRef);

  return (
    <section id="path" ref={containerRef} className="section scroll-mt-14">
      <div className="container-page">
        <div className="grid grid-cols-12 gap-x-6 border-t border-[var(--color-rule-strong)] pt-6">
          <h2 className="t-meta col-span-12 mb-8 md:col-span-2 md:mb-0 md:self-start md:sticky md:top-20">Path</h2>

          <div className="col-span-12 md:col-span-10">
            <p className="display t-h2 max-w-[20ch]">Operations to lead engineer, in five years.</p>

            {/* A real sequence, so the dates carry it. Newest first.
                The rail fills as you read down it — the one piece of motion
                here, and it maps to the content rather than decorating it. */}
            <div className="relative mt-16 pl-6 sm:pl-8">
              <div
                aria-hidden
                className="absolute left-0 top-0 bottom-0 w-px bg-[var(--color-rule)]"
              />
              <div
                aria-hidden
                className="rail-fill absolute left-0 top-0 bottom-0 w-px bg-[var(--color-mark)]"
              />

              <ol className="border-t border-[var(--color-rule)]">
              {experiencesData.map((item) => (
                <li
                  key={item.date + item.title}
                  className="grid grid-cols-12 gap-x-6 gap-y-2 border-b border-[var(--color-rule)] py-7"
                >
                  <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                    <span
                      className={cn(
                        'text-[0.9375rem] tabular',
                        'current' in item && item.current
                          ? 'text-[var(--color-mark)]'
                          : 'text-[var(--color-ink-3)]'
                      )}
                    >
                      {item.date}
                    </span>
                  </div>

                  <div className="col-span-12 sm:col-span-9 lg:col-span-10">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <h3 className="text-[1.0625rem] font-medium">{item.title}</h3>
                      <span className="t-meta">{item.org}</span>
                    </div>
                    <p className="t-body mt-2 text-[var(--color-ink-2)]">{item.description}</p>
                  </div>
                </li>
              ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
