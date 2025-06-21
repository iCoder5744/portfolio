// components/BlogPost.js
'use client';
import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import CodeBlock from "@/components/CodeBlock";
import Link from 'next/link';

export default function BlogPost({ post }) {
  const [activeSection, setActiveSection] = useState(0);

  const scrollToSection = (index) => {
    setActiveSection(index);
    const element = document.getElementById(`section-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="rounded-[2rem] sm:rounded-[4rem] border-4 border-gray-100 max-w-[1000px] mx-2 sm:mx-4 md:mx-6 lg:mx-auto my-4 sm:my-8 md:my-20
          bg-gray-800 transition-all duration-300">
      <Header />

      <div className="p-3 sm:p-10 text-white">
        {/* Back to Blog */}
        <Link href="/blog" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors">
          <span className="mr-2">←</span>
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="px-2 mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
              {post.categoryName}
            </span>
            {post.tags.map((tag, index) => (
              <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Table of Contents */}
        <div className="bg-gray-700 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            📚 Table of Contents
          </h2>
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => scrollToSection(-1)}
                className="text-blue-400 hover:text-blue-300 text-left transition-colors"
              >
                Introduction
              </button>
            </li>
            {post.content.sections.map((section, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(index)}
                  className="text-blue-400 hover:text-blue-300 text-left transition-colors"
                >
                  {index + 1}. {section.title}
                </button>
              </li>
            ))}
            <li>
              <button 
                onClick={() => scrollToSection(999)}
                className="text-blue-400 hover:text-blue-300 text-left transition-colors"
              >
                Conclusion
              </button>
            </li>
          </ul>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert max-w-none">
          {/* Introduction */}
          <section id="section--1" className="mb-12">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-4 sm:p-6 border border-blue-500/30">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Introduction</h2>
              <p className="text-gray-200 text-lg leading-relaxed">
                {post.content.introduction}
              </p>
            </div>
          </section>

          {/* Content Sections */}
          {post.content.sections.map((section, index) => (
            <section key={index} id={`section-${index}`} className="mb-12">
              <div className="bg-gray-700 rounded-xl py-4 sm:p-4 md:p-6 hover:bg-gray-600 transition-colors">
                <h2 className="text-2xl font-bold max-sm:px-4 mb-4 text-yellow-300">
                  {index + 1}. {section.title}
                </h2>
                <p className="text-gray-200 max-sm:px-4 mb-6 text-lg leading-relaxed">
                  {section.content}
                </p>
                
                {section.code && (
                  <div className="mt-6">
                    <CodeBlock 
                      code={section.code} 
                      language={section.language || 'javascript'} 
                    />
                  </div>
                )}
              </div>
            </section>
          ))}

          {/* Conclusion */}
          <section id="section-999" className="mb-12">
            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl p-6 border border-green-500/30">
              <h2 className="text-2xl font-bold mb-4 text-green-300">Conclusion</h2>
              <p className="text-gray-200 text-lg leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>
          </section>
        </article>

        {/* Article Actions */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
            <span>👍</span> Helpful
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
            <span>🔗</span> Share
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
            <span>💾</span> Save
          </button>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center py-8 border-t border-gray-600">
          <Link href="/blog" className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition-colors">
            ← All Posts
          </Link>
          <Link href="/blog" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors">
            More Tutorials →
          </Link>
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
}