'use client';
export default function About() {
    return (
      <section id="about" className="py-16 px-6 md:px-12">
        <h2 className="text-2xl mb-12 text-center px-6 py-2 w-fit rounded-full mx-auto bg-yellow-400 text-gray-800">About Me</h2>
        
        <div className="max-w-4xl h-fit p-6 mx-auto border border-gray-400 dark:border-red-700 bg-white rounded-xl">
          <p className="text-lg mb-8 text-center text-gray-800 dark:textwhite font-serif">
          Hi, I'm Shivam Yadav — a passionate Front-End Developer and BCA student at the University of Lucknow. I specialize in building responsive, user-friendly web applications with modern technologies. I've completed my front-end development training and am currently diving into full-stack development, focusing on React, Next.js, Node.js, and MongoDB. I’m also actively working on blog-based projects to sharpen my real-world development skills. My goal is to craft elegant solutions to complex problems and contribute meaningfully to impactful digital products.          </p>
        </div>
        
        {/* =============== Education ================ */}
        <div className="mt-12 p-6 rounded-xl border border-gray-400">
          <h3 className="text-xl mb-12 text-center px-6 py-2 w-fit rounded-full border border-gray-400 mx-auto bg-white text-gray-800">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-400 dark:border-gray-700">
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
            
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-400 dark:border-gray-700">
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
        </div>
      </section>
    );
  }