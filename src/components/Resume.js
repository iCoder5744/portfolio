'use client';
import Image from 'next/image';

export default function Resume() {
  return (
    <section id="resume" className="py-16 px-6 md:px-12">
      <h2 className="text-3xl font-bold mb-12 text-center text-yellow-400">Checkout my Resume</h2>
      
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-300 dark:border-gray-700">
        <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
          <Image 
            src="/images/Profile.png" 
            width={80} 
            height={80} 
            alt="Nikunj Thesiya"
            className="w-full h-full object-cover"
          />
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-yellow-400">Nikunj Thesiya</h3>
        <p className="mb-6 text-gray-700 dark:text-gray-300">Front End Developer / Web Designer / UI Developer</p>
        
        <div className="flex justify-center gap-4">
          <a 
            href="/resume.pdf" 
            download 
            className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition-all flex items-center gap-2"
          >
            <span>📄</span> Resume
          </a>
          <a 
            href="#contact" 
            className="px-4 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-all"
          >
            Discuss Project
          </a>
        </div>
      </div>
    </section>
  );
}