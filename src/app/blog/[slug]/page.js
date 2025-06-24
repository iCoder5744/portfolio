// app/blog/[slug]/page.js
import BlogPost from '@/components/BlogPost';
export const dynamic = 'force-dynamic'; // 👈 Yeh line add karein

import { getPostBySlug, getAllPosts } from '@/data/blog/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ FIXED: await params
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Programming Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params; // ✅ FIXED: await params
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return <BlogPost post={post} />;
}