// ✅ app/blog/[slug]/page.js
import BlogClientLoader from '@/components/BlogCLientLoader';
import BlogPost from '@/components/BlogPost';
import Contact from '@/components/Contact';
import FloatingBackground from '@/components/FloatingBackground';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
export const dynamic = 'force-dynamic';

import { getPostBySlug, getAllPosts } from '@/data/blog/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | Programming Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="relative min-h-screen shadow-x max-w-[1200px] mx-0 sm:mx-3 md:mx-6 lg:mx-auto bg-transparent transition-all duration-300">
        <BlogClientLoader /> {/* 👈 this hides loader after slug loads */}

      <FloatingBackground />
      <div className='border-b border-gray-600'>
        <Header />
      </div>
      <BlogClientLoader />
      <BlogPost post={post} />
      <Contact />
      <div className='border-t border-gray-600'>
        <Footer />
      </div>
    </div>
  );
}