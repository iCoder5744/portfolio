'use client'

import Link from 'next/link';


import { useState, useEffect } from 'react';
import { useTheme } from '../app/context/ThemeContext';
import { usePathname } from 'next/navigation';


export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className="py-3 px-4 sm:px-6 md:px-10 lg:px-16 mx-auto flex justify-between items-center sm:sticky top-0 z-20 transition-all duration-300"
      // style={{
      //   background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      // }}
    >
      <Link href="/">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="rounded-full bg-gradient-to-r from-blue-700 to-purple-600 p-1 w-10 h-10 flex items-center justify-center">
            <span className="text-white font-bold text-sm">SY</span>
          </div>
          <span className="text-white font-bold ">Shivam Yadav</span>
        </div>
      </Link>


      <div className="flex items-center gap-4">
        <div className='flex items-center gap-x-4 md:gap-x-8 max-sm:hidden '>

          {/* Right: Blog | Tools | Game */}
          <div className=' text-gray-200 flex gap-3 sm:gap-6 md:gap-10 max-sm:text-sm font-medium'>
            <Link href="/blog">Blog</Link>
            <Link href="/tools">Tools</Link>
            <Link href="/game">Game</Link>
          </div>

          {/* Right: Theme toggle button only for /blog, /tools, /game */}
          {(pathname.startsWith('/') || pathname.startsWith('/blog') || pathname.startsWith('/tools') || pathname === '/game') && (
            <button
              onClick={toggleTheme}
              className=" w-8 h-8 rounded-full bg-gradient-to-r from-blue-700 to-purple-600 flex items-center justify-center cursor-pointer transition-colors duration-300"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          )}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden px-4 py-2 rounded-md bg-gradient-to-r from-blue-700 to-purple-600 text-white font-medium cursor-pointer transition-colors duration-300 hover:bg-yellow-500"
        >
          Menu
        </button>
      </div>

      {/* Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50   style={{
    background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
  }}" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute top-0 right-0 h-full w-64 bg-[#0f0f23] border shadow-xl transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
              <h3 className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-700 to-purple-600 text-white font-medium cursor-pointer transition-colors duration-300 hover:bg-yellow-500">Menu</h3>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full text-white text-bold"
              >
                ✕
              </button>
            </div>
            <ul className="py-4 px-8">
              <li
                className="py-3 px-2 cursor-pointer hover:bg-gray-500 rounded-md transition-colors duration-200 text-white dark:text-white"
                onClick={() => scrollToSection('hero')}
              >
                Home
              </li>
              <li className="py-3 px-2 cursor-pointer hover:bg-gray-500 rounded-md transition-colors duration-200 text-white">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="py-3 px-2 cursor-pointer hover:bg-gray-500 rounded-md transition-colors duration-200 text-white">
                <Link href="/tools">Tools</Link>
              </li>
              <li className="py-3 px-2 cursor-pointer hover:bg-gray-500 rounded-md transition-colors duration-200 text-white">
                <Link href="/game">Games</Link>
              </li>
            </ul>

            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-gradient-to-r from-blue-700 to-purple-600 text-white p-1 w-8 h-8 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">SY</span>
                  </div>
                  <span className="font-medium text-sm text-white">Shivam Yadav</span>
                </div>

                <button
                  onClick={toggleTheme}
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-700 to-purple-600 text-white flex items-center justify-center cursor-pointer"
                >
                  {theme === 'dark' ? '☀️' : '🌙'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
