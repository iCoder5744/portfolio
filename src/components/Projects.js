'use client';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Youtube-Clone',
      type: ['Website-Clone'],
      technologies: [ 'Next.js','Tailwind CSS', 'JavaScript' , 'React-icons', 'Material-UI'],
      image: '/images/Youtube-Clone.png',
      color: 'bg-purple-700',
      url: 'https://youtube-clone-seven-indol.vercel.app/'
    },
    {
      id: 2,
      name: 'Netflix-Clone',
      type: ['Website-Clone'],
      technologies: ['React.Js','JavaScript' ,'Tailwind CSS', 'React-icons', 'Firebase' ],
      image: '/images/Netflix-Clone.png',
      color: 'bg-pink-700',
      url: 'https://netflix-clone-beryl-ten-10.vercel.app/'
    },
   
  ];

  return (
    <section id="projects" className="project-card  p-6 my-6 mx-6 md:mx-12 border border-gray-400 bg-white shadow-lg ">
      <h2 className="text-xl mb-12 text-center px-6 py-2 w-fit rounded-full mx-auto bg-white text-gray-800 border border-gray-400">Projects I&apos;ve Worked on</h2>

      <div className="space-y-8 max-w-4xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-card p-6 bg-purple-700 text-white dark:bg-gray-800 dark:text-white ${project.color} text-white`}
          >
            <div className="md:flex gap-6 ">
              <div className="mb-6 md:mb-0 md:w-1/2 ">
                <div className=" rounded-lg overflow-hidden bg-black bg-opacity-20 flex items-center justify-center">
                  <Image
                    src={project.image || "/placeholder-project.png"}
                    width={500}
                    height={300}
                    alt={project.name}
                    className="w-full max-h-[300px] my-auto cursor-pointer"
                  />
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                  <button className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    i
                  </button>
                </div>



                <div className="mb-6">
                  <p className="font-medium mb-2">Technologies I&apos;ve used</p>
                  <div className="flex flex-wrap gap-2 text-gray-500">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-white bg-opacity-20 rounded-md text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                <a
                  href={project.url}
                  className="inline-flex items-center justify-center gap-3 px-6 py-2 text-gray-700 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-sm font-medium"
                >
                  <span className="leading-none">Go to {project.name}</span>
                  <span className="text-2xl flex items-center justify-center leading-none">→</span>
                </a>
                </div>


              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}