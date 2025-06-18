'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

export default function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-full flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center mt-14 sm:mt-10 px-4">
        <div className="flex flex-col items-center text-center w-full max-w-xl">

          {/* 👋 Emoji */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <span className="text-3xl">👋</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Hello! I'm <span className="bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent">Shivam Yadav</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-4"
          >
            A Front End Developer | Web Designer
          </motion.p>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center mb-4"
          >
            <span className="bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent font-bold mr-2">4+ Months</span>
            <span>Experience</span>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 mb-8 flex-wrap justify-center"
          >
            <a
              href="#resume"
              className="px-6 py-1 border border-gradient-to-r from-blue-700 to-purple-600 text-blue-700 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-gray-300 transition-all duration-300 transform hover:scale-105 "
            >
              Resume
            </a>
            <a

              onClick={() => scrollToSection('contact')}
              className="px-6 py-1 bg-gradient-to-r from-blue-700 to-purple-600 text-gray-300 rounded-full hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Hire Me
            </a>
          </motion.div>

          {/* Profile Image */}
          <div className="relative w-full max-w-xs sm:max-w-sm">
            <div className="absolute inset-0 bg-yellow-100 rounded-full opacity-50 blur-3xl -z-10" />
            <div className="relative z-10 flex justify-center">
              <div className="relative w-64 h-64 sm:w-56 sm:h-56 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
                <Image
                  src="/images/Profile.png"
                  alt="Shivam Yadav"
                  width={240}
                  height={160}
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
}
