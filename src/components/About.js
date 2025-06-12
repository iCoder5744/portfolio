'use client';

import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';

export default function About() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section id="about" className="py-16 px-2 md:px-6 lg:mx-12">
      <h2 className="text-2xl mb-8 text-center px-6 py-2 w-fit rounded-full mx-auto bg-yellow-400 text-gray-800">About Me</h2>

      <div className="rounded-[2rem] sm:rounded-[4rem] border-4 border-gray-100 max-w-[1000px] mx-auto
          bg-gray-700 transition-all duration-300">

        {/* Header */}
        <Header />

        <div className='p-2 sm:px-6 lg:px-10 sm:pt-6 '>

          {/* Discription */}
          <p className="text-gray-200 text-md sm:text-lg mb-4 text-center font-serif">
            {"Hi, I'm Shivam Yadav — A Front-End Developer and BCA student at the University of Lucknow. I build responsive, user-friendly web apps using modern tools like React, Next.js, Tailwind CSS. I'm currently expanding into full-stack development and working on blog projects to enhance my skills. My goal is to create clean, effective solutions for real-world digital products."}
          </p>

          {/* Education */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl px-2 sm:px-4 py-4 border border-gray-400 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <div className="px-3 py-1 bg-gray-200 text-black dark:bg-gray-800 dark:text-white rounded-md">
                  2023 - 2024
                </div>
                <div className="px-3 py-1 bg-gray-200 text-black dark:bg-gray-800 dark:text-white rounded-md">
                  Intermediate
                </div>
              </div>
              <h4 className="text-lg font-bold mb-1 text-black not-only:">Science Stream</h4>
              <h5 className="text-md sm:text-xl font-bold mb-4 text-black">Higher Secondary Certificate (HSC)</h5>
              <div className="flex items-center gap-2 text-black">
                <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                <span className='text-sm sm:text-md'>ST Joseph School</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-black">
                <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                <span className='text-sm sm:text-md'>Chausa Kunda, Pratapgarh, Utter Pradesh</span>
              </div>
            </div>

            <div className="bg-white rounded-xl px-2 sm:px-4 py-4 border border-gray-400 shadow-lg">
              <div className="flex justify-between items-center mb-4 text-black">
                <div className="px-3 py-1 bg-gray-200 text-black dark:bg-gray-800 dark:text-white rounded-md">
                  2024 - 2027
                </div>
                <div className="px-3 py-1 bg-gray-200 text-black dark:bg-gray-800 dark:text-white rounded-md">
                  Graduation
                </div>
              </div>
              <h4 className="text-lg font-bold mb-1 text-black">Bachelor&apos;s Degree – BCA</h4>
              <h5 className="text-md sm:text-xl font-bold mb-4 text-black">Bachelor of Computer Applications</h5>
              <div className="flex items-center gap-2 text-black">
                <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                <span className='text-sm sm:text-md'>University of Lucknow</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-black">
                <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                <span className='text-sm sm:text-md'>Lucknow, Utter Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Skill */}
          <Skills />

          {/* Project */}
          <Projects />

          {/* Contact */}
          <Contact />

        </div>

        {/* Footer */}
        <Footer />

      </div>

    </section>
  );
}