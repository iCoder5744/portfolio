import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';

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
    }
  ];

  return (
    <div className="rounded-[2rem] sm:rounded-[4rem] border-4 border-gray-100 max-w-[1000px] mx-1 sm:mx-4 md:mx-6 lg:mx-auto my-4 sm:my-8 md:my-20
          bg-gray-700 transition-all duration-300">
      <Header />
      <h1 className="text-3xl font-bold mb-6 py-10 text-center text-white">Available Tools</h1>
      <div className="grid sm:grid-cols-2 gap-6 px-4 md:px-10 lg:px-14 ">
        {tools.map((tool) => (
          <div key={tool.slug} className="border rounded-xl p-6 bg-gray-800 text-white">
            <h2 className="text-xl font-semibold">{tool.title}</h2>
            <p className="mt-2 mb-4 text-sm">{tool.description}</p>
            <Link
              href={`/tools/${tool.slug}`}
              className="inline-block border px-4 py-2 rounded hover:bg-white hover:text-black transition"
            >
              Visit →
            </Link>
          </div>
        ))}
      </div>

      <Contact />
      <Footer />
    </div>
  );
}
