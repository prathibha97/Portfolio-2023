import { formatDate } from '@/lib/utils';
import { getAllPosts } from '@/lib/writing';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Notes on engineering, databases, design, and the work of shipping software.',
};

export default async function WritingIndex() {
  const posts = await getAllPosts();

  return (
    <main id="main" className="container-page pt-20 pb-24 md:pt-28 md:pb-32">
      <header className="border-b border-[var(--color-rule-strong)] pb-10">
        <h1 className="display t-h2 max-w-[16ch]">Notes from the keyboard.</h1>
        <p className="t-body mt-5 text-[var(--color-ink-2)]">
          Engineering, databases, design, and the unglamorous half of shipping. Updated when I
          have something worth saying.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="t-body py-16 text-[var(--color-ink-2)]">Nothing published yet.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-[var(--color-rule)]">
              <Link href={`/writing/${post.slug}`} className="grid grid-cols-12 gap-x-6 gap-y-1 py-8">
                <span className="t-meta col-span-12 sm:col-span-2">{formatDate(post.date)}</span>
                <div className="col-span-12 sm:col-span-8">
                  <h2 className="display text-[clamp(1.375rem,2.4vw,1.75rem)] leading-tight">
                    <span className="link-rule">{post.title}</span>
                  </h2>
                  <p className="t-body mt-2 text-[var(--color-ink-2)]">{post.description}</p>
                </div>
                <span className="t-meta col-span-12 sm:col-span-2 sm:text-right">
                  {post.readingTime}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
