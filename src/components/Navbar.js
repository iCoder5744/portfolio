'use client'

import { useState } from 'react';
import { useTheme } from '../app/context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className='py-2 bg-white dark:bg-gray-900 px-4 md:px-6 mx-0 sm:mx-6 md:mx-12 flex justify-between items-center shadow-sm sticky top-0 z-20'>
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-black dark:bg-white p-1 w-10 h-10 flex items-center justify-center">
          <span className="text-white dark:text-black font-bold text-sm">SY</span>
        </div>
        <span className="font-bold text-black ">Shivam Yadav</span>
      </div>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 dark:text-white flex items-center justify-center cursor-pointer"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
         {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="px-4 py-2 rounded-md bg-yellow-400 text-black font-medium cursor-pointer"
        >
          Menu
        </button>
      </div>
      
      {menuOpen && (
        <div className="w-[100px] absolute top-16 right-16 bg-gray-50 dark:bg-gray-800 text-black dark:text-white p-4 rounded-md shadow-lg border border-gray-100 dark:border-gray-700">
          <ul>
            <li className="py-2 cursor-pointer hover:text-yellow-400">Home</li>
            <li className="py-2 cursor-pointer hover:text-yellow-400">About</li>
            <li className="py-2 cursor-pointer hover:text-yellow-400">Skills</li>
            <li className="py-2 cursor-pointer hover:text-yellow-400">Projects</li>
            <li className="py-2 cursor-pointer hover:text-yellow-400">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}