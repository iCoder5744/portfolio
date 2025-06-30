'use client';

import Button from '@mui/material/Button';
import LaunchIcon from '@mui/icons-material/Launch';
import { useState } from 'react';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'CourtBook',
      displayName: 'CourtBook',
      type: ['CourtBook-Website'],
      technologies: ['Next.js', 'Tailwind CSS', 'SSR', 'Node.js', 'MongoDB'],
      image: '/images/courtbook.png',
      favicon: '/images/courtbook-favicon.png',
      color: 'bg-gray-600',
      className: 'w-full h-full object-fit',
      url: 'https://courtbook.in/',
    },
    {
      id: 2,
      name: 'EduClub',
      displayName: 'Learing Platform',
      type: ['Personal Website'],
      technologies: ['HTML', 'CSS', 'JavaScript', ],
      image: '/images/EduClub.png',
      favicon: '/images/educlub-favicon.png',
      color: 'bg-blue-900',
      url: 'https://edu-club-kappa.vercel.app/',
    },
    {
      id: 3,
      name: 'Youtube-Clone',
      displayName: 'Youtube-Clone',
      type: ['Website-Clone'],
      technologies: ['Next.js', 'Tailwind CSS', 'React-icons', 'Material-UI'],
      image: '/images/Youtube-Clone.png',
      favicon: '/images/youtube-favicon.png',
      color: 'bg-red-900',
      url: 'https://youtube-clone-seven-indol.vercel.app/',
    },
    {
      id: 4,
      name: 'Netflix-Clone',
      displayName: 'Netflix-Clone',
      type: ['Website-Clone'],
      technologies: ['React.Js', 'Tailwind CSS', 'React-icons', 'Firebase'],
      image: '/images/Netflix-Clone.png',
      favicon: '/images/netflix-favicon.png',
      color: 'bg-purple-800',
      url: 'https://netflix-clone-beryl-ten-10.vercel.app/',
    },
    
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="projects" className="project-card px-2 sm:px-4 py-4 my-6 rounded-xl border border-gray-400 bg-white shadow-lg">
      <div className="text-center">
        <h1 className="text-2xl text-black font-bold mb-6 font-serif">Discover how I work</h1>
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-6">

          {/* Left Side: Project Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-col gap-4 my-auto w-full md:w-1/5">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`w-full px-3 py-2 rounded-md text-white font-semibold transition duration-200 cursor-pointer ${project.color}`}
              >
                {project.name}
              </button>
            ))}
          </div>

          {/* Right Side: Project Details */}
          <div className={`project-card w-full md:w-4/5 max-sm:h-[450px] px-2 py-4 sm:p-6 text-white ${selectedProject.color} dark:bg-gray-800`}>
            <div className="flex flex-col md:flex-row gap-4">

              {/* Image Section */}
              <div className="mb-4 md:mb-0 md:w-1/2">
                <div className="max-sm:h-[200px] max-lg:h-[250px] h-[230px] w-full rounded-xl overflow-hidden bg-white bg-opacity-20">
                  <Image
                    src={selectedProject.image || '/placeholder-project.png'}
                    alt={selectedProject.name}
                    width={500}
                    height={400}
                    className={`w-full h-full ${selectedProject.id === 1 ? 'object-cover' : 'max-sm:fill-contain sm:object-cover lg:object-fill'}`}
                  />
                </div>
              </div>

              {/* Info Section */}
              <div className="md:w-1/2 pl-0 md:pl-3">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold">{selectedProject.displayName}</h3>
                  <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center overflow-hidden">
                    <Image
                      src={selectedProject.favicon || '/images/default-favicon.png'}
                      alt={`${selectedProject.name} favicon`}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-start font-medium mb-2 text-gray-200">Technologies used</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-gray-100">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white text-black bg-opacity-20 rounded-md text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between sm:gap-3">
                  {selectedProject.url && selectedProject.url !== '#' && (
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-4 py-2 text-gray-600 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-sm font-medium"
                    >
                      <span className="leading-none">Go to {selectedProject.name}</span>
                      <span className="text-2xl flex items-center justify-center leading-none">→</span>
                    </a>
                  )}

                  {selectedProject.id === 1 && (
                    <Button
                      variant="contained"
                      color="primary"
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<LaunchIcon />}
                      sx={{
                        bgcolor: '#2c2f48',
                        '&:hover': { bgcolor: '#3a3d5c' },
                        color: 'white',
                        border: '1px solid gray',
                        textTransform: 'none',
                        fontWeight: 500,
                        borderRadius: '6px',
                        px: 2,
                        py: 0,
                        fontSize: '0.875rem',
                      }}
                    >
                      Live
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
