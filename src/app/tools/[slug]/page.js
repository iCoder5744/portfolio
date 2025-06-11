import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileConverter from "@/components/tools/FileConverter";
import AllInOneCalc from "@/components/tools/AllInOneCalc";
import { notFound } from 'next/navigation';
import Contact from "@/components/Contact";

export default async function ToolPage({ params }) {
  const { slug } = params;

  const renderTool = () => {
    switch (slug) {
      case 'file-converter':
        return <FileConverter />;
      case 'all-in-one-calc':
        return <AllInOneCalc />;
      default:
        return notFound(); // 404
    }
  };

  return (
    <div className="rounded-[2rem] sm:rounded-[6rem] border-2 border-gray-400 max-w-[1000px] mx-auto my-20
          bg-white text-black transition-all duration-300">
      <Header />
      <div className="p-6">{renderTool()}</div>
      <Contact />
      <Footer />
    </div>
  );
}
