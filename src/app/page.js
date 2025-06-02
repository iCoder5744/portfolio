
import Hero from '../components/Hero';
import About from '../components/About';

export default function Home() {
  return (
    <main className="min-h-screen w-full transition-colors duration-300">
      
      <Hero />
      <About />
    </main>
  );
}