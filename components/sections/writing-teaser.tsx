import Reveal from '@/components/primitives/reveal';
import SectionHeading from '@/components/primitives/section-heading';
import { formatDate } from '@/lib/utils';
import { getAllPosts } from '@/lib/writing';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default async function WritingTeaser() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <section className="relative py-32 md:py-44">
      <div className="container-page">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="05"
            eyebrow="Writing"
            title="Recent notes, public-thinking style."
          />
          <Reveal delay={0.2}>
            <Link
              href="/writing"
              data-cursor="link"
              className="group inline-flex items-center gap-2 text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
            >
              <span>All posts</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-16 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <li>
                <Link
                  href={`/writing/${post.slug}`}
                  data-cursor="view"
                  className="group grid grid-cols-12 items-baseline gap-x-6 gap-y-2 px-2 py-7 rounded-xl transition-colors hover:bg-[var(--color-surface)]/30"
                >
                  <div className="col-span-12 md:col-span-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                    {formatDate(post.date)}
                  </div>
                  <div className="col-span-12 md:col-span-8">
                    <h3 className="font-display text-xl md:text-2xl text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-accent)]">
                      {post.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-[var(--color-fg-muted)] max-w-prose">
                      {post.description}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-2 flex items-center justify-end gap-2 font-mono text-xs text-[var(--color-fg-subtle)]">
                    <span>{post.readingTime}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
