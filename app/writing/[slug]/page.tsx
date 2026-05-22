import PostToc from '@/components/primitives/post-toc';
import ReadingProgress from '@/components/primitives/reading-progress';
import { formatDate } from '@/lib/utils';
import { getAllPosts, getPostBySlug } from '@/lib/writing';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import remarkGfm from 'remark-gfm';

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Prathibha Ratnayake`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function WritingPost({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="relative pt-32 pb-32 md:pt-44 md:pb-44">
      <ReadingProgress />
      <div className="container-page">
        <div className="xl:grid xl:grid-cols-[12rem_minmax(0,1fr)] xl:gap-x-16">
          {/* Sidebar TOC — only at xl+, in-flow, sticky to top */}
          <aside className="hidden xl:block xl:sticky xl:top-32 xl:self-start">
            <PostToc />
          </aside>

          {/* Article column */}
          <div className="max-w-3xl">
            <Link
              href="/writing"
              data-cursor="link"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-subtle)] hover:text-[var(--color-fg)] transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All writing
            </Link>

            <header className="mt-10 pb-10 border-b border-[var(--color-border)]">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                <span>{formatDate(post.date)}</span>
                <span className="text-[var(--color-fg-subtle)]/40">·</span>
                <span>{post.readingTime}</span>
              </div>
              <h1 className="mt-5 font-display text-fluid-h1 text-[var(--color-fg)] leading-[1.02]">
                {post.title}
              </h1>
              {post.description && (
                <p className="mt-4 text-fluid-body text-[var(--color-fg-muted)] max-w-prose">
                  {post.description}
                </p>
              )}
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </header>

            <article className="prose-editorial mt-12">
              <MDXRemote
                source={post.content}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                  },
                }}
              />
            </article>

            <footer className="mt-20 border-t border-[var(--color-border)] pt-10 text-center text-sm text-[var(--color-fg-subtle)]">
              <p>
                Thanks for reading. If something here landed, I&apos;d love to know —{' '}
                <a
                  href="mailto:prsthibha@gmail.com"
                  className="text-[var(--color-fg)] underline-offset-4 hover:underline"
                >
                  email me
                </a>
                .
              </p>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
