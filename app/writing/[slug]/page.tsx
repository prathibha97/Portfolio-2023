import PostToc from '@/components/primitives/post-toc';
import ReadingProgress from '@/components/primitives/reading-progress';
import { profile } from '@/lib/data';
import { formatDate } from '@/lib/utils';
import { getAllPosts, getPostBySlug } from '@/lib/writing';
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
    title: post.title,
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
    <main id="main" className="pt-20 pb-24 md:pt-28 md:pb-32">
      <ReadingProgress />
      <div className="container-page">
        <div className="xl:grid xl:grid-cols-[12rem_minmax(0,1fr)] xl:gap-x-16">
          <aside className="hidden xl:block xl:sticky xl:top-24 xl:self-start">
            <PostToc />
          </aside>

          <div className="max-w-[46rem]">
            <Link href="/writing" className="link-rule t-meta">
              ← All writing
            </Link>

            <header className="mt-8 border-b border-[var(--color-rule-strong)] pb-10">
              <h1 className="display text-[clamp(2rem,5vw,3.25rem)]">{post.title}</h1>
              {post.description && (
                <p className="t-body mt-4 text-[var(--color-ink-2)]">{post.description}</p>
              )}
              <p className="t-meta mt-6">
                {formatDate(post.date)} · {post.readingTime}
              </p>
            </header>

            <article className="prose-editorial mt-12">
              <MDXRemote
                source={post.content}
                options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              />
            </article>

            <footer className="mt-20 border-t border-[var(--color-rule)] pt-8">
              <p className="t-body text-[var(--color-ink-2)]">
                If something here landed, or didn&rsquo;t,{' '}
                <a className="link-rule text-[var(--color-mark)]" href={`mailto:${profile.email}`}>
                  tell me
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
