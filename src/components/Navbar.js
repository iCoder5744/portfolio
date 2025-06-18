'use client'

import Link from 'next/link';


import { useState, useEffect } from 'react';
import { useTheme } from '../app/context/ThemeContext';

export default function Navbar() {
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
    <nav className={` py-3 px-4 md:px-6 mx-0 sm:mx-6 md:mx-12 flex justify-between items-center  sm:sticky top-0 z-20 transition-all duration-300`}>
      <Link href="/">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="rounded-full bg-gradient-to-r from-blue-700 to-purple-600 p-1 w-10 h-10 flex items-center justify-center">
            <span className="text-white font-bold text-sm">SY</span>
          </div>
          <span className=" font-bold">Shivam Yadav</span>
        </div>
      </Link>


      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-700 to-purple-600  flex items-center justify-center cursor-pointer transition-colors duration-300"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-700 to-purple-600 text-white font-medium cursor-pointer transition-colors duration-300 hover:bg-yellow-500"
        >
          Menu
        </button>
      </div>

      {/* Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 style={{ backgroundColor: 'rgba(243, 244, 246, 0.5)' }}" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-xl transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
              <h3 className="px-4 py-2 rounded-md bg-yellow-400 text-black font-medium cursor-pointer transition-colors duration-300 hover:bg-yellow-500">Menu</h3>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full text-black "
              >
                ✕
              </button>
            </div>
            <ul className="py-4 px-8 ">
              <li
                className="py-3 px-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 text-black dark:text-white"
                onClick={() => scrollToSection('hero')}
              >
                Home
              </li>
              <li
                className="py-3 px-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 text-black dark:text-white"
                onClick={() => scrollToSection('about')}
              >
                About
              </li>
              <li
                className="py-3 px-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 text-black dark:text-white"
                onClick={() => scrollToSection('skills')}
              >
                Skills
              </li>
              <li
                className="py-3 px-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 text-black dark:text-white"
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </li>
              <li
                className="py-3 px-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 text-black dark:text-white"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </li>
            </ul>

            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-yellow-400 p-1 w-8 h-8 flex items-center justify-center">
                    <span className="text-black font-bold text-xs">SY</span>
                  </div>
                  <span className="font-medium text-sm text-black dark:text-white">Shivam Yadav</span>
                </div>

                <button
                  onClick={toggleTheme}
                  className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
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
