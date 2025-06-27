'use client';

export default function skills() {

    // skill section
    const designTools = [
        { name: 'Adobe XD', icon: '📊' },
        { name: 'Figma', icon: '🎨' },
        { name: 'Canva', icon: '🎭' },
    ];

    const technologies = [
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
    ];

    const devTools = [
        { name: 'Visual Studio Code', icon: '📝' },
        { name: 'Github', icon: '🐱' },
        { name: 'Postman', icon: '📮' },
    ];



    return (
        <section id="skills" className="">

            {/* Skill */}
            <div className=" mt-4 max-w-7xl mx-auto rounded-xl px-2 sm:px-4 py-4 border border-white bg-gray-700 shadow-lg ">

                <div className="mb-4 ">
                    <h3 className="text-sm text-bold mb-3 px-2 py-1 bg-blue-500 text-white  rounded-md w-fit">Design Tools I Use</h3>
                    <div className="flex flex-wrap gap-2">
                        {designTools.map((tool, index) => (
                            <div key={index} className="skill-pill   shadow-xl border border-gray-200 bg-white text-black ">
                                <span className="w-3 h-2 flex items-center justify-center rounded-md">{tool.icon}</span>
                                {tool.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mb-4 ">
                    <h3 className="text-sm text-bold mb-3 px-2 py-1 bg-gradient-to-r bg-blue-500 text-white rounded-md w-fit">Technologies I Use</h3>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <div key={index} className="skill-pill  shadow-xl border border-gray-200 bg-white text-black ">
                                <span className="w-3 h-2 flex items-center justify-center rounded-md">{tech.icon}</span>
                                {tech.name}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="">
                    <h3 className="text-sm text-bold mb-3 px-2 py-1 bg-blue-500 text-white  rounded-md w-fit">Development & Productivity Tools I Use</h3>
                    <div className="flex flex-wrap gap-2">
                        {devTools.map((tool, index) => (
                            <div key={index} className="skill-pill  shadow-xl border border-gray-200 bg-white text-black">
                                <span className="w-3 h-2 flex items-center justify-center rounded-md">{tool.icon}</span>
                                {tool.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}