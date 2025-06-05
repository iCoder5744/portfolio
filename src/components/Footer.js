'use client';

import {
  LinkedIn,
  Instagram,
  Facebook,
  Telegram,
  Twitter,
  Email
} from '@mui/icons-material';

export default function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', icon: <LinkedIn />, url: '#', color: '#0077b5' },
    { name: 'Instagram', icon: <Instagram />, url: '#', color: '#E4405F' },
    { name: 'Facebook', icon: <Facebook />, url: '#', color: '#1877F2' },
    { name: 'Telegram', icon: <Telegram />, url: '#', color: '#0088cc' },
    { name: 'Twitter', icon: <Twitter />, url: '#', color: '#000000' }
  ];

  return (
    <section id="contact" className="my-10 px-0 sm:px-4 md:px-8">
      <div className="max-w-3xl mx-auto ">

        {/* Social Icons */}
        <div className="flex justify-center flex-wrap gap-4 mb-6">
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

        {/* Contact Form */}
        {/* <div className="bg-white text-gray-600 rounded-xl border border-gray-400 shadow-md px-4 py-6 sm:px-6 md:px-8 max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-6">Contact Me</h2>

          <form className="space-y-3 sm:space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium">Full Name *</label>
              <input
                type="text"
                required
                className="w-full border text-gray-400 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email *</label>
              <input
                type="email"
                required
                className="w-full border text-gray-400 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Mobile No.</label>
              <input
                type="tel"
                className="w-full border text-gray-400 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Message *</label>
              <textarea
                rows="5"
                required
                className="w-full border text-gray-400 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="text-center pt-2">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div> */}


        {/* Footer Note */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Designed by Shivam Yadav
        </div>
      </div>
    </section>
  );
}
