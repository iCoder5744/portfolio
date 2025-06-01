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
      technologies: ['Next.js', 'Tailwind', 'SSR', 'MongoDB'],
      image: '/images/courtbook.png',
      favicon: '/images/courtbook-favicon.png',
      color: 'bg-yellow-600',
      className: 'w-full h-full object-fit',
      url: 'https://courtbook.in/',
    },
    {
      id: 2,
      name: 'Youtube-Clone',
      displayName: 'Youtube-Clone',
      type: ['Website-Clone'],
      technologies: ['Next.js', 'Tailwind CSS', 'JavaScript', 'React-icons', 'Material-UI'],
      image: '/images/Youtube-Clone.png',
      favicon: '/images/youtube-favicon.png',
      color: 'bg-purple-700',
      url: 'https://youtube-clone-seven-indol.vercel.app/',
    },
    {
      id: 3,
      name: 'Netflix-Clone',
      displayName: 'Netflix-Clone',
      type: ['Website-Clone'],
      technologies: ['React.Js', 'JavaScript', 'Tailwind CSS', 'React-icons', 'Firebase'],
      image: '/images/Netflix-Clone.png',
      favicon: '/images/netflix-favicon.png',
      color: 'bg-pink-700',
      url: 'https://netflix-clone-beryl-ten-10.vercel.app/',
    },
    {
      id: 4,
      name: 'Working',
      displayName: 'Game-Application',
      type: ['Personal Website'],
      technologies: ['Next.js', , 'ReactJS', 'Tailwind CSS', 'Firebox', 'Material UI'],
      image: '/images/game.png',
      favicon: '/images/game-favicon.png',
      color: 'bg-blue-700',
      url: '#',
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section
      id="projects"
      className="project-card px-2 sm:px-4 py-4 my-6 border border-gray-400 bg-white shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Left side buttons */}
        <div className="flex flex-wrap max-sm:justify-center sm:flex-nowrap md:flex-col gap-4 my-auto w-full md:w-1/5">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`px-3 py-2 rounded-md text-white font-semibold transition duration-200 cursor-pointer
              ${project.color} ${selectedProject.id === project.id ? 'scale-105 ring-2 ring-white' : ''}`}
            >
              {project.name}
            </button>
          ))}
        </div>

        {/* Right side selected project details */}
        <div className={`project-card w-full md:w-4/5 px-2 py-4 sm:p-6 text-white ${selectedProject.color} dark:bg-gray-800`}>
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            {/* Image Section */}
            <div className="mb-4 md:mb-0 md:w-1/2">
              <div className="h-[200px] w-full rounded-xl overflow-hidden bg-white bg-opacity-20">
                <Image
                  src={selectedProject.image || '/placeholder-project.png'}
                  alt={selectedProject.name}
                  width={500}
                  height={300}
                  className={`w-full h-full object-fit ${selectedProject.id === 1 ? 'object-cover' : 'object-fit'}`}
                />
              </div>
            </div>

            {/* Details Section */}
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

              <div className="mb-4 sm:mb-6">
                <p className="font-medium mb-2 text-gray-200">Technologies I&apos;ve used</p>
                <div className="flex flex-wrap gap-2 text-gray-100">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white text-black bg-opacity-20 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between sm:gap-3">
                {selectedProject.url && selectedProject.url !== '#' && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" inline-flex items-center justify-center gap-3 px-4 py-2 text-gray-600 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-sm font-medium"
                  >
                    <span className="leading-none">Go to {selectedProject.name}</span>
                    <span className="text-2xl flex items-center justify-center leading-none">→</span>
                  </a>
                )}

                {/* Only show for CourtBook */}
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
                      '&:hover': {
                        bgcolor: '#3a3d5c',
                      },
                      color: 'white',
                      textTransform: 'none',
                      fontWeight: 500,
                      borderRadius: '6px',
                      px: 2,
                      py: 1,
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
    </section>
  );
}
