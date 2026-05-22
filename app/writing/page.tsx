import Reveal from '@/components/primitives/reveal';
import SectionHeading from '@/components/primitives/section-heading';
import { profile } from '@/lib/data';
import { formatDate } from '@/lib/utils';
import { getAllPosts } from '@/lib/writing';
import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Writing — Prathibha Ratnayake',
  description: 'Notes on engineering, design, databases, and the work of shipping software.',
};

export default async function WritingIndex() {
  const posts = await getAllPosts();

  return (
    <main className="relative pt-32 pb-32 md:pt-44 md:pb-44">
      <div className="container-page">
        <SectionHeading
          index="—"
          eyebrow="Writing"
          title="Notes from the keyboard."
          description="Short essays on engineering, databases, design and the unglamorous work of shipping. Updated when I have something worth saying."
        />

        <div className="mt-20 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {posts.length === 0 && (
            <p className="py-12 text-center text-[var(--color-fg-muted)]">No posts yet.</p>
          )}
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                href={`/writing/${post.slug}`}
                data-cursor="view"
                className="group grid grid-cols-12 items-baseline gap-x-6 gap-y-2 py-8 transition-colors hover:bg-[var(--color-surface)]/30 px-2 rounded-xl"
              >
                <div className="col-span-12 md:col-span-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                  {formatDate(post.date)}
                </div>
                <div className="col-span-12 md:col-span-8">
                  <h2 className="font-display text-2xl md:text-3xl text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-accent)] leading-tight">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-[var(--color-fg-muted)] max-w-prose">
                    {post.description}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-2 flex items-center justify-end gap-2 font-mono text-xs text-[var(--color-fg-subtle)]">
                  <span>{post.readingTime}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center text-sm text-[var(--color-fg-subtle)]">
          <Link
            href="/"
            data-cursor="link"
            className="font-mono uppercase tracking-[0.18em] hover:text-[var(--color-fg)] transition-colors"
          >
            ← Back to {profile.shortName}
          </Link>
        </div>
      </div>
    </main>
  );
}
