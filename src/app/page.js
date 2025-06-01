
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen w-full transition-colors duration-300">
      
      <Hero />
      <About />

      <Contact />
    </main>
  );
}