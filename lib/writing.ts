import 'server-only';

import { formatReadingTime } from '@/lib/utils';
import matter from 'gray-matter';
import fs from 'node:fs/promises';
import path from 'node:path';

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  draft?: boolean;
};

export type Post = PostMeta & {
  content: string;
};

const WRITING_DIR = path.join(process.cwd(), 'content', 'writing');

export async function getAllPosts(): Promise<PostMeta[]> {
  let entries: string[] = [];
  try {
    entries = await fs.readdir(WRITING_DIR);
  } catch {
    return [];
  }

  const posts = await Promise.all(
    entries
      .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
      .map(async (filename) => {
        const slug = filename.replace(/\.mdx?$/, '');
        const raw = await fs.readFile(path.join(WRITING_DIR, filename), 'utf8');
        const { data, content } = matter(raw);
        return {
          slug,
          title: data.title ?? slug,
          description: data.description ?? '',
          date: data.date ?? new Date().toISOString(),
          tags: data.tags ?? [],
          readingTime: formatReadingTime(content),
          draft: data.draft ?? false,
        } satisfies PostMeta;
      })
  );

  return posts
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const raw = await fs.readFile(path.join(WRITING_DIR, `${slug}.mdx`), 'utf8');
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      description: data.description ?? '',
      date: data.date ?? new Date().toISOString(),
      tags: data.tags ?? [],
      readingTime: formatReadingTime(content),
      draft: data.draft ?? false,
      content,
    };
  } catch {
    return null;
  }
}
