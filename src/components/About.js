'use client';

import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import FloatingBackground from './FloatingBackground';

export default function About() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section id="about" className="pt-12 bg-[#0f0f23] relative overflow-hidden">

      {/* Animated Background Elements */}
      <FloatingBackground />

      <div className="jsx-be7a05a46dd73081 max-w-[1200px] shadow-xl mx-auto p-2 sm:px-6 lg:px-14  bg-transparent transition-all duration-300 relative z-10">


        <div className='mb-8 sm:mb-12'>
          <h2 className="text-xl sm:text-2xl mb-8  text-center items-center px-6 py-2 w-fit rounded-full mx-auto bg-gradient-to-r from-blue-700 to-purple-600 text-white">About Me</h2>

          {/* Discription */}
          <p className="text-gray-300 text-md sm:text-xl mb-4 text-center  items-center font-serif">
            {"Hi, I'm Shivam Yadav — A Front-End Developer and I'm A Student of BCA at the University of Lucknow. I build responsive, user-friendly web apps using modern tools like React, Next.js, Tailwind CSS. I'm currently expanding into full-stack development and working on blog projects to enhance my skills. My goal is to create clean, effective solutions and contribute to impactful projects."}
          </p>
        </div>

        {/* Education */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-700 rounded-xl px-2 sm:px-4 py-4 border border-white shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="px-3 py-1  bg-blue-500 text-white rounded-md">
                2023 - 2024
              </div>
              <div className="px-3 py-1 bg-blue-500 text-white rounded-md">
                Intermediate
              </div>
            </div>
            <h4 className="text-lg font-bold mb-1 text-white not-only:">Science Stream</h4>
            <h5 className="text-md sm:text-xl font-bold mb-4 text-white">Higher Secondary Certificate (HSC)</h5>
            <div className="flex items-center gap-2 text-black">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-700 to-purple-600"></div>
              <span className='text-sm sm:text-md text-gray-300'>ST Joseph School</span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-black">
              <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
              <span className='text-sm sm:text-md text-gray-300'>Chausa Kunda, Pratapgarh, Utter Pradesh</span>
            </div>
          </div>

          <div className="bg-gray-700 rounded-xl px-2 sm:px-4 py-4 border border-white shadow-lg">
            <div className="flex justify-between items-center mb-4 text-black">
              <div className="px-3 py-1 bg-blue-500 text-white rounded-md">
                2024 - 2027
              </div>
              <div className="px-3 py-1 bg-blue-500 text-white rounded-md">
                Graduation
              </div>
            </div>
            <h4 className="text-lg font-bold mb-1 text-white">Bachelor&apos;s Degree – BCA</h4>
            <h5 className="text-md sm:text-xl font-bold mb-4 text-white">Bachelor of Computer Applications</h5>
            <div className="flex items-center gap-2 text-black">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-700 to-purple-600"></div>
              <span className='text-sm sm:text-md text-gray-300'>University of Lucknow</span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-black">
              <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
              <span className='text-sm sm:text-md text-gray-300'>Lucknow, Utter Pradesh, India</span>
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
      <div className='border-t border-white'>
        <Footer />
      </div>


    </section>
  );
}