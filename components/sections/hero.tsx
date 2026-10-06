'use client';

import { profile } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useRef } from 'react';

/**
 * The masthead. One orchestrated entrance happens here and nowhere else on
 * the site — the statement rises line by line, the rule draws, the footing
 * settles. Everything below the fold is already in place when you reach it.
 *
 * Laid out as a centred pair rather than justify-between: the latter opened a
 * growing hole between headline and footing on tall screens.
 */
export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  useSectionInView('Home', 0.4, containerRef);

  return (
    <section
      id="home"
      ref={containerRef}
      className="container-page flex min-h-[calc(100svh-3.5rem)] flex-col justify-center gap-y-[clamp(3rem,10vh,8rem)] py-16"
    >
      <h1 className="display t-display">
        <span className="block rise" style={{ animationDelay: '80ms' }}>
          Go services,
        </span>
        <span className="block rise" style={{ animationDelay: '200ms' }}>
          and the products
        </span>
        <span className="block rise" style={{ animationDelay: '320ms' }}>
          on top of them.
        </span>
      </h1>

      <div>
        <div
          className="mb-10 h-px bg-[var(--color-rule-strong)] rise"
          style={{ animationDelay: '520ms' }}
        />

        <div
          className="grid grid-cols-12 gap-x-6 gap-y-10 rise"
          style={{ animationDelay: '640ms' }}
        >
          <p className="col-span-12 text-[1.0625rem] leading-[1.6] md:col-span-6 lg:col-span-5">
            I&rsquo;m {profile.shortName}, a software engineer. Four years building full-stack
            products and the distributed services behind them &mdash; currently the senior
            engineer on a financial compliance platform, writing Go for a living and TypeScript
            for everything users touch.
          </p>

          <div className="col-span-6 md:col-span-3 lg:col-start-8 lg:col-span-2">
            <h2 className="t-meta mb-2">Available</h2>
            <p className="text-[0.9375rem] leading-[1.5] text-[var(--color-ink-2)]">
              {profile.availability}
            </p>
            <p className="t-meta mt-2">
              {profile.workingStyle}. {profile.relocation}.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <h2 className="t-meta mb-2">Elsewhere</h2>
            <ul className="space-y-1 text-[0.9375rem]">
              <li>
                <a className="link-rule" href={`mailto:${profile.email}`}>
                  Email
                </a>
              </li>
              <li>
                <a className="link-rule" href={profile.socials.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a className="link-rule" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="link-rule" href={profile.resume} download>
                  Résumé
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
