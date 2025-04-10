'use client';
export default function About() {
    return (
      <section id="about" className="py-16 px-6 md:px-12">
        <h2 className="text-2xl mb-12 text-center px-6 py-2 w-fit rounded-full mx-auto bg-yellow-400 text-gray-800">About Me</h2>
        
        <div className="max-w-4xl h-fit p-6 mx-auto border border-gray-300 rounded-xl">
          <p className="text-lg mb-8 text-center text-gray-600 font-serif">
            A passionate Front End Developer with a Master&apos;s in Computer Application and over 3+ months of experience in crafting captivating digital experiences. My expertise lies in leveraging cutting-edge technologies such as React.JS, Next.JS, Apollo GraphQL, Redux, React Query, and various UI frameworks including Material UI, Tailwind CSS, Chakra UI, and Bootstrap. I have a proven track record in delivering fully responsive websites that adapt gracefully to any device. My skill set also extends to proficient API integration, ensuring the seamless flow of data between the front-end and back-end. I am known for writing clean, well-structured code that not only functions flawlessly but also enhances the overall maintainability of projects. With a track record of contributing to multi-industry products like ClockInMe, SportsBuzz, and Epiko Market, I&apos;m committed to pushing the boundaries of web development to deliver exceptional user experiences.
          </p>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl mb-12 text-center px-6 py-2 w-fit rounded-full mx-auto bg-yellow-400 text-gray-800">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-900 bg-opacity-5 rounded-xl p-6 border border-gray-300">
              <div className="flex justify-between items-center mb-4">
                <div className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-md">
                  2023 - 2024
                </div>
                <div className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-md">
                  Intermediate
                </div>
              </div>
              <h4 className="text-lg font-bold mb-1">Science Stream</h4>
              <h5 className="text-xl font-bold mb-4">Higher Secondary Certificate (HSC)</h5>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                <span>ST Joseph School</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                <span>Chausa Kunda, Pratapgarh, Utter Pradesh</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 bg-opacity-5 rounded-xl p-6 border border-gray-300">
              <div className="flex justify-between items-center mb-4">
                <div className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-md">
                  2024 - 2027
                </div>
                <div className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-md">
                  Graduation
                </div>
              </div>
              <h4 className="text-lg font-bold mb-1">Bachelor&apos;s Degree – BCA</h4>
              <h5 className="text-xl font-bold mb-4">Bachelor of Computer Applications</h5>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                <span>University of Lucknow</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                <span>Lucknow, Utter Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  