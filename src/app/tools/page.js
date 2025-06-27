import Contact from '@/components/Contact';
import FloatingBackground from '@/components/FloatingBackground';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';


export const metadata = {
  title: 'Tools | Shivam Yadav',
  description: 'Use Tools',
};

export default function ToolsPage() {
  const tools = [
    {
      title: "File Converter",
      slug: "file-converter",
      description: "Convert your files between various formats easily and quickly. Our file converter supports images, documents, and many other file types."
    },
    {
      title: "All-in-One Calc",
      slug: "all-in-one-calc",
      description: "An all-purpose calculator for basic, scientific, financial, and unit conversions—perfect for quick, accurate results in one app."
    },
    {
      title: "File Compressor",
      slug: "file-compressor",
      description: "A fast and reliable file compressor to shrink documents, images, and more—perfect for saving space, sharing files, and boosting upload speed."
    }
  ];

  return (
    <section>
      <div className="relative min-h-screen shadow-x max-w-[1200px] border border-white mx-0 sm:mx-4 md:mx-6 lg:mx-auto 
          bg-transparent transition-all duration-300">
        <FloatingBackground />


        <div className='border-b border-white'>
          <Header />
        </div>
        <div className="p-2 sm:p-6 md:p-10 text-white">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 mt-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Available Tools</h1>

            <p className='text-xl text-center text-white px-4 md:px-10 lg:px-14 mb-10'>A file converter and all-in-one calculator is a versatile tool that lets users easily convert files between formats and perform multiple mathematical functions within a single, user-friendly interface.</p>

          </div>
          <div className="grid sm:grid-cols-2 gap-6 px-4 lg:px-14 pb-12  ">
            {tools.map((tool) => (
              <div key={tool.slug} className="border border-blue-600 rounded-xl p-6 lg:m-6 bg-gray-700 text-white">
                <div className="inline-block rounded-md bg-blue-600 px-2 py-1">
                  <h2 className="text-md font-semibold text-white">{tool.title}</h2>
                </div>

                <p className="mt-2 mb-4 text-sm text-gray-300">{tool.description}</p>
                <Link
                  href={`/tools/${tool.slug}`}
                  className="inline-block border border-blue-600 px-4 py-2 rounded hover:bg-white hover:text-black transition"
                >
                  Visit →
                </Link>
              </div>
            ))}
          </div>
        </div>

        <Contact />

        <div className='border-t border-white'>
          <Footer />
        </div>
      </div>
    </section>
  );

}
