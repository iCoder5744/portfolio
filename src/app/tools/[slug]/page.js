import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileConverter from "@/components/tools/FileConverter";
import AllInOneCalc from "@/components/tools/AllInOneCalc";
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
      default:
        notFound(); // Call this directly, not return it
    }
  };

  return (
    <div className="rounded-[2rem] sm:rounded-[4rem] border-4 border-gray-100 max-w-[1000px] mx-1 sm:mx-4 md:mx-6 lg:mx-auto my-4 sm:my-8 md:my-20
          bg-gray-700 transition-all duration-300">
      <Header />
      <div>{renderTool()}</div>
      <Contact />
      <Footer />
    </div>
  );
}