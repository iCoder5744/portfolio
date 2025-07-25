'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from './Navbar';
import FloatingBackground from './FloatingBackground';

export default function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="h-fit w-full relative overflow-hidden bg-[#0f0f23]"
    >
      <div className='max-w-[1400px] mx-auto'>
        {/* Navbar */}
        <Navbar />

        {/* Animated Background */}
        <FloatingBackground />

        {/* Content */}
        <div className="  pt-6 px-2 sm:px-4 md:px-6 lg:px-16 mx-auto  w-full my-2 sm:my-4 md:my-20 relative z-10">
          <div className=" flex flex-col md:flex-row items-center justify-between gap-4 md:mt-6">

            {/* Left Text Section */}
            <div className="  w-full md:w-1/2 order-1 flex flex-col justify-center md:justify-start max-md:items-center md:items-start max-md:text-center md:ml-5">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-5 md:mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-2 md:mb-4"
                  >
                    <h1 className="text-4xl md:text-5xl mb-2 sm:mb-6">👋</h1>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h2 className="text-xl text-[#a1a1aa] sm:mb-4">Hello! I&apos;m</h2>
                    <h1 className="font-bold text-5xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
                      Shivam Yadav
                    </h1>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-xl sm:text-2xl lg:text-3xl text-white max-sm:flex flex-col mb-2 sm:mb-4">
                      <span>A Front End Developer | Web</span>
                      <span className="text-yellow-400"> Designer</span>
                    </h3>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex max-md:justify-center mb-2">
                      <span className="text-md sm:text-xl font-bold bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent mr-2">
                        4+ Months
                      </span>
                      <span className="text-md sm:text-xl text-white">Experience</span>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex gap-2 sm:gap-4 flex-wrap mb-8 max-md:justify-center">
                    <button
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/images/Resume.png'; // Path to your file in `public/images/`
                        link.download = 'Shivam-Yadav-Resume.png'; // Forces download with a custom filename
                        link.click();
                      }}
                      className="flex items-center px-4 sm:px-6 py-1 sm:py-2 rounded-full cursor-pointer border border-[#6366f1] text-[#6366f1] font-semibold hover:bg-gradient-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:text-white hover:border-transparent transition-all duration-300 hover:scale-105"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Resume
                    </button>
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="px-6 sm:px-6 py-0 sm:py-2 rounded-full cursor-pointer bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-md md:font-semibold hover:from-[#4f46e5] hover:to-[#7c3aed] transition-all duration-300 hover:scale-105"
                    >
                      Hire Me
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Image Section */}
            <div className=" w-full md:w-1/2 order-2 flex justify-center md:justify-start items-start md:items-center mb-8 md:mb-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative flex justify-center w-full">
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,235,59,0.3)_0%,transparent_70%)] rounded-full blur-[60px] -z-10"></div>

                  <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] p-1.5 animate-pulse relative overflow-hidden">
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                      <Image
                        src="/images/Profile.png"
                        alt="Shivam Yadav"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}