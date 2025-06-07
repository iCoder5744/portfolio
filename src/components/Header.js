import React from 'react'



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
        <div className='flex justify-between items-center  border-b border-gray-400  p-4 sm:px-14 sm:py-7 rounded-t-[2rem] sm:rounded-t-[6rem] '>

          {/* Left: Contact Button */}
          <div>
            <button
              onClick={() => scrollToSection('contact')}
              className=' max-sm:text-sm font-medium  border px-4 py-1 rounded-full cursor-pointer'
            >
              Contact
            </button>
          </div>

          {/* Right: Blog | Tools | Game */}
          <div className='flex gap-3 sm:gap-6  max-sm:text-sm font-medium'>
            <a href='#blog'>Blog</a>
            <a href='#tools'>Tools</a>
            <a href='#game'>Game</a>
          </div>
        </div>
    </section>
  )
};