'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <section className='border h-screen  '>
      <Navbar />
      <div className=" flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <span className="inline-block">👋</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        >
          Hello! I&apos;m <span className="text-yellow-400">Shivam Yadav</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl mb-4"
        >
          A Front End Developer | Web Designer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center mb-4"
        >
          <span className="text-yellow-400 font-bold mr-2">9+ Months</span>
          <span className="mx-2">Experience</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 mb-8"
        >
          <a href="#resume" className="px-6 py-1 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition-all">
            Resume
          </a>
          <a href="#contact" className="px-6 py-1 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-all">
            Hire Me
          </a>
        </motion.div>

        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 bg-yellow-200 rounded-full opacity-50 blur-3xl -z-10"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative w-64 h-64 rounded-full bg-yellow-400 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/Profile.png"
                  width={260}
                  height={240}
                  alt="Shivam Yadav"
                  className="object-cover z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
