export default function Skills() {
    const designTools = [
      { name: 'Adobe XD', icon: '📊' },
      { name: 'Figma', icon: '🎨' },
    ];
    
    const technologies = [
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'JavaScript', icon: '📜' },
      { name: 'jQuery', icon: '🔄' },
      { name: 'SCSS', icon: '💅' },
      { name: 'Bootstrap', icon: '🅱️' },
      { name: 'React.JS', icon: '⚛️' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'Next.JS', icon: '⏭️' },
      { name: 'Tailwind CSS', icon: '💨' },
      { name: 'Material UI', icon: '🎭' },
      { name: 'Git', icon: '📂' },
    ];
    
    const devTools = [
      { name: 'Visual Studio Code', icon: '📝' },
      { name: 'Github', icon: '🐱' },
      { name: 'Postman', icon: '📮' },
    ];
    
    return (
      <section id="skills" className="py-16 px-6 md:px-12">
        <h2 className="text-2xl mb-12 text-center px-6 py-2 w-fit rounded-full mx-auto bg-yellow-400 text-gray-800">Skills</h2>
        
        <div className="max-w-7xl mx-auto rounded-xl p-6 border border-gray-300">
          <div className="mb-4 rounded-xl p-6 border border-gray-300">
            <h3 className="text-md text-bold mb-6 px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-md w-fit ">Design Tools I Use</h3>
            <div className="flex flex-wrap gap-4">
              {designTools.map((tool, index) => (
                <div key={index} className="skill-pill bg-white text-black dark:bg-gray-800 dark:text-white">
                  <span className="w-6 h-6 flex items-center justify-center bg-purple-500 rounded-md">{tool.icon}</span>
                  {tool.name}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-4 rounded-xl p-6 border border-gray-300">
            <h3 className="text-md text-bold mb-6 px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-md w-fit">Technologies I Use</h3>
            <div className="flex flex-wrap gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="skill-pill bg-white text-black dark:bg-gray-800 dark:text-white">
                  <span className="w-6 h-6 flex items-center justify-center bg-blue-500 rounded-md">{tech.icon}</span>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-xl p-6 border border-gray-300">
            <h3 className="text-md text-bold mb-6 px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-md w-fit">Development & Productivity Tools I Use</h3>
            <div className="flex flex-wrap gap-4">
              {devTools.map((tool, index) => (
                <div key={index} className="skill-pill bg-white text-black dark:bg-gray-800 dark:text-white">
                  <span className="w-6 h-6 flex items-center justify-center bg-green-500 rounded-md">{tool.icon}</span>
                  {tool.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }