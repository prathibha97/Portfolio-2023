import { formatDate } from '@/lib/utils';
import { getAllPosts } from '@/lib/writing';
import Link from 'next/link';

export default async function WritingTeaser() {
  const posts = (await getAllPosts()).slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="section">
      <div className="container-page">
        <div className="grid grid-cols-12 gap-x-6 border-t border-[var(--color-rule-strong)] pt-6">
          <h2 className="t-meta col-span-12 mb-8 md:col-span-2 md:mb-0 md:self-start md:sticky md:top-20">Writing</h2>

          <div className="col-span-12 md:col-span-10">
            <ul className="border-t border-[var(--color-rule)]">
              {posts.map((post) => (
                <li key={post.slug} className="border-b border-[var(--color-rule)]">
                  <Link href={`/writing/${post.slug}`} className="group grid grid-cols-12 gap-x-6 gap-y-1 py-7">
                    <span className="t-meta col-span-12 sm:col-span-2">{formatDate(post.date)}</span>
                    <div className="col-span-12 sm:col-span-8">
                      <h3 className="display text-[1.375rem] leading-tight">
                        <span className="link-rule">{post.title}</span>
                      </h3>
                      <p className="t-body mt-1.5 text-[var(--color-ink-2)]">{post.description}</p>
                    </div>
                    <span className="t-meta col-span-12 sm:col-span-2 sm:text-right">
                      {post.readingTime}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-[0.9375rem]">
              <Link className="link-rule text-[var(--color-mark)]" href="/writing">
                All posts
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
