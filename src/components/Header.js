'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section>
      {/* Top Section */}
      <div className='flex justify-between items-center border-b border-gray-100 bg-gray-700 p-4 sm:px-14 sm:py-7 rounded-t-[2rem] sm:rounded-t-[4rem]'>

        {/* Left: Contact or Logo based on current route */}
        <div>
          {pathname === '/' ? (
            <button
              onClick={() => scrollToSection('contact')}
              className='text-gray-200 max-sm:text-sm font-medium border border-gray-200 px-4 py-1 rounded-full cursor-pointer'
            >
              Contact
            </button>
          ) : (
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="rounded-full bg-gradient-to-r from-blue-700 to-purple-600 p-1 w-10 h-10 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SY</span>
                </div>
                <span className="text-white font-bold">Shivam Yadav</span>
              </div>
            </Link>
          )}
        </div>

        {/* Right: Blog | Tools | Game */}
        <div className='text-gray-200 flex gap-3 sm:gap-6 max-sm:text-sm font-medium'>
          <Link href="/blog">Blog</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/game">Game</Link>
        </div>
      </div>
    </section>
  );
}
