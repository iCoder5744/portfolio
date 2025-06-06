import React from 'react'

import { useState } from 'react';


export default function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section>
        {/* Top Section */}
        <div className='flex justify-between items-center  border-b border-gray-300 p-4 sm:px-14 sm:py-6 rounded-t-[3rem] sm:rounded-t-[6rem] '>

          {/* Left: Contact Button */}
          <div>
            <button
              onClick={() => scrollToSection('contact')}
              className='text-gray-600 max-sm:text-sm font-medium border border-gray-500 px-4 py-1 rounded-full cursor-pointer'
            >
              Contact
            </button>
          </div>

          {/* Right: Blog | Tools | Game */}
          <div className='flex gap-3 sm:gap-6 text-gray-600 max-sm:text-sm font-medium'>
            <a href='#blog'>Blog</a>
            <a href='#tools'>Tools</a>
            <a href='#game'>Game</a>
          </div>
        </div>
    </section>
  )
};