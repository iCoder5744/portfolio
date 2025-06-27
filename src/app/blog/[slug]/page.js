// app/blog/[slug]/page.js
import BlogPost from '@/components/BlogPost';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
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

  return (
    <div className=" shadow-x max-w-[1200px] border border-white mx-0 sm:mx-4 md:mx-6 lg:mx-auto 
          bg-[#0f0f23] transition-all duration-300">
      <div className='border-b border-white'>
        <Header />
      </div>
      <BlogPost post={post} />
      <Contact />
       <div className='border-t border-white'>
        <Footer />
      </div>
    </div>
  )
}