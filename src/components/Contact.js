export default function Contact() {
    const socialLinks = [
      { name: 'LinkedIn', icon: 'in', url: '#', color: 'text-blue-600' },
      { name: 'Instagram', icon: 'ig', url: '#', color: 'text-pink-600' },
      { name: 'Facebook', icon: 'fb', url: '#', color: 'text-blue-500' },
      { name: 'Telegram', icon: 'tg', url: '#', color: 'text-blue-400' },
      { name: 'Twitter', icon: 'X', url: '#', color: 'text-black dark:text-white' },
      { name: 'Skype', icon: 'S', url: '#', color: 'text-blue-400' },
    ];
    
    return (
      <section id="contact" className="py-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-12 text-center text-yellow-400">Connect With Me</h2>
        
        <div className="max-w-lg mx-auto mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                className="social-button"
              >
                <span className={`w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 ${link.color}`}>
                  {link.icon}
                </span>
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <a href="mailto:nikunj.thesiya.js@gmail.com" className="social-button mx-auto inline-flex">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-red-500">
                M
              </span>
              nikunj.thesiya.js@gmail.com
            </a>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-6 text-center">Contact Me</h3>
          
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Full Name *</label>
                <input 
                  type="text" 
                  className="w-full p-2 rounded-md bg-gray-100 dark:bg-gray-800 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Email *</label>
                <input 
                  type="email" 
                  className="w-full p-2 rounded-md bg-gray-100 dark:bg-gray-800 outline-none"
                  required
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Mobile No.</label>
                <input 
                  type="tel" 
                  className="w-full p-2 rounded-md bg-gray-100 dark:bg-gray-800 outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Subject *</label>
                <input 
                  type="text" 
                  className="w-full p-2 rounded-md bg-gray-100 dark:bg-gray-800 outline-none"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block mb-1 text-sm font-medium">Message *</label>
              <textarea 
                className="w-full p-2 rounded-md bg-gray-100 dark:bg-gray-800 outline-none min-h-24"
                required
                rows={5}
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className="px-8 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-all inline-flex items-center gap-2"
              >
                Send <span>→</span>
              </button>
            </div>
          </form>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">Portfolio Made with</p>
          <div className="flex justify-center flex-wrap gap-2 mt-2">
            <span className="skill-pill bg-white text-black dark:bg-gray-800 dark:text-white text-xs">Figma</span>
            <span className="skill-pill bg-white text-black dark:bg-gray-800 dark:text-white text-xs">ReactJS</span>
            <span className="skill-pill bg-white text-black dark:bg-gray-800 dark:text-white text-xs">NextJS</span>
            <span className="skill-pill bg-white text-black dark:bg-gray-800 dark:text-white text-xs">Tailwind CSS</span>
            <span className="skill-pill bg-white text-black dark:bg-gray-800 dark:text-white text-xs">Tailwind CSS</span>
          <span className="skill-pill bg-white text-black dark:bg-gray-800 dark:text-white text-xs">React Hook Forms</span>
          <span className="skill-pill bg-white text-black dark:bg-gray-800 dark:text-white text-xs">Framer Motion</span>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-center gap-2">
            <div className="rounded-full bg-black dark:bg-white p-1 w-8 h-8 flex items-center justify-center">
              <span className="text-white dark:text-black font-bold text-xs">NT</span>
            </div>
            <span className="font-bold text-sm">NIKUNJ THESIYA</span>
          </div>
          <p className="text-xs mt-2 text-gray-400">Designed & Built by Nikunj Thesiya</p>
        </div>
      </div> {/* This closes the last wrapper div */}
    </section>
  );
}
