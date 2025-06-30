import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileConverter from "@/components/tools/FileConverter";
import AllInOneCalc from "@/components/tools/AllInOneCalc";
import FileCompressor from "@/components/tools/FileCompressor";
import { notFound } from 'next/navigation';
import Contact from "@/components/Contact";
import FloatingBackground from "@/components/FloatingBackground";

export default async function ToolPage({ params }) {
  // Await the params before accessing its properties
  const { slug } = await params;

  const renderTool = () => {
    switch (slug) {
      case 'file-converter':
        return <FileConverter />;
      case 'all-in-one-calc':
        return <AllInOneCalc />;
      case 'file-compressor':
        return <FileCompressor />;
      default:
        notFound(); // Call this directly, not return it
    }
  };

  return (
    <div className="relative min-h-screen shadow-x max-w-[1200px]  mx-0 sm:mx-3 md:mx-6 lg:mx-auto 
              bg-transparent transition-all duration-300">
      <FloatingBackground />

      <div className='border-b border-gray-600'>
        <Header />
      </div>
      <div>{renderTool()}</div>
      <Contact />
      <div className='border-t border-gray-600'>
        <Footer />
      </div>
    </div>
  );
}