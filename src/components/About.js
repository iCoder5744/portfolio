'use client';

import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import FloatingBackground from './FloatingBackground';

export default function About() {
  const educationData = [
    {
      duration: '2023 - 2024',
      level: 'Intermediate',
      title: 'Science Stream',
      degree: 'Higher Secondary Certificate (HSC)',
      institute: 'ST Joseph School',
      location: 'Chausa Kunda, Pratapgarh, Uttar Pradesh',
    },
    {
      duration: '2024 - 2027',
      level: 'Graduation',
      title: "Bachelor's Degree – BCA",
      degree: 'Bachelor of Computer Applications',
      institute: 'University of Lucknow',
      location: 'Lucknow, Uttar Pradesh, India',
    },
  ];

  return (
    <section id="about" className="pt-12 pb-4 px-1 bg-[#0f0f23] relative overflow-hidden">
      <FloatingBackground />

      <div className="max-w-[1100px] border-4 rounded-[3rem] sm:rounded-[4rem] border-white shadow-xl mx-auto py-5 px-1 sm:px-6 lg:px-14 bg-transparent transition-all duration-300 relative z-10">

        {/* About Heading & Description */}
        <div className="px-0 sm:px-4 mb-5">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-75 transform -rotate-2 scale-110"></span>
              <span className="relative z-10 px-6 py-2 inline-block text-white">
                About Me
              </span>
            </span>
          </h2>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
            <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg p-2 sm:p-4 md:p-6">
              <p className="text-gray-200 text-md sm:text-lg leading-relaxed font-medium">
                {`I’m a BCA Student at the University of Lucknow, Specializing in building responsive, user-friendly web applications. With a strong foundation in HTML, CSS, JavaScript, and React.js, I’m now expanding my expertise into backend development to create full-stack solutions. My goal is to tackle complex problems with innovative approaches and contribute to meaningful, high-impact projects.`}
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <div key={index} className=" bg-transparent rounded-xl px-2 sm:px-4 py-4 border border-white shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <div className="px-3 py-1 bg-blue-500 text-white rounded-md">{edu.duration}</div>
                <div className="px-3 py-1 bg-blue-500 text-white rounded-md">{edu.level}</div>
              </div>
              <h4 className="text-lg font-bold mb-1 text-white">{edu.title}</h4>
              <h5 className="text-md sm:text-xl font-bold mb-4 text-white">{edu.degree}</h5>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-700 to-purple-600"></div>
                <span className="text-sm sm:text-md text-gray-300">{edu.institute}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                <span className="text-sm sm:text-md text-gray-300">{edu.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Skills, Projects, Contact */}
        <Skills />
        <Projects />
        <Contact />
        <div className="border-t border-white">
          <Footer />
        </div>
      </div>


    </section>
  );
}
