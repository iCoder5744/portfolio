import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function GamePage() {
  return (
      <div className="rounded-[2rem] sm:rounded-[4rem] border-4 border-gray-100 max-w-[1000px] mx-1 sm:mx-4 md:mx-6 lg:mx-auto my-4 sm:my-8 md:my-20
          bg-gray-700 transition-all duration-300">
      <Header />

    <div className="p-10 text-white">
      <h1 className="text-2xl font-bold">Game Page</h1>
      <p className="mt-4">This is your blog content.</p>
      </div>

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
