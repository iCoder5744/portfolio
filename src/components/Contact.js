'use client';

import {
  LinkedIn,
  Instagram,
  Facebook,
  Telegram,
  Twitter,
  Email
} from '@mui/icons-material';

export default function Contact() {
  const socialLinks = [
    { name: 'LinkedIn', icon: <LinkedIn />, url: '#', color: '#0077b5' },
    { name: 'Instagram', icon: <Instagram />, url: '#', color: '#E4405F' },
    { name: 'Facebook', icon: <Facebook />, url: '#', color: '#1877F2' },
    { name: 'Telegram', icon: <Telegram />, url: '#', color: '#0088cc' },
    { name: 'Twitter', icon: <Twitter />, url: '#', color: '#000000' }
  ];

  return (
    <section id="contact" className=" mt-20 px-0 sm:px-4 md:px-8">
      <div className=" border-t  pt-8 pb-2 max-w-3xl mx-auto border-gray-300 ">

        <div className='flex flex-col text-center px-2 gap-y-6 mb-10 '>
          <h3 className='text-white text-xl font-bold font-serif'>Have A Project?</h3>
          <h1 className='text-white text-4xl font-bold font-serif'>{"Let's talk with me"}</h1> 
        </div>

        {/* Social Icons */}
        <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-6">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-300 bg-white shadow transition-transform duration-200 hover:scale-110 hover:bg-gray-100"
              style={{ color: link.color }}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Email Button */}
        <div className="text-center mb-8">
          <a
            href="mailto:shivam.coder01@gmail.com"
            className="inline-flex items-center text-gray-700 gap-2 px-4 py-2 border border-gray-300 shadow text-sm bg-white hover:bg-gray-100 transition rounded"
          >
            <Email sx={{ color: '#D44638' }} />
            <span>shivam.coder01@gmail.com</span>
          </a>
        </div>

      </div>


    </section>
  );
}
