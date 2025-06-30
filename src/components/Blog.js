// ✅ components/Blog.js (only modified blog post click logic)
'use client';

import { useEffect, useState } from 'react';
import { getAllPosts, categories } from '@/data/blog/posts';
import { useLoader } from '@/lib/LoaderContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function BlogPage() {
  const [allPosts, setAllPosts] = useState([]);
  const { setLoading } = useLoader();
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const posts = await getAllPosts();
      setAllPosts(posts);
      setLoading(false);
    };
    fetchPosts();
  }, [setLoading]); // 👈 added


  const groupedPosts = categories.reduce((acc, category) => {
    const categoryPosts = allPosts.filter(post => post.category === category.id);
    if (categoryPosts.length > 0) {
      acc.push({ ...category, posts: categoryPosts });
    }
    return acc;
  }, []);

  const handlePostClick = async (slug) => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 200));
    router.push(`/blog/${slug}`);
  };

  const featuredPost = {
    title: "The Complete Full-Stack Developer Roadmap 2024",
    excerpt: "A comprehensive guide to becoming a full-stack developer in 2024. From frontend frameworks to backend technologies, databases, and deployment strategies.",
    date: "2024-12-16",
    readTime: "20 min read",
    tags: ["Full-Stack", "Career", "Roadmap", "Web Development"],
    image: "\uD83C\uDFAF"
  };

  return (
    <div>
      <div className="p-2 sm:p-6 md:p-10 text-white">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 mt-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Programming Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Your go-to resource for modern web development, programming tutorials, and tech insights
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">\uD83D\uDCCC Featured Article</h2>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 sm:p-8 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 cursor-pointer transform">
            <div className="text-6xl mb-4 text-center">{featuredPost.image}</div>
            <h3 className="text-2xl font-bold mb-3">{featuredPost.title}</h3>
            <p className="text-gray-100 mb-4 leading-relaxed">{featuredPost.excerpt}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {featuredPost.tags.map((tag, index) => (
                <span key={index} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-black text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center text-sm text-gray-200">
              <span>{featuredPost.date}</span>
              <span>{featuredPost.readTime}</span>
            </div>
          </div>
        </div>

        {/* Blog Categories */}
        <div className="space-y-12">
          {groupedPosts.map((category, categoryIndex) => (
            <div key={categoryIndex} className="border-b border-gray-600 pb-12 last:border-b-0">
              <div className="flex flex-col items-start gap-4 mb-6">
                <div className="flex gap-2 items-center">
                  <span className="text-4xl">{category.icon}</span>
                  <h2 className="text-2xl md:text-3xl font-bold">{category.name}</h2>
                </div>
                <p className="text-gray-400 pl-2">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.posts.map((post, postIndex) => (
                  <div key={postIndex} onClick={() => handlePostClick(post.slug)} className="cursor-pointer">
                    <article className="border bg-gray-700 rounded-xl p-3 sm:p-6 hover:bg-gray-600 transition-all duration-300 transform sm:hover:scale-105 hover:shadow-lg h-full flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-blue-600 px-2 py-1 rounded text-xs font-medium">{post.categoryName}</span>
                        {post.featured && (
                          <span className="bg-yellow-600 px-2 py-1 rounded text-xs font-medium">⭐ Featured</span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-blue-300 hover:text-blue-200">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed flex-grow">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-blue-600 px-2 py-1 rounded text-xs">{tag}</span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-400 pt-2 border-t">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Link href={`/blog/${post.slug}`} className="mt-3 text-sm text-blue-400 font-medium cursor-pointer">
                        Read Tutorial →
                      </Link>                    
                      </article>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
