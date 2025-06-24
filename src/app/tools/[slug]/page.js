import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileConverter from "@/components/tools/FileConverter";
import AllInOneCalc from "@/components/tools/AllInOneCalc";
import FileCompressor from "@/components/tools/FileCompressor";
import { notFound } from 'next/navigation';
import Contact from "@/components/Contact";

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
    <div className=" max-w-[1200px] mx-2 sm:mx-4 md:mx-6 lg:mx-auto 
          bg-black transition-all duration-300">
      <Header />
      <div>{renderTool()}</div>
      <Contact />
      <Footer />
    </div>
  );
}