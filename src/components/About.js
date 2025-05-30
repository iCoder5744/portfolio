'use client';

import Skills from '../components/Skills';

export default function About() {



  return (
    <section id="about" className="py-16 px-6 md:px-12">
      <h2 className="text-2xl mb-12 text-center px-6 py-2 w-fit rounded-full mx-auto bg-yellow-400 text-gray-800">About Me</h2>

      {/* =============== Education ================ */}
      <div className="mt-12 p-6 rounded-xl border border-gray-400 bg-white">

        {/* Discription */}
        <p className="text-lg mb-8 text-center text-gray-800 dark:textwhite font-serif">
          {"Hi, I'm Shivam Yadav — A Front-End Developer and BCA student at the University of Lucknow. I build responsive, user-friendly web apps using modern tools like React, Next.js, Tailwind CSS. I'm currently expanding into full-stack development and working on blog projects to enhance my skills. My goal is to create clean, effective solutions for real-world digital products."}
        </p>

        {/* Education */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-4 border border-gray-400">
            <div className="flex justify-between items-center mb-4">
              <div className="px-3 py-1 bg-gray-200 text-black dark:bg-gray-800 dark:text-white rounded-md">
                2023 - 2024
              </div>
              <div className="px-3 py-1 text-black bg-gray-200 dark:bg-black rounded-md">
                Intermediate
              </div>
            </div>
            <h4 className="text-lg font-bold mb-1 text-black not-only:">Science Stream</h4>
            <h5 className="text-xl font-bold mb-4 text-black">Higher Secondary Certificate (HSC)</h5>
            <div className="flex items-center gap-2 text-black">
              <div className="w-4 h-4 rounded-full bg-gray-400"></div>
              <span>ST Joseph School</span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-black">
              <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
              <span>Chausa Kunda, Pratapgarh, Utter Pradesh</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-gray-400 ">
            <div className="flex justify-between items-center mb-4 text-black">
              <div className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-md">
                2024 - 2027
              </div>
              <div className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-md">
                Graduation
              </div>
            </div>
            <h4 className="text-lg font-bold mb-1 text-black">Bachelor&apos;s Degree – BCA</h4>
            <h5 className="text-xl font-bold mb-4 text-black">Bachelor of Computer Applications</h5>
            <div className="flex items-center gap-2 text-black">
              <div className="w-4 h-4 rounded-full bg-gray-400"></div>
              <span>University of Lucknow</span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-black">
              <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
              <span>Lucknow, Utter Pradesh, India</span>
            </div>
          </div>
        </div>

        {/* Skill */}
        
        <Skills />



      </div>

    </section>
  );
}