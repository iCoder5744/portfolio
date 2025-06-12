import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function GamePage() {
  return (
      <div className="rounded-[2rem] sm:rounded-[4rem] border-2 border-gray-400 max-w-[1000px] mx-auto my-20
          bg-white text-black transition-all duration-300">
      <Header />

    <div className="p-10">
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
