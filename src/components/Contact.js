'use client';
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
      <section id="contact" className="my-16 mx-6 md:mx-12 p-6 rounded-2xl">
        <h2 className="text-2xl  mb-12 px-6 py-2 w-fit rounded-full mx-auto bg-yellow-400  text-gray-800">Connect With Me</h2>
        
        <div className="max-w-lg mx-auto mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                className="social-button border border-gray-300 shadow-lg bg-white"
              >
                <span className={`w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 ${link.color}`}>
                  {link.icon}
                </span>
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <a href="mailto:shivam.coder01@gmail.com" className="social-button mx-auto inline-flex border border-gray-300 shadow-lg bg-white">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-red-500">
                M
              </span>
              shivam.coder01@gmail.com
            </a>
          </div>
        </div>

        {/* ===================== Form ====================== */}
        
        <div className="max-w-2xl mx-auto border border-gray-400 shadow-lg bg-white dark:bg-gray-900 p-6 rounded-lg  ">
          <h3 className="text-xl text-black font-bold mb-10 text-center">Contact Me</h3>
          
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4 text-black">
              <div>
                <label className="block mb-1 text-sm font-medium">Full Name *</label>
                <input 
                  type="text" 
                  className="w-full p-2 rounded-md bg-gray-100 border border-gray-400 dark:bg-gray-800 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Email *</label>
                <input 
                  type="email" 
                  className="w-full p-2 rounded-md bg-gray-100 border border-gray-400 dark:bg-gray-800 outline-none"
                  required
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 text-black">
              <div>
                <label className="block mb-1 text-sm font-medium">Mobile No.</label>
                <input 
                  type="tel" 
                  className="w-full p-2 rounded-md bg-gray-100 border border-gray-400 dark:bg-gray-800 outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Subject *</label>
                <input 
                  type="text" 
                  className="w-full p-2 rounded-md bg-gray-100 border border-gray-400 dark:bg-gray-800 outline-none"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block mb-1 text-sm font-medium text-black">Message *</label>
              <textarea 
                className="w-full p-2 rounded-md bg-gray-100 border border-gray-400 dark:bg-gray-800 outline-none min-h-24"
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
        
        

        <div className="mt-6 flex flex-col mx-auto items-center justify-center">        
          <p className="text-lg mt-2">Designed by Shivam Yadav</p>
        </div>
    </section>
  );
}
