'use client'

import { useState } from 'react';
import { useTheme } from '../app/context/ThemeContext';


export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="py-2 px-6 md:px-12 flex justify-between items-cente ">
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-black dark:bg-white p-1 w-10 h-10 flex items-center justify-center">
          <span className="text-white dark:text-black font-bold text-sm">SY</span>
        </div>
        <span className="font-bold">Shivam Yadav</span>
      </div>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 dark:text-white flex items-center justify-center"
        >
         {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="px-4 py-2 rounded-md bg-yellow-400 text-black font-medium"
        >
          Menu
        </button>
      </div>
      
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-white dark:bg-gray-900 p-4 rounded-md shadow-lg">
          <ul>
            <li className="py-2">Home</li>
            <li className="py-2">About</li>
            <li className="py-2">Skills</li>
            <li className="py-2">Projects</li>
            <li className="py-2">Contact</li>
          </ul>
        </div>
      )}
    </header>
  );
}