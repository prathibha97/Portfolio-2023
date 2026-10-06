'use client';

import { profile, stackData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  useSectionInView('About', 0.3, containerRef);

  return (
    <section id="about" ref={containerRef} className="section scroll-mt-14">
      <div className="container-page">
        <div className="grid grid-cols-12 gap-x-6 border-t border-[var(--color-rule-strong)] pt-6">
          <h2 className="t-meta col-span-12 mb-8 md:col-span-2 md:mb-0 md:self-start md:sticky md:top-20">About</h2>

          <div className="col-span-12 md:col-span-10">
            <p className="display t-h2 max-w-[18ch]">I came to engineering late, and sideways.</p>

            <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-12">
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <figure>
                  <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-paper-sunk)]">
                    <Image
                      src="/assets/images/prathibha.jpg"
                      alt={profile.name}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      quality={92}
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="t-meta mt-3">{profile.name}</figcaption>
                </figure>
              </div>

              <div className="col-span-12 lg:col-span-7 lg:col-start-6">
                <div className="space-y-5 text-[var(--color-ink-2)]">
                  <p className="t-body">
                    For two years I was an operations analyst on US healthcare billing, reading
                    other people&rsquo;s systems for a living and teaching myself HTML on
                    weeknights. That job is the reason I can sit in a room with people who
                    don&rsquo;t write code and still get to the actual trade-off.
                  </p>
                  <p className="t-body">
                    I finished a CS degree in 2024 while working full time, shipped an Ethereum
                    token ecosystem and the wallet around it, and moved into the senior role in
                    2025. Most of what I know came from shipping something badly first and having
                    to live with it.
                  </p>
                  <p className="t-body">
                    Outside work: video games, music rabbit holes, and problems that don&rsquo;t
                    pay me anything.
                  </p>
                </div>

                {/* Stack, without the inventory. Grouped by how often I reach for it. */}
                <div className="mt-14 divide-y divide-[var(--color-rule)] border-t border-[var(--color-rule)]">
                  {stackData.map((group) => (
                    <div key={group.label} className="grid grid-cols-12 gap-x-6 py-4">
                      <dt className="t-meta col-span-12 sm:col-span-4">{group.label}</dt>
                      <dd className="col-span-12 mt-1 text-[0.9375rem] leading-[1.6] sm:col-span-8 sm:mt-0">
                        {group.items.join(', ')}
                      </dd>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
