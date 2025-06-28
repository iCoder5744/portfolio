'use client';

export default function Skills() {
  const skillSections = [
    {
      title: 'Design Tools I Use',
      bg: 'bg-blue-500',
      data: [
        { name: 'Adobe XD', icon: '📊' },
        { name: 'Figma', icon: '🎨' },
        { name: 'Canva', icon: '🎭' },
      ],
    },
    {
      title: 'Technologies I Use',
      bg: 'bg-blue-500', // previously: "bg-gradient-to-r bg-blue-500" (which is redundant)
      data: [
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'JavaScript', icon: '📜' },
        { name: 'Bootstrap', icon: '🅱️' },
        { name: 'React.JS', icon: '⚛️' },
        { name: 'Firebase', icon: '🔥' },
        { name: 'Next.JS', icon: '⏭️' },
        { name: 'Tailwind CSS', icon: '💨' },
        { name: 'Material UI', icon: '🎭' },
        { name: 'Git', icon: '📂' },
      ],
    },
    {
      title: 'Development & Productivity Tools I Use',
      bg: 'bg-blue-500',
      data: [
        { name: 'Visual Studio Code', icon: '📝' },
        { name: 'Github', icon: '🐱' },
        { name: 'Postman', icon: '📮' },
      ],
    },
  ];

  const renderSkillSection = ({ title, bg, data }, index) => (
    <div key={index} className="mb-4">
      <h3 className={`text-sm text-bold mb-3 px-2 py-1 ${bg} text-white rounded-md w-fit`}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {data.map((item, idx) => (
          <div key={idx} className="text-xs sm:text-sm skill-pill shadow-xl border border-gray-200 bg-white text-black">
            <span className="w-3 h-2 flex items-center justify-center rounded-md">{item.icon}</span>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills">
      <div className="mt-4 max-w-7xl mx-auto rounded-xl px-2 sm:px-4 py-4 border border-white bg-transparent shadow-lg">
        {skillSections.map(renderSkillSection)}
      </div>
    </section>
  );
}
