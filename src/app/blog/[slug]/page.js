// app/blog/[slug]/page.js
import BlogPost from '@/components/BlogPost';
import { getPostBySlug, getAllPosts } from '@/data/blog/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  // Await params before accessing its properties
  const { slug } = await params;
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
  // Await params before accessing its properties
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPost post={post} />;
}